import React, { ChangeEvent, forwardRef, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled';
import { TextField, Typography, Input } from '@mui/material'

const Label = styled(Typography)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 0px;
`;

const CustomTextField = styled(Input)`
    width: 100%;
`;

const InputBox = styled.div`
    margin-bottom: 12px;
`;

interface InputProps {
    label?: string,
    placeholder?: string
}

type Ref = HTMLInputElement;

const CustomInput = forwardRef<Ref, InputProps>((props, ref) => {
    const { label, placeholder } = props;
    return (
        <InputBox>
            {label && (
                <Label variant='h4'>{label}</Label>
            )}
            <CustomTextField inputRef={ref} placeholder={placeholder} />
        </InputBox>
    )
})

CustomInput.displayName = "CustomInput";

export default CustomInput;