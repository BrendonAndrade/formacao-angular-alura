import { TransferenciaService } from './services/transferencia.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  transferir($event){
    this.service.adicionar($event);
  }
}
