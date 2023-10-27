export const mapProducts = (products, names) => {
  let combinedData = {};
  const productsList = products.Value.Goods;
  const rawNames = names;
  productsList.forEach((product) => {
    const groupId = product.G;
    const productId = product.T;
    const categoryData = rawNames[groupId];
    if (categoryData) {
      const productData = categoryData.B[productId];
      if (productData) {
        const combinedProduct = {
          N: productData.N,
          C: product.C,
          P: product.P,
        };
        if (!combinedData[groupId]) {
          combinedData[groupId] = { G: categoryData.G, B: {} };
        }

        combinedData[groupId].B[productId] = combinedProduct;
      }
    }
  });
  return combinedData;
};
