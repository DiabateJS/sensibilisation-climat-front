import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../model/quiz';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quizs: Quiz[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Quiz[]>('/assets/quizs.json').subscribe(data =>{
      this.quizs = data;
  });
  }

  loadQuiz(){
    this.router.navigate(['/quiz']);
  }

}
