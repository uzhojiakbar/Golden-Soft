import React from 'react'
import { TitleDS } from './style'

const Title = ({width,margin, title, align, fsz, color, fw }) => {
  return (
    <TitleDS margin={margin} width={width} fsz={fsz} fw={fw} color={color} align={align}>
      {title}
    </TitleDS>
  )
}

export default Title