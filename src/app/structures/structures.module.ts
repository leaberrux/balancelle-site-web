import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AllStructuresComponent } from './components/all-structures/all-structures.component';
import { OneStructureComponent } from './components/one-structure/one-structure.component';

@NgModule({
  declarations: [
    AllStructuresComponent,
    OneStructureComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StructuresModule { }
