import { Plus } from "lucide-react";
import styles from "./card.module.css";
import {  useCoffee } from "../contexts/coffee-context";

export function Card({ item, image, title, price}) {
  const { addCoffeeTocart } = useCoffee()
  return (
    <div className={styles.card}>
      <img src={image} alt="Imagem ilustrativa" />
      <h2>{title}</h2>
      <strong>R$ {price}</strong>

      <button onClick={() => addCoffeeTocart(item)}>
        <Plus size={20} />
        Adicionar
      </button>
    </div>
  )
}
