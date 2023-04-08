import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { TerceiroComponenteComponent } from './terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { SextoComponenteComponent } from './sexto-componente/sexto-componente.component';
import { QuintoComponenteComponent } from './quinto-componente/quinto-componente.component';
import { MembroFamiliaComponent } from './membro-familia/membro-familia.component';
import { CardComponent } from './card/card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    TerceiroComponenteComponent,
    QuartoComponenteComponent,
    HighlightDirective,
    SextoComponenteComponent,
    QuintoComponenteComponent,
    MembroFamiliaComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
