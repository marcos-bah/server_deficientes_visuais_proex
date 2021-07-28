## :clipboard: Instruções

### BACKEND

- Criar um banco no postgres workbench, exemplo: smarkio_app

- Entrar no repositório backend do projeto com o terminal e executar o seguinte comando para instalar as dependências:
```bash
yarn
```

- Após todas as dependências instaladas criar na raiz da pasta backend um arquivo `.env`
e preencher as informações conforme se encontra no arquivo `.env_example`. 

- Rodar a migration, executando no terminal:
```bash
yarn typeorm migration:run
```

- Finalizado! Basta agora executar a aplicação backend com o seguinte comando:
```bash
yarn dev
```

- A Api estará rodando na porta conforme definido no arquivo .env em API_PORT, por padrão utilize
a porta 4000. `http://localhost:4000`

## Comandos migrations

- Criar uma migration
```bash
yarn typeorm migration:create -n CreateExample
```

- Rodar as migrations
```bash
yarn typeorm migration:run
```

- Desfazer alterações da migration
```bash
yarn typeorm migration:revert
```