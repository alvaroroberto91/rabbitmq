# RabbitMQ
> Módulos publisher e consumer utilizando RabbitMQ

### Como executar

```sh
1 - Execute o módulo rabbitmq-publisher com o comando "npm run dev"
2 - Execute o módulo rabbitmq-consumer com o comando "npm run dev"
3 - Envie um payload para a rota: "http://localhost:3000/save-data
```

Exemplo de Payload:
```json
[
    {
        "name": "TestName",
        "email": "test@test.com"
    }
]
```

```
Para alterar o model do banco de dados vá até o módulo rabbitmq-consumer e altere o arquivo:
src/model.js
```

### A aplicação aceita o envio de múltiplos objetos dentro do payload
Exemplo de playload com múltiplos objetos

```json
[
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    },
    {
        "name": "NameTest",
        "email": "test@test.com"
    }
]
```
