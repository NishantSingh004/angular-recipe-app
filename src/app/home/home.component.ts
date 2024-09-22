import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   searchText: ""

  constructor (private router: Router) {}

  ngOnInit(): void {
    
  }
   search() {
    this.router.navigate(['/results', this.searchText])
   }

}