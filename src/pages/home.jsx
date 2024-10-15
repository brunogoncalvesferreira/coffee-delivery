import styles from './home.module.css'

import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Card } from '../components/card'
import { DATABASE } from '../database/db'

export function Home() {

  return (
    <div className={styles.container}>
      <Header/>

      <main>
        <h1>Encontre o café ideal para o seu dia</h1>

        <div className={styles.content}>
          {DATABASE.map(item => (
            <Card
              key={item.id}
              item={item}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

      </main>

      <Footer/>
    </div>
  )
}