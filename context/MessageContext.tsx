"use client"
import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from "@mui/material";

const MessageContext = createContext({
    open: true,
    variant: "success",
    message: "",
    setOpen: (v: boolean) => { },
    setVariant: (v: "success" | "error" | "warning") => { },
    setMessage: (v: string) => { }
})

interface Props {
    children: React.ReactNode
}

export const MessageContextProvider: React.FC<Props> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [variant, setVariant] = useState<"success" | "error" | "warning">("success")
    const [message, setMessage] = useState<string>("");

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            // setVariant("success")
            setMessage("");
        })
    }

    return (
        <MessageContext.Provider value={{
            open,
            variant,
            message,
            setOpen,
            setVariant,
            setMessage
        }}>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "top"
                }}
            >
                <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
                    {message || "Message"}
                </Alert>
            </Snackbar>
            {children}
        </MessageContext.Provider>
    )
}

const useMessage = () => {
    return useContext(MessageContext);
}

export default useMessage;