module.exports = {
     async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to:'noreply@resquivel.com',
                from:'noreply@resquivel.com',
                subject:'Tienes una nueva solicitud',
                text:`Tienes una nueva solicitud de ${result.name}, con el correo ${result.email}: ${result.about}`
            })
        } catch (err) {
            console.log(err);
        }
     }
}