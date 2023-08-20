import React from 'react';
import styled from 'styled-components';
import { ControlButtons } from './ControlButtons';
import { Flex } from './UI/Flex';
import { CheckInput } from './UI/CheckInput';
import { useStore } from '../models/todo.model';
import { Model } from 'react-model';

interface Props {
    item: {
        id: string;
        title: string;
        completed: boolean;
    };
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    setItems: Function;
}

const LabelStyle = styled.label`
    font-size: 1.6rem;
`;


export const Todo = ({ item, onChange, setItems }: Props) => {
    return (
        <>
            <LabelStyle>
                <CheckInput checked={item.completed} onChange={() => {}} />
                {item.title}
            </LabelStyle>
            <ControlButtons />
        </>
    );
};
