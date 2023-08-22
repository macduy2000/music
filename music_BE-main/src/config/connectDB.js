const { Sequelize } = require('sequelize');
require ("dotenv").config()

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD, {
  host:process.env.DB_HOST, // co the la localhost hoawc dia chi server cua ta
  dialect: "mysql",
  logging:false // khoong cho phep in ra cau lenh select
});

// kiem tra ket nois toi database 
let connect=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports=connect