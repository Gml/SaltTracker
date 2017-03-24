import Product from "../models/product.model";
export default class ProductDao {
  static products = [
    new Product(1, 'Pindakaas', 'picture of pindakaas', 2),
    new Product(2, 'Stroop', 'picture of pindakaas', 2),
    new Product(3, 'Pasta', 'picture of pindakaas', 2),
  ];

  static getProducts() {
    return this.products;
  }
}