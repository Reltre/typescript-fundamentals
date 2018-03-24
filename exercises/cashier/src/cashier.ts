interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  add: object;
  addItem: object;
  length: number;
  total: number;
}

export function cashier() {
  function updateCart(price: number, qty: number) {
    for(let idx = 0; idx < qty; idx++) {
      cart.total += price;
      cart.length++;
    }
  }
  
  let cart: CartAPI = { 
    add: function(name: string, price: number, qty: number = 1): CartAPI {
      updateCart(price, qty);
      return this; 
    }, 
    addItem: function({name, price, qty}: CartItem): CartAPI {
      updateCart(price, qty);
      return this; 
    }, 
    length: 0, 
    total: 0 
  }

  return cart;
}
