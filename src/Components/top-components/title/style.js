import styled from "styled-components";

const TitleDS = styled.div`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    line-height: 62px;
    text-align: ${({align})=>align?align:'center'};
    font-size: ${({fsz})=>fsz?`${fsz}px`:'44px'};
    color: ${({color})=>color?color:'#161C24'};
`


export {TitleDS}