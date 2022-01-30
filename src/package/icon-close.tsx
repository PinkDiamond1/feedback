import React from 'react'

export default function IconClose({ size = 34, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="white"
      viewBox="0 0 256 256"
      {...props}
    >
      <line
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
      />
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
      />
    </svg>
  )
}
