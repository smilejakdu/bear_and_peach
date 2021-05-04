/**
 * @swagger
 * /user: 
 *   get:
 *     tags:
 *       - Users
 *     name: Get user
 *     summary: Get user
 *     parameters:
 *       - in: header
 *         name: Authentication
 *         schema:           
 *           type: string
 *     responses:
 *       '200':
 *         description: Get User
 *       '404':
 *         fail
 * 
 * /user/signin: 
 *   post:
 *     tags:
 *       - Users
 *     name: User Sign in
 *     summary: User Sign in
 *     desciption: User sign in
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nickname
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string     
 *     responses:
 *       '200':
 *         description: Get User
 *       '404':
 *         fail
 * 
 * /user/signup: 
 *   post:
 *     tags:
 *       - Users
 *     name: User SignUp
 *     summary: User Sign Up
 *     desciption: User sign up
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:  
 *           properties:
 *             user_id:
 *               type: string
 *             user_pwd: 
 *               type: string
 *             images:
 *               type: array
 *               items:
 *                 type: string
 *             deliv_info: 
 *               type: array
 *               items:
 *                 type: object
 *                 properties: 
 *                   base_address:
 *                     type: string
 *           example:
 *             user_id: sctest1
 *             user_name : sctest1
 *             user_pwd : "123123"
 *             images : [
 *               "images/users/2021-02-0512:17:21/광고2.png",
 *               "images/users/2021-02-0512:17:21/광고2.png"
 *             ]
 *             deliv_info : [
 *               {
 *                  "base_address":"서울시 강남구",
 *                  "detail_address":"서울 파이낸스 센터 1302호",
 *                  "zipcode":"53223"
 *               },
 *               {
 *                  "base_address":"서울시 강남구",
 *                  "detail_address":"서울 파이낸스 센터 1302호",
 *                  "zipcode":"53223"
 *               }
 *             ]  
 *     
 *     responses:
 *       '200':
 *         description: Get User
 *       '404':
 *         fail
 * 
 */
