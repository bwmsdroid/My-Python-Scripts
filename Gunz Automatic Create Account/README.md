# Criando contas automaticamente no The Duel 🐍
## Dada a minha necessidade de criar diversas contas neste game (por causa dos bans da engenharia reversa), resolvi criar um script
O script utiliza-se de um temp email que não é bloqueado totalmente pelo The Duel, o www.gmailnator.com. Apesar dele não ter uma api, é possível fazer uma adaptação, que funciona perfeitamente.

Steps do programa:
-> gera um nome aleatoria, afim de diminuir a detecção dos adms
-> pega o prefix do login + o ultimo numero do login e cria um email gmailnator
-> aleatoriza todos os pametros possiveis do request, exceto username e senha
	'-> mas nada impede de fazer aleatorio também
-> envia o request atravez de uma proxy
-> recebe e analisa se foi tudo correto
-> espera pelo email do gunz
-> quando chegar algo novo, extrai o messageid
-> com o messageid, manda um request para get_single_message, afim de pegar o email
-> extrai o link do gunz do email
-> manda request GET
-> verifica se já não foi atiavado
-> conta criada!
