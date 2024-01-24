import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlButtons } from './ControlButtons';
import { CheckInput } from './UI/CheckInput';
import { ITodo } from '../models/todo.model';
import { useTodoStore } from '../store/store';
import { InputStyle } from './UI/TextInput';
import { shallow } from 'zustand/shallow';

const LabelStyle = styled.label<{ $edit?: boolean }>`
    font-size: 1.6rem;
    position: relative;
    opacity: ${props => (props.$edit ? '0' : '1')};
`;

const InputStyled = styled(InputStyle)<{ $edit?: boolean }>`
    position: absolute;
    z-index: 2;
    display: ${props => (props.$edit ? 'block' : 'none')};
`;

export const Todo = React.memo(({ title, completed, id }: ITodo) => {
    const [stateTitle, setStateTitle] = useState(title);
    const [edit, setEdit] = useState(false);
    const [editComplete, saveEdit, deleteTodo] = useTodoStore(
        state => [state.editComplete, state.saveEdit, state.deleteTodo],
        shallow
    );

    const handleClick = React.useCallback(() => {
        editComplete(id);
    }, []);

    const handlerChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setStateTitle(event.target.value);
    }, []);

    const handleClickEdit = React.useCallback(() => {
        setEdit(edit => !edit);
        setStateTitle(title);
    }, [title]);

    const handleClickSave = React.useCallback(() => {
        saveEdit(id, stateTitle);
        setEdit(edit => !edit);
    }, [stateTitle]);

    const handleClickDelete = React.useCallback(() => {
        deleteTodo(id);
    }, []);
    return (
        <>
            <InputStyled value={stateTitle} onChange={handlerChange} $edit={edit} />
            <LabelStyle $edit={edit}>
                <CheckInput checked={completed} onChange={handleClick} />
                {title}
            </LabelStyle>

            <ControlButtons
                edit={edit}
                handleClickEdit={handleClickEdit}
                handleClickSave={handleClickSave}
                handleClickDelete={handleClickDelete}
            />
        </>
    );
});
