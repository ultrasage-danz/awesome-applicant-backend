import request from 'supertest';
import app from '../server';

describe('GET /awesome/applicant', () => {
  it('should return applicant info', async () => {
    const response = await request(app).get('/awesome/applicant');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('fun_fact');
  });
});
