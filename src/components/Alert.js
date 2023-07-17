import React from 'react'

function Alert(props) {
  return (
    <div style={{height:'40px',marginTop:'10px'}}>
      {props.alert && 
      <div className='container-sm px-5'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
        {props.alert.msg}
        </div>
      </div>}
    </div>
  )
}

export default Alert