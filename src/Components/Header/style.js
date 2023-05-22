import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02));
    padding: 50px 0;
`

const Left = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-img-header{
        width: 450px;
        height: 450px;
    }
`
const Right = styled.div`
    flex:1;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 350px;
    height: 100%;
    .title{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 38px;
        line-height: 62px;
        color: #161C24;
    }
    .desc{
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #454F5B;
    }
    .price{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #454F5B;
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    .price-old{
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 26px;
        text-decoration-line: line-through;

        color: #A4A4A4;
    }
    .price-now{
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #161C24;
    }
    .btn{

    }
    .inner{
        display: flex;
        gap: 12px;
        align-items: center;
    }
`

const Button = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    background: #4295E4;
    padding: 10px 25px;
    text-align: center;
    width: fit-content;
    cursor: pointer;
    :hover{
        opacity: .9;
    }
    user-select: none;
`


const CorouselBtns = styled.div`
    margin: 50px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .pagination{
        padding: 10px;
        border-radius: 50%;
        border: 1px solid transparent;
        cursor: pointer;
        transition: .3s;
        :hover{
            border: 1px dashed #4295E4;
            .pg-main{
                background-color: #4295E4;
            }
        }
    }
    .pg-main{
        width:  10px;
        height: 10px;
        background-color: #ADD7FF;
        border-radius: 50%;
    }
    .active{
        border: 1px solid #ADD7FF;
    }
    .active .pg-main{
        background-color: #4295E4;
    }
    .corouselBtn{
        font-size: 25px;
        padding: 10px 15px;
        cursor: pointer;
        :hover{
            background-color: #4295E4;
            color: white;
            border-radius: 50%;
        }
    }
`

export { Main, Info, Button, CorouselBtns, HeaderStyle, Left, Right }