import React from 'react'
import Title from '../top-components/title'
import { Why, WhyGoldenServiceStyle, WhyItem } from './style'

import img1 from '../../Assets/img/Why/1.svg'
import img2 from '../../Assets/img/Why/2.svg'

const WhyGoldenService = () => {
    const WhyItems = [
        {id:1, img:img1, name:'Возврат удвоенной стоимости каждого замка в случае брака.'},
        {id:2, img:img2, name:'Наносим ваш логотип компании на наш продукт'},
        {id:3, img:img1, name:'Возврат удвоенной стоимости каждого замка в случае брака. '},
    ] 
    return (
        <WhyGoldenServiceStyle>
            <Title title='Почему GoldenService? '/>
            <Why>
                {
                    WhyItems.map((v)=>{
                        return <WhyItem key={v.id} >
                            <img src={v.img} alt="" />
                            <div className="desc">
                                {v.name}
                            </div>
                        </WhyItem>
                    })
                }
            </Why>
        </WhyGoldenServiceStyle>
    )
}

export default WhyGoldenService