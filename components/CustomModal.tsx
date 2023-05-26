import React, { useState } from 'react';
import { Modal, Box, ButtonProps, Paper, Theme, useTheme, Typography } from "@mui/material";
import styled from '@emotion/styled';


const CustomBox = styled(Paper) <{ theme: Theme }>`
    padding: 24px 32px;
    border-radius: 12px;
    width: 90%;

    ${props => props.theme.breakpoints.up("sm")}{
        width: 70%;
    }

    ${props => props.theme.breakpoints.up("md")}{
        width: 50%;
    }

    ${props => props.theme.breakpoints.up("lg")}{
        width: 40%;
    }
`;

const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled(Typography)`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 20px;
`;


interface CustomModalProps {
    component: React.ReactNode;
    title?: string;
    children: React.ReactNode;
    open: boolean;
    setOpen: (v: boolean) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, component, open, setOpen, title }) => {
    const theme = useTheme();

    // const toggleModal = () => {
    //     setOpen(!open);
    // }

    return (
        <>
            {component}
            <StyledModal onClose={() => {
                setOpen(false);
            }} open={open}>
                <CustomBox theme={theme}>
                    {title && (
                        <Text>{title}</Text>
                    )}
                    {children}
                </CustomBox>
            </StyledModal>
        </>
    )
}

export default CustomModal;