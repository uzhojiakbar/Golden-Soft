import React, { useState } from 'react'
import { Products } from '../../Mock/Products'
import Title from '../top-components/title'
import { MainDesignPr, ProductBDesign, ProductItemBanner } from './style'
import TrueIcon from '../../Assets/icon/true.png'
import FalseIcon from '../../Assets/icon/false.png'
import Gift from '../../Assets/icon/gift.png'

const ProductBanner = () => {
    const [currentPage, setCurrentPage] = useState(1)
    let pr = Products.slice((currentPage * 4) - 4, currentPage * 4)
    let nextPage = () => {
        if (Math.ceil(Products.length / 4) >= currentPage + 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    let oldPage = () => {
        if (currentPage-1 > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <MainDesignPr>
            <div className="title">
                <Title align={'left'} title='Наши популярные продукты' />
                <div className="buttons">
                    <span onClick={oldPage}>{'<'}</span>
                    <span onClick={nextPage} >{'>'}</span>
                </div>
            </div>
            <ProductBDesign>
                {
                    pr.map((v) => {
                        return <ProductItemBanner key={v.id} >
                            <div className="img">
                                {
                                    v.info?.nalichi ?
                                        <div className="product-info">
                                            <div className='icon'><img src={TrueIcon} alt="" /></div>
                                            В наличии
                                        </div> :
                                        <div className="product-info">
                                            <div className='icon'><img src={FalseIcon} alt="" /></div>
                                            Нет в наличии
                                        </div>
                                }
                                {
                                    v.info?.podarok ?
                                        <div className="product-info gift">
                                            <div className='icon'><img src={Gift} alt="" /></div>
                                            Подарок
                                        </div> :
                                        null
                                }
                                {
                                    v.info?.podarok ?
                                        <div className="product-info sale">
                                            SALE
                                        </div> :
                                        null
                                }

                                <div className="sale">

                                </div>
                                <img src={v.imgs[0]} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    {v.info.title}
                                </div>
                                <div className="price">
                                    <div className="now">{v.price.now}₽</div>
                                    <div className="old">{v.price.old}₽</div>
                                </div>
                            </div>
                        </ProductItemBanner>
                    })
                }
            </ProductBDesign>
        </MainDesignPr>
    )
}

export default ProductBanner