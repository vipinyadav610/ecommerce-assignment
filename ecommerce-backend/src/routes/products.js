import controller from "../controllers/products";
import schema from "../joiSchema/products";
import joiMiddleware from "../middleware/joi";
module.exports = router => {
  router.route("/products").get(controller.getProductList);
  router
    .route("/products/:product_id")
    .get(
      joiMiddleware(schema.productDetail, "params"),
      controller.getProductDetails
    );
};
