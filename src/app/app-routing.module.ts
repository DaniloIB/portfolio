import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home.component';
import { ExperienceMenuComponent } from './modules/studies/pages/experience-menu';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    loadChildren: ()=>import('../app/modules/home/home.module').then(m=>m.HomeModule)
    },
    {
      path: 'menu-experience', component: ExperienceMenuComponent,
      loadChildren: ()=>import('./modules/studies/experience-menu-module').then(m=>m.ExperienceMenuModule)
      },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
