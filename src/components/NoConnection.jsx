import React from 'react'

const NoConnection = () => {
  return (
    <div>
        <div aria-label="status" className="status status-primary"></div>
<div aria-label="status" className="status status-secondary"></div>
<div aria-label="status" className="status status-accent"></div>
<div aria-label="status" className="status status-neutral"></div>

<div aria-label="info" className="status status-info"></div>
<div aria-label="success" className="status status-success"></div>
<div aria-label="warning" className="status status-warning"></div>
<div aria-label="error" className="status status-error"></div>
    </div>
  )
}

export default NoConnection