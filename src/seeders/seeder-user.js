'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'PhongAnh',
      lastName: 'Apo',
      address: 'USA',
      phoneNumber: '0379010193',
      gender: '1',
      image: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/307847357_107868825411790_7739029817359699306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=pJJfqFcfF1UAX8NGPHb&_nc_ht=scontent.fhan5-2.fna&oh=00_AfDXxh3SxvrHOXhb0EKKAwigQgDtxIHS_GKZo6H4n6CzmA&oe=63AFBE9C',
      roleId: 'R1',
      positionId: 'doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
