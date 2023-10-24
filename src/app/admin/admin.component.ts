import { Component, OnInit } from '@angular/core';
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quizs: Quiz[] = [];
  quiz: Quiz = {} as Quiz;
  nouveauQuiz: Quiz = {} as Quiz;
  questions: Question[] = [];
  currentQuizId: number = 1;
  showDisplayQuiz: boolean = false;
  showCreateQuiz: boolean = false;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizs().subscribe(data => {
      console.log(data);
      this.quizs = data;
      if (this.quizs.length > 0){
        this.currentQuizId = this.quizs[0].id;
        this.loadQuizInfo(this.currentQuizId);
        this.showDisplayQuiz = true;
        this.showCreateQuiz = false;
      }
    });
  }

  loadQuizInfo(id: number): void{
    this.currentQuizId = id;
    this.quiz = this.quizs.filter(qz => qz.id == id)[0];
    this.questions = this.quiz.questions;
  }

  modifierQuestion(idQuestion: number): void {
  }

  ajoutQuestion(idQuiz: number): void {

  }

  creerQuiz(): void{
    this.showDisplayQuiz = false;
    this.showCreateQuiz = true;
  }

  saveNewQuiz(): void{
    console.log(this.nouveauQuiz);
  }

}
