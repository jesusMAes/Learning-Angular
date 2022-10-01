
const { Router} = require('express')

const router = Router();

//rutas
//nuevo usuario
router.post( '/new', (req,res) => {

  return res.json({
    ok:true,
    msg: 'crear usuario /new'
  })
})

//login
router.post( '/', (req,res) => {

  return res.json({
    ok:true,
    msg: 'login de usuario /'
  })
});

//validar token
router.get('/renew', (req,res) => {
  return res.json({
    ok:true,
    msg: 'login de usuario /'
  })
})


module.exports = router;