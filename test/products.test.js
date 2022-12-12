import assert from "assert";
import ProductAPI from "../api/products.api.js";
import ProductController from "../controller/products.controller.js";

describe("Test integration", function () {
  it("the api must return 2 elements", async () => {
    const products = new ProductAPI();
    console.log("from test: ", await products.getProducts());

    assert.equal(await products.getProducts().length, 2);
  });
});
