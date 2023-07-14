import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MainComponent} from "./main.component";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
