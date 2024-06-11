import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectNotificationPendingForApprovalViewComponent } from './project-notification-pending-for-approval-view.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: "", component: ProjectNotificationPendingForApprovalViewComponent },

];


@NgModule({
  declarations: [ProjectNotificationPendingForApprovalViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    NgbModule,
  ]
})
export class ProjectNotificationPendingForApprovalViewModule { }
