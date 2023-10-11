import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import {Response} from "../model/response";
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz = {} as Quiz;

  questions: Question[] = [];
  info: string = '';
  displayResponse: boolean = false;
  responseCorrect: boolean = false;
  currentResponse: string = '';
  currentOption: string = '';
  resultatQuestion: string = '';
  idQuestion: number = 0;
  responses: Response[] = [];
  responseOk: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      let idQuiz = params.id;
      console.log(idQuiz);

      this.quizService.getQuiz(idQuiz).subscribe(qz => {
        console.log(qz);
        this.quiz = qz;
        this.questions = this.quiz.questions;
        this.info = this.quiz.info;
        this.idQuestion = 1;
      });
    });
  }

  goToHome(){
    this.router.navigate(['/']);
  }

    checkResponse(){
      this.displayResponse = true;
      let currentQuestion = this.questions[this.idQuestion - 1];
      console.log(currentQuestion);
      let currentOptions = currentQuestion.options;
      console.log(currentOptions);
      let currentResponse = {} as Response;
      this.responseOk = currentQuestion.idResponse == this.currentOption;
      this.resultatQuestion = this.responseOk ? "Bonne réponse" : "Mauvaise réponse";
      currentResponse.idQuestion = this.idQuestion;
      currentResponse.correctResponse = currentQuestion.idResponse;
      currentResponse.response = this.currentOption;
      this.responses.push(currentResponse);
      console.log(this.responses);
    }

    nextQuestion(){
      this.displayResponse = false;
      if (this.idQuestion < this.questions.length){
          this.idQuestion += 1;
      }
    }

    onResponseSelect(questionId: number, optionId: string, event: any){
      console.log(event);
      console.log("Question : "+questionId);
      console.log("Option Id : "+optionId);
      this.currentOption = optionId;

    }
}
