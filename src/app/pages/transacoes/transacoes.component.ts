import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarTransacaoPopupComponent } from '../../components/adicionar-transacao-popup/adicionar-transacao-popup.component';
import { TransacaoService } from '../../services/transacao.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacoes',
  standalone: false,
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent implements OnInit {
  displayedColumns: string[] = ['dateTransaction', 'description', 'value', 'type', 'category', 'status'];
  dataSource = [];

  constructor(
    private dialog: MatDialog,
    private transacaoService: TransacaoService,
    private datePipe: DatePipe
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
