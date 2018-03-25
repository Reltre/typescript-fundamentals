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
  
  let cart: CartAPI = { 
    add(name: string, price: number, qty: number = 1): CartAPI {
      items.push({name, price, qty})
      return this; 
    }, 
    addItem(item: CartItem): CartAPI {
      items.push(item);
      return this; 
    }, 
    get length() { 
      return items.reduce((len, item) => len + item.qty, 0); 
    }, 
    get total() { 
      return items.reduce((tot, item) => tot + item.price * item.qty, 0);
    }  
  }

  return cart;
}
