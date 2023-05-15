import styled from "styled-components";
import {
    colorPrimary,
    grayLight,
    grayMedium, 
    grayDark,
    blackDark,
    blackMedium,
    blackLight,
    blackLighter
} from "../UI/variables";

const variantStyled = {
    normal:{
        backgroundColor: blackMedium,
        color: grayLight,
        borderWidth:'1px',
        borderStyle: 'solid'
    },
    basic:{
        backgroundColor: blackLight,
        color: grayLight,
    },
    primary:{
        backgroundColor: colorPrimary,
        color: grayLight,
    }
}

const defaultStyle = variantStyled.normal;

const Button = styled.a`
    display: inline-block;
    vertical-align: middle;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    font-size: ${({fontSize}) => fontSize};
    ${({ variant }) => variantStyled[variant] || defaultStyle};
`;

export {
    Button,
}