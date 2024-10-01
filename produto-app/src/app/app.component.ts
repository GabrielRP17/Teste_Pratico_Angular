import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarProdutosComponent } from "./components/listar-produtos/listar-produtos.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'produto-app';
}
