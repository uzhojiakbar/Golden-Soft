import styled from "styled-components";

const DescStyle = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 26px;
    font-weight: ${({ fw }) => fw ? fw : '400'};
    text-align: ${({ align }) => align ? align : 'center'};
    font-size: ${({ fsz }) => fsz ? `${fsz}px` : '16px'};
    color: ${({ color }) => color ? color : '#454F5B'};
    width: ${({ width }) => width ? width : '100%'};
    margin: ${({ margin }) => margin ? margin : '0 auto'};
`

export { DescStyle }