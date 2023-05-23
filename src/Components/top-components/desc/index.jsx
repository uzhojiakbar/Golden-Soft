import React from 'react'
import { DescStyle } from './style'

const Desc = ({ title, width,margin, align, fsz, color, fw }) => {
    return (
        <DescStyle margin={margin} width={width}  fsz={fsz} fw={fw} color={color} align={align}>
            {title}
        </DescStyle>
    )
}

export default Desc