import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    loadChildren: ()=>import('../app/modules/home/home.module').then(m=>m.HomeModule)
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
