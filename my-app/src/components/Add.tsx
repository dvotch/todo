import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './UI/Flex';
import { TextInput } from './UI/TextInput';
import { Button } from './UI/Button';
import { useTodoStore } from '../store/store';

export const Add = React.memo(() => {
    const [value, setValue] = useState('');

    const addTodo = useTodoStore(state => state.addTodo);

    const handlerChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const handlerClick = React.useCallback(() => {
        if (value) {
            addTodo(value);
            setValue('');
        }
    }, [value]);
    console.log('Add');
    return (
        <Flex>
            <TextInput value={value} handlerChange={handlerChange} placeholder='New todo...' />
            <Button onClick={handlerClick}>Add</Button>
        </Flex>
    );
});
