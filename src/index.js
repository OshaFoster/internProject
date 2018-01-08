import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'
import CreateUser from './routes/CreateUser'
import LoginUser from './routes/LoginUser'
import CoachProfile from "./routes/CoachProfile"
import Header from "./components/Header/Header"
import './routes/CoachProfile.css'
import "./components/Header/Header.css"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink} from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'tachyons'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = createHttpLink({ uri: 'https://api.graph.cool/simple/v1/cjbsjb1j90dx00169nbtrpvan' })

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('graphcoolToken')
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const httpLinkWithAuthToken = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <div>
      <Header/>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/login' component={LoginUser} />
        <Route path='/signup' component={CreateUser} />
    <Route path='/coachProfile' component={CoachProfile} />
      </div>
    </Router>
    </div>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
