import React, { useState } from 'react'
import "./Contact.css"
//ESTADOS PARA CADA CAMPO
export default function Contact() {
    const [form, setForm] = useState({name:'', email:'', mensaje:''});
    const [errors, setErrors]= useState({});
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const  {name, value} = e.target;
        setForm((prev) => ({...prev,[name]:value}))
    };
    //valida y envia
    const hanldeSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "NOMBRE REQUERIDO";
        if (!form.email.trim()){
            newErrors.email= "Email Requerido";

        }else if (!/\S+@\S+\.\S+/.test(form.email)){
            newErrors.email = 'Email Invalido';
        }
        if (!form.message.trim()) newErrors.message = "Mensaje Requerido";

        if(Object.keys(newErrors).length === 0){
            //simular envio
            setSent(True)
            setForm({name:'', email:'', mensaje:'' });
            setErrors({});
            //oculta mensaje despues de 4 segundos
            setTimeout(()=> setSent(false), 4000);
        }else {
            setErrors(newErrors)
        }
    };

  return (
    <section className='contact-section'>
        {sent && (
            <div className='success-msg'>
                !Gracias nos pondremos en contacto proximamente
            </div>

            
        )}
        <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                    <label>Nobre</label>
                    <input type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
            </form>

        </section>
    )
}
  

/*<h1>Esta es nuestra Pagina de Contacto </h1>
        <form action="">
            <fieldset>
                <legend>Contacto</legend>
            <label htmlFor="Contacto">Nombre</label>
            <input type="text" />
            <label htmlFor="">Apellido</label>
            <input type="text" />
            <label htmlFor="">Correo</label>
            <input type="email" />
            <label htmlFor="">Telefono</label>
            <input type="number" />
            <label htmlFor="">Fecha de Nacimiento</label>
            <input type="date" />
            <label htmlFor="">Nota</label>
            <input type="text" />
            
            </fieldset>
        </form>
        <br /> <br /><br />*/