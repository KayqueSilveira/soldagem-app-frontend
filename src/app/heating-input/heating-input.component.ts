import { Component } from '@angular/core';

@Component({
  selector: 'app-heating-input',
  templateUrl: './heating-input.component.html',
  styleUrl: './heating-input.component.css'
})
export class HeatingInputComponent {

  onSubmit(form: any) {
    if (form.valid) {
      const { amperagem, voltagem, tempo, comprimento } = form.value;
      // Navegar para a tela de resultados ou exibir o resultado
    }
  }
}

