import asyncio  # fire and forget
import requests  # send requests
import time  # time.sleep
import urllib3  # disable warnings


# fire and forget
def background(f):
    from functools import wraps

    @wraps(f)
    def wrapped(*args, **kwargs):
        loop = asyncio.get_event_loop()
        if callable(f):
            return loop.run_in_executor(None, f, *args)
        else:
            raise TypeError('Task must be a callable')

    return wrapped


urllib3.disable_warnings()  # se quiser por uma proxy do burp suite e n dar erro

url = "https://foo.com/foo/foo.php"
payload = 'username=MY_USERNAME&password=MY_PASS&hwid=MY_HWID&module=login'
headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': ''
}
proxies = {  # se quiser usar alguma proxy, para evitar banimentos pelo do firewall do server
    'http': 'http://206.189.20.12:8080',
    'https': 'http://206.189.20.12:8080'
}


@background  # tem que chamar isto para ser uma func assincrona
def main2():
    requests.request("POST", url, headers=headers, data=payload, verify=False, proxies=proxies)


for x in range(0, 5000):  # envia vários requests
    time.sleep(10)
    main2()
    if x % 100 == 0:  # print a cada 100 requests
        print(x)

print("end")
