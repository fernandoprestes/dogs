import React from 'react'
import { PASSWORD_LOST } from '../../api'
import useFetch from '../../hooks/useFetch'
import useForm from '../../hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost-password', 'resetar')
      })
      const { json } = await request(url, options)
      console.log(json)
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha</h1>
      {data ? (
        <p style={{color: '#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuario" type="text" name="login" {...login} />
          {loading ? (
            <Button disabed>Enviando ...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
