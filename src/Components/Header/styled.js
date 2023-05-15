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

const Box = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: `2px solid ${colorPrimary}`,
});

export {
    Box
};