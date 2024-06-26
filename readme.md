# Aprendendo JavaScript

Este repositório contém meus estudos sobre JavaScript, uma linguagem de programação amplamente utilizada para desenvolvimento web.

## Introdução

JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ela é amplamente utilizada para adicionar interatividade e dinamismo a páginas web.

## Contribuição

Sinta-se à vontade para contribuir com este repositório, adicionando exemplos de código, correções ou sugestões de estudo.

## Sumário

1. [Adicionando javascript a um documento HTML](#adicionando-javascript-a-um-documento-html)
2. [Comentários](#comentários)
3. [Variáveis](#variáveis)
    - [Tipos de Dados](#tipos-de-dados)
4. [Alertas](#alertas)
5. [Conversão de Tipos](#conversão-de-tipos)
6. [Fazer o javascript interagir com o HTML](#fazer-o-javascript-interagir-com-o-html)
7. [Console](#console)
8. [Concatenação](#concatenação)
9. [prompt](#prompt)
10. [If/else](#ifelse)
    - [Operadores de Comparação](#operadores-de-comparação)
    - [Operadores Lógicos](#operadores-lógicos)
    - [Operador Ternário](#operador-ternário)
    - [Switch](#switch)
11. [Casting](#casting)
12. [Operadores Aritméticos](#operadores-aritméticos)
13. [Funções](#funções)
    - [Flexibilidade de parametros](#flexibilidade-de-parametros)
    - [Funções Anônimas](#funções-anônimas)
    - [Funções de Callback](#funções-de-callback)
    - [Funções com parametros variaveis](#funções-com-parametros-variaveis)
    - [Arrow Functions](#arrow-functions)
14. [String](#string)
    - [Propriedades e Métodos](#propriedades-e-métodos)
    - [Template Strings](#template-strings)
15. [Math](#math)
16. [Date](#date)
17. [Eventos](#eventos)
    - [Eventos de Mouse](#eventos-de-mouse)
    - [Eventos de Teclado](#eventos-de-teclado)
    - [Eventos de Janela](#eventos-de-janela)
    - [Eventos de Formulário](#eventos-de-formulário)
18. [DOM](#dom)
    - [Pegar Elementos](#pegar-elementos)
    - [Modificar Elementos](#modificar-elementos)
    - [Adicionar e Remover Elementos](#adicionar-e-remover-elementos)
19. [Arrays](#arrays)
    - [Métodos de Array](#métodos-de-array)
    - [Ordenação de Números](#ordenação-de-números)
    - [Ordenação com caracteres maiúsculos e minúsculos](#ordenação-com-caracteres-maiúsculos-e-minúsculos)
    - [Arrays Multidimensionais](#arrays-multidimensionais)
20. [Loops](#loops)
    - [While](#while)
    - [Do/While](#dowhile)
    - [For](#for)
    - [For/In](#forin)
    - [For/Of](#forof)
    - [forEach](#foreach)
21. [Tratamento de Erros](#tratamento-de-erros)
22. [BOM (Browser Object Model)](#bom-browser-object-model)
    - [Window](#window)
    - [Screen](#screen)
    - [Location](#location)
    - [Outros métodos](#outros-métodos)
23. [Objeto Literal](#objeto)
    - [Adicionar Propriedades e Métodos](#adicionar-propriedades-e-métodos)
    - [Modificar Propriedades e Métodos](#modificar-propriedades-e-métodos)
    - [Objetos Aninhados](#objetos-aninhados)
    - [Objetos Arrays](#objetos-arrays)
    - [Propriedades e Métodos](#propriedades-e-métodos)
    - [Construtor de Objetos](#construtor-de-objetos)
    - [Protótipo](#protótipo)
24. [JSON](#json)
    - [Métodos](#métodos)
25. [Intervalos e Temporizadores](#intervalos-e-temporizadores)
    - [setInterval()](#setinterval)
    - [clearInterval()](#clearinterval)
    - [setTimeout()](#settimeout)
    - [clearTimeout()](#cleartimeout)
26. [Programação Orientada a Objetos](#programação-orientada-a-objetos)
    - [Classes](#classes)
    - [Herança](#herança)
    - [Métodos Estáticos](#métodos-estáticos)
    - [Super](#super)
    - [Polimorfismo](#polimorfismo)
    - [Encapsulamento](#encapsulamento)
    - [Classes ou Objetos Literais](#classes-ou-objetos-literais)
    - [Prototype](#prototype)
27. [Spread/Rest](#spreadrest)
28. [Destructuring](#destructuring)


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
Uma variável é um contêiner para armazenar dados. Em javascript, as variáveis são declaradas utilizando as palavras-chave `var`, `let` ou `const`.

- `var`: Declara uma variável global ou local.
- `let`: Declara uma variável local.
- `const`: Declara uma constante (um valor que não pode ser alterado).

Uma variável global pode ser acessada de qualquer lugar do código, enquanto uma variável local só pode ser acessada dentro de um bloco de código específico.

Hoje em dia, é recomendado utilizar `let` e `const` em vez de `var`, pois eles possuem um escopo de bloco mais restrito.

#### Exemplo de declaração de variáveis:
```javascript
var nome = 'Fulano';
let idade = 30;
const isEstudante = true;
```

Obs: Uma variável não pode ser nomeada com uma palavra reservada, como `var`, `let`, `const`, `function`, etc.

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
let nome = 'Fulano'; // String
let idade = 30; // Number
let isEstudante = true; // Boolean
let frutas = ['Maçã', 'Banana', 'Morango']; // Array
let pessoa = {nome: 'Fulano', idade: 30}; // Object
let valor; // Undefined
let nulo = null; // Null
```
**Regras**:
- O nome de uma variável deve começar com uma letra, `$` ou `_`.
- O nome de uma variável não pode começar com um número.
- O nome de uma variável não pode conter espaços.
- O nome de uma variável é case-sensitive.

**Null vs Undefined**:
- `null` é um valor atribuído pelo programador para indicar a ausência de valor.
- `undefined` é um valor atribuído automaticamente pelo JavaScript para indicar que uma variável não foi inicializada.

## Conversão de Tipos
Em javascript, é possível converter um tipo de dado em outro tipo de dado.

- `Number()`: Converte um valor para número.
- `String()`: Converte um valor para string.
- `Boolean()`: Converte um valor para boolean.
- `parseInt()`: Converte um valor para inteiro.
- `parseFloat()`: Converte um valor para ponto flutuante.
- `toString()`: Converte um valor para string.

```javascript
let numero = '10';
console.log(Number(numero) + 5); // 15
```

É possivel conferir o tipo de uma variável utilizando o método `typeof`.

```javascript
let nome = 'Fulano';
let idade = 30;
let isEstudante = true;

console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof isEstudante); // boolean
```


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

**Shortcuts for vsc**:
- `log` -> `console.log()`
- `clg` -> `console.log()`

**Tipos de Console**
- `console.log()`: Exibe uma mensagem no console.
- `console.error()`: Exibe uma mensagem de erro no console.
- `console.warn()`: Exibe uma mensagem de aviso no console.
- `console.info()`: Exibe uma mensagem de informação no console.
- `console.table()`: Exibe uma tabela no console.
- `console.time()`: Inicia um temporizador no console.
- `console.timeEnd()`: Para um temporizador no console.
- `console.clear()`: Limpa o console.

**Outros Métodos**
```javascript
    console.log('Log');
    console.info('Info');
    console.warn('Warn');
    console.error('Error');
    console.assert(1 === 1, 'Mensagem de erro');
    //console.clear();//Limpa o console
    console.group('Grupo 1');
    console.log('Dentro do grupo 1');
    console.group('Grupo 2');
    console.log('Dentro do grupo 2');
    console.groupEnd('Grupo 2');
    console.groupEnd('Grupo 1');
    console.table(['Item 1', 'Item 2', 'Item 3']);//Exibe em forma de tabela
    console.count('Contador');//Conta quantas vezes foi chamado
    console.count('Contador');
    console.count('Contador');
    console.countReset('Contador');//Reseta o contador
    console.count('Contador');
    console.time('Timer');
    console.timeLog('Timer');
    console.timeEnd('Timer');
    console.trace('Trace');//Mostra a pilha de chamadas
    console.table([{nome: 'Lucas', idade: 23}, {nome: 'João', idade: 25}]);
```

![No Console](imagesForReadme/console_1.PNG)

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

function saudacao2(nome) {
  return 'Olá, ${nome}!';
}

console.log(saudacao('Fulano')); // Olá, Fulano!
console.log(saudacao2('Fulano')); // Olá, Fulano!
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

### Arrow Functions
As arrow functions são uma forma mais curta de escrever funções em javascript.

```javascript
var saudacao = (nome) => {
  return 'Olá, ' + nome + '!';
};

console.log(saudacao('Fulano')); // Olá, Fulano!
```

Você pode omitir as chaves e a palavra-chave `return` se a função tiver apenas uma linha.

```javascript
var saudacao = (nome) => 'Olá, ' + nome + '!';
```

Você pode omitir os parênteses se a função tiver apenas um parâmetro.

```javascript
var saudacao = nome => 'Olá, ' + nome + '!';
```

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
    console.log(texto.slice(5, 10)); // slice(posição inicial, posição final) -> Mundo
    console.log(texto.replace('Mundo', 'JavaScript')); // Olá, JavaScript!
    console.log(texto.split(', ')); // ['Olá', 'Mundo!']
    console.log(texto.split('').join('-'));//O-l-á-,- -M-u-n-d-o-!
    console.log(texto.substr(5, 5)); // substr(posição inicial, quantidade de caracteres) -> Mundo
    console.log(texto.trim()); // Remove espaços em branco no início e no final
    console.log(texto.startsWith('Olá')); // true
    console.log(texto.endsWith('!')); // true
    console.log(texto.includes('Mundo')); // true
```

### Template Strings
As template strings são strings que permitem a interpolação de variáveis e a quebra de linha. Elas tambem permitem o uso de expressões e funções.

```javascript
var nome = 'Fulano';
var idade = 30;

var texto = `Olá, ${nome}!
Você tem ${idade} anos.`;

console.log(texto);
// Olá, Fulano!
// Você tem 30 anos.
```

Template strings são delimitadas por crases(`) em vez de aspas simples ou duplas.

É possivel ultilizar usar ${} em uma string normal, mas não é possivel usar quebra de linha.

```javascript
var nome = 'Fulano';
var idade = 30;

//Para quebrar a linha, é necessario usar \n
var texto = 'Olá, ' + nome + '!\n' +
'Você tem ' + idade + ' anos.';
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

var data = new Date();//Data e hora atuais

var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

console.log(dia + '/' + mes + '/' + ano);// Data formatada

//Date(Ano, Mês, Dia, Hora, Minuto, Segundo, Milisegundo)
const data2 = new Date(2021, 0, 1, 12, 30, 0, 0);
console.log(data2);//Fri Jan 01 2021 12:30:00 GMT-0300 (Horário Padrão de Brasília)
```

**Métodos alem dos get e set**:
- 'toDateString()': Retorna a data em formato de string.
- 'toTimeString()': Retorna a hora em formato de string.
- 'toLocaleDateString()': Retorna a data em formato de string de acordo com a localização.
- 'toUTCString()': Retorna a data e hora em formato de string UTC.
- 'toISOString()': Retorna a data e hora em formato de string ISO.
- 'toLocateString()': Retorna a data e hora em formato de string de acordo com a localização.

```javascript
var data = new Date(2021, 0, 1, 12, 30, 0, 0);
console.log(data.toDateString());// Fri Jan 01 2021
console.log(data.toTimeString());// 12:30:00 GMT-0300 (Horário Padrão de Brasília)
console.log(data.toLocaleDateString());// 1/1/2021
console.log(data.toUTCString());// Fri, 01 Jan 2021 15:30:00 GMT
console.log(data.toISOString());// 2021-01-01T15:30:00.000Z
console.log(data.toLocaleString());// 1/1/2021, 12:30:00
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
let frutas2 = ['Maçã', 'Banana', 'Morango'];

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
console.log(frutas.concat(frutas2)); // Concatena dois arrays
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

## Tratamento de Erros
O tratamento de erros é utilizado para lidar com exceções e evitar que o programa pare de funcionar.

```javascript
try {
  // Código que pode gerar um erro
  throw 'Erro';
} catch (erro) {
  // Código que trata o erro
  console.log(erro);//'Erro'
} finally {
  // Código que é executado sempre
  console.log('Fim do programa');
}
```

O bloco `try` é utilizado para envolver o código que pode gerar um erro. O bloco `catch` é utilizado para tratar o erro. O bloco `finally` é utilizado para executar um código após o tratamento do erro.

## BOM (Browser Object Model)
O BOM (Browser Object Model) é uma interface de programação que representa o navegador como um objeto.

```javascript
console.log(window.innerWidth); // Largura da janela do navegador
console.log(window.innerHeight); // Altura da janela do navegador
console.log(window.location.href); // URL da página
console.log(window.navigator.userAgent); // Informações do navegador
```

O BOM nos permite acessar e manipular várias propriedades e métodos do navegador, como a janela, a localização e o histórico de navegação.

Para mais informações, você pode acessar o [W3Schools](https://www.w3schools.com/js/js_window.asp).

### Window
O objeto `window` representa a janela do navegador.

```javascript
window.alert('Olá Mundo!'); // Alerta
window.confirm('Você deseja continuar?'); // Confirmação
window.prompt('Qual é o seu nome?'); // Entrada
```

Você pode usar o `window` ou não, pois ele é o objeto global.

### Screen
O objeto `screen` representa a tela do dispositivo.

```javascript
console.log(screen.width); // Largura da tela
console.log(screen.height); // Altura da tela
console.log(screen.availWidth); // Largura disponível
console.log(screen.availHeight); // Altura disponível
```

### Location
O objeto `location` representa a URL da página.

```javascript
console.log(location.href); // URL da página
console.log(location.hostname); // Nome do host
console.log(location.pathname); // Caminho da página
console.log(location.protocol); // Protocolo da página
```

### Outros métodos
- console.log(window); Retorna o objeto window.
- console.log(window.innerHeight); Retorna a altura da janela do navegador.
- console.log(window.innerWidth); Retorna a largura da janela do navegador.
- console.log(window.location); Retorna o objeto location. O objeto location contém informações sobre a URL da página
- console.log(window.location.href); Retorna a URL da página.
- console.log(window.location.hostname); Retorna o nome do host da página.
- console.log(window.location.pathname); Retorna o caminho da página.
- console.log(window.location.protocol); Retorna o protocolo da página.
- console.log(window.location.search); Retorna a parte da URL que contém a query string.
- console.log(window.location.hash); Retorna a parte da URL que contém o hash.
- console.log(window.location.assign('https://www.google.com')); Redireciona para outra página.
- console.log(window.location.reload()); Recarrega a página.
- console.log(window.history); Retorna o objeto history. O objeto history contém o histórico de navegação do navegador.
- console.log(window.history.back()); Navega para a página anterior.
- console.log(window.history.forward()); Navega para a próxima página.
- console.log(window.history.go(2)); Navega para uma página específica.
- console.log(window.navigator); Retorna o objeto navigator. O objeto navigator contém informações sobre o navegador.
- console.log(window.navigator.appCodeName); Retorna o nome do código do navegador.
- console.log(window.navigator.appName); Retorna o nome do navegador.
- console.log(window.navigator.appVersion); Retorna a versão do navegador.
- console.log(window.navigator.cookieEnabled); Retorna true se os cookies estiverem habilitados.
- console.log(window.navigator.geolocation); Retorna o objeto geolocation. O objeto geolocation é usado para obter a localização do usuário.
- console.log(window.navigator.language); Retorna o idioma do navegador.
- console.log(window.navigator.onLine); Retorna true se o navegador estiver online.
- console.log(window.navigator.platform); Retorna a plataforma do navegador.
- console.log(window.navigator.product); Retorna o nome do produto do navegador.
- console.log(window.navigator.userAgent); Retorna o agente do usuário do navegador.
- console.log(window.navigator.vendor); Retorna o fornecedor do navegador.
- console.log(window.navigator.vendorSub); Retorna a sub-string do fornecedor do navegador.
- console.log(window.screen); Retorna o objeto screen. O objeto screen contém informações sobre a tela do usuário.
- console.log(window.screen.availHeight); Retorna a altura disponível da tela.
- console.log(window.screen.availWidth); Retorna a largura disponível da tela.
- console.log(window.screen.colorDepth); Retorna a profundidade de cor da tela.
- console.log(window.screen.height); Retorna a altura total da tela.
- console.log(window.screen.pixelDepth); Retorna a profundidade de pixel da tela.
- console.log(window.screen.width); Retorna a largura total da tela.
- console.log(window.document); Retorna o objeto document. O objeto document representa o documento HTML.
- console.log(window.document.body); Retorna o elemento body do documento.
- console.log(window.document.doctype); Retorna o tipo de documento.
- console.log(window.document.documentElement); Retorna o elemento raiz do documento.
- console.log(window.document.head); Retorna o elemento head do documento.
- console.log(window.document.title); Retorna o título do documento.
- console.log(window.document.URL); Retorna a URL do documento.
- console.log(window.document.links); Retorna uma coleção de todos os links no documento.
- console.log(window.document.images); Retorna uma coleção de todas as imagens no documento.
- console.log(window.document.scripts); Retorna uma coleção de todos os scripts no documento.
- console.log(window.document.forms); Retorna uma coleção de todos os formulários no documento.
- console.log(window.document.anchors); Retorna uma coleção de todos os âncoras no documento.
- console.log(window.document.getElementById('test')); Retorna o elemento com o ID especificado.
- console.log(window.document.getElementsByClassName('test')); Retorna uma coleção de todos os elementos com a classe especificada.
- console.log(window.document.getElementsByTagName('p')); Retorna uma coleção de todos os elementos com a tag especificada.
- console.log(window.document.getElementsByName('test')); Retorna uma coleção de todos os elementos com o nome especificado.
- console.log(window.document.querySelector('.test')); Retorna o primeiro elemento que corresponde ao seletor especificado.
- console.log(window.document.querySelectorAll('.test')); Retorna uma coleção de todos os elementos que correspondem ao seletor especificado.
- console.log(window.document.createElement('div')); Cria um novo elemento div.
- console.log(window.document.createTextNode('Hello World')); Cria um novo nó de texto.
- console.log(window.document.getElementById('test').innerHTML = 'Hello World'); Define o HTML interno do elemento com o ID especificado.
- console.log(window.document.getElementById('test').innerText = 'Hello World'); Define o texto interno do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.color = 'red'); Define a cor do texto do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.backgroundColor = 'black'); Define a cor de fundo do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.fontSize = '24px'); Define o tamanho da fonte do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.fontWeight = 'bold'); Define o peso da fonte do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.padding = '10px'); Define o padding do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.margin = '10px'); Define a margem do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.border = '1px solid red'); Define a borda do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.borderRadius = '5px'); Define o raio da borda do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.boxShadow = '5px 5px 5px #000'); Define a sombra da caixa do elemento com o ID especificado.
- console.log(window.document.getElementById('test').style.textAlign = 'center'); Define o alinhamento do texto do elemento com o ID especificado.

## Objeto
Um objeto é uma coleção de propriedades e métodos.

```javascript
var pessoa = {
  nome: 'Fulano',
  idade: 30,
  isEstudante: true,
  saudacao: function() {
    return 'Olá, ' + this.nome + '!';
  }
};

console.log(pessoa.nome); // Fulano
console.log(pessoa.idade); // 30
console.log(pessoa.isEstudante); // true
console.log(pessoa.saudacao()); // Olá, Fulano!
```

### Adicionar Propriedades e Métodos
Você pode adicionar propriedades e métodos a um objeto existente.

```javascript
var pessoa = {
  nome: 'Fulano',
  idade: 30
};

pessoa.isEstudante = true;
pessoa.saudacao = function() {
  return 'Olá, ' + this.nome + '!';
};

console.log(pessoa.isEstudante); // true
console.log(pessoa.saudacao()); // Olá, Fulano!
```

### Modificar Propriedades e Métodos
Você pode modificar propriedades e métodos de um objeto existente.

```javascript
var pessoa = {
  nome: 'Fulano',
  idade: 30
};

pessoa.nome = 'Ciclano';
pessoa.idade = 25;

console.log(pessoa.nome); // Ciclano
console.log(pessoa.idade); // 25
```

### Objetos Aninhados
Um objeto pode conter outros objetos.

```javascript
var pessoa = {
  nome: 'Fulano',
  endereco: {
    rua: 'Rua A',
    numero: 123
  }
};

console.log(pessoa.endereco.rua); // Rua A
console.log(pessoa.endereco.numero); // 123
```

### Objetos Arrays
Um objeto pode conter arrays.

```javascript
var pessoa = {
  nome: 'Fulano',
  frutas: ['Maçã', 'Banana', 'Morango']
};

console.log(pessoa.frutas[0]); // Maçã
console.log(pessoa.frutas[1]); // Banana
console.log(pessoa.frutas[2]); // Morango
```

### Propriedades e Métodos
- `this`: Referencia o objeto atual.
- `delete`: Remove uma propriedade de um objeto.
- `in`: Retorna true se a propriedade existir no objeto.
- `hasOwnProperty()`: Retorna true se a propriedade for uma propriedade própria do objeto.
- `Object.keys()`: Retorna um array com as propriedades do objeto.
- `Object.values()`: Retorna um array com os valores das propriedades do objeto.
- `Object.entries()`: Retorna um array com as propriedades e valores do objeto.

```javascript
var pessoa = {
  nome: 'Fulano',
  idade: 30,
  isEstudante: true
};

console.log(pessoa.hasOwnProperty('nome')); // true
console.log(pessoa.hasOwnProperty('sobrenome')); // false
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'isEstudante']
console.log(Object.values(pessoa)); // ['Fulano', 30, true]
console.log(Object.entries(pessoa)); // [['nome', 'Fulano'], ['idade', 30], ['isEstudante', true]]

delete pessoa.isEstudante;
console.log(pessoa); // {nome: 'Fulano', idade: 30}

console.log('nome' in pessoa); // true
console.log('sobrenome' in pessoa); // false

for (var propriedade in pessoa) {
  console.log(propriedade + ': ' + pessoa[propriedade]);
}

// nome: Fulano
// idade: 30
```

### Construtor de Objetos
Um construtor de objetos é uma função que cria objetos.

```javascript
function Pessoa(nome, idade, isEstudante) {
  this.nome = nome;
  this.idade = idade;
  this.isEstudante = isEstudante;
  this.saudacao = function() {
    return 'Olá, ' + this.nome + '!';
  };
}

var fulano = new Pessoa('Fulano', 30, true);

console.log(fulano.nome); // Fulano
console.log(fulano.idade); // 30
console.log(fulano.isEstudante); // true
console.log(fulano.saudacao()); // Olá, Fulano!
```

### Protótipo
O protótipo é um objeto que contém propriedades e métodos que são compartilhados por todos os objetos de um tipo.

```javascript
function Pessoa(nome, idade, isEstudante) {
  this.nome = nome;
  this.idade = idade;
  this.isEstudante = isEstudante;
}

Pessoa.prototype.saudacao = function() {
  return 'Olá, ' + this.nome + '!';
}; 

var fulano = new Pessoa('Fulano', 30, true);

console.log(fulano.saudacao()); // Olá, Fulano!
```

## JSON
JSON (JavaScript Object Notation) é um formato de dados que é fácil de ler e escrever para humanos e fácil de analisar e gerar para máquinas.

```json
{
  "nome": "Fulano",
  "idade": 30,
  "isEstudante": true
}
```

### Métodos
- `JSON.stringify()`: Converte um objeto em uma string JSON.
- `JSON.parse()`: Converte uma string JSON em um objeto.

```javascript
var pessoa = {
  nome: 'Fulano',
  idade: 30,
  isEstudante: true
};

var json = JSON.stringify(pessoa);

console.log(json); // {"nome":"Fulano","idade":30,"isEstudante":true}

var objeto = JSON.parse(json);

console.log(objeto); // {nome: 'Fulano', idade: 30, isEstudante: true}
```

## Intervalos e Temporizadores
Os intervalos e temporizadores são utilizados para executar um bloco de código repetidamente ou após um determinado período de tempo.

### setInterval
O método `setInterval` é utilizado para executar um bloco de código repetidamente em intervalos regulares.

```javascript
// Executa a cada 1 segundo
setInterval(function() {
  console.log('Olá Mundo!');
}, 1000);
```

### setTimeout
O método `setTimeout` é utilizado para executar um bloco de código após um determinado período de tempo.

```javascript
// Executa após 1 segundo
setTimeout(function() {
  console.log('Olá Mundo!');
}, 1000);
```

### clearInterval
O método `clearInterval` é utilizado para parar a execução de um intervalo.

```javascript
var intervalo = setInterval(function() {
  console.log('Olá Mundo!');
}, 1000);

// Para a execução após 5 segundos
setTimeout(function() {
  clearInterval(intervalo);
}, 5000);
```

### clearTimeout
O método `clearTimeout` é utilizado para parar a execução de um temporizador.

```javascript
var temporizador = setTimeout(function() {
  console.log('Olá Mundo!');
}, 1000);

// Para a execução após 5 segundos
setTimeout(function() {
  clearTimeout(temporizador);
}, 5000);
```

## Programação Orientada a Objetos
A programação orientada a objetos é um paradigma de programação baseado em objetos. Um objeto é uma instância de uma classe que possui propriedades e métodos.

### Classes
Uma classe é um modelo para criar objetos.

```javascript
class Pessoa {
  constructor(nome, idade, isEstudante) {
    this.nome = nome;
    this.idade = idade;
    this.isEstudante = isEstudante;
  }

  saudacao() {
    return 'Olá, ' + this.nome + '!';
  }
}

var fulano = new Pessoa('Fulano', 30, true);

console.log(fulano.nome); // Fulano
console.log(fulano.idade); // 30
console.log(fulano.isEstudante); // true
console.log(fulano.saudacao()); // Olá, Fulano!
```

**Contrutor:** O método `constructor` é utilizado para inicializar as propriedades de um objeto.

**Métodos:** Os métodos são funções que pertencem a uma classe.

### Herança
A herança é um mecanismo que permite que uma classe herde propriedades e métodos de outra classe.

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return 'Olá, ' + this.nome + '!';
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  estudar() {
    return this.nome + ' está estudando ' + this.curso + '.';
  }
}

var fulano = new Estudante('Fulano', 30, 'JavaScript');

console.log(fulano.saudacao()); // Olá, Fulano!
console.log(fulano.estudar()); // Fulano está estudando JavaScript.
```

A herança é feita utilizando a palavra-chave `extends` e o método `super` é utilizado para chamar o construtor da classe pai.

Herança é utilizada para reutilizar código e criar uma hierarquia de classes.

### Métodos Estáticos
Os métodos estáticos são métodos que pertencem à classe em vez de uma instância da classe.

```javascript
class Util {
  static somar(a, b) {
    return a + b;
  }

  static subtrair(a, b) {
    return a - b;
  }
}

console.log(Util.somar(5, 3)); // 8
console.log(Util.subtrair(5, 3)); // 2
```

Os métodos estáticos são chamados diretamente na classe, sem a necessidade de criar uma instância da classe.

### Polimorfismo
O polimorfismo é a capacidade de um objeto de se comportar de várias formas.

```javascript
class Animal {
  falar() {
    return 'O animal faz barulho.';
  }
}

class Cachorro extends Animal {
  falar() {
    return 'O cachorro late.';
  }
}

class Gato extends Animal {
  falar() {
    return 'O gato mia.';
  }
}

var animal = new Animal();
var cachorro = new Cachorro();
var gato = new Gato();

console.log(animal.falar()); // O animal faz barulho.
console.log(cachorro.falar()); // O cachorro late.
console.log(gato.falar()); // O gato mia.
```

O polimorfismo é utilizado para criar classes que compartilham o mesmo nome de método, mas possuem comportamentos diferentes.

### Encapsulamento
O encapsulamento é o conceito de esconder os detalhes de implementação de um objeto e expor apenas a interface.

```javascript
class Conta {
  #saldo = 0;

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    this.#saldo -= valor;
  }

  getSaldo() {
    return this.#saldo;
  }
}

var conta = new Conta();

conta.depositar(100);
conta.sacar(50);

console.log(conta.getSaldo()); // 50
```

O encapsulamento é utilizado para proteger os dados de um objeto e garantir que eles sejam acessados apenas por métodos específicos.

### Classes ou Objetos Literais
- **Classes**: Utilize classes quando precisar de herança, polimorfismo e encapsulamento.
- **Objetos Literais**: Utilize objetos literais quando precisar de um objeto simples com propriedades e métodos.

### Prototype
O protótipo é um objeto que contém propriedades e métodos que são compartilhados por todos os objetos de um tipo.

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.saudacao = function() {
  return 'Olá, ' + this.nome + '!';
};

var fulano = new Pessoa('Fulano', 30);

console.log(fulano.saudacao()); // Olá, Fulano!
```

O protótipo é utilizado para compartilhar propriedades e métodos entre todos os objetos de um tipo.

## Spread/Rest
O operador `spread` é utilizado para espalhar os elementos de um array ou objeto.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];
var frutas2 = ['Laranja', 'Uva'];

var frutas3 = [...frutas, ...frutas2];

console.log(frutas3); // ['Maçã', 'Banana', 'Morango', 'Laranja', 'Uva']
```

O operador `rest` é utilizado para agrupar os elementos de um array em um único parâmetro.

```javascript
function somar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somar(1, 2, 3, 4, 5)); // 15
```

O operador `spread` é utilizado para espalhar os elementos de um array ou objeto. O operador `rest` é utilizado para agrupar os elementos de um array em um único parâmetro.

## Destructuring
O destructuring é utilizado para extrair valores de arrays ou objetos e atribuí-los a variáveis.

```javascript
var frutas = ['Maçã', 'Banana', 'Morango'];

var [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // Maçã
console.log(fruta2); // Banana
console.log(fruta3); // Morango
```

```javascript
var pessoa = {nome: 'Fulano', idade: 30};

var {nome, idade} = pessoa;

console.log(nome); // Fulano
console.log(idade); // 30
```

O destructuring é utilizado para extrair valores de arrays ou objetos e atribuí-los a variáveis.

## Generators
Os generators são funções especiais que podem ser pausadas e retomadas.

```javascript
function* gerador() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gerador();

console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value); // 3
```

Eles são utilizados para criar iteradores de forma mais simples.

Elas são criadas utilizando o `function*`. O `yield` é utilizado para pausar a execução da função e retornar um valor.

## Promises
As promises são objetos que representam a eventual conclusão ou falha de uma operação assíncrona.

```javascript
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Olá Mundo!');
  }, 1000);
});

promise.then(function(resultado) {
  console.log(resultado);
});
```
Promises possuem três estados: pendente, resolvida e rejeitada.

- `pending`: Estado inicial, a promise ainda não foi resolvida ou rejeitada.
- `resolve()`: É utilizado para resolver a promise.
- `reject()`: É utilizado para rejeitar a promise.

Promises contém os métodos `then()` e `catch()` para lidar com a resolução e rejeição da promise.

Promises costumam ser utilizadas para requisições http, operações de leitura e escrita de arquivos, entre outras operações assíncronas.