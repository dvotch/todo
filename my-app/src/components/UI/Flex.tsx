import React from 'react';
import styled from 'styled-components';
import { Props } from '../../constants/IProps';

const FlexStyle = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
`;

export const Flex = ({ children }: Props) => {
    return <FlexStyle>{children}</FlexStyle>;
};
