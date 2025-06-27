import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {TransactionControllerService} from '../../api/services/transaction-controller.service';

@Component({
  selector: 'app-adicionar-transacao-popup',
  standalone: false,
  templateUrl: './adicionar-transacao-popup.component.html',
  styleUrl: './adicionar-transacao-popup.component.scss'
})

export class AdicionarTransacaoPopupComponent {

  transacao = {
    value: "",
    description: "",
    type: undefined,
    status: "",
    category:"",
    dateTransaction: "",
  };
  protected readonly close = close;

  constructor(
    private dialogRef: MatDialogRef<AdicionarTransacaoPopupComponent>,
    private transactionService: TransactionControllerService
  ) {}

  Close(b: boolean): void {
    this.dialogRef.close(b);
  }

  Create() {
    this.transactionService.create({body: this.transacao}).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        const codigoErro = err.error.code;
        const mensagemErro = err.error.message;
        console.error(`${mensagemErro} (${codigoErro})`);
      }
    });
  }
}
