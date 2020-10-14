import Sequelize from 'sequelize';

import Creditor from '../app/models/Creditor';
import User from '../app/models/User';
import CreditorType from '../app/models/CreditorType';
import Bill from '../app/models/Bill';
import Frequency from '../app/models/Frequency';

import databaseConfig from '../config/database';

const models = [Creditor, User, CreditorType, Bill, Frequency];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
