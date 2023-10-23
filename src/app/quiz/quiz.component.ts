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
  displayBilanQuiz: boolean = false;
  responseCorrect: boolean = false;
  currentResponse: string = '';
  currentOption: string = '';
  resultatQuestion: string = '';
  idQuestion: number = 0;
  ordreQuestion: number = 0;
  responses: Response[] = [];
  responseOk: boolean = false;
  endOfQuiz: boolean = false;
  nbreQuestionOk: number = 0;
  nbreQuestionKo: number = 0;

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
        this.loadFirstQuestion();
      });
    });
  }

  loadFirstQuestion(): void{
    this.ordreQuestion = 1;
    let firstQuestion: Question = {} as Question;
    firstQuestion = this.questions.filter(question => question.ordre == this.ordreQuestion)[0];
    this.idQuestion = firstQuestion.id ? firstQuestion.id : 1;
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  getCurrentQuestion(): Question {
    let currentQuestion: Question = {} as Question;
    currentQuestion = this.questions.filter(q => q.ordre == this.ordreQuestion)[0];
    return currentQuestion;
  }

  buildCurrentResponse(idResponse: string) {
    let currentResponse = {} as Response;
    currentResponse.idQuestion = this.idQuestion;
    currentResponse.ordreQuestion = this.ordreQuestion;
    currentResponse.correctResponse = idResponse;
    currentResponse.response = this.currentOption;
    this.responses.push(currentResponse);
    console.log(this.responses);
  }

  checkResponse(){
    this.displayResponse = true;
    let currentQuestion = this.getCurrentQuestion();
    console.log(currentQuestion);
    let currentOptions = currentQuestion.options;
    console.log(currentOptions);
    this.responseOk = currentQuestion.idResponse == this.currentOption;
    if (this.responseOk){
      this.resultatQuestion = "Bonne réponse";
      this.nbreQuestionOk += 1;
    }else{
      this.resultatQuestion = "Mauvaise réponse";
      this.nbreQuestionKo += 1;
    }
    this.buildCurrentResponse(currentQuestion.idResponse);
    this.endOfQuiz = this.ordreQuestion == this.questions.length;
  }

    loadNextQuestion(): void{
      if (this.ordreQuestion < this.questions.length){
        this.ordreQuestion += 1;
      }
    }

    nextQuestion(){
      this.displayResponse = false;
      this.loadNextQuestion();
    }

    onResponseSelect(questionId: number, optionId: string){
      console.log("Id Question : "+questionId);
      console.log("Option Id : "+optionId);
      this.currentOption = optionId;

    }

    showBilanQuiz(){
      this.displayBilanQuiz = true;
    }
}
