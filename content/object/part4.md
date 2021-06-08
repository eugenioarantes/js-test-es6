## Parte IV - Object.entries

Leia esse link até a seção "Convertendo um Object em um Map". Fique mais atento à seção "Descrição", esse método funciona de forma diferente dos anteriores.
O método Object.entries retorna um array com os pares chave / valor do objeto. Para visualizar seu retorno, veja o exemplo abaixo:
```javascript
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
```

Observe que o retorno dele é um array e que cada um de seus elementos é um outro array com apenas dois dados, a chave do objeto e o seu valor. Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.

```javascript
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
```
