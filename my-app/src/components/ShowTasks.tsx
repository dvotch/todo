import React from 'react';
import { Flex } from './UI/Flex';
import { Button, ButtonStyle } from './UI/Button';
import styled from 'styled-components';

const ModifyButton = styled(ButtonStyle)`
    flex: 1 1;
`;

export const ShowTasks = () => {
    return (
        <Flex>
            <ModifyButton>Show All tasks</ModifyButton>
            <ModifyButton>Show Active tasks</ModifyButton>
            <ModifyButton>Show Completed tasks</ModifyButton>
        </Flex>
    );
};
