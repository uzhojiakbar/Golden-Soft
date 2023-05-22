import React from 'react'
import { CounterStyle } from './style'

const Counter = () => {
    return (
        <CounterStyle>
            <div className="count">
                <div className="num">5,567</div>
                <div className="info">
                    Счастливых клиентов
                </div>
            </div>
            <div className="count">
                <div className="num">1245</div>
                <div className="info">
                    Продуктов на выбор
                </div>
            </div>
            <div className="count">
                <div className="num">372</div>
                <div className="info">
                    Продаж в день
                </div>
            </div>
            <div className="count">
                <div className="num">20</div>
                <div className="info">
                    Лет на рынке
                </div>
            </div>
        </CounterStyle>
    )
}

export default Counter