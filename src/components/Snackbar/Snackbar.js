import React from 'react'
import { Snackbar } from 'react-toolbox'
import { connect } from 'react-redux'
import { resetSnackbar } from '../../store/modules/snackbar'
import styles from './Snackbar.scss'

/**
 * SnackbarNotification component
 * - Opens a material snackbar with message and action
 */
class SnackbarNotification extends React.Component {

  static propTypes = {
    open: React.PropTypes.bool,
    message: React.PropTypes.string,
    action: React.PropTypes.string,
    resetSnackbar: React.PropTypes.func.isRequired,
    autoHideDuration: React.PropTypes.number.isRequired
  }

  render () {
    const { open, message, action, autoHideDuration } = this.props
    return (
      <div data-test='snackbar'>
        <Snackbar
          active={open}
          label={message}
          action={action}
          timeout={autoHideDuration}
          onClick={this.props.resetSnackbar}
          onTimeout={this.props.resetSnackbar}
          className={styles.snackbar}
          type='cancel'
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  resetSnackbar
}

const mapStateToProps = (state) => ({
  open: state.snackbar.open,
  message: state.snackbar.message,
  action: state.snackbar.action,
  autoHideDuration: state.snackbar.autoHideDuration
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarNotification)
