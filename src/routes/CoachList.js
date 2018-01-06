import React from 'react'
//import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class CoachList extends React.Component {

  render () {
    if (this.props.allPostsQuery.loading) {
      return (<div>Loading</div>)
    }
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.allPostsQuery.allPosts.map((post) =>
            <Post key={post.id} post={post} />
          )}
        </div>
      </div>
    )
  }
}

const COACH_LIST = gql`
  query allCoachProfilesQuery {
    allCoachProfiles(orderBy: createdAt_DESC) {
      location
      bio
      user
    }
  }
`

export default graphql(COACH_LIST, { name: 'CoachProfile'})(CoachList)
