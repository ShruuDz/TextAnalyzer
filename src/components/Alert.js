import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className='container-sm px-5 my-4'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
        
        </div>
    </div>
  )
}

export default Alert