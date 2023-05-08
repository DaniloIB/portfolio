import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceMenuRoutingModule } from './experience-menu-routing.module';

import { ExperienceMenuComponent} from './pages/experience-menu';

@NgModule({
  declarations: [
    ExperienceMenuComponent
  ],
  imports: [
    CommonModule,
    ExperienceMenuRoutingModule
  ]
})
export class ExperienceMenuModule { }
