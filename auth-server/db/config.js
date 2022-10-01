const mongoose = require('mongoose')

const dbConnection = async() => {

  try {

    await mongoose.connect( process.env.DB_CNN, {
      useNewUrlParser:true,
      useUnifiedTopology: true,
    });

    console.log('Base de datos online')
    
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de inicializar DB');
  }
}

module.exports = {
  dbConnection
}