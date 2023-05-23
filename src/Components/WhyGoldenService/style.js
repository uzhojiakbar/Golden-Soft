import styled from "styled-components";

const WhyGoldenServiceStyle = styled.div`
    padding: 50px 0;

`

const Why = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
    padding: 0 10px;
`
const WhyItem = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 220px;
    background: #FFFFFF;
    box-shadow: inset -1px 0px 0px #C4CDD5, inset 1px 0px 0px #C4CDD5;
    padding: 20px;
    .desc{
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        /* or 160% */

        text-align: center;
        color: #454F5B;
    }
`

export { WhyGoldenServiceStyle, Why, WhyItem }