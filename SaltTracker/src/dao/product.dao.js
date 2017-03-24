import Product from "../models/product.model";
export default class ProductDao {
  static products = [
    new Product(1, 'Pindakaas', '/Users/svalstar/Development/JavaScript/react/native/SaltTracker/SaltTracker/assets/img/pindakaas.JPG', 2),
    new Product(2, 'Stroop', 'picture of pindakaas', 1.5),
    new Product(3, 'Pasta', 'picture of pindakaas', 0.25),
  ];

  static getProducts() {
    return this.products;
  }
}