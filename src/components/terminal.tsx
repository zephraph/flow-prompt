import React from 'react'
import { useRef } from 'react'

export const Terminal = () => {
  const termEl = useRef(null)

  return <div ref={termEl} />
}
