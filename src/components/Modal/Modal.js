import React from 'react'
import Dialog from 'react-toolbox/lib/dialog'
import { connect } from 'react-redux'
import { closeModal } from 'store/modules/modal'
import classes from './Modal.scss'

/**
 * Modal component
 * - Opens a dialog box given the button and content that it is passed
 * - Example usage from a component:
 * - Container
      import { openModal } from 'store/modules/modal'
      const mapDispatchToProps = {
        openModal
      }
      export default connect(null, mapDispatchToProps)(Component)
 * - Component
      static propTypes = {
        openModal: React.PropTypes.func
      }
      this.props.openModal({
        btn: {
          label: 'GO TO MY DASHBOARD',
          onClick: () => console.log('clicked!')
        },
        primary: 'Thanks for booking!',
        secondary: 'We have reached out to Katie with the times you suggested',
        note: 'It usually takes up to 48 hours for Advocates to accept a request'
      })
 */
class Modal extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    primary: React.PropTypes.string,
    secondary: React.PropTypes.string,
    note: React.PropTypes.string,
    btn: React.PropTypes.object,
    closeModal: React.PropTypes.func
  }

  render () {
    const {
      active,
      primary,
      secondary,
      note,
      closeModal,
      btn: {
        onClick,
        ...btnCustom
      } = {}
    } = this.props
    const actions = [
      {
        className: classes.actionBtn,
        raised: true,
        primary: true,
        onClick: () => {
          closeModal()
          onClick && onClick()
        },
        ...btnCustom
      },
      {
        icon: 'clear',
        className: classes.exitBtn,
        onClick: closeModal,
        floating: true,
        mini: true,
        primary: true
      }
    ]

    // Optional note
    const noteEl = note ? (<p><em>{note}</em></p>) : ''

    return (
      <div>
        <Dialog
          className={classes.dialog}
          actions={actions}
          active={active}
          onEscKeyDown={closeModal}
          onOverlayClick={closeModal}
          type='small'
        >
          <div data-test='modal' className={classes.content}>
            <h4>{primary}</h4>
            <p>{secondary}</p>
            {noteEl}
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = {
  closeModal
}

const mapStateToProps = (state) => ({
  ...state.modal
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
