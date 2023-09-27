import {Option} from "./option";

export interface Question {
    id: number;
    libelle: string;
    options: Option[];
    idResponse: string;
    explication: string;
}
