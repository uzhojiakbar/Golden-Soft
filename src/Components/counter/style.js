import styled from "styled-components";

const CounterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    background-color: #F2F8FF;
    gap: 82px;
    .count{
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;
        .num{
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 38px;
        color: #161C24;
        }
        .info{
            font-family: 'SF Pro Text';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 26px;
            color: #454F5B;
        }
    }
`

export { CounterStyle }