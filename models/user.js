module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: DataTypes.STRING,
      password2: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.CHAR,
      birth: DataTypes.STRING,
      agree_select: DataTypes.TINYINT,
      reception_phone: DataTypes.TINYINT,
      reception_email: DataTypes.TINYINT
    },
    { timestamps: true }
  );
};
