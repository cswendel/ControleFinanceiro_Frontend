import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TransacaoService} from '../../services/transacao.service';

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
    type: null,
    status: "",
    category:"",
    dateTransaction: "",
  };
  protected readonly close = close;

  constructor(
    private dialogRef: MatDialogRef<AdicionarTransacaoPopupComponent>,
    private transacaoService: TransacaoService
  ) {}

  Close(): void {
    this.dialogRef.close();
  }

  Create() {
    this.transacaoService.Create(this.transacao).subscribe({
      next: (res) => {
        this.Close();
      },
      error: (err) => {
        const codigoErro = err.error.code;
        const mensagemErro = err.error.message;
        console.error(`${mensagemErro} (${codigoErro})`);
      }
    });
  }
}
