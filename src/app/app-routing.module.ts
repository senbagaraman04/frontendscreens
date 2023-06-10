import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCardComponent } from './projects/single-card/single-card.component';
import { FourCardComponent } from './projects/four-card/four-card.component';

const routes: Routes = [
 
    { path: 'single-card', component: SingleCardComponent },
    { path: 'four-card', component: FourCardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
