import { Routes } from '@angular/router';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';

export const routes: Routes = [
  { path: 'produtos', component: ListarProdutosComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' }
];
