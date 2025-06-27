import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionControllerService } from '../../api/services/transaction-controller.service'; // importe seu service

@Component({
  selector: 'app-editar-transacao-popup',
  standalone: false,
  templateUrl: './editar-transacao-popup.component.html',
  styleUrls: ['./editar-transacao-popup.component.scss']
})
export class EditarTransacaoPopupComponent {

  transacao: any;

  constructor(
    private dialogRef: MatDialogRef<EditarTransacaoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private transactionService: TransactionControllerService
  ) {
    //Solução temporária para resolver problema do Angular de subtrair
    //um dia no popup de edição devido o UTC
    const dataOriginal = new Date(data.transacao.dateTransaction);
    dataOriginal.setMinutes(dataOriginal.getMinutes() + dataOriginal.getTimezoneOffset());

    this.transacao = {
      ...data.transacao,
      dateTransaction: dataOriginal
    };
  }

  Close(): void {
    this.dialogRef.close();
  }

  salvarEdicao() {
    this.transactionService.update({ id: this.transacao.id, body: this.transacao }).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Erro ao atualizar transação:', err);
      }
    });
  }
}
