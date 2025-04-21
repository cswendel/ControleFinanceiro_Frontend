import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarTransacaoPopupComponent } from '../../components/adicionar-transacao-popup/adicionar-transacao-popup.component';

@Component({
  selector: 'app-transacoes',
  standalone: false,
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})

export class TransacoesComponent {
  displayedColumns: string[] = ['dateTransaction', 'description', 'value', 'type', 'category', 'status'];
  dataSource = [];

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AdicionarTransacaoPopupComponent, {
      width: '400px',
      data: {}
    });
  }
}
