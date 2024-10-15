import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Coffee Delivery. Todos os direitos reservados.</p>
    </footer>
  )
}