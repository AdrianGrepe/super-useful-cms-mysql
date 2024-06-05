module.exports = {
     async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to:'contacto@superutil.mx',
                from:'contacto@superutil.mx',
                subject:'Tienes una nueva solicitud',
                text:`Tienes una nueva solicitud de ${result.name}, con el correo ${result.email}: ${result.about}`
            })
        } catch (err) {
            console.log(err);
        }
     }
}