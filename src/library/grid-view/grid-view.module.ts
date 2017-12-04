import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from "./components/grid-view/grid-view.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridViewComponent
  ],
  exports: [
    GridViewComponent
  ]
})
export class GridViewModule { }
