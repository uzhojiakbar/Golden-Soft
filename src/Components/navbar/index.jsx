import React from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '../../Mock/pages'
import { Link, NavbarStyle, NavLeft, NavRight } from './style'
import Logo from '../../Assets/logo/logo.svg'
import Warnign from '../warning'

const Navbar = () => {
    return (
        <>
            <Warnign />
            <NavbarStyle>
                <NavLeft>
                    <Link>
                        <NavLink to={'/main'}>
                            <img src={Logo} alt={Logo} />
                        </NavLink>
                    </Link>
                    {
                        pages.map((v) => {
                            return <NavLink
                                className={({ isActive }) => isActive ? 'active navlink' : 'navlink'}
                                to={v.path}
                            >
                                {v.name}
                                {
                                    v?.child ? '' : ''
                                }
                            </NavLink>
                        })
                    }
                </NavLeft>
                <NavRight>
                    <div className="tel in-nav-right ">
                        <a href="tel:+998933452427" className='tel in-nav-right'>
                            <i class="fa-solid fa-phone  in-nav-logo tel-logo  "></i>
                            +998 93 345 24 27
                        </a>
                    </div>
                    <NavLink className="link in-nav-right " to={'futured'}>
                        <i class="fa-solid fa-heart in-nav-logo "></i>
                    </NavLink>
                    <NavLink className="link in-nav-right " to={'shop'}>
                        <i class="fa-solid fa-cart-shopping in-nav-logo "></i>
                    </NavLink>
                </NavRight>

            </NavbarStyle></>
    )
}

export default Navbar