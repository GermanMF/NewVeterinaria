import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  exports: [MainComponent]
})
export class MainModule { }
