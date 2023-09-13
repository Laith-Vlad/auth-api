// const supertest = require('supertest')
// require('dotenv').config()
// const { userSequelize } = require('../src/model')
// const { app } = require('../src/server')
// const muke = supertest(app)


//   beforeAll(async () => {
//      await userSequelize.sync()
// })

// afterAll(async () =>{
//      await userSequelize.drop()
// })

// describe('server test' , () => {


//      it('signup test' , async () =>{
//           const name = 'ehab1'
//           const res = await muke.post('/signup').send({
//                username: name,
//                password : '123123',
//                role: 'admin'
//           })
//           console.log(JSON.parse(res.text));

//           expect(res.statusCode).toBe(201)
//           expect((JSON.parse(res.text).user.username)).toBe(name)

//      })

//     const base = base64.encode('ehab1:123123') 
//      it('signin test' , async () =>{
//           const res = await muke.post('/signin').set('Authorization', `Basic ${base}`)

//           // console.log(JSON.parse(res.text),'66666666666666666666666666666');
//           expect(res.statusCode).toBe(200)
//           expect(JSON.parse(res.text).message.user.username).toBe('ehab1')

//      })

//      it('get order test' , async () =>{
//           const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWIxIiwicGFzc3dvcmQiOiIkMmIkMDUkNW1GYUFCM0JYNEFjRUlzMENReDdodWZ4T1VUZGQ2dGNEdmZLeUk4VEVKQ2RhM2svQ3NBWk8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODgzMTcyOTF9.JfYUG3-Z3AtdSotZa9DxjDdieOQWTgyhGjCbq-Tdkyg'
//           const res = await muke.get('/order').set('Authorization', `Basic ${token}`)

//           // console.log(JSON.parse(res.text) , '66666666666666666666777777777777');

//           expect(res.statusCode).toBe(200)
//           expect(JSON.parse(res.text).wc).toBe("welcome , you have the access ")

//      })
//      it('post order test' , async () =>{
//           const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWIxIiwicGFzc3dvcmQiOiIkMmIkMDUkNW1GYUFCM0JYNEFjRUlzMENReDdodWZ4T1VUZGQ2dGNEdmZLeUk4VEVKQ2RhM2svQ3NBWk8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODgzMTcyOTF9.JfYUG3-Z3AtdSotZa9DxjDdieOQWTgyhGjCbq-Tdkyg'
//           const res = await muke.post('/order').set('Authorization', `Basic ${token}`)
  
//           expect(res.statusCode).toBe(200)
//           expect(JSON.parse(res.text).wc).toBe("welcome , you have the access to create a contant ")

//      })
//      it('put order test' , async () =>{
//           const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWIxIiwicGFzc3dvcmQiOiIkMmIkMDUkNW1GYUFCM0JYNEFjRUlzMENReDdodWZ4T1VUZGQ2dGNEdmZLeUk4VEVKQ2RhM2svQ3NBWk8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODgzMTcyOTF9.JfYUG3-Z3AtdSotZa9DxjDdieOQWTgyhGjCbq-Tdkyg'
//           const res = await muke.put('/order').set('Authorization', `Basic ${token}`)
  
//           expect(res.statusCode).toBe(200)
//           expect(JSON.parse(res.text).wc).toBe("welcome , you have the access to update a contant ")

//      })
//      it('delete order test' , async () =>{
//           const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVoYWIxIiwicGFzc3dvcmQiOiIkMmIkMDUkNW1GYUFCM0JYNEFjRUlzMENReDdodWZ4T1VUZGQ2dGNEdmZLeUk4VEVKQ2RhM2svQ3NBWk8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODgzMTcyOTF9.JfYUG3-Z3AtdSotZa9DxjDdieOQWTgyhGjCbq-Tdkyg'
//           const res = await muke.delete('/order').set('Authorization', `Basic ${token}`)
  
//           expect(res.statusCode).toBe(200)
//           expect(JSON.parse(res.text).wc).toBe("welcome , you have the access to delete a contant")

//      })


//      // ===============================================================================================================


process.env.SECRET = "TEST_SECRET";
require('dotenv').config()

const base64 = require("base-64")
const { app } = require('../src/server')
const { userSequelize } = require('../src/model')
const supertest = require('supertest');
const mockRequest = supertest(app);

beforeAll(async () => {
     await userSequelize.sync();
   });
   afterAll(async () => {
     await userSequelize.drop();
   });

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJwYXNzd29yZCI6IiQyYiQwNSQycXppSVRPY3JDeElsc1M2bk1oZGguQVpNdlBINE04TlVOMEtYeU5LQ0FSRkQ1ODZyVi9UUyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4ODM0NTA2MX0.c8acHRxgVrgJuQ2aGMTsiXdmWmgBg18VBUeznF0N1Zk'

let userData = {
     testUser: { username: 'user', password: 'password' , role : 'admin'},
   };
   let accessToken = null;
   
   

