import styled from "styled-components";

const MainDesignPr = styled.div`
    padding: 10px 0;
    .title{
        margin: 15px 0;
        padding: 0 15px;
        display: grid;
        grid-template-columns: 90% 10%;
        justify-content: space-between;
        align-items: center;
        .buttons{
            display: flex;
            justify-content: space-between;
            user-select: none;
            span{
                color: #C4CDD5;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                cursor: pointer;
                :hover{
                    color: #161C24;
                }
                font-size: 42px;
            }
        }
    }
`

const ProductBDesign = styled.div`
    display: grid;
    grid-template-columns: repeat(4,320px);
    justify-content: space-between;
`

const ProductItemBanner = styled.div`
    .img{
        position: relative;
        padding: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03));
        
        img{
            width: 100%;
            height: 300px;
        }
        .product-info{
            position: absolute;
            left: 10px;
            top: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
            background-color: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);
            padding: 5px 10px;
            .icon{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            font-family: 'SF Pro Text';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #454F5B;
        }
        .gift{
            top: 50px;
        }
        .sale{
            left: unset;
            right: 20px;
        }
    }
    .info{
        box-shadow: inset 0px -1px 0px #EAEAEA, inset 1px 0px 0px #EAEAEA, inset -1px 0px 0px #EAEAEA;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .name{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            display: flex;
            align-items: center;
            color: #454F5B;
        }
        .price{
            display: flex;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            gap: 15px;
            .now{
                color: #161C24;
            }
            .old{
                color: #454F5B;
            }
        }
    }
`

export { ProductBDesign, ProductItemBanner, MainDesignPr }