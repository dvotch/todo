import React from 'react';
import { useStore } from '../models/todo.model';
import { Todo } from './Todo';

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TodoList = ({ onChange }: Props) => {
    const { items, setItems } = useStore();
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Todo item={item} onChange={onChange} />
                </li>
            ))}
        </ul>
    );
};
