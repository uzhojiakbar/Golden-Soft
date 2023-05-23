import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { categoryMix } from '../../Mock/category-mix'
import Title from '../top-components/title'
import { CateforyMixCon, CateforyMixItem, OpenerDesign } from './styled'

const OpenerCategory = () => {
    let navigate = useNavigate()
    return (
        <OpenerDesign>
            <Title title='Категории' />
            <CateforyMixCon>
                {
                    categoryMix.map((v)=>{
                        return <CateforyMixItem>
                            <div className="info">
                                <div className="dlya">{v.info.dlya}</div>
                                <button onClick={()=>navigate(`category?ctg=${v.info.dlya}`)} >Перейти</button>
                            </div>
                            <div className="img">
                                <img src={v.imgs[0]} alt="" />
                            </div>
                        </CateforyMixItem>
                    })
                }
            </CateforyMixCon>
            <NavLink to={'/category'}  className={'all'} >
                Все категории
            </NavLink>
        </OpenerDesign>
    )
}

export default OpenerCategory