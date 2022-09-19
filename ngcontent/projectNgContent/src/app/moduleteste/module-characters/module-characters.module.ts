import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCharactersRoutingModule } from './module-characters-routing.module';
import { ModuleCharactersComponent } from './module-characters.component';
import { BigComponentComponent } from './big-component/big-component.component';


@NgModule({
  declarations: [
    ModuleCharactersComponent,
    BigComponentComponent
  ],
  imports: [
    CommonModule,
    ModuleCharactersRoutingModule
  ]
})
export class ModuleCharactersModule { }
