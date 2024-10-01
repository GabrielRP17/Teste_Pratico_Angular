import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://localhost:5000/api/produto';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  obterPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  atualizar(id: number, produto: Produto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, produto);
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
