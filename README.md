# Redux

Links úteis utilizados para este estudo:

- https://redux.js.org/basics/basic-tutorial

## Action

As actions são objetos que devem ter um type para indicar o tipo da ação que está sendo executada.

## Reducer

Os reducer são funções que devem ser puras, e que especificam como o estado da aplicação deve ser atualizado.
Basicamente, os reducers são onde os estados do Redux deve estar.
<br>

> <sub>Sempre deve ter um retorno default do estado caso a action não seja encontrada</sub><br>

> <sub><b>Não é recomendado:</b> > <br> - Realizar chamadas a API;
> <br> - Chamar funções não puras como `Date.now()` ou `Math.random()`;
> <br> - Mudar os seus argumentos.
> </sub><br>

## Store

A store é a loja da aplicação, e é um objeto que reúne a action e o reducer, para a criar a store é necessário a utilização da função `createStore` do Redux.

> <sub>Não é necessário ter mais de uma loja na aplicaçao!</sub>

## Data Flow

O fluxo de dados do Redux é baseado em <i>Fluxo de dados unidirecional estrito</i> que faz com que todos os dados da aplicação sejam tratados da mesma forma, o que torna a lógica da aplicação mais previsível!

# React Redux

Links úteis para estudo:

- https://redux.js.org/basics/usage-with-react

> :warning: A Aplicação de exemplo de TO-DO list criado na documentação do Redux, tem algumas diferenças do que é usado na do React Redux.

## Provider

Componente do React Redux que provê para o componente que é envolvido nele os estados do Redux.

> Recomendado envolvê-lo no componente `<App />`, fazendo com que todos os componentes criados futuramente tenha acesso ao estado do Redux.

## Connect

O connect é uma função do React Redux bastante performática e que permite com que um componente seja conectado à uma parte específica da arvore de estados do Redux.

## MapStateToProps

função que mapeia os estados de determinadas parte da arvores de estados do Redux para as propriedades do componente.

## MapDispatchToProps

Função que mapeia o método `dispatch` para as propriedades do componente, permitindo que ele dispare as actions para os reducers.

## Estrutura indicada pela comunidade do Redux

**_ Container _** - Onde toda a regra do componente deve estar. Tais como comunicação com o Redux para ler e setar novos estados.

**_ Components _** - Onde toda a parte visual da aplicação deve estar e onde a conexão com o Redux deve ser somente de leitura.

## Usabilidade do Redux com React

O Redux não é exclusivo de algum framework, na verdade ele pode ser usado com qualquer framerwork JavaScript.
