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
 *             main_image_path:
 *               type: string
 *             title:
 *               type: string
 *             price:
 *               type: integer
 *             sub_image_path:
 *               type: array
 *               items:
 *                 type: string
 *             detail_info:
 *               type: array
 *               items:
 *                 type: string
 *           example:
 *             main_image_path: main_image_path
 *             title: title
 *             price : 3000
 *             sub_image_path : [
 *               "sub_image_path1",
 *               "sub_image_path2"
 *             ]
 *             detail_info : [
 *               "detail_info1",
 *               "detail_info2"
 *             ]
 *
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 *
 * 
 *   put:
 *     tags:
 *       - Product
 *     name: Update Product
 *     summary: Update Product
 *     desciption: Update Product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           properties:
 *             product_idx:
 *               type: integer
 *             main_image_path:
 *               type: string
 *             title:
 *               type: string
 *             price:
 *               type: integer
 *             sub_image_path:
 *               type: array
 *               items:
 *                 type: string
 *             detail_info:
 *               type: array
 *               items:
 *                 type: string
 *           example:
 *             product_idx : 34
 *             main_image_path: main_image_path
 *             title: title
 *             price : 3000
 *             sub_image_path : [
 *               "sub_image_path1",
 *               "sub_image_path2"
 *             ]
 *             detail_info : [
 *               "detail_info1",
 *               "detail_info2"
 *             ]
 *
 *     responses:
 *       '200':
 *         description: Register goods
 *       '404':
 *         fail
 * 
 *   delete:
 *     tags:
 *       - Product
 *     name: Delete Product
 *     summary: Delete Product
 *     desciption: Delete Product 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product_idx
 *         in: formData
 *         required: true
 *         type: string
 *     
 *     responses:
 *       '200':
 *         description: Successfully delete Product 
 *       '404':
 *         fail
 * 
 */
