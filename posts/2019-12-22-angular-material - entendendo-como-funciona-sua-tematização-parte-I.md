---
title: Angular Material   Entendendo como funciona sua tematização (Parte I)
description: >-
  Se você já desenvolve em Angular, com certeza já ouviu falar do framework
  Angular Material. Nesse artigo vamos explorar e descobrir mais como funciona
  os padrões de tematização no SASS e criar nossos próprios componentes
  tematizados!
slug: posts/angular-material-entendendo-como-funciona-sua-tematizacao-parte-I
date: '2019-12-09 02:23:37'
thumbnail: /assets/images/posts/angular-material.jpg
locale: pt-br
---
Se você já desenvolve em Angular, com certeza já ouviu falar do framework Angular Material. Nesse artigo vamos explorar e descobrir mais como funciona os padrões de tematização no SASS e criar nossos próprios componentes tematizados!

## Sobre as definições e padrões:

O framework trabalha com conceitos muito bem definidos proposto em todo conceito visual do Material Design. Sua divisão de paleta de cores é definida  por 5 categorias:

* **Primary** - Cor principal da sua aplicação.
* **Accent** - Cores de interação e de elementos flutuantes.
* **Warn** - Cores que emitem estados de erros.
* **Background** - Cores dos backgrounds  nos componentes e elementos.
* **Foreground** - Cores de textos, ícones, divisores, etc.

As paletas **primary**, **accent** e **warn** são paleta de cores que possuí variações de sua cor para a tonalidade mais clara até a mais escura, elas também possuem suas cores de contraste.

As paletas **background** e **foreground** possuem cores fixas relacionado a todo seu projeto:

Todas paletas são criadas e geradas por variáveis, funções e mixins no SASS.

Para gerar um tema nos devemos declarar primeiramente as variáveis **primary**, **accent** e **warn** no formato Map com todas as tonalidades de nossas cores.

![Exemplo de paleta](/assets/images/posts/material-design-theme.png "Exemplo de paleta")

O Angular Material possuí uma ótima abordagem sobre a criação de sua tematização. Vamos decifrar um pouco sobre seu exemplo no tutorial [oficial do site](https://material.angular.io/guide/theming).

```scss
// Importação das váriaveis e mixens do Angular Material
@import '~@angular/material/theming';

// Geração estilos bases de todos os componentes do Angular Material
@include mat-core();

// Definição da paleta primária
$app-primary: mat-palette($mat-indigo);

// Definiçao da paleta de cores accent
// OBS: Para cada paleta você pode definir as cores default, lighter, and darker, como no exemplo a baixo
$app-accent: mat-palette($mat-pink, A200, A100, A400);

// Definição da paleta de cores warn (Essa definição é opcional);
$app-warn: mat-palette($mat-red);

// Essa váriavel será um objeto Map a qual irá conter todas as paletas de sua aplicação
$app-theme: mat-light-theme($candy-app-primary, $candy-app-accent, $candy-app-warn);

// Por fim este mixin irá gerar todos os estilos do componente baseado nas váriaveis de 
// a qual foi definido a cima.@include angular-material-theme($app-theme);
```

O código a cima é um exemplo básico de criação de uma estilização de paletas customizadas no Angular Material. Todo esse código foi declarado no **style.scss** global do projeto. Esta paleta só pode ser gerada através de pré-processadores, mas caso seu projeto Angular foi criado através do CLI, você pode facilmente trocar seu processamento de estilo no **angular.json**

Seu arquivo de customização de tema **NÃO DEVE** ser importado em nenhum outro arquivo de estilização, pois os mixins `mat-core()` e `angular-material-theme()` irão gerar classes, causando assim duplicidade de código em CSS gerado.

Vamos agora um pouco mais além.... No exemplo a cima nas paletas de cores utilizamos apenas paletas pré definidas vindo do `@import '~@angular/material/theming';`

Vamos agora criar nossas próprias paleta de cores principais! Para isso devemos definir uma variável map de todas as tonalidades da paleta como no exemplo a baixo:

```scss
$dark-primary-text: #000;
$light-primary-text: #fff;
$app-primary-palette: (
  50: #f3e5f5,
  100: #e1bee7,
  200: #ce93d8,
  300: #ba68c8,
  400: #ab47bc,
  500: #9c27b0,
  600: #8e24aa,
  700: #7b1fa2,
  800: #6a1b9a,
  900: #4a148c,
  A100: #ea80fc,
  A200: #e040fb,
  A400: #d500f9,
  A700: #aa00ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $light-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
```

Como pode ver as paletas principais (primary, accent e warn), tem toda sua tonalidade de cor definida entre a variação da mais clara (50) para a mais escura (A700), a qual você pode utilizar qualquer uma das tonalidades no método `mat-palette()`:

```scss
// @Param - Paleta definida
// @Param (OPCIONAL) - Cor principal da paleta
// @Param (OPCIONAL) - Cor ligther da paleta
// @Param (OPCIONAL) - Cor darkner da paleta
$primary: mat-palette($app-primary-palette, 600, 100, A400);
```

Com isso podemos definir qualquer cor nas paletas principais do Angular Material, porém como foi citado no começo o Angular Material trabalha com 5 categorias de paletas.... Onde está as paletas **background** e **foreground**?

Bom, essas paletas o angular já gera todas as definições para nos sem configurações com o método **mat-light-theme()** ou **mat-dark-theme()** e infelizmente o Angular Material não nos permite customizar essas paletas. Porém no próximo post, vamos sobrescrever as variáveis **background** e **foreground,** tornado assim possível sua customização total!

No [próximo post](https://dsg.net.br/posts/angular-material-entendendo-como-funciona-sua-tematizacao-parte-II/) vamos focar em criar um componente do zero baseado nas paletas que o Angular Material nos fornece!

Até a próxima!!! \o/

## Referencias

<https://material.angular.io/guide/theming>

<https://material.io/design/>
