import { Button } from "./styled"

function ButtonAction(props){
    return <Button variant={props.variant} fontSize={props.fontSize}>{ props.title}</Button>
}

export default ButtonAction