import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarTransacaoPopupComponent } from '../../components/adicionar-transacao-popup/adicionar-transacao-popup.component';
import {EditarTransacaoPopupComponent} from '../../components/editar-transacao-popup/editar-transacao-popup.component';
import {TransactionControllerService} from '../../api/services/transaction-controller.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transacoes',
  standalone: false,
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent implements OnInit {
  displayedColumns: string[] = ['dateTransaction', 'description', 'value', 'type', 'category', 'status', 'opcoes'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private dialog: MatDialog,
    private transactionService: TransactionControllerService
  ) {}

  ngOnInit(): void {
    this.listarTransacoes();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdicionarTransacaoPopupComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.listarTransacoes();
      }
    });
  }

  openEditDialog(transacao: any): void {
    this.dialog.open(EditarTransacaoPopupComponent, {
      width: '400px',
      data: { transacao: transacao }
    });

  }

  listarTransacoes(): void {
    this.transactionService.getAllTransactions().subscribe({
      next: (res) => {
        this.dataSource.data = res ?? [];
        console.log('Transações recebidas:', res);
      },
      error: (err) => {
        console.error('Erro ao listar transações:', err);
      }
    });
  }

  deletarTransacao(id: number): void {
    this.transactionService.deleteById({id}).subscribe({
      next: () => {
        console.log('Transação deletada com sucesso!');
        this.listarTransacoes();
      },
      error: (err) => {
        console.error('Erro ao deletar transação:', err);
      }
    });
  }
}
