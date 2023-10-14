module.exports = (sequelize, DataTypes) => {
    const MonthlySummary = sequelize.define("MonthlySummary", {
        month: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          totalTarget: {
            type: DataTypes.INTEGER,
          },
          totalAchieved: {
            type: DataTypes.INTEGER,
          },
          totalTimeTaken: {
            type: DataTypes.INTEGER,
          },
    });
   

    return MonthlySummary;

}