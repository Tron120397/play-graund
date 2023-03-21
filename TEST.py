import re


def domain_name(url: str) -> str:
    u = re.sub(r"(?:www.)|(?:https://)|(?:http://)", r"", url)

    u = re.sub(r"\..*", r"", u)
    return u


print(domain_name('https://youtube.com'))
print(domain_name('http://codewars'))