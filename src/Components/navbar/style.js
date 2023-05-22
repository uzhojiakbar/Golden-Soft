import styled from "styled-components";


const Link = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
`

const NavbarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
`

const NavLeft = styled.div`
    display: flex;
    flex: 1;
    gap: 30px;
    .navlink{
        color: blue;
        text-decoration: none;

        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #161C24;
        :hover{
            color: red;
        }
    }
    .active{
        color: red;
    }
`

const NavRight = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    gap: 30px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
    .in-nav-logo{
        color:  #454F5B;
        cursor: pointer;
        :hover{
            color: red;
        }
    }

    .in-nav-right{
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    .tel-logo{
        color: #4295E4;
    }

`


export { NavbarStyle, NavRight, NavLeft, Link }