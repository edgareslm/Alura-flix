import styled from "styled-components";

const ImageStyle = styled.img(props => ({
    width: props.w,
    height: props.h,
    objectFit: "contain",
  }));

export default ImageStyle;