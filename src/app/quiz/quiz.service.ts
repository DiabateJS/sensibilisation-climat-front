import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz';
import { Constants } from '../utils/Constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  getQuizs(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(Constants.URL_BASE+'quizs', Constants.HTTP_OPTIONS);
  }

  getQuiz(id: string): Observable<Quiz> {
    return this.httpClient.get<Quiz>(Constants.URL_BASE+'quizs/'+id, Constants.HTTP_OPTIONS);
  }
}
