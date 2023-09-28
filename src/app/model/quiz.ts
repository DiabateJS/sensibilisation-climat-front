import {Question} from "./question";

export interface Quiz {
    id: string;
    libelle: string;
    questions: Question[];
    info: string;
}
