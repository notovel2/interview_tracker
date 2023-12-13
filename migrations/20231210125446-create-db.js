'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createDatabase('database_development');
    await queryInterface.createDatabase('database_test');
    await queryInterface.createDatabase('database_production');
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropDatabase('database_development');
    await queryInterface.dropDatabase('database_test');
    await queryInterface.dropDatabase('database_production');
  }
};