describe('server test' , () => {

     it('Can create a new user', async () => {

          //     const response = await mockRequest.post('/signup').send(userData.testUser);
          const response = await mockRequest.post('/signup').send({ username: 'user', password: 'password' , role : 'admin'});
          const userObject = response.body;

          expect(response.status).toBe(201);
          //     expect(userObject.token).toBeDefined();
          expect(userObject.user.id).toBeDefined();
          expect((JSON.parse(response.text).user.username)).toBe('user')
          expect(userObject.user.username).toEqual(userData.testUser.username);
          });

     it('Can signin with basic auth string', async () => {
     let { username, password } = userData.testUser;

     const response = await mockRequest.post('/signin')
          .auth(username, password);

     const userObject = response.body;
     console.log(userObject.message , '77777777777');


          expect(userObject.message.user.token).toBeDefined();
          expect(userObject.message.user.id).toBeDefined();
          expect(response.status).toBe(200);
          expect(userObject.message.user.username).toEqual(username);
     });

// =================================================================================================
     it('get all clothes' ,async () =>{
          const res = await mockRequest.get('/clothes').set('Authorization', `Basic ${token}`)
          // console.log(JSON.parse(res.text));
          const list =     [
               {
                 id: 1,
                 name : 'pants' ,
                 externalId : 1
               }
             ]
          expect(JSON.parse(res.text).name).toBe(list.name)
     })
     it('post clothes' ,async () =>{
          const res = await mockRequest.post('/clothes').set('Authorization', `Basic ${token}`).send({
               name : 'pants' ,
               externalId : 1
          })
          // console.log(JSON.parse(res.text).name);
          expect(JSON.parse(res.text).name).toBe('pants')
     })
     it('post clothes 2' ,async () =>{
          const res = await mockRequest.post('/clothes').set('Authorization', `Basic ${token}`).send({
               name : 'pants 2' ,
               externalId : 2
          })
          // console.log(JSON.parse(res.text).name);
          expect(JSON.parse(res.text).name).toBe('pants 2')
     })
     it('get one clothe' ,async () =>{
          const res = await mockRequest.get('/clothes/2').set('Authorization', `Basic ${token}`)
          // console.log(JSON.parse(res.text).name);

          expect(JSON.parse(res.text).name).toBe('pants 2')
     })
    
     it('update Clothe' ,async () =>{
          const res = await mockRequest.put('/clothes/1').set('Authorization', `Basic ${token}`).send({
               name : 'shirt',
               externalId : 3
          })
          // console.log(JSON.parse(res.statusCode) , '77777777777777777777777');

          expect(res.statusCode).toBe(202)
     })

     it('delteteClothe' ,async () =>{
          const res = await mockRequest.delete('/clothes/1').set('Authorization', `Basic ${token}`)
          

          expect(res.status).toBe(204)
     })


})


'use strict';






// describe('Auth Router', () => {


// }





//   it('Can signin with bearer auth token', async () => {
//     let { username, password } = userData.testUser;

//     // First, use basic to login to get a token
//     const response = await mockRequest.post('/signin')
//       .auth(username, password);

//     accessToken = response.body.message.token;

//     // First, use basic to login to get a token
//     const bearerResponse = await mockRequest
//       .get('/users')
//       .set('Authorization', `Bearer ${accessToken}`);

//     // Not checking the value of the response, only that we "got in"
//     expect(bearerResponse.status).toBe(200);
//   });

//   it('basic fails with known user and wrong password ', async () => {

//     const response = await mockRequest.post('/signin')
//       .auth('admin', 'xyz')
//     const { user, token } = response.body;

//     expect(response.status).toBe(403);
//     expect(response.text).toEqual("Invalid Login");
//     expect(user).not.toBeDefined();
//     expect(token).not.toBeDefined();
//   });

//   it('basic fails with unknown user', async () => {

//     const response = await mockRequest.post('/signin')
//       .auth('nobody', 'xyz')
//     const { user, token } = response.body;

//     expect(response.status).toBe(403);
//     expect(response.text).toEqual("Invalid Login");
//     expect(user).not.toBeDefined();
//     expect(token).not.toBeDefined();
//   });

//   it('bearer fails with an invalid token', async () => {

//     // First, use basic to login to get a token
//     const response = await mockRequest.get('/users')
//       .set('Authorization', `Bearer foobar`)
//     const userList = response.body;

//     // Not checking the value of the response, only that we "got in"
//     expect(response.status).toBe(403);
//     expect(response.text).toEqual("Invalid Login");
//     expect(userList.length).toBeFalsy();
//   });

//   it('Succeeds with a valid token', async () => {

//     const response = await mockRequest.get('/users')
//       .set('Authorization', `Bearer ${accessToken}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toBeTruthy();
//     expect(response.body).toEqual(expect.anything());
//   });

//   it('Secret Route fails with invalid token', async () => {
//     const response = await mockRequest.get('/secret')
//       .set('Authorization', `bearer accessgranted`);

//     expect(response.status).toBe(403);
//     expect(response.text).toEqual("Invalid Login");
//   });
// });