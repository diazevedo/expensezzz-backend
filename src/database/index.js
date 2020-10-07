import Sequelize from 'sequelize';

import Creditor from '../app/models/Creditor';

import databaseConfig from '../config/database';

const models = [Creditor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
