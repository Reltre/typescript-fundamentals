interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

interface INode<T> {
  data: T;
  next: INode<T> | undefined;
}

class Node<T> implements INode<T> {
  data: T;
  next:  INode<T> | undefined;

  constructor(data: T) {
    this.data = data;
  }
}

export class Stack<T> implements IStack<T> {
  private head: Node<T> | undefined;

  length(): number {
    let length = 0;
    let node = this.head;
    while(node) {
      length += 1;
      node = node.next;
    }
    return length;
  }

 
  push(item: T): Stack<T>;
  push(items: T[]): Stack<T>;
  push(itemOrArray: T| T[]): Stack<T> {
    if (itemOrArray instanceof Array) {
      itemOrArray.forEach((obj: T) => this.push(obj) );
    } else {
      this.setNode(itemOrArray);
    }
    return this;
  }

  pop(): T | undefined {
    if (!this.head) return undefined; 

    let item = this.head.data;
    this.head = this.head.next;
    return item;
  }

  print(): void {
    let node = this.head;
    while(node) {
      console.log(node.data);
      node = node.next;
    }
  }

  private setNode(item: T) {
    let node = new Node(item);
    node.next = this.head;
    this.head = node;
  }
}