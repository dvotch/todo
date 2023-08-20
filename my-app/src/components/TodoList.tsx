import React from 'react';
import { useStore } from '../models/todo.model';
import { Todo } from './Todo';
import styled from 'styled-components';

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const LiStyle = styled.li`
    list-style-type: none;
    margin-top: 1.2rem;
`;

const UlStyle = styled.ul`
    padding: 0;
`;

export const TodoList = ({ onChange }: Props) => {
    const [state] = useStore('model');
    console.log(state);

    return (
        <UlStyle>
            {state.todos.map(todo => (
                <LiStyle key={todo.id}>
                    <Todo item={todo} onChange={onChange} setItems={() => {}} />
                </LiStyle>
            ))}
        </UlStyle>
    );
};
