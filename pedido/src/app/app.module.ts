import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoComponent } from './estado/estado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CidadeComponent } from './cidade/cidade.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';
import { VendedorComponent } from './vendedor/vendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    ClienteComponent,
    CidadeComponent,
    PedidoComponent,
    ProdutoComponent,
    TabelaprecoComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
