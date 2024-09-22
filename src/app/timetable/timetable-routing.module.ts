import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ResultsComponent } from '../results/results.component';
import { DetailsComponent } from '../details/details.component';

const routes: Routes = [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 
//  path: '': This specifies the URL path that this route should match. In this case, an empty string means it will match the root URL of the application (i.e., the base URL without any additional path segments).

// redirectTo: 'home': This tells Angular to redirect the user to the 'home' path whenever they navigate to the root URL. Essentially, when a user accesses the base URL, they will be redirected to the /home route.

// pathMatch: 'full': This specifies how the router should match the URL path. The value 'full' means that the entire URL path must match the empty string specified in path for the redirection to occur. If pathMatch were set to 'prefix', the router would match any URL that starts with the specified path.

 {path:'home', component: HomeComponent},
 {path: 'results/:query', component: ResultsComponent}, 
 {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
