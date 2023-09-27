import {Option} from "./option";

export interface Question {
    libelle: string;
    options: Option[];
    idResponse: string;
    explication: string;
}
