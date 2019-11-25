import { phones } from "../data/products";

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Products
 *     description: get products list
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *            type: string
 *         description: This is page number
 *       - in: query
 *         name: page_size
 *         required: true
 *         schema:
 *            type: string
 *         description: This is number of records per page
 *     responses:
 *       200:
 *         description: success response
 *       400:
 *         description: operation failed
 *       500:
 *         description: database error
 */
const getProductList = async (req, res) => {
  const { page, page_size } = req.query;
  const offset = (page - 1) * page_size;
  res.status(200).json({
    success: true,
    data: phones
  });
};

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   get:
 *     tags:
 *       - Products
 *     description: get product details
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: success response
 *       400:
 *         description: operation failed
 *       500:
 *         description: database error
 */
const getProductDetails = async (req, res) => {
  const { product_id } = req.params;

  const phoneDetail = phones.find(phone => {
    return Number(product_id) === phone.id;
  });

  res.status(200).json({
    success: true,
    data: phoneDetail
  });
};

export default {
  getProductList,
  getProductDetails
};
