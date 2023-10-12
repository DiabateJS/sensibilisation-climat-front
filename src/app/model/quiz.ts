import {Question} from "./question";

export interface Quiz {
    id: number;
    code: string;
    libelle: string;
    description: string;
    questions: Question[];
    info: string;
}
