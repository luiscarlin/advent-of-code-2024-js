export class DefaultMap extends Map {
  constructor(defaultValueFactory, ...args) {
    super(...args);
    this.defaultValueFactory = defaultValueFactory;
  }

  get(key) {
    if (!this.has(key)) {
      this.set(key, this.defaultValueFactory());
    }
    return super.get(key);
  }
}
