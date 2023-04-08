import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  templateUrl: './terceiro-componente.component.html',
  styleUrls: ['./terceiro-componente.component.css']
})
export class TerceiroComponenteComponent {
  mostrarApelido(): void {
    alert("Will");
  }
}
