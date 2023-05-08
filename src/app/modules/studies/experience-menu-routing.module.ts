import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceMenuComponent } from './pages/experience-menu';

const routes: Routes = [
  { path: '', component: ExperienceMenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceMenuRoutingModule { }