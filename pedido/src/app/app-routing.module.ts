import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { CidadeComponent } from './cidade/cidade.component';
import { EstadoComponent } from './estado/estado.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { MapaComponent } from './mapa/mapa.component';



const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'tabelapreco', component: TabelaprecoComponent },
  { path: 'vendedor', component: VendedorComponent }
  //otherwise
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
