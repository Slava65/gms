module.exports = (sequelize, Sequelize) => {
  const Mem = sequelize.define(
    "mems",
    {
      mem_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Mem;
};
