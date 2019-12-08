---
title: >-
  Refatorando seu conhecimento! Desvendando o comportamento da propriedade Float
  (CSS).
description: >-
  A propriedade float está desde os primórdios da web e ela é considerada uma
  das propriedades mais básicas, porem você realmente sabe seu comportamento?
date: '2018-02-20 08:05:45'
thumbnail: /assets/images/posts/float-example-default.png
locale: br
---
A propriedade _float_ está desde os primórdios da web e ela é considerada uma das propriedades mais básicas, porem você realmente sabe seu comportamento?

Todos elementos HTML segue um comportamento (inline, block, table, flex, etc…) Porem, float tem um comportamento totalmente diferente entre estas mesmas propriedades conhecidas.

O float foi criado pensando em layouts com o design “text wrap” que explicando em poucas palavras por min, seria como o “estilo em jornal”.

![Protótipo de layout utilizando float](/assets/images/posts/float-example-default.png "Protótipo de layout utilizando float")

A maioria das vezes quando aprendemos algo básico, sempre aceitamos a teoria básica e com o tempo, revisamos o básico do básico e aprendemos mais coisas novas (é como se fosse a refatoração do seu conhecimento).

Bom foi basicamente que eu fiz e gostaria de compartilhar com vocês! :)

Criei um exemplo bem simples [(link do código no github](https://github.com/diegodsgarcia/float-behaviors-tests)), a qual eu testei alguns comportamentos.

Bom até aí beleza! Com a leitura do artigo [**“All about float”**](https://css-tricks.com/all-about-floats/) (a qual eu super recomendo você também ler) está tudo certo!! Então eu cheguei na seguinte conclusão.

_**Todos elementos inline vão respeitar o fluxo do elemento float.**_

Então criei uma div no meio do fluxo de um elemento float para testar os seus vários tipos de comportamento, e verificar se minha teoria está correta.

## DISPLAY BLOCK

![]()

Beleza por enquanto minha teoria esta certa! O elemento div não flutuo. O que apenas seguiu o fluxo foi o conteúdo dentro, seguindo ainda minha teoria dos elementos inline.
