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

![Teste com float utilizando o display block](/assets/images/posts/float-display-block.png "Teste com float utilizando o display block")

Beleza por enquanto minha teoria esta certa! O elemento div não flutuo. O que apenas seguiu o fluxo foi o conteúdo dentro, seguindo ainda minha teoria dos elementos inline.

## DISPLAY INLINE

![Teste com float utilizando o display inline](/assets/images/posts/float-display-inline.png "Teste com float utilizando o display inline")

Nada a comentar aqui também, teoria ainda funcionando perfeitamente! (OBS: Esse espaçamento enorme na altura é por conta do tamanho da fonte…(Ainda quero estudar mais sobre fontes e também falar sobre seus comportamentos malucos).

## DISPLAY INLINE BLOCK

![Teste com float utilizando o display inline block](/assets/images/posts/float-display-inline-block.png "Teste com float utilizando o display inline block")

Ééé Bom… Seguindo a lógica, como esse elemento segue o comportamento híbrido, então ele realmente flutuará.

Porém quando há um conteúdo que ultrapassada o fluxo, o comportamento será igual ao block.

![Teste com float utilizando o display inline block com muitas palavras](/assets/images/posts/float-display-table-with-many-words.png "Teste com float utilizando o display inline block com muitas palavras")

## DISPLAY FLEX

![Teste com float utilizando o display flex](/assets/images/posts/float-display-flex.png "Teste com float utilizando o display flex")

Tá… por essa eu realmente não esperava, o _display flex_ consegue também se adaptar ao fluxo do float!!! Justo ao nome flex ❤.

O mais bacana do display flex é que ele sempre respeitará o fluxo do float, não importando com o tamanho do conteúdo dentro do elemento.

![Teste com float utilizando o display flex com muitas palavras](/assets/images/posts/float-display-flex-with-many-words.png "Teste com float utilizando o display flex com muitas palavras")

## DISPLAY TABLE

![Teste com float utilizando o display table](/assets/images/posts/float-display-table.png "Teste com float utilizando o display table")

Oi?? O _display table_ também se adapta ao fluxo do float. Tá bom… Está na hora de desistir da minha pequena teoria.

Porém diferente do flex, ele não irá respeitar sempre o fluxo do float.

![Teste com float utilizando o display table com muitas palavras](/assets/images/posts/float-display-table-with-many-words.png "Teste com float utilizando o display table com muitas palavras")

## DISPLAY BLOCK COM UMA LARGURA FIXA, A QUAL NÃO RESPEITA O FLUXO DO FLOAT

![Teste com float utilizando o display block sem respeitar a largura fixa, a qual não respeita o fluxo do float](/assets/images/posts/float-display-block-with-width-without-respect-flow.png "Teste com float utilizando o display block sem respeitar a largura fixa, a qual não respeita o fluxo do float")

Hum… Realmente faz sentido! Pois o conteúdo dentro do elemento sempre deve respeitar as dimensões do elemento pai (Nesse caso, coloquei uma largura fixa de 10% na div) . Neste caso como a largura do elemento é muito menor que o fluxo do float, o conteúdo não vai respeitar mais o mesmo.

## OUTROS ELEMENTOS COM LARGURA QUE NÃO RESPEITAM O FLUXO DO FLOAT

Bom como já testamos com exceção do display block e inline (a qual não é possível definir uma largura em elementos inline), os outros formatos vão seguir o fluxo do float. Com uma pequena exceção ao display table a qual não podemos definir uma largura menor que o conteúdo dentro dela.

## CONCLUSÃO

Sempre devemos buscar a refatoração do nosso conhecimento. Eu sempre imaginei que dominava totalmente essa propriedade, mas só quando comecei a estudar caso a caso, eu realmente comecei a adquirir conhecimento. Eu não sou um expert nisso (e nunca serei), um grande bom exemplo nos meus testes a qual não consegui entender muito bem o comportamento é com propriedade overflow.

Enfim, uma propriedade que de primeira impressão é bem simples de trabalhar, pode ser mais complexa do que você imagina e como a maravilhosa ciência trabalha, uma teoria cientifica só é comprovada quando analisada e testada por toda comunidade, podemos dizer a mesma coisa com a comunidade open source! Para qualquer assunto, desde o mais simples, até o mais complexo, sempre estude, pratique, questione-se e divulgue!

_All about float —_ [_https://css-tricks.com/all-about-floats/_](https://css-tricks.com/all-about-floats/)__
