import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Props } from '../constants/IProps';

const HeaderStyle = styled.header`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 3rem;
`;

export const Header = ({ children }: Props) => {
    return <HeaderStyle>{children}</HeaderStyle>;
};
