# Aprendendo JavaScript

Este repositório contém meus estudos sobre JavaScript, uma linguagem de programação amplamente utilizada para desenvolvimento web.

## Introdução

JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela é amplamente utilizada para adicionar interatividade e dinamismo a páginas web.

## Contribuição

Sinta-se à vontade para contribuir com este repositório, adicionando exemplos de código, correções ou sugestões de estudo.

## Sumário

- [Adicionando javascript a um documento HTML](#adicionando-javascript-a-um-documento-html)
- [Comentários](#comentários)
- [Variáveis](#variáveis)
    - [Tipos de Dados](#tipos-de-dados)
- [Alertas](#alertas)
- [Fazer o javascript interagir com o HTML](#fazer-o-javascript-interagir-com-o-html)
- [Console](#console)
- [Concatenação](#concatenação)
- [prompt](#prompt)
- [If/else](#ifelse)
    - [Operadores de Comparação](#operadores-de-comparação)
    - [Operadores Lógicos](#operadores-lógicos)

## Adicionando javascript a um documento HTML
Existe três formas de adicionar javascript a um documento HTML:
1. **Inline**: Adicionando o código javascript diretamente na tag HTML.
2. **Internal**: Adicionando o código javascript dentro da tag `<script>` no documento HTML.
3. **External**: Adicionando o código javascript em um arquivo externo ao documento HTML.

#### Exemplo de código inline:
```html
<button onclick="alert('Olá Mundo!')">Clique aqui</button>
```

#### Exemplo de código internal:
```html
<body>
<script>
alert('Olá Mundo!');
</script>
</body>
```

#### Exemplo de código external:
```html
<body>
<script src="script.js"></script>
</body>
```
É importante ressaltar que a tag `<script>` deve ser adicionada no final do corpo do documento HTML para garantir que o código javascript seja executado após o carregamento do conteúdo da página.

## Comentários
Para adicionar comentários em javascript, utilizamos `//` para comentários de uma linha e `/* */` para comentários de múltiplas linhas. Semelhante ao Java e CSS.

#### Exemplos de comentários:
```javascript
// Este é um comentário de uma linha

/*
Este é um comentário
de múltiplas linhas
*/
```

## Variáveis
Em javascript, utilizamos a palavra-chave `var` para declarar variáveis. As variáveis podem armazenar diferentes tipos de dados, como números, strings e booleanos.

#### Exemplo de declaração de variáveis:
```javascript
var nome = 'Fulano';
var idade = 30;
var isEstudante = true;
```

### Tipos de Dados
Em javascript, temos os seguintes tipos de dados:
1. **String**: Sequência de caracteres.
2. **Number**: Números inteiros ou decimais.
3. **Boolean**: Valor lógico verdadeiro ou falso.
4. **Array**: Coleção de elementos.
5. **Object**: Coleção de pares chave-valor.
6. **Undefined**: Valor atribuído a uma variável não inicializada.
7. **Null**: Valor nulo.

#### Exemplos de tipos de dados:
```javascript
var nome = 'Fulano'; // String
var idade = 30; // Number
var isEstudante = true; // Boolean
var frutas = ['Maçã', 'Banana', 'Morango']; // Array
var pessoa = {nome: 'Fulano', idade: 30}; // Object
var vazio = undefined; // Undefined
var nulo = null; // Null
```
**Regras**:
- O nome de uma variável deve começar com uma letra, `$` ou `_`.
- O nome de uma variável não pode começar com um número.
- O nome de uma variável não pode conter espaços.
- O nome de uma variável é case-sensitive.

**Null vs Undefined**:
- `null` é um valor atribuído pelo programador para indicar a ausência de valor.
- `undefined` é um valor atribuído automaticamente pelo JavaScript para indicar que uma variável não foi inicializada.

## Alertas
Para exibir alertas em javascript, utilizamos a função `alert()`.

Um alerta é uma caixa de diálogo que exibe uma mensagem e um botão "OK". Ele é útil para exibir informações importantes para o usuário ou para ajudar com o processo de depuração.

#### Exemplo de alerta:
```javascript
alert('Olá Mundo!');
```

## Fazer o javascript interagir com o HTML
Para fazer o javascript interagir com o HTML, podemos utilizar o método `document`.

O `document` é um objeto que representa o documento HTML. Ele possui vários métodos e propriedades que nos permitem acessar e modificar elementos HTML.

É possivel colocar tags dentro dele.

#### Exemplo de código:
```html
<p id="paragrafo">Este é um parágrafo.</p>

<script>
document.getElementById('paragrafo').innerHTML = 'Este é um novo parágrafo.';
</script>
```
**Alguns Metodos**:
- `getElementById()`: Retorna o elemento HTML com o ID especificado.
- `getElementsByClassName()`: Retorna uma coleção de elementos HTML com a classe especificada.
- `getElementsByTagName()`: Retorna uma coleção de elementos HTML com a tag especificada.
- `querySelector()`: Retorna o primeiro elemento HTML que corresponde ao seletor especificado.
- `querySelectorAll()`: Retorna todos os elementos HTML que correspondem ao seletor especificado.
- `createElement()`: Cria um novo elemento HTML.
- `appendChild()`: Adiciona um novo elemento HTML como filho de outro elemento.
- `removeChild()`: Remove um elemento HTML filho de outro elemento.
- `write()`: Escreve conteúdo HTML no documento.

## Console
O console é uma ferramenta de desenvolvimento que nos permite visualizar mensagens de depuração no navegador.

Para exibir mensagens no console, utilizamos o método `console.log()`.
```javascript
console.log('Olá Mundo!');
```
Isso é útil para depurar o código javascript e verificar o valor das variáveis durante a execução do programa.

É possivel ver o console do navegador pressionando `F12` e clicando na aba `Console`.

## Concatenação
Para concatenar strings em javascript, utilizamos o operador `+`.
```javascript
var nome = 'Fulano';
var sobrenome = 'de Tal';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto); // Fulano de Tal
```

## prompt
Gera uma caixa de diálogo que solicita ao usuário um valor de entrada.
```javascript
var nome = prompt('Qual é o seu nome?');
console.log('Olá, ' + nome + '!');
```

Esse valor sempre será uma string.

## If/else
O `if` é uma estrutura de controle que permite executar um bloco de código se uma condição for verdadeira. O `else` é um bloco de código que é executado se a condição do `if` for falsa.

```javascript
var idade = 18;

if (idade >= 18) {
  console.log('Você é maior de idade.');
} else if (idade <= 0){
    console.log('Você não nasceu ainda.');
} else {
  console.log('Você é menor de idade.');
}
```

### Operadores de Comparação
Os operadores de comparação são utilizados para comparar dois valores e retornar um valor lógico (verdadeiro ou falso).

- `==`: Igual a
- `!=`: Diferente de
- `===`: Igual a (comparação estrita[Se são iguais e do mesmo tipo])
- `!==`: Diferente de (comparação estrita)
- `>`: Maior que
- `<`: Menor que
- `>=`: Maior ou igual a
- `<=`: Menor ou igual a

## Operadores Lógicos
Os operadores lógicos são utilizados para combinar duas ou mais expressões lógicas e retornar um valor lógico.

- `&&`: E lógico (AND)
- `||`: Ou lógico (OR)
- `!`: Negação lógica (NOT)

```javascript
var idade = 18;
var isEstudante = true;

if (idade >= 18 && isEstudante) {
  console.log('Você é maior de idade e estudante.');
} else {
  console.log('Você é menor de idade ou não é estudante.');
}
```

## Operador Ternário
O operador ternário é uma forma abreviada de escrever uma instrução `if/else`.

```javascript
var idade = 18;
var status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(status); // Maior de idade
```

## Casting
O casting é a conversão de um tipo de dado para outro.

- `Number()`: Converte um valor para número.
- `String()`: Converte um valor para string.
- `Boolean()`: Converte um valor para boolean.

```javascript
var numero = '10';
console.log(Number(numero) + 5); // 15
```