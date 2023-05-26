"use client"
import React, { useRef, useState } from 'react';
import useTheme from '@/context/ThemeProvider'
import { Button, Typography, IconButton, Tooltip, TextField, InputAdornment, Input, useMediaQuery, Drawer, Box } from '@mui/material'
import styled from '@emotion/styled';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness7';
import CustomModal from './CustomModal';
import CustomInput from './Input';
import useMessage from '@/context/MessageContext';
import SearchIcon from '@mui/icons-material/Search';
import useMuiTheme from '@mui/material/styles/useTheme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomIconComponent from './helper/Icon';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    width: 90%;
    margin: auto;
    gap: 12px;
    flex-wrap: wrap;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Text1 = styled(Typography)`
    font-size: 18px;
    font-weight: bold;
`;

const Text2 = styled(Typography)`
    font-size: 12px;
`;

const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
`;

const DrawerBox = styled.div`
    margin: 16px;

    .header {
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .actions {
       display : flex;
       justify-content: flex-end;
    }
`;

const NavBar: React.FC = () => {
    const labelRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const { toggleTheme, mode } = useTheme();
    const theme = useMuiTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const { setOpen, setMessage, setVariant } = useMessage();


    const saveHandler = () => {
        const targetLabel = labelRef.current;
        const targetUrl = urlRef.current;
        if (targetLabel && targetUrl) {
            if (targetUrl.value && targetLabel.value) {
                console.log(targetUrl.value, targetLabel.value);
            } else {
                setOpen(true);
                setMessage("Please fill all inputs!");
                setVariant("warning")
            }
        }
    }

    const toggleModal = () => {
        setOpenModal(prev => !prev);
    }

    const themeButton = (
        <CustomIconComponent
            onClick={toggleTheme}
            title={`Switch to ${mode == "light" ? "dark" : "light"} mode`}
        >
            {mode == "light" ? (
                <Brightness4Icon sx={{ fontSize: '30px' }} />
            ) : (
                <Brightness5Icon sx={{ fontSize: '30px' }} />
            )}
        </CustomIconComponent>
    )

    const addPhotoButton = (
        <CustomModal
            component={
                <Button onClick={toggleModal} variant='contained'>Add a photo</Button>
            }
            open={openModal}
            setOpen={setOpenModal}
            title="Add a new photo"
        >

            <div>
                <CustomInput ref={labelRef} label='Label' placeholder='My car...' />
                <CustomInput ref={urlRef} label='Photo Url' placeholder='https://atul-morchhlay-image-uploader.netlify.app' />
                <ActionContainer>
                    <Button onClick={toggleModal}>Cancel</Button>
                    <Button onClick={saveHandler} variant='contained'>Submit</Button>
                </ActionContainer>
            </div>
        </CustomModal>
    )
    // const actions = (
    //     <Header>
    //     {themeButton}

    // </Header>
    // )

    const search = (
        <>
            <Input
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                placeholder='Search photo...'
            />
            <Header style={{ flex: 1 }} />
        </>
    )

    return (
        <>
            <Container>
                <Header>
                    <PersonIcon sx={{ fontSize: '40px' }} />
                    <div>
                        <Text1 variant='h1'>My Unsplash</Text1>
                        <Text2 variant='subtitle1'>atul24112001</Text2>
                    </div>
                </Header>
                {matches ? (
                    <Header>
                        {themeButton}
                        <CustomIconComponent onClick={() => setOpenDrawer(true)} title='Open Drawer'>
                            <MenuIcon sx={{ fontSize: "30px" }} />
                        </CustomIconComponent>
                    </Header>
                ) : (
                    <>
                        {search}
                        <Header>
                            {themeButton}
                            {addPhotoButton}
                        </Header>
                    </>
                )}

                {matches && (
                    <Drawer
                        anchor={"right"}
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <DrawerBox>
                            <div className="header">
                                <div>
                                    {search}
                                </div>
                                <CustomIconComponent onClick={() => setOpenDrawer(false)} title='Close Drawer'>
                                    <CloseIcon sx={{ fontSize: "30px" }} />
                                </CustomIconComponent>
                            </div>
                            <div className='actions'>
                                {addPhotoButton}
                            </div>
                        </DrawerBox>
                    </Drawer>
                )}
            </Container>
        </>
    )
}

export default NavBar;