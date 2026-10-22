import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelo da entidade Produto
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // Endereço da API backend Node/Express
  private apiUrl = 'http://localhost:3000/produtos';

  // Injeção do HttpClient no construtor
  constructor(private http: HttpClient) { }

  // Método que consome a API REST e retorna um Observable tipado com a lista de produtos
  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }
}