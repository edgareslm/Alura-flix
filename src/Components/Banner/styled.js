import styled from "styled-components";

const BannerStyle = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    column-gap: 10%;
    font-size: 20px;
    padding: 0 20px;
    padding-bottom: 10%;
    color: red;
    background-image: url(${(props) => props.wallpaper});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Box = styled.div`
    
    
    &:nth-child(n){
        flex-grow:1;
        flex-shrink:1;
        width: 40%;
    }
    &:first-child{
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: 20px;
    } 
    
   
`;

export { BannerStyle, Box};