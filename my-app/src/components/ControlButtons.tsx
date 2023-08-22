import React, { MouseEventHandler } from 'react';
import { Button } from './UI/Button';
import styled from 'styled-components';

interface Props {
    edit: boolean;
    handleClickEdit: MouseEventHandler<HTMLButtonElement>;
    handleClickSave: MouseEventHandler<HTMLButtonElement>;
    handleClickDelete: MouseEventHandler<HTMLButtonElement>;
}

const Flex = styled.div`
    display: flex;
    width: 11rem;
    margin-top: 1rem;
    justify-content: space-between;
`;

export const ControlButtons = ({ edit, handleClickEdit, handleClickSave, handleClickDelete }: Props) => {
    return (
        <Flex>
            <Button onClick={handleClickEdit}>{edit ? 'Cancle' : 'Edit'}</Button>
            <Button onClick={edit ? handleClickSave : handleClickDelete}>{edit ? 'Save' : 'Delete'}</Button>
        </Flex>
    );
};
