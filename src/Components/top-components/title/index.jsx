import React from 'react'
import { TitleDS } from './style'

const Title = ({title,align,fsz,color}) => {
  return (
    <TitleDS fsz={fsz} color={color} align={align} >{title}</TitleDS>
  )
}

export default Title