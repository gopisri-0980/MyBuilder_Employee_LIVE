import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPendingTransactionsStatusComponent } from './view-pending-transactions-status.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


const routes: Routes = [
  { path: "", component: ViewPendingTransactionsStatusComponent},

];

@NgModule({
  declarations: [ViewPendingTransactionsStatusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
  ]
})
export class ViewPendingTransactionsStatusModule { }
