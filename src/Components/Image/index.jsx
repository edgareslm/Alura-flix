import ImageStyle from "./styled";

function Image(props){
    const {src,width,height} = props
    return <ImageStyle src={src} w={width} h={height}/>
}
export default Image;