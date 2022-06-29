import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from './../shared/dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogService {

  constructor(private http: HttpClient) { }

  getDog(){
    return this.http.get("https://random.dog/woof.json");
  }
}
