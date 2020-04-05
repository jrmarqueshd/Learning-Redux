# Redux

## Action

As actions são objetos que devem ter um type para indicar o tipo da ação que está sendo executada.

## Reducer

Os reducer são funções que devem ser puras, e que especificam como o estado da deve ser atualizado.
Basicamente, é a regra de negócio do Redux.
<br>

> <sub>Sempre deve ter um retorno default do estado caso a action não seja encontrada</sub><br>

> <sub><b>Não é recomendado:</b>
> <br> - Realizar chamadas a API;
> <br> - Chamar funções não puras como `Date.now()` ou `Math.random()`;
> <br> - Mudar os seus argumentos.
> </sub><br>

## Store

A store é a loja da aplicação, e é um objeto que reúne a action e e o reducer.

> <sub>Não é necessário ter mais de uma loja na aplicaçao!</sub>

## Data Flow

O fluxo de dados do Redux é baseado em <i>Fluxo de dados unidirecional estrito</i> que faz com que todos os dados da aplicação sejam tratados da mesma forma, o que torna a lógica da aplicação mais previsível!
