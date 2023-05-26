import { IconButton, IconProps, SvgIconTypeMap, Tooltip } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react'

interface Props {
    title: string;
    onClick: () => void;
    children: React.ReactNode
}

const CustomIconComponent: React.FC<Props> = ({ title, onClick, children }) => {
    return (
        <Tooltip title={title} arrow placement='top'>
            <IconButton onClick={onClick}>
                {children}
            </IconButton>
        </Tooltip>
    )
}
export default CustomIconComponent;