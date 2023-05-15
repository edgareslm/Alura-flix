import { BannerStyle, Box } from "./styled";
import Image from "../Image";
import ButtonAction from "../Button";

function Banner(){
    return <BannerStyle wallpaper="assets/images/wallpaper.png" >
        <Box >
            <ButtonAction title="Front End" variant="primary" fontSize="60px" />
            <div>
                <h2>Challenge React</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat ut adipisci.
                    Delectus ab rem hic possimus sapiente quidem blanditiis obcaecati adipisci ea deleniti!
                    Obcaecati assumenda alias nesciunt quibusdam vel, laudantium dignissimos culpa? Quidem, iusto maxime.
                </p>
            </div>
        </Box>
        <Box >
            <Image src="assets/images/player.png" width="100%"/>
        </Box>
    </BannerStyle>
}

export default Banner