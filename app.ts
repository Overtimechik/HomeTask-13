import { catalogue } from "./src/models/Catalog";
import { BasketProduct, Client } from "./src/models/order-types";
import { DeliveryType } from "./src/models/order-types";
import { Order } from "./src/models/order-types";
import { finall_order } from "./src/assets/For_order";

const products: BasketProduct[] = [];
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 50);
  const selectedProduct = catalogue.products[random];
  products.push(selectedProduct);
}

finall_order.basket = {
  products,
  total: products.reduce(
    (sum, currentProduct) => sum + currentProduct.price,
    0
  ),
};
console.log(finall_order);
