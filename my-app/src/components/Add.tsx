import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from './UI/Flex';
import { TextInput } from './UI/TextInput';
import { Button } from './UI/Button';
import { useStore } from '../models/todo.model';

export const Add = () => {
    const [value, setValue] = useState('');
    const [,actions] = useStore("model")
    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handlerClick = () => {
        actions.add(value)
    };

    return (
        <Flex>
            <TextInput value={value} handlerChange={handlerChange} placeholder='New todo...' />
            <Button onClick={handlerClick}>Add</Button>
        </Flex>
    );
};
