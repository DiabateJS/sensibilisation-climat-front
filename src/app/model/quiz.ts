import {Question} from "./question";

export interface Quiz {
    id: string;
    libelle: string;
    description: string;
    questions: Question[];
    info: string;
}
