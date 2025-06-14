import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-transacao-popup',
  standalone: false,
  templateUrl: './editar-transacao-popup.component.html',
  styleUrl: './editar-transacao-popup.component.scss'
})

export class EditarTransacaoPopupComponent {

  transacao = {
    value: "",
    description: "",
    type: null,
    status: "",
    category:"",
    dateTransaction: "",
  };
  protected readonly close = close;

  constructor(
    private dialogRef: MatDialogRef<EditarTransacaoPopupComponent>,
  ) {}

  Close(): void {
    this.dialogRef.close();
  }

}
