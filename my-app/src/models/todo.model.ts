import React from 'react';
import { v4 as uuidv4 } from 'uuid';



// define model
export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
