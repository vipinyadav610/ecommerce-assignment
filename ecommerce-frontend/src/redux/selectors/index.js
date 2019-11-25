export const filterCart = store => {
  return store.product.products.filter(({ id }) => {
    return store.product.cart.includes(id);
  });
};

export const filterCartCount = store => {
  return store.product.products.filter(({ id }) => {
    return store.product.cart.includes(id);
  }).length;
};
