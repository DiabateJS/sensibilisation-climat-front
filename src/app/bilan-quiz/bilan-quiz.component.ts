import { Component, Input, OnInit } from '@angular/core';
import {Question} from "../model/question";
import {Response} from "../model/response";

@Component({
  selector: 'app-bilan-quiz',
  templateUrl: './bilan-quiz.component.html',
  styleUrls: ['./bilan-quiz.component.scss']
})
export class BilanQuizComponent implements OnInit {

  @Input()
  responses: Response[] = [];

  @Input()
  questions: Question[] = [];

  @Input()
  nbreQuestionOk: number = 0;

  @Input()
  nbreQuestionKo: number = 0;

  tauxReussite: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.tauxReussite = (this.nbreQuestionOk / this.questions.length) * 100;
  }

}
