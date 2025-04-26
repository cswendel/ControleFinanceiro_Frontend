import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-transacao-popup',
  standalone: false,
  templateUrl: './adicionar-transacao-popup.component.html',
  styleUrl: './adicionar-transacao-popup.component.scss'
})

export class AdicionarTransacaoPopupComponent {
  transacao = {
    value: 0
  };
  protected readonly close = close;

  constructor(private dialogRef: MatDialogRef<AdicionarTransacaoPopupComponent>) {
  }

  Close(): void {
    this.dialogRef.close();
  }
}
