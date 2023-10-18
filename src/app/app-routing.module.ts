import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './homepage/components/content/content.component';
import { AllStructuresComponent } from './structures/components/all-structures/all-structures.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  { path: 'structures', component: AllStructuresComponent},
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
