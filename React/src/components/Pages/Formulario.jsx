import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Formulario = () => {
  const form = useRef();

  const enviarForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o0it1gb', 'template_z1jt9vi', form.current, 'IUWSfyb4kkPeL_jiV')
      .then((result) => {
          console.log(result.text);
          alert("Se envio correctamente");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="Elemento" class="ElementCls">
                <h1>Coments</h1>
                <form ref={form} onSubmit={enviarForm} className='form'>
                    <label htmlFor="">Nombre</label>
                    <input class="form-control form_input" type="text" name="user_name" placeholder="Please digit your name"/>
                    <br/>
                    <label htmlFor="">Email</label>
                    <input class="form-control form_input" type="email" name="user_email" placeholder="Please digit your name"/>
                    <br/>
                    <hr class="col-sm-7 dropdown-divider name"/>
                    <label htmlFor="">Comment</label>
                    <textarea class="form-control name" rows="3" name='message'></textarea>
                    <br/>
                    <input class="btn btn-success btn-coment s-100" type="submit" value="Enviar"/>
                </form>
            </div>
  );
};

export default Formulario;