import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  autor = [
    'Angela',
    'Antonio',
    'João',
    'Marcos',
    'Anonimo'
  ]
  dados = []
  noticia = {}

  constructor() { }

  listaDeAutores() {
    return this.autor
  }
  listaDeNoticias() {
    return this.dados
  }

  salvarNoticia(autor, noticia, publicar) {
    let n = {
      'id': Math.random(),
      'autor': autor,
      'noticia': noticia,
      'publicar': publicar,
      'views': 0
    };
    this.dados.push(n)
  }

  publicarNoticia(valor) {
    for (let dado of this.dados) {
      if (dado.id === valor.id) {
        dado.publicar = true;
      }
    }
  }

  visualizar(valor){
    for (let dado of this.dados) {
      if (dado.id === valor.id) {
        dado.views++
        this.noticia = {
          'autor': dado.autor,
          'noticia': dado.noticia
        }
      }
    }
  }

  noticiasPorAutor() {
    let estatisticas = [];
    let aux = {};
    for (let x of this.autor) {
      aux[x] = estatisticas.length;
      estatisticas.push({ autor: x, valor: 0 })
    }
    for (let y of this.dados) {
      if (y.publicar === true){
        estatisticas[aux[y.autor]].valor++;
      }
    }
    return estatisticas
  }

  AutorMaisPublicou() {
    let nome = '';
    let qt = 0;
    for (let x of this.noticiasPorAutor()){
      if (x.valor > qt) {
        nome = x.autor;
        qt = x.valor;
      }
    }
    return nome
  }

  quatidadeDeViews() {
    return this.dados.sort(function(a, b){return b.views-a.views})
  }

}
