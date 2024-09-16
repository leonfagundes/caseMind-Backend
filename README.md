# Projeto - Nome do Repositório

Bem-vindo ao repositório do projeto **Nome do Repositório**. Este documento serve para orientá-lo sobre como configurar e executar o projeto corretamente. Siga os passos abaixo para garantir que o ambiente esteja configurado adequadamente.

## Instalação de Dependências

Para instalar as dependências do projeto, siga o procedimento abaixo.

### Front-end

1. Navegue até o diretório do front-end do projeto.
2. Execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install

## Back-end
Navegue até o diretório do back-end do projeto.

Execute o comando abaixo para instalar as dependências:

  ```bash
  npm install
  Configuração das Variáveis de Ambiente
  ```
Após instalar as dependências, será necessário configurar as variáveis de ambiente, tanto para o front-end quanto para o back-end.


## Front-end
No diretório do front-end, crie um arquivo .env.

Insira a seguinte variável de ambiente no arquivo .env:

```bash
IP=ip_do_seu_computador
```
## Back-end
No diretório do back-end, crie um arquivo .env

Insira as variáveis de ambiente conforme o exemplo abaixo:

```bash
DB_HOST=localhost        
DB_PORT=portadobanco            
DB_USER=root       
DB_PASS=senhadobanco  
DB_NAME=banco_de_dados_mind    

JWT_SECRET=hash_de_encriptação
PORT=3000
```

DB_HOST: Endereço do host do banco de dados.
DB_PORT: Porta onde o banco de dados está sendo executado.
DB_USER: Usuário do banco de dados.
DB_PASS: Senha do banco de dados.
DB_NAME: Nome do banco de dados a ser utilizado.
JWT_SECRET: Hash para a encriptação de tokens JWT.
PORT: Porta onde o servidor back-end será executado.
Executando o Projeto

## Front-end
Para iniciar o front-end, navegue até o diretório correspondente e execute o seguinte comando:

```bash
npm start
```

## Back-end
Para iniciar o back-end, navegue até o diretório correspondente e execute o seguinte comando:

```bash
npm start
```
Agora o seu projeto estará rodando com as devidas configurações.
