import React from 'react'

export default function Input(props) {
  return (
    <div className='inputs'>
        <label>{props.label}</label><br/>
        <input type="number" value={props.value} onChange={props.convert} id={props.id}/>
    </div>
  )
}
