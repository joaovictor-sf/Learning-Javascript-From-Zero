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
    - [Operador Ternário](#operador-ternário)
    - [Switch](#switch)
- [Casting](#casting)
- [Operadores Aritméticos](#operadores-aritméticos)
- [Funções](#funções)
    - [Flexibilidade de parametros](#flexibilidade-de-parametros)
    - [Funções Anônimas](#funções-anônimas)
    - [Funções de Callback](#funções-de-callback)
    - [Funções com parametros variaveis](#funções-com-parametros-variaveis)
- [String](#string)
    - [Propriedades e Métodos](#propriedades-e-métodos)
- [Math](#math)
- [Date](#date)
- [Eventos](#eventos)
    - [Eventos de Mouse](#eventos-de-mouse)
    - [Eventos de Teclado](#eventos-de-teclado)
    - [Eventos de Janela](#eventos-de-janela)
    - [Eventos de Formulário](#eventos-de-formulário)
- [DOM](#dom)
    - [Pegar Elementos](#pegar-elementos)
    - [Modificar Elementos](#modificar-elementos)
    - [Adicionar e Remover Elementos](#adicionar-e-remover-elementos)
- [Arrays](#arrays)
    - [Métodos de Array](#métodos-de-array)
    - [Ordenação de Números](#ordenação-de-números)
    - [Ordenação com caracteres maiúsculos e minúsculos](#ordenação-com-caracteres-maiúsculos-e-minúsculos)
    - [Arrays Multidimensionais](#arrays-multidimensionais)
- [Loops](#loops)
    - [While](#while)
    - [Do/While](#dowhile)
    - [For](#for)
    - [For/In](#forin)
    - [For/Of](#forof)
    - [forEach](#foreach)

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

**write()**: É aceitavel usar o `document.write()` para testes, mas não é recomendado para uso em produção, pois ele substitui todo o conteúdo do documento.

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

### Operador Ternário
O operador ternário é uma forma abreviada de escrever uma instrução `if/else`.

```javascript
var idade = 18;
var status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(status); // Maior de idade
```

### Switch
O `switch` é uma estrutura de controle que permite executar um bloco de código com base em uma expressão.

```javascript
var dia = 1;
var diaDaSemana;

switch (dia) {
  case 1:
    diaDaSemana = 'Domingo';
    break;
  case 2:
    diaDaSemana = 'Segunda-feira';
    break;
  case 3:
    diaDaSemana = 'Terça-feira';
    break;
  case 4:
    diaDaSemana = 'Quarta-feira';
    break;
  case 5:
    diaDaSemana = 'Quinta-feira';
    break;
  case 6:
    diaDaSemana = 'Sexta-feira';
    break;
  case 7:
    diaDaSemana = 'Sábado';
    break;
  default:
    diaDaSemana = 'Dia inválido';
    break;
}

console.log(diaDaSemana); // Domingo
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

## Operadores Aritméticos
Os operadores aritméticos são utilizados para realizar operações matemáticas.

- `+`: Adição
- `-`: Subtração
- `*`: Multiplicação
- `/`: Divisão
- `%`: Módulo (resto da divisão)
- `++`: Incremento
- `--`: Decremento

```javascript
var x = 10;
var y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
console.log(x++); // 10
console.log(x); // 11
console.log(y--); // 5
console.log(y); // 4
```

Você tambem pode realizar os calculos de forma mais simples:
```javascript
var x = 10;
var y = 5;

x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
```

## Funções
Uma função é um bloco de código que pode ser executado repetidamente. Ela pode receber parâmetros e retornar um valor.

```javascript
function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}

console.log(saudacao('Fulano')); // Olá, Fulano!
```

### Flexibilidade de parametros
Uma função pode receber qualquer quantidade de parametros, sem resultar em erro.

```javascript
function calcularArea(largura, comprimento) {
    var area = largura * comprimento;
    return area;
}

//Se um dos valores não for passado, ele será considerado como undefined
var resultado = calcularArea(10);
console.log(resultado);//NaN - Not a Number

var resultado2 = calcularArea(10, 5, 2, 3, 4);
console.log(resultado2);//50 - O JS ignora os parametros a mais

var resultado3 = calcularArea();
console.log(resultado3);//NaN - Not a Number
```

### Funções Anônimas
Uma função anônima é uma função sem nome. Ela pode ser atribuída a uma variável ou passada como argumento para outra função.

```javascript
var saudacao = function(nome) {
  return 'Olá, ' + nome + '!';
};

console.log(saudacao('Fulano')); // Olá, Fulano!
```

### Funções de Callback
Uma função de callback é uma função passada como argumento para outra função. Ela é executada após a conclusão de uma operação assíncrona.

```javascript
function algo(acao, sucesso, erro) {
    if (acao) {
        sucesso();
    } else {
        erro();
    }
}

var sucesso = function() {
    console.log('Ação realizada com sucesso!');
}

var erro = function() {
    console.log('Erro ao realizar a ação!');
}

algo(true, sucesso, erro);
```

### Funções com parametros variaveis
É possivel passar uma quantidade variavel de parametros para uma função.

```javascript
function somar() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(somar(1, 2, 3, 4, 5)); // 15
```

O arguments é um objeto semelhante a um array que contém os valores dos argumentos passados para a função.

## String
Uma string é uma sequência de caracteres. Em javascript, as strings são representadas por aspas simples ou duplas.

```javascript
var nome = 'Fulano';
var sobrenome = "de Tal";
```

### Propriedades e Métodos
As strings possuem várias propriedades e métodos que nos permitem manipular e formatar o texto.
    
```javascript
    var texto = 'Olá, Mundo!';

    console.log(texto.length); // 11
    console.log(texto.toUpperCase()); // OLÁ, MUNDO!
    console.log(texto.toLowerCase()); // olá, mundo!
    console.log(texto.charAt(4)); // ,
    console.log(texto.indexOf('Mundo')); // 5
    console.log(texto.slice(5, 10)); // Mundo
    console.log(texto.replace('Mundo', 'JavaScript')); // Olá, JavaScript!
    console.log(texto.split(', ')); // ['Olá', 'Mundo!']
```

## Math
O objeto `Math` nos fornece métodos e constantes para realizar operações matemáticas.

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4 - Arredonda para baixo
console.log(Math.ceil(4.3)); // 5 - Arredonda para cima
console.log(Math.min(10, 5, 8)); // 5
console.log(Math.max(10, 5, 8)); // 10
console.log(Math.random()); // Número aleatório entre 0 e 1
```

## Date
O objeto `Date` nos permite trabalhar com datas e horas em javascript.

```javascript
var data = new Date();
console.log(data); // Data e hora atuais

var data = new Date('2021-01-01');
console.log(data); // Data específica

var data = new Date(2021, 0, 1);
console.log(data); // Data específica

var data = new Date();

var dia = data.getDate();
var mes = data.getMonth() + 1;
var ano = data.getFullYear();

console.log(dia + '/' + mes + '/' + ano); // Data formatada
```

## Eventos
Os eventos são ações que ocorrem em um documento HTML e que podem ser manipulados com javascript.

```html
<button onclick="alert('Olá Mundo!')">Clique aqui</button>
```

Os eventos podem ser adicionados diretamente no HTML ou através do javascript.

```javascript
var botao = document.getElementById('botao');

botao.addEventListener('click', function() {
  alert('Olá Mundo!');
});
```
### Eventos de Mouse
- `click`: Ocorre quando um elemento é clicado.
- `mouseover`: Ocorre quando o ponteiro do mouse é movido sobre um elemento.
- `mouseout`: Ocorre quando o ponteiro do mouse é movido para fora de um elemento.
- `mousedown`: Ocorre quando um botão do mouse é pressionado sobre um elemento.
- `mouseup`: Ocorre quando um botão do mouse é liberado sobre um elemento.

### Eventos de Teclado
- `keydown`: Ocorre quando uma tecla é pressionada.
- `keyup`: Ocorre quando uma tecla é liberada.
- `keypress`: Ocorre quando uma tecla é pressionada e liberada.

### Eventos de Janela
- `load`: Ocorre quando um documento é carregado.
- `resize`: Ocorre quando a janela do navegador é redimensionada.
- `scroll`: Ocorre quando a janela do navegador é rolada.
- `unload`: Ocorre quando um documento é descarregado.

### Eventos de Formulário
- `submit`: Ocorre quando um formulário é enviado.
- `change`: Ocorre quando o valor de um elemento é alterado.
- `focus`: Ocorre quando um elemento recebe o foco.
- `blur`: Ocorre quando um elemento perde o foco.

## DOM
O DOM (Document Object Model) é uma interface de programação que representa a estrutura de um documento HTML como uma árvore de objetos.

```html
  <h1 id="titulo">Olá, Mundo!</h1>
  <p class="paragrafo">Este é um parágrafo.</p>
  <button onclick="clicar()">Clique aqui</button>

  <script>
    function clicar() {
      var titulo = document.getElementById('titulo');
      titulo.innerHTML = 'Olá, JavaScript!';
      
      var paragrafo = document.getElementsByClassName('paragrafo');
      paragrafo[0].innerHTML = 'Este é um novo parágrafo.';
    }
  </script>
```

O DOM nos permite acessar e manipular elementos HTML de forma dinâmica. Podemos adicionar, remover e modificar elementos, atributos e estilos.

**Pegar Elementos**:
- `getElementById()`: Retorna o elemento com o ID especificado.
- `getElementsByClassName()`: Retorna uma coleção de elementos com a classe especificada.
- `getElementsByTagName()`: Retorna uma coleção de elementos com a tag especificada.
- `querySelector()`: Retorna o primeiro elemento que corresponde ao seletor especificado.
- `querySelectorAll()`: Retorna todos os elementos que correspondem ao seletor especificado.
- `getElementsByName()`: Retorna uma coleção de elementos com o atributo `name` especificado.

**Modificar Elementos:**
- `innerHTML`: Define ou retorna o conteúdo HTML de um elemento.
- `innerText`: Define ou retorna o texto de um elemento.
- `setAttribute()`: Define o valor de um atributo de um elemento.
- `removeAttribute()`: Remove um atributo de um elemento.
- `style`: Define ou retorna o estilo de um elemento.

**Adicionar e Remover Elementos:**
- `createElement()`: Cria um novo elemento.
- `appendChild()`: Adiciona um novo elemento como filho de outro elemento.
- `removeChild()`: Remove um elemento filho de outro elemento.

## Arrays
Um array é uma coleção de elementos que podem ser acessados por um índice.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Morango
```

Você tambem pode criar arrays vazios:
```javascript
var frutas = [];
```

### Métodos de Array
Os arrays possuem vários métodos que nos permitem manipular e percorrer os elementos.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];

console.log(frutas.length); // Mostra a quantidades de elementos - 3
console.log(frutas.join(', ')); // Devolve uma string com os elementos separados pelo o que estiver no paragrafo - Maçã, Banana, Morango
console.log(frutas.push('Laranja')); // Adiciona um elemento no final
console.log(frutas.pop()); // Remove um elemento do final
console.log(frutas.shift()); // Remove um elemento do início
console.log(frutas.unshift('Uva')); // Adiciona um elemento no início
console.log(frutas.slice(1, 2)); // Retorna um subarray
console.log(frutas.splice(1, 1, 'Pera')); // Remove e/ou adiciona elementos
console.log(frutas.reverse()); // Inverte a ordem dos elementos
console.log(frutas.sort()); // Ordena os elementos
console.log(frutas.indexOf('Banana')); // Retorna o índice de um elemento
console.log(frutas.includes('Banana')); // Retorna true se um elemento existe
```

**Ordenação de Números**:
Tambem funcionará se os numeros estiverem em string.
```javascript
var numeros = [10, 5, 8, 2, 3];

console.log(numeros.sort(function(a, b) {
  return a - b;
})); // [2, 3, 5, 8, 10]
```

**Ordenação com caracteres maiúsculos e minúsculos**:
O método 'sort()' ordena os elementos de um array com base na ordem de classificação Unicode. Para ordenar os elementos de um array de strings de forma sensível a maiúsculas e minúsculas, podemos usar a função 'localeCompare()'.
```javascript
var frutas = ['Maçã', 'Banana', 'abacaxi'];

console.log(frutas.sort(function(a, b) {
  return a.localeCompare(b);
})); // ['abacaxi', 'Banana', 'Maçã']
```

### Arrays Multidimensionais
Um array multidimensional é um array que contém outros arrays.

```javascript
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][1]); // 5
console.log(matriz[2][2]); // 9
```

## Loops
Os loops são utilizados para repetir um bloco de código várias vezes.

**Informações importantes:**
- Loops devem ter uma condição de parada para evitar loops infinitos.
- É possível interromper um loop com a palavra-chave `break`.
- É possível pular uma iteração de um loop com a palavra-chave `continue`.

### While
O loop `while` executa um bloco de código enquanto a condição especificada for verdadeira.

```javascript
var i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

### Do/While
O loop `do/while` executa um bloco de código uma vez e depois repete o bloco enquanto a condição especificada for verdadeira.

```javascript
var i = 5;

do {
  console.log(i);//5
  i++;
} while (i < 5);
```

Isso é útil quando queremos que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa.

### For
O loop `for` executa um bloco de código várias vezes, com base em uma condição de inicialização, uma condição de parada e um incremento.

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

A estrutura do loop `for` é composta por três partes:
1. **Inicialização**: Inicializa a variável de controle do loop.
2. **Condição de Parada**: Define a condição para continuar ou interromper o loop.
3. **Incremento**: Incrementa ou decrementa a variável de controle do loop.

### For/In
O loop `for/in` é utilizado para percorrer as propriedades de um objeto.

```javascript
var pessoa = {nome: 'Fulano', idade: 30};

for (var propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);//nome: Fulano, idade: 30
}
```

### For/Of
O loop `for/of` é utilizado para percorrer os elementos de um array.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];

for (var fruta of frutas) {
  console.log(fruta);//Maçã, Banana, Morango
}
```

### forEach
O método `forEach` é utilizado para percorrer os elementos de um array.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];

frutas.forEach(function(fruta) {
  console.log(fruta);//Maçã, Banana, Morango
});

// Outra forma de fazer
frutas.forEach(function(valor, indice, array) {
    console.log(valor + '-' + indice + '-' + array);
    //Maçã-0-Maçã,Banana,Morango
    //Banana-1-Maçã,Banana,Morango
    //Morango-2-Maçã,Banana,Morango
});

```