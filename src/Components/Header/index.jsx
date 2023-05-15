import { Box } from "./styled";
import ButtonAction from "../Button";
import Image from "../Image";

function Header(){
    return <Box>
        <Image src="assets/images/logo.svg" height="40px"/>
        <ButtonAction title="Nuevo video" fontSize={"21px"}/>
    </Box>    
}

export default Header;