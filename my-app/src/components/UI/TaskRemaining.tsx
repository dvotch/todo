import React from 'react';
import styled from 'styled-components';

interface Props {
    value: number;
}

const TaskRemainingStyle = styled.h2`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.4rem;
    margin-left: -1.4rem;
`;

export const TaskRemaining = ({ value }: Props) => {
    return (
        <TaskRemainingStyle>
            {value} {value > 1 ? 'tasks' : 'task'} remaining
        </TaskRemainingStyle>
    );
};
