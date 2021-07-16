import { Viajes } from '../models/Viajes.js'
import {Testimonial} from '../models/Testimoniales.js'

const title = 'Agencia de viajes'

const paguinaInicio = async(req, res) => {

    try {

        const promiseDB = []

        promiseDB.push(Viajes.findAll({limit:3}))
        promiseDB.push(Testimonial.findAll({limit:3}))

        const resultado = await Promise.all(promiseDB)
        res.render('inicio', {
        title,
        h1 : 'Inicio',
        clase:'home',
        viajes : resultado[0],
        testimoniales : resultado[1]
    }) 
    } catch (error) {
        
    }

}
const paguinaNosotros = (req, res) => res.render('nosotros', {
    h1 : 'Nosotros'
})

const paguinaViajes = async (req, res) => {
const viajes = await Viajes.findAll()
    res.render('viajes' , {
        h1 : 'Próximos viajes',
        viajes
    })
}

const paguinaDetalleViajes =  async(req,res) => {
   const {slug} = req.params 

   try {
       const viaje = await Viajes.findOne({ where : {slug}})
       res.render('viaje',{
           h1: 'Información Viaje',
           viaje
       })
   } catch (error) {
       console.error(error)
   }
}

const paguinaTestimoniales = async(req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales' , {
        h1 : 'Testimoniales',
        testimoniales
    })
}
export {
    paguinaInicio,
    paguinaNosotros,
    paguinaViajes,
    paguinaTestimoniales,
    paguinaDetalleViajes
}