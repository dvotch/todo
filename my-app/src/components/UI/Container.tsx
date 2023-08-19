import React from 'react';
import styled from 'styled-components';
import { Props } from '../../constants/IProps';

const ContainerStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = ({ children }: Props) => {
    return <ContainerStyle>{children}</ContainerStyle>;
};
