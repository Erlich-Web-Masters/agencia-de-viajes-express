import {Testimonial} from '../models/Testimoniales.js'

const guardarTestimoniales = async(req,res) => {
    const {nombre , correo, mensaje} = req.body

    const errores = []
    if(nombre.trim() === ''){
        errores.push({mensaje : "El nombre está vacío"})
    }
    if(correo.trim() === ''){
        errores.push({mensaje : "El correo está vacío"})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje : "El mensaje está vacío"})
    }

    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            h1 : 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
    })
    }else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')
        } catch (error) {
            console.error(error)
        }
    }
}

export {
    guardarTestimoniales
}