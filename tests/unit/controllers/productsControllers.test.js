const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../services/productsServices');
const productsControllers = require('../../../controllers/productsControllers');


describe('Testes camada controllers ', () => {
  describe('Retorna em caso de sucesso, um array com objetos', () => {
    const req = {};
    const res = {};
    const next = () => { };
    const resolve = [{
      id: 1,
      name: 'bolsa'
    }]
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAll').resolves(resolve);
    });

    afterEach(() => {
      productsServices.getAll.restore();
    })

    it('é chamado o método "status" com o código 200', async () => {
      await productsControllers.getAll(req, res, next);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('chamado o método "json" passando um array', async () => {
      await productsControllers.getAll(req, res, next);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  // describe('Retorna em caso de sucesso com id selecionado', () => {
  //   const req = {};
  //   const res = {};
  //   const next = () => { };
  //   const resolve = [{
  //     id: 1,
  //     name: 'bolsa'
  //   }]
  //   beforeEach(() => {
  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub().returns();
  //     sinon.stub(productsServices, 'getById').resolves(resolve);
  //   });

  //   afterEach(() => {
  //     productsServices.getById.restore();
  //   })

  //   it('é chamado o método "status" com o código 200', async () => {
  //     await productsControllers.getById(req, res, next);
  //     expect(res.status.calledWith(200)).to.be.equal(true);
  //   });

  //   it('chamado o método "json" passando um array', async () => {
  //     await productsControllers.getById(req, res, next);
  //     expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
  //   });
  // });
});