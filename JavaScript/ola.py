ola = [1, 'junior', 'edilson']
dic = {'nome': 'junior', 'idade': 13}
idade = dic['nome']
print(idade)

def myFunc():
    global idade
    idade = 'edilson'
    return idade

print('Valor idade funcao', myFunc())
print(idade)


if 'junior' in ola:
    print('existe')
else:
    print('nao existe')

# for l in ola:
#     if l == 0:
#         print('existe')
    
# ola = 'Hello World'
# print(ola)