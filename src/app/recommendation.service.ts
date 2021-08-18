import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http:HttpClient) { }
  getIndustrySuggestion()
  {
    let url="http://139.59.64.181:8948/suggestion/industry-suggestion";
    return this.http.get(url);
  }
  
  getPreferredRole()
  {
    let url="http://139.59.64.181:8948/suggestion/preferredRole";
    return this.http.get(url);
  }
  getAllLanguages()
  {
    let url="http://139.59.64.181:8948/suggestion/all-languages";
    return this.http.get(url);
  }
  getInterests()
  {
    let url="http://139.59.64.181:8948/suggestion/interest-list";
    return this.http.get(url);
  }
  getAllReference()
  {
    let url="http://139.59.64.181:8948/suggestion/all-reference";
    return this.http.get(url);
  }
}
