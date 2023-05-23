import styled from "styled-components";

const ConnectMeStyle = styled.div`
    background: #F2F8FF;
    padding: 65px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
`
const Input = styled.input`
    background: rgba(22, 28, 36, 0.04);
    outline: none;
    border: none;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    opacity: 0.8;
    padding: 10px 12px;
    border: 2px solid rgba(22, 28, 36,0.2);
    ::placeholder{
        color: #454F5B;
    }
`

export { ConnectMeStyle, Form, Input }