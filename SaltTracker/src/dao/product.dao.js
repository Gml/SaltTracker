import Product from "../models/product.model";
export default class ProductDao {
  static products = [
    new Product(1, 'Pindakaas', 'https://www.ah.nl.kpnis.nl/static/product/AHI_434d50313935363437_1_LowRes_JPG.JPG', 2),
    new Product(2, 'Appelstroop', 'https://www.ah.nl.kpnis.nl/static/product/AHI_434d50303133303538_2_LowRes_JPG.JPG', 1.5),
    new Product(3, 'Nutella', 'https://www.ah.nl.kpnis.nl/static/product/AHI_434d50323235323332_2_LowRes_JPG.JPG', 0.25),
  ];

  static getProducts() {
    return this.products;
  }
}