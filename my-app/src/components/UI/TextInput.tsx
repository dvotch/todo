import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
    value: string;
    handlerChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
}

const InputStyle = styled.input`
    border-radius: 0.5rem;
    border: 2px solid #bd93f9;
    padding: 0.5rem;
    flex: 1 1;
`;

export const TextInput = ({ value, handlerChange, placeholder }: Props) => {
    return <InputStyle type='text' value={value} onChange={handlerChange} placeholder={placeholder} />;
};
