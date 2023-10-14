    module.exports = (sequelize, DataTypes) => {
    const Exercises = sequelize.define("Exercises", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    });
    
    Exercises.associate = (models) => {
        Exercises.hasMany(models.Inputs, { 
            foreignKey: 'exerciseId', 
            onDelete: 'CASCADE'
         });
    }

   
    return Exercises;

}