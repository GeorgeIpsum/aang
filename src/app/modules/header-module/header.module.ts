import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BaseHeaderComponent
  ]
})
export class HeaderModule { }
