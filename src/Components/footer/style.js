import styled from "styled-components";

const FooterStyle = styled.div`
    background: #0D2436;
    box-shadow: inset 0px 1px 0px #C4CDD5;
    padding: 55px 0;
    .main-links{
        display: grid;
        grid-template-columns: repeat(5,1fr);
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    gap: 25px;
    height: 350px;
    margin: 0 auto;
    .links{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .title{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        text-transform: capitalize;
        color: #FFFFFF;
    }
    .link{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: .8;
        :hover{
            opacity: .9;
        }
    }
`

export { FooterStyle, Section }