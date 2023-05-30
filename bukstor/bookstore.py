import json

def order(item):
    int_value = int(item)
    print(type(int_value))
    print(int_value)
    return int_value



plik = open(r"C:\Users\kacperkozlowski\Downloads\bookstore.json",'r')
dane = plik.read()


data = json.loads(dane)
print (type(data))
#hold = data["bookstore"]["book"]
length = len(data['bookstore']['book'])
id = length

riwers = False
print("MENU \n Wybierz co chcesz zrobić z biblioteką książek: ")
x = input("1. Wypisz \n2. Znajdź ksiązkę \n3. Dopisz książkę do biblioteki \n ")
if x=='1':
    met = input("Wybierz metodę sortowania biblioteki: ")
    riwe = input("Sortowanie od końca? y/n")
    if riwe == 'y':
        riwers = True
    if met == 'title':
        sortedData = sorted(data['bookstore']['book'], key=lambda x: x[met],reverse=riwers)
        print("Sortowanie po tekscie",sortedData)
    elif met == 'author':
        sortedData = sorted(data['bookstore']['book'], key=lambda x: x[met],reverse=riwers)
        print("Sortowanie po tekscie", sortedData)
    elif met == 'year':
        sortedData = sorted(data['bookstore']['book'], key=lambda x: x[met],reverse=riwers)
        print("Sortowanie po tekscie", sortedData)
    elif met == 'id':
        sortedData = sorted(data['bookstore']['book'], key=lambda value: int(value["id"]),reverse=riwers)
        #print(hold)
        print("Sorted data: ", sortedData)
    else:
        print("Błąd")

elif x=='2':
    i = 0
    tytul = input("Wpisz tytuł szukanej książki: ")
    #porowdwa = tytul.split()
    dlug = len(tytul)
    wynik = ""
    for i in range(length-1):
        j = 0
        porow = data['bookstore']['book'][i]['title']
        if len(porow)>=dlug:
            for j in range(dlug):
                wynik+=porow[j]
                j= j+1

        if wynik.lower() == tytul.lower():
            print(data['bookstore']['book'][i]['title'])
        wynik = ""

        i = i+1
elif x=="3":
    plik.close()
    title=input("Podaj tytuł: ")
    author=input("Podaj autora: ")
    year=input("Podaj rok wydania: ")
    data['bookstore']['book'].append({
      "id": str(id+1),
      "title": title,
      "author": author,
      "year": str(year)
    })

    with open(r"C:\Users\kacperkozlowski\Downloads\bookstore.json", 'w') as json_file:
        json.dump(data, json_file,
                  indent=4,
                  separators=(',', ': '))
    print("Dodano nowe dane do pliku json!")
else:
    print("Błąd")
