# Minimal API da Fórmula 1 com Node e Fastify

Bem-vindo à Minimal API da Fórmula 1, um projeto desenvolvido com Node.js e Fastify para fornecer dados básicos sobre equipes e pilotos de Fórmula 1. Esta aplicação serve como um exemplo de uma Minimal API, que se caracteriza por uma implementação simples e enxuta, focada em fornecer apenas o essencial para o consumo de dados, sem a complexidade de frameworks mais robustos.


## 📝 Visão Geral
Uma `Minimal API` é uma API projetada para ser direta e eficiente, ideal para casos de uso onde a complexidade e o overhead devem ser minimizados. Nesta API, utilizamos o Fastify, um framework web para Node.js, conhecido por seu alto desempenho e baixa sobrecarga.

Este projeto demonstra como configurar uma API mínima com rotas simples para retornar informações sobre equipes e pilotos de Fórmula 1.


## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Passos para Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/minimal-api-formula-1-com-node-e-fastify.git
cd minimal-api-formula-1-com-node-e-fastify
```

2. Instale as dependências:

```bash
npm i
```

3. Inicie a aplicação:

- Em modo de desenvolvimento:

```bash
npm run start:dev
```

- Com monitoramento de arquivos:

```bash
npm run start:watch
```

- Em modo de produção:

```bash
npm run start:dist
```


## 🛣️ Rotas
A API oferece as seguintes rotas:

- `GET /`: Retorna uma mensagem de boas vindas.
- `GET /teams`: Retorna uma lista de equipes de Fórmula 1.
- `GET /drivers`: Retorna uma lista de pilotos de Fórmula 1.
- `GET /drivers/:id`: Retorna informações de um piloto específico com base no ID fornecido.
- `GET /circuits`: Retorna uma lista de circuitos de Fórmula 1.



## 📜 Scripts
`dist`: Compila o código TypeScript para JavaScript.
`start:dev`: Inicia o servidor em modo de desenvolvimento, carregando variáveis de ambiente do arquivo .env.
`start:watch`: Inicia o servidor em modo de desenvolvimento com monitoramento de arquivos.
`start:dist`: Compila o código e inicia o servidor com a versão compilada.

A API estará disponível em http://localhost:3333. Insira os endpoints conforme desejar utilizar.