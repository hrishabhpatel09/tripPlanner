import React from 'react'

function Button({
    children,
    className,
    ...props
}) {
  return (
    <div>
      <button className={`${className} text-white text-center font-semibold text-sm `} style={{backgroundColor:'#4cb5f9',borderRadius:'6px'}}  {...props}>{children}</button>
    </div>
  )
}

export default Button
