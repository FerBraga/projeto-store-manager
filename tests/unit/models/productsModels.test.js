const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../models/productsModels');
const connection = require('../../../models/connection');


describe('Testes camada model ', () => {
  describe('caso não tenha um produtos, retorna um array vazio', () => {
    const result = [[]];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(result);
    });

    afterEach(() => {
      connection.execute.restore();
    })

    it('retorna um array caso não tenha produtos', async () => {
      const result = await productsModels.getAll();
      expect(result).to.be.an('array');
    });

    it('retorna array vazio caso não tenha produto com id selecionado', async () => {
      const result = await productsModels.getById();
      expect(result).to.be.an('array');
    })
  });

  describe('caso tenha produtos com id selecionado, retorna um array com objetos', () => {
    describe('o objeto deve ter as chaves ID e NAME', () => {
      const result = [[{
        id: 3,
        name: 'blusa'
      }]];

      beforeEach(() => {
        sinon.stub(connection, 'execute').resolves(result);
      });

      afterEach(() => {
        connection.execute.restore();
      })

      it('retorna um array', async () => {
        const result = await productsModels.getById();
        expect(result).to.be.an('array');
      });
      it('o objeto do array tem as chaves id e name', async () => {
        const [result] = await productsModels.getById();
        expect(result).to.includes.all.keys('id', 'name');
      })
    });
    describe('Retorna um array de objetos caso existam produtos', () => {
      const result = [[{
        id: 3,
        name: 'blusa'
      },
      {
        id: 4,
        name: 'sapato'
      }
      ]];

      beforeEach(() => {
        sinon.stub(connection, 'execute').resolves(result);
      });

      afterEach(() => {
        connection.execute.restore();
      });

      it('retorna um array com objetos caso tenham produtos', async () => {
        const [result] = await productsModels.getAll();
        expect(result).to.includes({})
        expect(result).to.be.includes.all.keys('id', 'name');
      });
    });
  });
});