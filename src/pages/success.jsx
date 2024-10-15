import { useLocation } from 'react-router-dom'
import { Header } from '../components/header'
import styles from './success.module.css'

export function Success() {
  const { state } = useLocation()

  return (
    <div className={styles.container}>
      <Header/>

      <main>
        <h1>Uhu! Pedido confirmado, {state.name}!</h1>
        <p>Agora é só aguardar que logo o café chega até você no local que escolheu.</p>

        <div className={styles.content}>
          <img src="success.svg" alt="Imagem ilustrativa" />

          <div className={styles.address}>
            <strong>Endereço de Entrega</strong>
            <p>{state.address}</p>
          </div>
        </div>
      </main>
    </div>
  )
}