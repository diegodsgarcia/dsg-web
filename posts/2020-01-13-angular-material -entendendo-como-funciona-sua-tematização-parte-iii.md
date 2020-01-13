---
title: Angular Material  - Entendendo como funciona sua tematização (Parte III)
description: >-
  Nos últimos artigos falamos sobre a tematização de paletas no Angular Material
  e criamos nosso próprio componente card baseado na mesma. Vamos finalizar essa
  sequência falando um pouco sobre como funciona a tipografia no framework.
slug: angular-material-entendendo-como-funciona-sua-tematizacao-parte-III
date: '2020-01-13 02:02:44'
thumbnail: assets/images/posts/angular-material-parte-1.png
locale: pt-br
---
Nos últimos artigos falamos sobre a tematização de paletas no Angular Material e criamos nosso próprio componente card baseado na mesma. Vamos finalizar essa sequência falando um pouco sobre como funciona a tipografia no framework.

A tipográfia no framework trabalha baseado nos conceitos do Angular Material, dividindo por **leveis**. Cada level possuí seu `font-size`, `line-height` e `font-weight`. Os leveis são divididos na seguintes categorias:

<table>
  <tr>
    <th>Nome</th>
    <th>CSS classe</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>display-4</td>
    <td>.mat-display-4</td>
    <td>Largo, cabeçalho único, geralmente usado no topo da página (header)</td>
  </tr>  
  <tr>
    <td>display-3</td>
    <td>.mat-display-3</td>
    <td>Largo, cabeçalho único, geralmente usado no topo da página (header)</td>
  </tr>
  <tr>
    <td>display-2</td>
    <td>.mat-display-2</td>
    <td>Largo, cabeçalho único, geralmente usado no topo da página (header)</td>
  </tr>  
  <tr>
    <td>display-1</td>
    <td>.mat-display-1</td>
    <td>Largo, cabeçalho único, geralmente usado no topo da página (header)</td>
  </tr>
  <tr>
    <td>headline</td>
    <td>.mat-h1, .mat-headline</td>
    <td>Seção de cabeçalho, corresponde a tag &lt;h1&gt;</td>
  </tr>  
  <tr>
    <td>title</td>
    <td>.mat-h2, .mat-title</td>
    <td>Seção de cabeçalho, corresponde a tag &lt;h2&gt;</td>
  </tr>
  <tr>
    <td>subheading-2</td>
    <td>.mat-h3, .mat-subheading-2</td>
    <td>Seção de cabeçalho, corresponde a tag &lt;h3&gt;</td>
  </tr>  
  <tr>
    <td>subheading-1</td>
    <td>.mat-h3, .mat-subheading-1</td>
    <td>Seção de cabeçalho, corresponde a tag &lt;h4&gt;</td>
  </tr>
  <tr>
    <td>body-1</td>
    <td>.mat-body, .mat-body-1</td>
    <td>Texto base do body</td>
  </tr>  
  <tr>
    <td>body-2</td>
    <td>.mat-body-strong, .mat-body-2</td>
    <td>Texto base do bolder</td>
  </tr>
  <tr>
    <td>caption</td>
    <td>.mat-small, .mat-caption</td>
    <td>Pequeno, texto para avisos</td>
  </tr>  
  <tr>
    <td>button</td>
    <td>Sem classe, usado direto no componente</td>
    <td>Botões e ancoras</td>
  </tr>
  <tr>
    <td>input</td>
    <td>Sem classe, usado direto no componente</td>
    <td>Campos input</td>
  </tr>  
</table>

Podemos utilizar qualquer tipo de level na aplicação, desde que respeito sua forma semântica.

Por padrão o framework utiliza a fonte Roboto, para podermos utilizar todo level semântico de tipográfia, basta importar a fonte no index.html

## Referencias

<https://material.angular.io/guide/typography>
