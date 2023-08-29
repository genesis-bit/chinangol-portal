import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-veiculo-detalhe',
  templateUrl: './veiculo-detalhe.component.html',
  styleUrls: ['./veiculo-detalhe.component.css']
})
export class VeiculoDetalheComponent {

    @Input() foto!: string; 
    @Input() titulo!: string;
}
