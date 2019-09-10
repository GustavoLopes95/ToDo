class User {

  constructor({
    id = '',
    name = '',
    username = '',
    email = '',
    password_was_changed = '',
    tree  =  [],
    rules = [],
    profiles = [],
  }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password_was_changed = password_was_changed;
    this.tree = tree;
    this.rules = rules;
    this.profiles = profiles;
  }

}