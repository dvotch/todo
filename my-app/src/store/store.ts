import { create } from 'zustand';
import { ITodo } from '../models/todo.model';
import uuid from 'react-uuid';
import { data } from '../data/data';

interface TodoStore {
    todos: ITodo[];
    countTodos: () => number;
    addTodo: (title: string) => void;
    editComplete: (id: string) => void;
    saveEdit: (id: string, title: string) => void;
    deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: data,
    countTodos: () => get().todos.length,
    addTodo: title => {
        return set(state => ({
            todos: [{ id: uuid(), title, completed: false }, ...state.todos],
        }));
    },
    editComplete: id => {
        console.log(id);
        return set(state => ({
            todos: state.todos.map(todo => ({ ...todo, completed: todo.id === id ? !todo.completed : todo.completed })),
        }));
    },
    saveEdit: (id, title) => {
        return set(state => ({
            todos: state.todos.map(todo => ({ ...todo, title: todo.id === id ? title : todo.title })),
        }));
    },
    deleteTodo: id => {
        return set(state => ({
            todos: state.todos.filter(todo => todo.id !== id),
        }));
    },
}));
