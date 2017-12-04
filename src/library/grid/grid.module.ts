import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from "./components/grid/grid.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
