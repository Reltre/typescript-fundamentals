type Card = [Suit, CardNumber];


export enum CardNumber {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

export enum Suit {
  Club, Diamond, Heart, Spade
}

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

function generateDeck() {
  let deck: Card[] = [];
  for(let card in CardNumber) {
    const cardValue = Number.parseInt(card);
    if (isNaN(cardValue)) {
      break;
    }
    for(let suit in Suit) {
      const suitValue = Number.parseInt(suit);
      if (isNaN(suitValue)) {
        break;
      }
      deck.push([suitValue, cardValue]);
    }
  }
  return deck;
}

export class Dealer {
  deck: Card[];
  constructor() {
    this.deck = generateDeck();
    shuffleArray(this.deck);
  }

  readCard(card: Card): string {
    let [suit, cardNumber] = [Suit[card[0]], CardNumber[card[1]]];
    return `${cardNumber} of ${suit}s`;
  }

  getLength(): number {
    return this.deck.length;
  }

  dealHand(numberOfCards: number): Card[] {
    if (numberOfCards > this.getLength()) throw Error('Not enough cards in deck.');
    if (numberOfCards <= 0) throw Error('You can\'t ask for less than 1 card');
    return this.deck.splice(this.getLength() - numberOfCards, numberOfCards)
  }
}
