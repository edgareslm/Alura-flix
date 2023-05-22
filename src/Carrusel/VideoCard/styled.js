import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import ReactPlayer from "react-player";

const ModalView = styled(Modal)({
    width: '100vw',
    height: '100vh',
    padding: '5%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ModalBox = styled(Box)({
    height: '100%',
    width: '100%',
});

const VideoBox = styled(ReactPlayer)({
    boxSizing: 'border-box',
});

export {
    ModalView,
    ModalBox,
    VideoBox,
}