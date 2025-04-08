import React from 'react';
import FormInput from "../FormInput";
import styles from './index.module.css';

export default function LoginForm() {
  console.log("LoginForm se está renderizando");

  return (
    <section>
      <h2>Formulario de Login</h2>
      <form className={stlys["form-container"]}>
        <FormInput label="Usuario" type="text" name="user" />
        <FormInput label="Contraseña" type="password" name="password" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
}
