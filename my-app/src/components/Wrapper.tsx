import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Props } from '../constants/IProps';

const WrapperStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    max-width: 40rem;
`;

export const Wrapper = React.memo(({ children }: Props) => {
    return <WrapperStyle>{children}</WrapperStyle>;
});
