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

  constructor(private router: Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizs().subscribe(quizs => {
      console.log(quizs);
      this.quizs = quizs;
    });
  }

  loadQuiz(){
    this.router.navigate(['/quiz']);
  }

}
