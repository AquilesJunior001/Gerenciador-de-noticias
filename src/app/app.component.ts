import { Component } from '@angular/core';
import { ServicoService } from './servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = 'inicial';
  autor = '';
  noticia = '';
  publicar = false;

  constructor(private service: ServicoService) {

  }

  irPara(valor) {
    this.tela = valor;
  }
  limpar(){
    this.autor = '';
    this.noticia = '';
  }
  salvar(valor) {
    this.service.salvarNoticia(this.autor, this.noticia, this.publicar);
    this.tela = valor;
    this.autor = '';
    this.noticia = '';
  }
  publicarNoticia(valor) {
    this.service.publicarNoticia(valor)
  }
  visualizar(valor) {
    this.service.visualizar(valor);
    this.tela = 'visualizar';
  }

}
