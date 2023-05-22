import React from 'react'
import { useState } from 'react'
import { corouselHead } from '../../Mock/corousel-head'
import { Button, CorouselBtns, HeaderStyle, Info, Left, Main, Right } from './style'

const Header = () => {
    const [currentId,setCurrentId] = useState(1)
    const slc = corouselHead[currentId-1]
    const CorouselLeft = () => {
        if (currentId > 1) {
            setCurrentId(currentId-1)
        }else{
            setCurrentId(corouselHead.length)
        }
    }
    const CorouselRight = () => {
        if (currentId < corouselHead.length) {
            setCurrentId(currentId+1)
        }else{
            setCurrentId(1)
        }
    }
    return (
        <Main>
            <HeaderStyle>
                <Left>
                    <img className='main-img-header' src={slc.img} alt="" />
                </Left>
                <Right>
                    <Info>
                        <div>
                            <div className="title">
                                {slc.info.title}
                            </div>
                            <div className="desc">
                                {slc.info.desc}
                            </div>
                        </div>
                        <div className="price">
                            Цена
                            <div className='inner'>
                                <span className='price price-now' >{slc.price.now}</span>
                                <span className='price price-old' >{slc.price.old}</span>
                            </div>
                            <Button>
                                Добавить в корзину
                            </Button>
                        </div>

                    </Info>
                </Right>
            </HeaderStyle>
            <CorouselBtns>
                <div onClick={()=>CorouselLeft()} className="arrow">
                    <i class="fa-solid fa-chevron-left corouselBtn"></i>
                </div>
                {
                    corouselHead.map((v) => {
                        return <div onClick={()=>setCurrentId(v.id)} className={v.id === currentId ? 'pagination active' : 'pagination'}>
                            <div className="pg-main"></div>
                        </div>
                    })
                }
                <div onClick={()=>CorouselRight()} className="arrow">
                    <i class="fa-solid fa-chevron-right corouselBtn"></i>
                </div>
            </CorouselBtns>
        </Main>
    )
}

export default Header