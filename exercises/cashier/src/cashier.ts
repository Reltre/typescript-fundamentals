interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  add(name: string, price: number, qty: number): CartAPI;
  addItem(item: CartItem): CartAPI;
  length: number;
  total: number;
}

export function cashier() {
  let items: CartItem[] = [];

  function updateCart(price: number, qty: number) {
    for(let idx = 0; idx < qty; idx++) {
      cart.total += price;
      cart.length++;
    }
  }
  
  let cart: CartAPI = { 
    add(name: string, price: number, qty: number = 1): CartAPI {
      items.push({name, price, qty})
      updateCart(price, qty);
      return this; 
    }, 
    addItem(item: CartItem): CartAPI {
      items.push(item);
      updateCart(item.price, item.qty);
      return this; 
    }, 
    length: 0, 
    total: 0 
  }

  return cart;
}
