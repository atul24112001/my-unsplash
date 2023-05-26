"use client"
import React, { useContext, useEffect, useMemo, createContext } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme, ButtonProps, InputProps } from '@mui/material';

const ThemeContext = createContext({
    mode: "light",
    toggleTheme: () => { }
})

interface CustomThemeProviderProps {
    children: React.ReactNode
}
export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>("light");
    const defaultMode = useMediaQuery("(prefers-color-scheme: dark)");

    useEffect(() => {
        if (defaultMode) {
            setMode("dark")
        } else {
            setMode("light")
        }
    }, [defaultMode]);

    const theme = useMemo(() => {
        const components = {
            MuiButton: {
                styleOverrides: {
                    root: (props: { ownerState: ButtonProps }) => {
                        if (props.ownerState.variant === "contained") {
                            return {
                                color: "#fff",
                                boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "12px",
                                // font-family: 'Noto Sans';
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "19px",
                                padding: "14px 26px"
                            }
                        } else if (props.ownerState.variant === "outlined") { }
                        return {
                            // color: "#fff",
                            boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "30px",
                            // font-family: 'Noto Sans';
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "14px",
                            // border: "1px",
                            lineHeight: "19px",
                            padding: "14px 26px"
                        }
                    },
                }
            },
            // MuiI
        }
        if (mode === "dark") {
            return createTheme({
                palette: {
                    mode,
                    primary: {
                        main: "#3DB46D",
                        light: "#5ab57e",
                        dark: "#19b558",
                    },
                    error: {
                        main: "#EB5757",
                        dark: "#ee4040",
                        light: "#ec6d6d7",
                    }
                },
                components,
            })
        }
        return createTheme({
            palette: {
                mode,
                primary: {
                    main: "#3DB46D",
                    light: "#5ab57e",
                    dark: "#19b558",
                },
                error: {
                    main: "#EB5757",
                    dark: "#ee4040",
                    light: "#ec6d6d7",
                }
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: (props: { ownerState: ButtonProps }) => {
                            if (props.ownerState.variant === "contained") {
                                return {
                                    color: "#fff",
                                    boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "12px",
                                    // font-family: 'Noto Sans';
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "14px",
                                    lineHeight: "19px",
                                    padding: "14px 26px"
                                }
                            } else if (props.ownerState.variant === "outlined") { }
                            return {
                                // color: "#fff",
                                boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "30px",
                                // font-family: 'Noto Sans';
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "14px",
                                // border: "1px",
                                lineHeight: "19px",
                                padding: "14px 26px"
                            }
                        },
                    }
                },
                MuiInput: {
                    styleOverrides: {
                        root: (props: { ownerState: InputProps }) => {
                            return {
                                border: "2px solid #ccc",
                                borderRadius: "12px",
                                padding: "8px 18px",

                                ":before": {
                                    border: "0px !important",
                                },
                                ":after": {
                                    border: "0px !important",
                                },
                                ":focus": {
                                    border: "2px solid #3DB46D !important"
                                },
                                ":active": {
                                    border: "2px solid #3DB46D !important"
                                },
                                ":hover": {
                                    border: "2px solid #3DB46D !important"
                                },
                                ":focus-within": {
                                    border: "2px solid #3DB46D !important"
                                }

                            }
                        }
                    }
                }
            },
        })
    }, [mode])

    const toggleTheme = () => {
        setMode(prev => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{
            mode,
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;