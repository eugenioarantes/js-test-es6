
const assert = require('assert');
const createMenu = require('../src/restaurant');


describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    const obj1 = { food: {'agua': 3.90, 'cerveja': 6.90}, drink: {'coxinha': 3.90, 'sashimi': 15.50, 'sopa': 9.40} };
    // assert.deepEqual(createMenu(obj1), { fetchMenu: obj1 });
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepEqual(Object.keys(createMenu(obj1).fetchMenu), ['food', 'drink']);
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    assert.deepEqual(createMenu(obj1).fetchMenu, obj1);
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    assert.deepEqual(createMenu(obj1).consumption, []);
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    const order = 'coxinha'
    const menu = createMenu(obj1)
    menu.order(order);
    assert.strictEqual(menu.consumption.includes(order), true);
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    menu
      .order('agua')
      .order('sopa')
      .order('sashimi');
    assert.deepEqual(menu.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    const menu2 = createMenu(obj1);
    menu2
      .order('coxinha')
      .order('agua')
      .order('coxinha')
    assert.deepEqual(menu2.consumption, ['coxinha', 'agua', 'coxinha']);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    assert.strictEqual(menu2.pay(), 12.87);
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
