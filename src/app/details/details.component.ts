import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
constructor(private recipeservice: RecipeService, private route: ActivatedRoute
){ }
  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id') 
  this.recipeservice.getRecipeInformation(this.id)
  .then((res:any)=>{
    console.log(res)
     this.details = res
  }).catch(console.error)
  this.recipeservice.getInstructions(this.id).then((res)=>{
    console.log(res)
    this.steps = res[0].steps
  }).catch(console.error)
}
id:any = " "
details:any = " "
steps:any[] //have to do this as the its output that we will be getting is non array mean that will be an object so for that we have to us otherwise it will throw an error
}