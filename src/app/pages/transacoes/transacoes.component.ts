import { Component } from '@angular/core';

@Component({
  selector: 'app-transacoes',
  standalone: false,
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent {
  displayedColumns: string[] = ['data', 'descricao', 'valor', 'tipo'];
  dataSource = [
    { data: '2025-04-10', descricao: 'Salário', valor: 2500, tipo: 'Entrada' },
    { data: '2025-04-12', descricao: 'Supermercado', valor: -300, tipo: 'Saída' },
    { data: '2025-04-14', descricao: 'Aluguel', valor: -800, tipo: 'Saída' }
  ];
}
