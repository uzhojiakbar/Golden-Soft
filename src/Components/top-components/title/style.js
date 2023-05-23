import styled from "styled-components";

const TitleDS = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    line-height: 62px;
    font-weight: ${({fw})=>fw?fw:'600'};
    text-align: ${({align})=>align?align:'center'};
    font-size: ${({fsz})=>fsz?`${fsz}px`:'44px'};
    color: ${({color})=>color?color:'#161C24'};
    width: ${({width})=>width?width:'100%'};
    margin: ${({margin})=>margin?margin:'0 auto'};
`


export {TitleDS}