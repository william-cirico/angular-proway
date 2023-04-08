import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-membro-familia',
  templateUrl: './membro-familia.component.html',
  styleUrls: ['./membro-familia.component.css']
})
export class MembroFamiliaComponent {
  @Input() name!: string;
  @Output() childEvent = new EventEmitter<string>();

  selecionarMembro() {
    this.childEvent.emit(this.name);
  }
}
