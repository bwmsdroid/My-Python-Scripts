# Unpacker de arquivo JS

#### Este script foi criado para resolver um problema simples, mas que se feito manualmente pode levar horas.
Você pode verificar neste vídeo do LiveOverFlow o problema em questão.



[![Watch the video](https://i.ytimg.com/vi_webp/TpdDq56KH1I/maxresdefault.webp)](https://youtu.be/TpdDq56KH1I?t=133)

## Ainda assim, darei uma explicada.
Este script recebe:
- o nome da função que da unpack nas strings, exemplo unpack_strings('48'), o qual deve ser inserido como unpack_strings('
- big_arr, que é o array com as strings (todas já deobfuscadas, que pode ser feito pelo console do navegador no website, chamando a função manualmente)
- o arquivo do javascript para deobfuscar (é só você baixar o JS)

Output do script:
- Arquivo final, com as strings substituidas pela função chamada

Eu recomendo vc arrumar algum erro de sintaxe que possa ter ficado e então utilizar estes websites:
- https://beautifier.io/
- http://www.jsnice.org/

assim o codigo final vai ficar legível e fácil de entender.

## O que o codigo efetivamente faz?

O codigo substitui a função chamada pela string que seria o output.

## Como?

Leia o que faz o func split primeiro: https://www.w3schools.com/python/ref_string_split.asp
Leia também sobre a func int: https://www.w3resource.com/python/built-in-function/int.php

Simples: 
- Separa o codigo por pelo nome da func(', então há vários fragmentos de códigos;
- Então ele separa novamente esse fragmente até a ', que seria o final do parametro. Também colocamos um limite de somente uma divisão;
- Nesta segunda divisão, temos o parametro na posição [0] e o resto do codigo na [1];
- Então transformamos o parametro que está em hex string para int, por meio do int(splitted_strings_2[0], 16);
- Então nós pegamos o valor do array na posição do parametro;
- Salvamos em um novo arquivo, colocando o splitted_strings_2[0] (que é o nosso parametro) + splitted_strings_2[1] (que é o resto do codigo);

- Note que o splitted_strings_2[0] é posto entre acentos;
- Também não esqueça de dar um output.write no splitted_strings[0], otherwise você não tera o início do código.
- Passe no js nicefy novamente, ative todas as configurações.
- Cole seu código e dê um ctrol+H no sublime. Substitua !![] por true e ![] por false.
- Renomeie algumas variáveis que tu sabe o que faz (e.g.: contador)


Btw este input é um JS obfuscado do website cs.money

Also, da pra dar unpack n somente JS, mas qualquer tipo de codigo, é só dar uma modificada.


- Pra deixar melhor tem que  substituir coisas como document["getElementById"] por document.getElementById


03/11/2020
