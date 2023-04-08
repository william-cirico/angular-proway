import { Component } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-quarto-componente',
  templateUrl: './quarto-componente.component.html',
  styleUrls: ['./quarto-componente.component.css']
})
export class QuartoComponenteComponent {
  dataNascimento = "";
  idade = 0;
  
  calcularIdade(): void {
    const hoje = dayjs();
    const dataNascimento = dayjs(this.dataNascimento);
    this.idade = hoje.diff(dataNascimento, "years");
  }
}
