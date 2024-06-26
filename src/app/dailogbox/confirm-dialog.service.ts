import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  constructor(private modalService: NgbModal,
    ) { 
     
    }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'No',
    btnCancelText: string = 'Yes'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmDialogComponent, {  centered: true });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }
}