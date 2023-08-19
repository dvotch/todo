import React from 'react';
import styled from 'styled-components';
import { ControlButtons } from './ControlButtons';
import { Flex } from './UI/Flex';
import { CheckInput } from './UI/CheckInput';
import { useStore } from '../models/todo.model';

interface Props {
    item: {
        id: string;
        title: string;
        completed: boolean;
    };
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 2rem;
`;

const LabelStyle = styled.label`
    font-size: 1.6rem;
`;

export const Todo = ({ item, onChange }: Props) => {
    return (
        <>
            <LabelStyle>
                <CheckInput checked={item.completed} onChange={onChange} />
                {item.title}
            </LabelStyle>
            <ControlButtons />
        </>
    );
};
