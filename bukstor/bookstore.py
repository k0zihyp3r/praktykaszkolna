import json

plik = open(r"C:\Users\kacperkozlowski\Downloads\bookstore.json",'r')
dane = plik.read()


data = json.loads(dane)
print("MENU \n Wybierz co chcesz zrobić z biblioteką książek: ")
x = input("1. Wypisz \n: ")
if x=='1':
    met = input("Wybierz metodę sortowania biblioteki: ")
    if met =='title' or 'author' or 'year':
        sortedData = sorted(data['bookstore']['book'], key=lambda x: x[met])
    elif met=="id":
        sortedData = sorted(data['bookstore']['book'], key=id,)
    else:
        print("Błąd")
    print(sortedData)

else:
    print("Błąd")