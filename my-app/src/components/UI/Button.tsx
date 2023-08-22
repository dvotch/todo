import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Props } from '../../constants/IProps';

type extendedProps = Props & { onClick: MouseEventHandler<HTMLButtonElement> };

export const ButtonStyle = styled.button`
    height: 100%;
    background-color: transparent;
    border-radius: 0.5rem;
    border: 2px solid #bd93f9;
    padding: 0.5rem;
    min-width: 5rem;
    color: white;
    cursor: pointer;
`;

export const Button = ({ children, onClick }: extendedProps) => {
    return (
        <ButtonStyle type='button' onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};
