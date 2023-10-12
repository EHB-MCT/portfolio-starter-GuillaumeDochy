const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Calendar API', () => {
  it('should create a new event', (done) => {
    chai
      .request(app)
      .post('/api/events')
      .send({
        title: 'Test Event',
        description: 'This is a test event',
        start: new Date(),
        end: new Date(),
        priority: 'high',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', 'Test Event');
        done();
      });
  });
});