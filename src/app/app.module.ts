import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PipesComponent } from './pipes/pipes.component';
import { MypipePipe } from './mypipe.pipe';
import { FormsModule } from '@angular/forms';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CardComponent,
    CalculadoraComponent,
    PipesComponent,
    MypipePipe,
    NumbersOnlyDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
