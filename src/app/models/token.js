class Token {
  constructor({
    payload = ''
  }) {
    this.payload = payload;
  }

  getPayload() {
    return this.payload;
  }

  setPayload(payload) {
    this.payload = payload;
  }
}