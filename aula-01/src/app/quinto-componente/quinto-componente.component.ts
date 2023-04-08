import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quinto-componente',
  templateUrl: './quinto-componente.component.html',
  styleUrls: ['./quinto-componente.component.css']
})
export class QuintoComponenteComponent {
  @Input() sobrenome!: string;
  @Input() membros!: string[];

  membroSelecionado = "";
}
