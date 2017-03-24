import Consumption from "../models/consumption.model";
import ProductDao from "./product.dao";

export default class ConsumptionDao {
  static consumptions = [
    new Consumption(1, 1, 100, '01-01-2017'),
  ];

  static getConsumptions() {
    return this.consumptions;
  }

  static addConsumption(consumption) {
    console.log('consumption',  consumption)
    this.consumptions.push(consumption);
  }

  static getTotalIntake() {
    let totalIntake = 0;
    ConsumptionDao.getConsumptions()
      .forEach((consumption) => {
        let product = ProductDao.getProducts().find(product => product.id === consumption.productId)
        totalIntake += (product.saltUnitsPer100Grams/100) * consumption.quantity
      });
    console.log('total intake', totalIntake);
    return totalIntake;
  }
}