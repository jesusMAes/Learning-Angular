const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT} = require('../helpers/jwt');

 const crearUsuario = async (req,res) => {

  const { email, name, password} = req.body

  try {
    
  //verificar el email
  const usuario = await Usuario.findOne({email:email})

  if(usuario){
    return res.status(400).json({
      ok:false,
      msg: 'El usuario con ese email ya existe'
    })
  }

  //crear usuario con el modelo
  const dbUser = new Usuario (req.body)

  //Hashear contraseña
  const salt = bcrypt.genSaltSync();
  dbUser.password = bcrypt.hashSync( password, salt);

  //generar el JWT
  const token = await generarJWT(dbUser.id, name)

  //crear user en DB
  await dbUser.save();

  //generar respuesta exitosa
  return res.status(201).json({
    ok:true,
    uid: dbUser.id,
    name: name,
    token: token

  })
    
  } catch (error) { 
    return res.status(500).json({
      ok:false,
      msg: 'Por favor hable con el administrador'
    })
  }

}

const loginUsuario = async(req,res) => {

  const {email, password} = req.body;

  try {

    const dbUser = await Usuario.findOne({email});

    if(!dbUser){
      return res.status(400).json({
        ok:false,
        msg: 'Correo o contraseña incorrectos'
      })
    }

    //confirmar si el password es correcto
    const validPassword = bcrypt.compareSync( password, dbUser.password);

    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg: 'Correo o contraseña incorrectos'
      })
    }

    //Generar el JWT
    const token = await generarJWT(dbUser.id, dbUser.name)

    //response
    return res.json({
      ok:true,
      uid:dbUser.id,
      name: dbUser.name,
      token
    })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok:false,
      msg: 'Hable con el administrador'
    })
  }
 
}



const revalidarToken = async(req,res) => {

  const {uid, name} = req;

  //generar nuevo JWT
  const token = await generarJWT(uid, name)

  return res.json({
    ok:true,
    msg: 'login de usuario /',
    uid,
    name,
    token
  })
}



module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken
}