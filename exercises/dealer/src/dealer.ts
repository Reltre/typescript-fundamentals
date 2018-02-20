/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

type Card = [number, number];


export enum CardNumber {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

export enum Suit {
  Club, Diamond, Heart, Spade
}

export class Dealer {
  deck: Card[];
  constructor() {
    this.deck = this.generateDeck();
    shuffleArray(this.deck);
  }

  readCard(card: Card): string {
    let suit = Suit[card[0]];
    let cardNumber = CardNumber[card[1]];
    return `${cardNumber} of ${suit}s`;
  }

  getLength(): number {
    return this.deck.length;
  }

  dealHand(numberOfCards: number): Card[] {
    if (numberOfCards > this.deck.length || numberOfCards < 0) {
      throw "Invalid number of cards requested." ;
    }
    let hand: Card[] = [];
    for(let i = 0; i < numberOfCards; i++) {
      hand.push(this.deck[i]);
    }
    this.deck = this.deck.slice(numberOfCards);
    return hand;
  }

  private generateDeck() {
    let deck: Card[] = [];
    for(let card in CardNumber) {
      if (isNaN(Number.parseInt(card))) {
        break;
      }
      for(let suit in Suit) {
        if (isNaN(Number.parseInt(suit))) {
          break;
        }
        deck.push([Number.parseInt(suit), Number.parseInt(card)]);
      }
    }
    return deck;
  }
}
