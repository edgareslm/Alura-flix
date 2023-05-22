import React, { useState } from 'react';
import { ModalView, ModalBox, VideoBox } from './styled'; 


function VideoCard(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	const clickHandler = (event) => {
		if(event.type === "click"){event.detail == 2 && handleOpen()}
        if(event.type === "touchstart" ){ console.log(event)}
	}

    return <React.Fragment>
        <img width="100%" src='https://i.ytimg.com/vi_webp/UuAX5azcvDQ/maxresdefault.webp'  onClick={clickHandler} onTouchStart={clickHandler} />
        <ModalView
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBox>
                <VideoBox
                    url= 'https://youtu.be/UuAX5azcvDQ'
                    controls
                    width='100%'
                    height='100%'
                />
            </ModalBox>
        </ModalView>
    </React.Fragment>
}

export default VideoCard;