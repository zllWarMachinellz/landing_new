
import {defineAction} from 'astro:actions';
import {z} from 'astro:schema';
import { transporter } from '../utils/transporterNodemailer';

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

export const server = {
    sentMail: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string({message: "El campo nombre es obligatorio"}).min(2,{message: "Nombre inválido"}),
            correo: z.string({message: "El campo correo es obligatorio"}).email({message: "Email inválido"}),
            telefono: z.string({message: "El campo movil es obligatorio"}).regex(phoneRegex, 'número inválido'),
            politicy: z.string({message: "Debes aceptar la política de privacidad"}).transform(value => value === 'on')
        }),
        handler: async ({name, correo, telefono}) =>{
            try {
                await transporter.sendMail({
                    from: '"🔰 Contacto nuevo 🔰" <no-reply@studyfp.com>', // sender address
                    to: "info@studyfp.com", // list of receivers
                    subject: "Nuevo contacto (Landing nueva)", // Subject line
                    text: "Hello world?", // plain text body
                    html: `<div style="display:flex; justify-content:center;"><h1 style="20px">Contacto Landing</h1></div></br><b>Nombre: ${name}</b></br> <b>Email: ${correo}</b></br> <b>Teléfono: ${telefono}</b> </br>`, // html body
                });
                return { succes: true, message: "¡Muchas gracias!, en breve nos pondremos en contacto" }
            } catch (error) {
                return { succes: false, message: "Correo no enviado, revisa tu correo por favor" }
            }
        }
    })
}