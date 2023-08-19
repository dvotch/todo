import React from 'react';
import styled from 'styled-components';

interface Props {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckInputStyle = styled.input`
    transform: scale(2);
    margin-right: 1.5rem;
`;

export const CheckInput = ({ checked, onChange }: Props) => {
    return <CheckInputStyle type='checkbox' checked={checked} onChange={onChange} />;
};
