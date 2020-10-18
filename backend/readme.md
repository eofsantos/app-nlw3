## Aula 2 

- geralmente pra rodar um arquivo no node, no termial digitamos "node" e o nome do arquivo. Mas no caso estamos usando termos que o node não entende, assim como a extensão do arquivo, que é o .ts (ao invés do .js). Para isso é necessário 
    1. instalar o typescript como dependencia de desenvolvimento com o comando ```npm install typescript -D```
    2. criar o arquivo de configuração do typescript com comando ```npx tsc --init```
    3. instalar o pacote ts-node-dev com o comanto ```npm install ts-node-dev -D```
    4. no arquivo package.json adicionar um script
        ```
        ...
        "scripts": {
            "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
        }
        ...

        ```
    5. no terminal executar o comando ```npm run dev```

- importante lembrar que ao retornar uma resposta ao cliente, por estarmos trabalhando com uma API REST, devemos retornar o valor como um JSON

- usamos o insomnia para fazer o teste das requisições http

- os tipos de métodos http que mais usaremos serão: GET, PUT, POST e DELETE
- os tipos de parametros que podemos usar nas requisições são: 
    1. Query params: ../users?search=emmerson | request.query
    2. Route params: ../users/1 | request.params
    3. Body params: ../users | request.body

- usaremos o banco de dados sqlite
    ```npm i typeorm sqlite3```