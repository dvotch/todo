import React from 'react';
import styled from 'styled-components';
import { Flex } from './UI/Flex';
import { TextInput } from './UI/TextInput';
import { Button } from './UI/Button';

export const Add = () => {
    return (
        <Flex>
            <TextInput value='' handlerChange={() => {}} placeholder='New todo...' />
            <Button onClick={() => {}}>Add</Button>
        </Flex>
    );
};
