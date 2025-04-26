import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/transacoes', pathMatch: 'full' },
  { path: 'transacoes', component: TransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
