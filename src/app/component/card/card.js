class Card {
  constructor({
    id = makeid(63),
    title = '',
    description =  '',
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  getID() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }
}