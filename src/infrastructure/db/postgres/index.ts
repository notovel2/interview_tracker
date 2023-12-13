import { Sequelize } from 'sequelize';
import secret from '../../../constant/secret';

const db = new Sequelize(secret.db.name, secret.db.user, secret.db.password, {
    dialect: 'postgres',
    host: secret.db.host,
});

export default db;
