# Teste - Brain Agriculture

## 🚂 &nbsp;&nbsp; Introdução

O teste tem como objetivo acurar as habilidades do candidato em resolver alguns problemas relacionados à lógica de programação, regra de negócio e orientação à objetos.

## 🎸 &nbsp;&nbsp; Tecnologias usadas:

- #### Linguagem: TypeScript

- ExpressJS (Framework minimalista para NodeJS)
- TypeORM (ORM para lidar com banco de dados SQL)
- PostgreSQL (Banco de dados relacional)
- Docker (Execução da App e do BD em contêineres)

## 💾 &nbsp;&nbsp; Instalação

Para baixar as dependências do projeto apenas rode o comando:

    $ npm install

## 💿 &nbsp;&nbsp; Rodando o App

**Docker** : Para iniciar o app utilizando docker, apenas utilize o comando:

    $ docker-compose up -d

**Local** : Para iniciar o app localmente, seguir os passos:
  - Adicionar um banco de dados local PostgreSQL com os parametros definidos em ormconfig.json
  - Alterar no arquivo ormconfig.json o valor do atributo host para "localhost"
  - Executar o seguinte comando
  - Para iniciar o app utilizando docker, utilizar o comando:
    $ npm run start

## ❗️ &nbsp;&nbsp; Testes Unitários 

Para execução dos testes unitários, utilizar o comando: 

    $ npm run test

## 🔗 Rotas
Path                                | Método |  Descrição
------------------------------------ | ------  | -----
/api/produtores  |  GET   |  Retorna todos os registros de Produtores Rurais
/api/produtores/:id  |  GET   |  Retorna o registro do Produtor Rural a patir de sua ID
/api/produtores  |  POST   |  Inseri o registro de um Produtor Rural
/api/produtores/:id  |  PATCH   |  Altera dados de um Produtor Rural apatir de sua ID
/api/produtores/:id  |  DELETE   |  Exclui o registro de um Produtor Rural apatir de sua ID
/api/area/total  |  GET   |  Retorna a área total de todos os Produtores Rurais
/api/area/estado  |  GET   |  Retorna a área total somada por estado
/api/area/cultura  |  GET   |  Retorna a área total somada por cultura



## 📖 &nbsp;&nbsp; API

### GET /api/produtores
#### response.body:
```json
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "cpfCnpj": "49708042064",
            "nome": "Fulano da Silva",
            "nomeFazenda": "Fazenda Silva",
            "cidade": "Sao Jose dos Campos",
            "estado": "SP",
            "areaTotal": "120.234",
            "areaAgricultavel": "20.23",
            "areaVegetacao": "50.42",
            "culturasPlantadas": [
                "Feijao",
                "Arroz"
            ]
        },
        {
            "id": 2,
            "cpfCnpj": "30101790066",
            "nome": "Ciclano dos Santos",
            "nomeFazenda": "Fazenda Santos",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "areaTotal": "220.234",
            "areaAgricultavel": "24.23",
            "areaVegetacao": "110.42",
            "culturasPlantadas": [
                "Soja",
                "Arroz"
            ]
        }
    ]
}
```
### GET /api/produtores/:id
#### response.body:
```json
{
    "status": "success",
    "data": {
        "id": 1,
        "cpfCnpj": "49708042064",
        "nome": "Fulano da Silva",
        "nomeFazenda": "Fazenda Silva",
        "cidade": "Sao Jose dos Campos",
        "estado": "SP",
        "areaTotal": "120.234",
        "areaAgricultavel": "20.23",
        "areaVegetacao": "50.42",
        "culturasPlantadas": [
            "Feijao",
            "Arroz"
        ]
    }
}
```
### POST /api/produtores
#### request.body:
```json
{
    "cpfCnpj" : "49708042064",
    "nome": "Fulano da Silva",
    "nomeFazenda" : "Fazenda Silva",
    "cidade": "Sao Jose dos Campos",
    "estado": "SP",
    "areaTotal" : 120.234,
    "areaAgricultavel" : 20.23,
    "areaVegetacao" : 50.42,
    "culturasPlantadas" : ["Feijao","Arroz"]
}
```
#### response.body :
```json
{
    "status": "success",
    "data": {
        "cpfCnpj": "49708042064",
        "nome": "Fulano da Silva",
        "nomeFazenda": "Fazenda Silva",
        "cidade": "Sao Jose dos Campos",
        "estado": "SP",
        "areaTotal": 120.234,
        "areaAgricultavel": 20.23,
        "areaVegetacao": 50.42,
        "culturasPlantadas": [
            "Feijao",
            "Arroz"
        ],
        "id": 1
    }
}
```
### PATCH /api/produtores/:id
#### request.body:
```json
{
    "nome": "Fulano da Silva",
    "nomeFazenda": "Fazenda Silva",
    "cidade": "Sao Paulo",
    "estado": "SP",
    "areaTotal": "120.234",
    "areaAgricultavel": "40.32",
    "areaVegetacao": "50.42",
    "culturasPlantadas": [
        "Feijao",
        "Arroz"
    ]
}
```
#### request.body:
```json
{
    "status": "success",
    "data": {
        "id": 1,
        "cpfCnpj": "49708042064",
        "nome": "Fulano da Silva",
        "nomeFazenda": "Fazenda Silva",
        "cidade": "Sao Paulo",
        "estado": "SP",
        "areaTotal": "120.234",
        "areaAgricultavel": "40.32",
        "areaVegetacao": "50.42",
        "culturasPlantadas": [
            "Feijao",
            "Arroz"
        ]
    }
}
```
### GET /api/area/total
#### response.body:
```json
{
    "status": "success",
    "data": {
        "quantidadeRegistros": "2",
        "quantidadeAreaTotal": "340.468"
    }
}
```
### GET /api/area/estado
#### response.body:
```json
{
    "status": "success",
    "data": [
        {
            "estado": "SP",
            "somaareatotal": "120.234"
        },
        {
            "estado": "RJ",
            "somaareatotal": "220.234"
        }
    ]
}
```
### GET /api/area/cultura
#### response.body:
```json
{
    "status": "success",
    "data": [
        {
            "culturasplantadas": "Arroz",
            "somaareatotalporcultura": "340.468"
        },
        {
            "culturasplantadas": "Soja",
            "somaareatotalporcultura": "220.234"
        },
        {
            "culturasplantadas": "Feijao",
            "somaareatotalporcultura": "120.234"
        }
    ]
}
```

## 💻 &nbsp;&nbsp; Possiveis pontos de avanço

- Ajustes para subir a aplicação em AWS
- Desenvolvimento de mais arquivos de testes unitários
- Adicionar variáveis de ambiente para ambientes diferentes de desenvolvimento
- Adicionar uma segunda tabela no banco de dados do tipo Fazenda