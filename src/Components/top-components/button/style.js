import styled from "styled-components";

const Button = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: ${({fsz})=>fsz?`${fsz}px`:'16px'};
    line-height: 26px;
    color: ${({color})=>color?color:'#FFFFFF'};
    background: ${({bkg})=>bkg?bkg:'#4295E4'};
    padding: ${({padding})=>padding?padding:'10px 25px'};
    text-align: center;
    width: ${({width})=>width?width:'fit-content'};
    cursor: pointer;
    :hover{
        opacity: .9;
    }
    user-select: none;
`

export {Button}