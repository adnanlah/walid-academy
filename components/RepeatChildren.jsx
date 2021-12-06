import React from 'react'

const Repeatchildren = ({children, n = 1}) => {
  return [...Array(n)].map((_, index) => (
    <React.Fragment key={index}>{children}</React.Fragment>
  ))
}

export default Repeatchildren
