import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit{
  constructor(
    public recipeservice:RecipeService, 
    private route: ActivatedRoute, 
    private router:Router
    
  ){}

  ngOnInit(): void {
   if(this.route.snapshot.paramMap.get('query') !== null){
    this.searchText = this.route.snapshot.paramMap.get('query')
    this.recipeservice.getSearchResults(this.searchText)
    .then((res:any) => {
      this.results = res.results
    })
    .catch(console.error)
  }
}
  showDetails(id:any){
    this.router.navigate(['/details', id])
  }
  searchText:any = ""
  results:any[]
}
