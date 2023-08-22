import React from 'react';
import { Todo } from './Todo';
import styled from 'styled-components';
import { useTodoStore } from '../store/store';

const LiStyle = styled.li`
    list-style-type: none;
    margin-top: 1.2rem;
`;

const UlStyle = styled.ul`
    padding: 0;
    position: relative;
`;

export const TodoList = () => {
    const todos = useTodoStore(state => state.todos);
    return (
        <UlStyle>
            {todos.map(todo => (
                <LiStyle key={todo.id}>
                    <Todo title={todo.title} completed={todo.completed} id={todo.id} />
                </LiStyle>
            ))}
        </UlStyle>
    );
};
