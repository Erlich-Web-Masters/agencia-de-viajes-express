import express from 'express'
import {
         paguinaInicio,
         paguinaNosotros, 
         paguinaViajes , 
         paguinaTestimoniales, 
         paguinaDetalleViajes} 
         from '../controllers/index.js'
import { guardarTestimoniales } from '../controllers/testimonialController.js'

const router = express.Router()


router.get('/', paguinaInicio)
router.get('/nosotros', paguinaNosotros)
router.get('/viajes', paguinaViajes)
router.get('/viajes/:slug', paguinaDetalleViajes)
router.get('/testimoniales', paguinaTestimoniales )
router.post('/testimoniales', guardarTestimoniales )

export default router