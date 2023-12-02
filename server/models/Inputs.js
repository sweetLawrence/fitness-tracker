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
        date:{
            type: DataTypes.DATE,
        },
        month:{
            type: DataTypes.STRING,
        },
        weight:{
            type: DataTypes.INTEGER,
        },
        height:{
            type: DataTypes.INTEGER,
        }
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