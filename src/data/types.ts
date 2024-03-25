import { ReactNode } from "react";

export interface IRoutes {
    id: number;
    path: string;
    title: string;
    element: ReactNode
}