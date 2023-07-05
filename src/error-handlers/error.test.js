'use strict';
const request = require('supertest');
const { server } = require('../server');

describe('not found and bad method', () => {
  test('should respond with a 404 error for non-existing routes', async () => {
    const response = await request(server).get('/adsasd');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: 404,
      message: 'Sorry, we could not find what you were looking for'
    });
  });

  test('should respond with a 404 error for bad method', async () => {
    const response = await request(server).post('/api/v1/food/1'); // Modified the route path

    expect(response.status).toBe(404);
  });


});