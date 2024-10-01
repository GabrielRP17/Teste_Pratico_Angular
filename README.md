# Projeto Angular - Gerenciamento de Produtos

Este é um projeto Angular para gerenciamento de produtos, permitindo adicionar, editar, remover e listar produtos. O projeto foi construído utilizando componentes de classe e é um exemplo prático de como estruturar um aplicativo Angular com funcionalidades básicas de CRUD (Criar, Ler, Atualizar e Deletar).

## Funcionalidades

- **Listar Produtos**: Exibe uma tabela com todos os produtos cadastrados, mostrando ID, Nome, Descrição, Preço, Estoque e Categoria.
- **Adicionar Produto**: Um formulário que permite ao usuário inserir novos produtos.
- **Editar Produto**: Permite editar as informações de um produto existente.
- **Remover Produto**: Possibilita a remoção de produtos da lista.

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para construir a aplicação.
- **RxJS**: Para manipulação assíncrona de dados.
- **Bootstrap**: Para estilização e design responsivo (caso adicionado).
- **HttpClient**: Para fazer chamadas a uma API RESTful.

## Estrutura do Projeto

- `src/`
  - `app/`
    - `components/`
      - `listar-produtos/`: Componente principal que gerencia a lista de produtos.
      - `code-display/`: Componente que exibe o código do componente de gerenciamento de produtos.
    - `models/`: Modelos de dados, incluindo `produto.model.ts`.
    - `services/`: Serviço para gerenciar operações relacionadas a produtos, incluindo `produto.service.ts`.
    - `app.component.ts`: Componente raiz da aplicação.
    - `app.module.ts`: Módulo principal da aplicação.

## Como Executar o Projeto

### Pré-requisitos

- [Angular CLI](https://angular.io/cli) (instalado globalmente)

### Passos para Executar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
