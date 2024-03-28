import { ReactNode } from 'react';

export interface IRoutes {
    id: number;
    path: string;
    title: string;
    element: ReactNode
}

export interface ISelectValues {
    id: number,
    value: string,
}

export interface IPagesLinks {
    id: number;
    title: string;
    to: string
}