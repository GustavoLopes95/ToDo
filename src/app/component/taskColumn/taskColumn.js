class TaskColumn {
  constructor({
    id = makeid(63),
    title = '',
    cards = []
  }) {
    this.id = id;
    this.title = title;
    this.cards = cards;

    return this;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  addCard = (card) => {
    if(card instanceof Card) {
      this.cards.push(card);
    }
  }

  removeCard = (cardID) => {
    this.cards = [ ...cards].filter(card => card.getID() === cardID);
  }
}