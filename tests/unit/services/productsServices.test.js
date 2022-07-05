// const { expect } = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../services/productsServices');
const productsModels = require('../../../models/productsModels')


describe('Testes camada services ', () => {
  describe('caso não haja produtos, retorna um array vazio', () => {
    const result = [[]];

    beforeEach(() => {
      sinon.stub(productsModels, 'getAll').resolves(result);
    });

    afterEach(() => {
      productsModels.getAll.restore();
    })

    it('retorna um array vazio caso não tenha produtos', async () => {
      const result = await productsServices.getAll();
      expect(result).to.be.an('array');
    });

  });

  describe('Caso não tenha produto com id selecionado retorna ', () => {
    const result = [[]];
    beforeEach(() => {
      sinon.stub(productsModels, 'getById').resolves(result);
    });

    afterEach(() => {
      productsModels.getById.restore();
    });

    it('retorna um array caso tenha produto com id selecionado', async () => {
      const result = await productsServices.getById();
      // expect(productsServices.calledWith('id')).to.be.equal(true);
      expect(result).to.be.a('array');
    });
  });



  // describe('caso haja erro na retorno da função', () => {

  //   beforeEach(() => {
  //     sinon.stub(productsModels, 'getById').rejects();
  //   });

  //   afterEach(() => {
  //     productsModels.getById.restore();
  //   })

  //   it('retorna erro ao passar id não válido', async () => {
  //     const result = await productsServices.getAll();
  //     expect(result).to.be.rejected;
  //   });
  // });

  describe('A getAll retorna array de produtos caso tenha sucesso', () => {
    describe('Um array de objetos', () => {
      const result = [[{
        id: 3,
        name: 'blusa'
      }]];

      beforeEach(() => {
        sinon.stub(productsModels, 'getAll').resolves(result);
      });

      afterEach(() => {
        productsModels.getAll.restore();
      })

      it('retorna um array', async () => {
        const result = await productsServices.getAll();
        expect(result).to.be.an('array');
      });
    });


    describe('caso tenha produtos com id selecionado, retorna um array com objetos', () => {
      describe('o objeto deve ter as chaves ID e NAME', () => {
        const result = [[{
          id: 3,
          name: 'blusa'
        }]];

        beforeEach(() => {
          sinon.stub(productsModels, 'getById').resolves(result);
        });

        afterEach(() => {
          productsModels.getById.restore();
        })

        it('retorna um array', async () => {
          const result = await productsServices.getById();
          expect(result).to.be.an('array');
        });
      });
    });
  });
});