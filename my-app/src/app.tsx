import React from 'react';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import { Container } from '@mui/material';
import { Add } from './components/Add';
import { ShowTasks } from './components/ShowTasks';
import { TaskRemaining } from './components/UI/TaskRemaining';
import { TodoList } from './components/TodoList';

function App() {
    return (
        <Wrapper>
            <Header>Todont</Header>
            <Container>
                <Add />
                <ShowTasks />
                <TaskRemaining value={3} />
                <TodoList onChange={(e) => {}} />
            </Container>
        </Wrapper>
    );
}

export default App;
