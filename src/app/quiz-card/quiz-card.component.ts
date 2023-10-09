import { Component, OnInit, Input } from '@angular/core';
import {Quiz} from "../model/quiz";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

  @Input()
  quiz!: Quiz;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadQuiz(){
    console.log("Lancement du Quiz : "+this.quiz.id);
    //this.router.navigate(['/quiz']);
  }

}
