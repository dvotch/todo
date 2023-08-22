import React, { useState } from 'react';
import { Wrapper } from './components/Wrapper';
import { Header } from './components/Header';
import { Container } from '@mui/material';
import { Add } from './components/Add';
import { ShowTasks } from './components/ShowTasks';
import { TaskRemaining } from './components/UI/TaskRemaining';
import { TodoList } from './components/TodoList';
import { useTodoStore } from './store/store';

function App() {
    const [count, setCount] = useState(0);
    const [countTodos, todos] = useTodoStore(state => [state.countTodos, state.todos]);

    React.useEffect(() => {
        setCount(countTodos());
    }, [todos]);

    return (
        <Wrapper>
            <Header>Todont</Header>
            <Container>
                <Add />
                <ShowTasks />
                <TaskRemaining value={count} />
                <TodoList />
            </Container>
        </Wrapper>
    );
}

export default App;
