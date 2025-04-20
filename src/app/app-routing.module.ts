import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';

const routes: Routes = [
  { path: 'transacoes', component: TransacoesComponent },
  { path: '', redirectTo: '/transacoes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
