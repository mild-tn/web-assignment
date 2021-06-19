import React from 'react'

export const Button = ({ children }) => {
  return (
    <div className="flex cursor-pointer items-center justify-center w-32 border border-grapefruit rounded-t-3xl rounded-b-3xl h-9">
      {children}
    </div>
  )
}
