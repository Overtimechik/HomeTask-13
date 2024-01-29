import { DeliveryType } from "../models/order-types";
import { Client } from "../models/order-types";
import { Order } from "../models/order-types";
//variables
let min = 0
let max = 3
let num_of_client = Math.floor(Math.random() * (max - min + 1) + min)
let num_of_addres = Math.floor(Math.random() * (max - min + 1) + min)
let num_of_order = Math.floor(Math.random() * (max - min + 1) + min)

//all users
const users: Client[] = [
    {
    id: "c4bf3184-b21d-4d8a-a2eb-4c1e183b3003",
    firstName: "Андрей",
    lastName: "Жучко",
    },
    {
        id: "acbf3184-h51d-4d8a-a2eb-4c1e183b3003",
        firstName: "Алексей",
        lastName: "Кривец",
    },
    {
            id: "asgf3184-b21d-4d8a-a2eb-4c1e1sab1203",
            firstName: "Анастасия",
            lastName: "Ломаева",
    },
    {
        id: "c4bf3184-b21d-438a-aweq-4c1e183b8614",
        firstName: "Антон",
        lastName: "Ларцев",
    },
];


//all adreses
const Addreses: DeliveryType[] = [
  {
    street: "Вильс",
    house: "23/3",
    apartment: 51,
  },
  {
    street: "Лермонтова",
    house: "21",
    apartment: 68,
  },
  {
    street: "Чокина",
    house: "11",
    apartment: 32,
  },
  {
    street: "Мира",
    house: "2/1",
    apartment: 11,
  }
];

export let main_orders :Order[]= []

for(let i = 0;i<users.length;i++){
    //generate main data
const user :Client = users[Math.floor(num_of_client)];
const myAddres :DeliveryType = Addreses[Math.floor(num_of_addres)];
//format the order
const order: Order = {
    client: user,
    delivery: {
      dataTime: new Date(),
      type: myAddres,
    },
    basket: {
      products: [],
      total: 0,
    },
  };
main_orders.push(order)
}
export const finall_order = main_orders[Math.floor(num_of_order)]

