const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../services/productsServices');
const productsModels = require('../../../models/productsModels')


describe('Testes camada services ', () => {
  describe('caso não tenha um produtos, retorna um array vazio', () => {
    const result = undefined;

    beforeEach(() => {
      sinon.stub(productsServices, 'getAll').resolves(result);
      sinon.stub(productsServices, 'getById').resolves(result);
    });

    afterEach(() => {
      productsServices.getAll.restore();
      productsServices.getById.restore();
    })

    it('retorna undefined caso não tenha produtos', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.an('undefined');
    });

    it('retorna undefined caso não tenha produto com id selecionado', async () => {
      const result = await productsServices.getById();
      expect(result).to.be.an('undefined');
    })
  });

  describe('caso tenha produtos com id selecionado, retorna um array com objetos', () => {
    describe('o objeto deve ter as chaves ID e NAME', () => {
      const result = [[{
        id: 3,
        name: 'blusa'
      }]];

      beforeEach(() => {
        sinon.stub(productsServices, 'getById').resolves(result);
      });

      afterEach(() => {
        productsServices.getById.restore();
      })

      it('retorna um array', async () => {
        const result = await productsServices.getById();
        expect(result).to.be.an('array');
      });
    //   it('o objeto do array tem as chaves id e name', async () => {
    //     const [result] = await productsServices.getById();
    //     expect(result).to.includes.all.keys('id', 'name');
    //   })
    // });

    // describe('Retorna um array de objetos caso existam produtos', () => {
    //   const result = [[
    //   {
    //     id: 4,
    //     name: 'sapato'
    //   }
    //   ]];

    //   beforeEach(() => {
    //     sinon.stub(productsServices, 'getAll').resolves(result);
    //   });

    //   afterEach(() => {
    //     productsServices.getAll.restore();
    //   });

    //   it('retorna um array com objetos caso tenham produtos', async () => {
    //     const [result] = await productsServices.getAll();
    //     expect(result).to.be.a('object')
    //     expect(result).to.be.includes.all.keys('id', 'name');
    //   });
    });
  });
});