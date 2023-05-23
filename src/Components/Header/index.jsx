import React from 'react'
import { useState } from 'react'
import { Products } from '../../Mock/Products'
import { Button, CorouselBtns, HeaderStyle, Info, Left, Main, Right } from './style'

const Header = () => {
    const [currentId, setCurrentId] = useState(1)
    const nowProduct = Products.slice(0, 4)
    const slc = nowProduct[currentId - 1]
    const CorouselLeft = () => {
        if (currentId > 1) {
            setCurrentId(currentId - 1)
        } else {
            setCurrentId(nowProduct.length)
        }
    }
    const CorouselRight = () => {
        if (currentId < nowProduct.length) {
            setCurrentId(currentId + 1)
        } else {
            setCurrentId(1)
        }
    }
    return (
        <Main>
            <HeaderStyle>
                <Left>
                    <img className='main-img-header' src={slc.imgs[0]} alt="" />
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
                                <span className='price price-now' >{slc.price.now}₽ </span>
                                <span className='price price-old' >{slc.price.old}₽</span>
                            </div>
                            <Button>
                                Добавить в корзину
                            </Button>
                        </div>

                    </Info>
                </Right>
            </HeaderStyle>
            <CorouselBtns>
                <div onClick={() => CorouselLeft()} className="arrow">
                    <i className="fa-solid fa-chevron-left corouselBtn"></i>
                </div>
                {
                    nowProduct.map((v) => {
                        return <div key={v.id} onClick={() => setCurrentId(v.id)} className={v.id === currentId ? 'pagination active' : 'pagination'}>
                            <div className="pg-main"></div>
                        </div>
                    })
                }
                <div onClick={() => CorouselRight()} className="arrow">
                    <i className="fa-solid fa-chevron-right corouselBtn"></i>
                </div>
            </CorouselBtns>
        </Main>
    )
}

export default Header