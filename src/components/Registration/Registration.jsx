import React from 'react'

export default function Registration() {
  
  function handleSubmit() {
    console.log('enviado')
  }

  return (
    <>
    <form onSubmit={handleSubmit()}>
      <input type="text" name="user" />
      <input type="text" name="mail" />
      <input type="submit" value="Enviar" />
    </form>
    </>
  )
}
