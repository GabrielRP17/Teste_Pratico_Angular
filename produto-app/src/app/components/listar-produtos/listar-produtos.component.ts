import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './listar-produtos.component.html',

})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  produto: Produto = { id: 0, nome_Produto: '', descricao: '', preco: 0, quantidade_Estoque: 0, categoria: '' };
  formularioVisivel: boolean = false;
  produtoEditando: boolean = false;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listarTodos().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

  mostrarFormulario() {
    this.formularioVisivel = true;
    this.produtoEditando = false;
    this.produto = { id: 0, nome_Produto: '', descricao: '', preco: 0, quantidade_Estoque: 0, categoria: '' }; // Resetando o produto
  }

  editarProduto(produto: Produto) {
    this.produto = { ...produto };
    this.produtoEditando = true;
    this.formularioVisivel = true;
  }

  salvarProduto() {
    if (this.produtoEditando) {
      this.produtoService.atualizar(this.produto.id, this.produto).subscribe(() => {
        this.listarProdutos();
        this.cancelar();
      });
    } else {
      this.produtoService.cadastrar(this.produto).subscribe(() => {
        this.listarProdutos();
        this.cancelar();
      });
    }
  }

  removerProduto(id: number) {
    this.produtoService.remover(id).subscribe(() => {
      this.listarProdutos();
    });
  }

  cancelar() {
    this.formularioVisivel = false;
    this.produto = { id: 0, nome_Produto: '', descricao: '', preco: 0, quantidade_Estoque: 0, categoria: '' };
  }
}
