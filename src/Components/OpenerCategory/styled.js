import styled from "styled-components";

const OpenerDesign = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
    margin: 20px 0;
    .all{
        background: #4295E4;
        padding: 15px 80px;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;

        user-select: none;
        cursor: pointer;

        :hover{
            opacity: .8;
        }
        :active{
            opacity: 1;
        }

    }
`

const CateforyMixCon = styled.div`  
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 25px 0;
`

const CateforyMixItem = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 600px;
    height: 400px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url(image.png);
    padding: 40px;
    .img{
            height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .dlya{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 34px;
            color: #161C24;
        }
        button{
            /* border: 1px solid #454F5B; */
            /* border-radius: 2px; */
            padding: 5px 60px;

            font-family: 'SF Pro Display';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            color: #161C24;

            cursor: pointer;
        }
    }
`

export { OpenerDesign, CateforyMixCon, CateforyMixItem }