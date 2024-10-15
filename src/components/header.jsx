import styles from './header.module.css'

import { Link } from 'react-router-dom'

import { ShoppingBag } from 'lucide-react'
import { useCoffee } from '../contexts/coffee-context'

export function Header() {
  const { quantityItemsCart } = useCoffee()
  return (
    <header className={styles.header}>
      <Link to='/'>Coffee Delivery</Link>

      <Link to='/checkout'>
        <ShoppingBag size={24} />

        <span>{quantityItemsCart}</span>
      </Link>
    </header>
  )
}