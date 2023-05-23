import React from 'react'
import { FooterStyle, Section } from './style'
import logo from '../../Assets/logo/logo.png'
import wb from '../../Assets/icon/wb.png'
import tw from '../../Assets/icon/rw.png'
import fb from '../../Assets/icon/fb.png'

const Footer = () => {
  return (
    <FooterStyle>
      <div className="main-links">
        <Section>
          <img src={logo} alt="" />
          <div className="links">
            <a href="#"><img src={wb} alt="" /></a>
            <a href="#"><img src={tw} alt="" /></a>
            <a href="#"><img src={fb} alt="" /></a>
          </div>
        </Section>
        <Section>
          <div className="title">Навигация</div>
          <div className='link'>Главная</div>
          <div className='link'>Каталог</div>
          <div className='link'>Оптовая продажа</div>
          <div className='link'>О нас</div>
        </Section>
        <Section>
          <img src={logo} alt="" />
          <div className="links">
            <a href="#"><img src={wb} alt="" /></a>
            <a href="#"><img src={tw} alt="" /></a>
            <a href="#"><img src={fb} alt="" /></a>
          </div>
        </Section>
        <Section>
          <img src={logo} alt="" />
          <div className="links">
            <a href="#"><img src={wb} alt="" /></a>
            <a href="#"><img src={tw} alt="" /></a>
            <a href="#"><img src={fb} alt="" /></a>
          </div>
        </Section>
        <Section>
          <img src={logo} alt="" />
          <div className="links">
            <a href="#"><img src={wb} alt="" /></a>
            <a href="#"><img src={tw} alt="" /></a>
            <a href="#"><img src={fb} alt="" /></a>
          </div>
        </Section>
      </div>
    </FooterStyle>
  )
}

export default Footer