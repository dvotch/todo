import React from 'react';
import { Button } from './UI/Button';
import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    width: 11rem;
    margin-top: 1rem;
    justify-content: space-between;
`;

export const ControlButtons = () => {
    return (
        <Flex>
            <Button onClick={() => {}}>Edit</Button>
            <Button onClick={() => {}}>Delete</Button>
        </Flex>
    );
};
