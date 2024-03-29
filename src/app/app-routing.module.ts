import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleCardComponent } from './projects/single-card/single-card.component';
import { FourCardComponent } from './projects/four-card/four-card.component';
import { FyloDarkComponent } from './projects/fylo-dark/fylo-dark.component';
import { ProjectTrackingComponent } from './projects/project-tracking/project-tracking.component';

const routes: Routes = [
 
    { path: 'single-card', component: SingleCardComponent },
    { path: 'four-card', component: FourCardComponent},{
      path: 'fylo-dark', component: FyloDarkComponent
    },
    {
      path: 'project-tracking', component: ProjectTrackingComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
