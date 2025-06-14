import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarTransacaoPopupComponent } from '../../components/adicionar-transacao-popup/adicionar-transacao-popup.component';
import { TransacaoService } from '../../services/transacao.service';
import { DatePipe } from '@angular/common';
import {EditarTransacaoPopupComponent} from '../../components/editar-transacao-popup/editar-transacao-popup.component';

@Component({
  selector: 'app-transacoes',
  standalone: false,
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent implements OnInit {
  displayedColumns: string[] = ['dateTransaction', 'description', 'value', 'type', 'category', 'status', 'opcoes'];
  dataSource = [];

  constructor(
    private dialog: MatDialog,
    private transacaoService: TransacaoService
  ) {}

  ngOnInit(): void {
    this.listarTransacoes();
  }

  openDialog(): void {
    this.dialog.open(AdicionarTransacaoPopupComponent, {
      width: '400px',
      data: {}
    });
  }

  openEditDialog(transacao: any): void {
    this.dialog.open(EditarTransacaoPopupComponent, {
      width: '400px',
      data: { transacao: transacao }
    });

  }

  listarTransacoes(): void {
    this.transacaoService.ListAll().subscribe({
      next: (res) => {
        this.dataSource = res;
      },
      error: (err) => {
        console.error('Erro ao listar transações:', err);
      }
    });
  }
}
