import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HabilidadComponent } from './habilidad/habilidad.component';

@NgModule({
  declarations: [
    AppComponent, HabilidadesComponent, HabilidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
