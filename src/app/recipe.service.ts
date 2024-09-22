import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public getSearchResults(searchText:any){
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&number=5&apiKey=6f80fbc6101a49f1afffff1eecbf19d5`).subscribe(
        (res) => {
            resolve(res);
        },

        (err) => {
            reject(err);
        }

      );
    })

  }

  public getRecipeInformation(id:any){
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=6f80fbc6101a49f1afffff1eecbf19d5`).subscribe(
        (res) => {
            resolve(res);
        },

        (err) => {
            reject(err);
        }

      );
    })

  }

  public getInstructions(id:any){
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=6f80fbc6101a49f1afffff1eecbf19d5`).subscribe(
        (res)=>  {
          resolve(res);
        } ,
        (err) => {
          reject(err);
      }
         );

      
    })
  }
}
