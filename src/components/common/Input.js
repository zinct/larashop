import React from 'react'

function Input({ name, value, onChange, error, type = 'text', placeholder = '...', optionData = []}) {
  function getClassName() {
    if(error?.[name])
      return `form-control is-invalid`;
    return 'form-control';
  }

  if(type === 'textarea') {
    return (
      <React.Fragment>
        <textarea className={getClassName()} name={name} id={name} rows="3" onChange={onChange} placeholder={placeholder} value={value}></textarea>
        <div className="invalid-feedback">
          {error?.[name]?.[0]}
        </div>
      </React.Fragment>
    )
  } else if(type === 'select') {
    return (
      <React.Fragment>
        <select className={getClassName()} value={value} onChange={onChange} name={name} id={name}>
          <option value="">{placeholder}</option>
          {optionData.map(row => <option key={row.id} value={row.id}>{row.name}</option>)}
        </select>
        <div className="invalid-feedback">
          {error?.[name]?.[0]}
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <input type={type} className={getClassName()} name={name} value={value} onChange={onChange} placeholder={placeholder} id={name} />
      <div className="invalid-feedback">
        {error?.[name]?.[0]}
      </div>
    </React.Fragment>
  )
}

export default Input
