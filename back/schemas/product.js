/**
 * @swagger
 * /product: 
 *   get:
 *     tags:
 *       - Product
 *     name: Get product
 *     summary: Get product
 *     parameters:
 *       - in: query
 *         name: product_idx
 *         schema:           
 *           type: object
 *           properties:
 *             name: 
 *               type: number
 *     responses:
 *       '200':
 *         description: Get Product
 *       '404':
 *         fail
 *  
 *   post:
 *     tags:
 *       - Product
 *     name: Register Product
 *     summary: Register Product
 *     desciption: Register Product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:  
 *           properties:
 *             goods_name:
 *               type: string
 *             goods_price: 
 *               type: integer
 *             images:
 *               type: array
 *               items:
 *                 type: string
 *             brand_idx:
 *               type: number
 *             category_idx:
 *               type: integer
 *           example:
 *             goods_name: sctest1
 *             goods_price : 3000
 *             images : [
 *               "images/users/2021-02-0512:17:21/광고2.png",
 *               "images/users/2021-02-0512:17:21/광고2.png"
 *             ]
 *             brand_idx : 1
 *             category_idx : 1
 *     
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 * 
 */
