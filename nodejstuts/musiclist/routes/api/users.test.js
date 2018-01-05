//access supertest module with this request
const request = require('supertest');

//Top Level: entire User API
describe('The User API', () => {

	//specific test within API
	it('Returns a list of all users', async () => {

		//connection to server and get response Should be 200 and JSON
		const res = await request('http://localhost:3000')
		  .get('/api/users/list')
		  .expect(200)
		  .expect('Content-Type', /json/);

		  //the expects are JEST
		  //first expect to get a result that is an array
		  expect(Array.isArray(res.body)).toBe(true);
		  //next expect to get something in it
		  expect(res.body.length).toBeGreaterThan(0);
		  // third expect username to be returned as administrator first
		  expect(res.body[0].username).toBe('administrator')
	});
});
