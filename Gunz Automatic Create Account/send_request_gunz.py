# encoding: iso-8859-1
import codecs  # utf8 names
import json
import random
import urllib.parse

import requests
import urllib3


def get_random_name(size_name=3):
    arq = codecs.open('common_names.json', 'rb', encoding='utf-8')
    conteudo = arq.read()
    arq.close()
    conteudo = conteudo.replace("\r", '')
    conteudo = conteudo.replace("\n", '')
    names = conteudo.split('|')
    retorno = ""
    for x in range(0, size_name):
        retorno += names[random.randint(0, len(names) - 1)] + " "

    return retorno[0:len(retorno) - 1]


def get_login_data():
    login = ""
    password = ""

    # opening for reading
    configs_file = open("login_options.json", "r")
    configs = json.load(configs_file)
    configs_file.close()
    # extracting data
    proxies = configs["proxies"]
    csrf = configs["csrf_gmailnator_token"]

    configs["login"]["last_number"] += 1
    login = configs["login"]["prefix"] + str(configs["login"]["last_number"])

    # não vou dar write aqui, pois se o request de erro contará.

    # returning
    if configs["password"]["use_same_login"]:
        password = login
    else:
        password = configs["password"]["passwd"]
    return login, password, proxies, csrf, configs


print("[INICIANDO]")
name = get_random_name(3)
print("[NOME ALEATÓRIO]: ", name)
username, password, proxies, csrf, configs = get_login_data()
print("[USUÁRIO]: ", username)
print("[SENHA]: ", password)
urllib3.disable_warnings()  # se quiser por uma proxy do burp suite e n dar erro

#### gmailnator get some email GMAIL
# headers = {
#    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
#    'Cookie': 'csrf_gmailnator_cookie=13968d5ad3ef7e6740e04fa6ab585b3a;' # any valid csrf token
#
# }
# response = requests.request("POST", "https://www.gmailnator.com/index/indexquery", headers=headers, data="csrf_gmailnator_token=13968d5ad3ef7e6740e04fa6ab585b3a&action=GenerateEmail&data%5B%5D=3", verify=False)
# email = response.text
email = username + "@gmailnator.com"
print("[EMAIL]: ", email)
#### the duel

url = "https://www.theduel.com.br/cadastro"

payload = {
    'nome': name,
    'user': username,
    'email': email,
    'password1': password,
    'password2': password,
    'sex': str(random.randint(0, 1)),
    'country': "Brasil",
    'birthday': "{:02d}/{:02d}/{}".format(random.randint(1, 30), random.randint(1, 12), random.randint(1980, 2005)),
    'submit': "Cadastrar"
}

# for ipl in payload: # url encoding for all paremeters
#    payload[ipl] = urllib.parse.quote_plus(payload[ipl])
# print(payload)
# exit()
headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    'User-Agent': ''
}

print("[ENVIANDO REQUEST PARA O GUNZ!]")
response = ""
try:
    response = requests.request("POST", url, headers=headers, data=payload, verify=False, proxies=proxies)
except urllib3.exceptions.MaxRetryError:
    print("[ERRO MaxRetryError]")
    print("http://free-proxy.cz/en/proxylist/country/BR/https/ping/all")
    exit()
except requests.exceptions.ProxyError:
    print("[ERRO, PROXY FORA DO AR]")
    print("http://free-proxy.cz/en/proxylist/country/BR/https/ping/all")
    exit()
print("[RESPONSE RECEBIDA!]")
if len(response.text) < 10:
    print("talvez o servidor deles esteja offline!")
    exit()
if response.text.find("foi reportado como um e-mail") != -1:  # 50123 success
    print("o email foi detectado!")
    exit()
if response.text.find("Senha deve conter entre") != -1:
    print("erro na senha!")
    exit()
if response.text.find("O Nome de Usuário (") != -1:
    print("username ja usado")
    exit()
if response.text.find("O E-mail (") != -1:
    print("email ja usado")
    exit()
if response.text.find("Cadastro realizado com sucesso") == -1:
    print("erro, deu sucessou ou n?\n\n\n\n")
    print(response.text)
    exit()

# opening for writing (only write if the request was sucessful)
    configs_file = open("login_options.json", "w")
    json.dump(configs, configs_file, indent=4)
    configs_file.close()

    print("[SUCESSO AO REGISTRAR, ESPERANDO EMAIL DE CONFIRMAÇÃO!]")
#### gmailnator get the sended email
headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'csrf_gmailnator_cookie={};'.format(csrf)  # any valid csrf token

}

received_email = "[]"
for x in range(0, 40):
    response = requests.request("POST", "https://www.gmailnator.com/mailbox/mailboxquery", headers=headers,
                                data="csrf_gmailnator_token={}&action=LoadMailList&Email_address=".format(csrf) + email,
                                verify=False)
    received_email = response.text
    if received_email == "[]":
        print(".", end="")
    else:
        break

if received_email == "[]":
    print("O email pode ainda não ter chegado, ou vocês precisa de uma proxy porque está banido")
    exit()

print("[UM EMAIL ENCONTRADO!]")

messageId = \
received_email.split('https:\/\/www.gmailnator.com\/gmailnator.com\/messageid\/#', 2)[1].split('\\\">', 2)[0]

messageId = urllib.parse.quote_plus(messageId)

print("[MESSAGEID DO EMAIL!]: ", messageId)
print("[ENVIANDO REQUEST PARA VER CONTEUDO DO EMAIL!]")
url = "https://www.gmailnator.com/mailbox/get_single_message/"
data = "csrf_gmailnator_token={}&action=get_message&message_id={}&email=gmailnator.com".format(csrf,
    messageId)


response = requests.request("POST", url, headers=headers, data=data, verify=False)
email = response.text
print("[RESPONSE DO EMAIL RECEBIDO]")

link_gunz = "https://www.theduel.com.br/cadastro/ativar/" + \
            email.split('https:\\/\\/www.theduel.com.br\\/cadastro\\/ativar\\/', 2)[1].split('\\\"', 2)[0] + "/"
response = requests.get(link_gunz, verify=False)
print("[ENVIANDO GET PARA THE DUEL]")
if (response.text.find("Desculpe, este link já foi utilizado") != -1):  # se n encontrou a msg de sucesso
    print("Erro \"Desculpe, este link já foi utilizado.\"")
print("[SUCESSO, LINK] : ", link_gunz)
