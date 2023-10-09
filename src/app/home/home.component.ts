import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../model/quiz';
import { HttpClient } from '@angular/common/http';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quizs: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizs().subscribe(quizs => {
      this.quizs = quizs;
    });
  }

}
