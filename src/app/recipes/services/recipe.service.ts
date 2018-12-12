import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }


  getRecipe() {
    return this.http.get(this.endpoint + "/recipe")
  }
}
