module.exports = (sequelize, DataTypes) => {
    const Inputs = sequelize.define("Inputs", {
        target: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        achieved: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dayOfWeek: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeTaken: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
   
    Inputs.associate = (models) => {
        Inputs.belongsTo(models.Users, {
            foreignKey: 'userId'
        });
    }

    Inputs.associate = (models) => {
        Inputs.belongsTo(models.Exercises, {
            foreignKey: 'exerciseId'
        });
    }

    return Inputs;

}