import { Component } from '@angular/core';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent {

  calculos = [
    { data: new Date(), energia: 500 },
    { data: new Date(), energia: 480 },
    { data: new Date(), energia: 510 }
  ];

  limparHistorico() {
    this.calculos = [];
  }
}
