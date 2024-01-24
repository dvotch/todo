import React from 'react';
import { Flex } from './UI/Flex';
import { Button, ButtonStyle } from './UI/Button';
import styled from 'styled-components';
import { useTodoStore } from '../store/store';
import { type } from 'os';

const ModifyButton = styled(ButtonStyle)`
    width: 100%;
    flex: 1 1;
`;

const UlStyle = styled.ul`
    list-style-type: none;
    gap: 15px;
    padding: 0;
    margin-top: 20px;
    display: flex;
`;

const LiStyle = styled.li`
    width: 100%;
`;

export const ShowTasks = React.memo(() => {
    const setFilter = useTodoStore(state => state.setFilter);
    type Filter = 'All' | 'Active' | 'Completed';
    const Filters: Filter[] = ['All', 'Active', 'Completed'];
    console.log('show tasks');
    return (
        <UlStyle>
            {Filters.map(filter => {
                const hanler = () => setFilter(filter);// FIXME: вынести из цикла
                return (
                    <LiStyle key={filter}>
                        <ModifyButton onClick={hanler}>Show {filter} tasks</ModifyButton>
                    </LiStyle>
                );
            })}
        </UlStyle>
    );
});
