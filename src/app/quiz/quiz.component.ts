import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../model/quiz";
import {Question} from "../model/question";

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
  idQuestion: number = 0;
  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Quiz>('/assets/quiz.json').subscribe(data =>{
        this.quiz = data;
        this.questions = data.questions;
        this.info = data.info;
        this.idQuestion = 1;
    });
  }

  goToHome(){
    this.router.navigate(['/']);
  }

    checkResponse(){
      this.displayResponse = true;
    }

    nextQuestion(){
      this.displayResponse = false;
      if (this.idQuestion < this.questions.length){
          this.idQuestion += 1;
      }
    }

}
