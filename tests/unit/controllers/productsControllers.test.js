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
      name:'bolsa'
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

  // describe('caso tenha produtos com id selecionado, retorna um array com objetos', () => {
  //   describe('o objeto deve ter as chaves ID e NAME', () => {
     

  //     beforeEach(() => {
       
  //     });

  //     afterEach(() => {
       
  //     })

  //     it('retorna um array', async () => {
       
  //     });
  //     it('o objeto do array tem as chaves id e name', async () => {
        
  //     })
  //   });

  //   describe('Retorna um array de objetos caso existam produtos', () => {
  //     const result = [[{
  //       id: 3,
  //       name: 'blusa'
  //     },
  //     {
  //       id: 4,
  //       name: 'sapato'
  //     }
  //     ]];

  //     beforeEach(() => {
  //       sinon.stub(productsServices, 'getAll').resolves(result);
  //     });

  //     afterEach(() => {
  //       productsServices.getAll.restore();
  //     });

  //     it('retorna um array com objetos caso tenham produtos', async () => {
  //       const [result] = await productsServices.getAll();
  //       expect(result).to.includes({})
  //       expect(result).to.be.includes.all.keys('id', 'name');
  //     });
  //   });
  // });
});