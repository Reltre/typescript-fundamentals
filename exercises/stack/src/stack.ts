interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
  head: INode<T> | null;
  tail: INode<T> | null;
  current: INode<T> | null;
}

interface INode<T> {
  data: T;
  next: INode<T> | null;
  prev: INode<T> | null;
}

class Node<T> implements INode<T> {
  data: T;
  next:  INode<T> | null;
  prev: INode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

}

export class Stack<T extends String> implements IStack<T> {
  private items: T[];
  head: Node<T> | null;
  tail: Node<T> | null;
  current: Node<T> | null;
  _length: number;

  constructor(){
    this.items = [];
    this.head = null;
    this.tail = null;
    this.current = this.head;
    this._length = 0;
  }

  length(): number {
    return this._length;
  }

 
  push(item: T): Stack<T>;
  push(item: T[]): Stack<T>;
  push(item: T| T[]): Stack<T> {
    if (typeof item === "string") {
      this.setNode(item);
      this._length += 1;
    } else if (typeof item === "object") {
      item.forEach((obj: T) => { 
        this.setNode(obj);
        this._length += 1;
      });
    }
    return this;
  }

  pop(): T | undefined {
    if (this.current !== null && this.current.prev !== null) { 
      let item = this.current.data;
      this.current = this.current.prev;
      this.current.next = null;
      this._length -= 1;
      return item;
    } 
  }

  print(): void {
    console.log(this);
  }

  private setNode(item: T) {
    if (this.head === null) {
      this.head = new Node(item);
      this.current = this.head;
    } else if (this.head !== null &&  this.head.next === null) {
      this.current = new Node(item);
      this.head.next = this.current;
      this.current.prev = this.head;
    } else if (this.current !== null && this.head.next !== null) {
      this.current.next = new Node(item);
      this.current.next.prev = this.current;
      this.current = this.current.next;
    }
  }
}