import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api'

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component'
import {AppRoutingModule} from './app-routing.module';
import { ResumenContabilidadComponent } from './resumen-contabilidad/resumen-contabilidad.component'
import {InMemoryResumenService} from './in-memory/InMemoryResumenService';
import { ClienteFichaComponent } from './clientes/cliente-ficha/cliente-ficha.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ResumenContabilidadComponent,
    ClienteFichaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryResumenService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
