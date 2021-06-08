## Parte III - Object.values

O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave.
Leia esse artigo para entender melhor seu funcionamento.
Veja como fica muito mais fácil obter os valores de um objeto com o uso do Object.values através do exemplo abaixo, em que foram implementadas, de formas diferentes, duas funções que retornam a mesma lista de valores.

```javascript
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
```

Observe como a função listSkillsValuesWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.
