import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ListarProdutosComponent } from './app/components/listar-produtos/listar-produtos.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(ListarProdutosComponent,{
  providers: [
    {provide: HttpClientModule, useValue:{}}
  ]
})
  .catch((err) => console.error(err));
