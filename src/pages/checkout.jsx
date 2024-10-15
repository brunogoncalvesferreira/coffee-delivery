import { Minus, Plus } from "lucide-react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import styles from "./checkout.module.css";
import { useCoffee } from "../contexts/coffee-context";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { cart, addCoffeeTocart, removerCoffeeFromCart, total } = useCoffee();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function confirmOrder(data) {
    console.log(data)
    navigate("/success", {
      state: data,
    });
  }

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <h1>Fazer checkout:</h1>

        <div className={styles.content}>
          <form onSubmit={handleSubmit(confirmOrder)}>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Digite seu telefone"
              {...register("phone")}
            />
            <input
              type="text"
              placeholder="Digite seu endereço"
              {...register("address")}
            />
            <select name="" id="" {...register("payment")}>
              <option value="">Escolha a forma de pagamento</option>
              <option value="cartão_débito">Cartão de débito</option>
              <option value="cartão_credito">Cartão de crédito</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
            </select>

            <textarea
              placeholder="Observações:"
              {...register("obs")}
            ></textarea>
            <strong>Total: R$ {total.toFixed(2)}</strong>
            <button type="submit">Confirmar pedido</button>
          </form>

          <div className={styles.cards}>
            {cart.map((item) => (
              <div className={styles.coffee}>
                <img src={item.image} alt="Imagem ilustrativa" />
                <h2>{item.title}</h2>
                <strong>R$ {item.price}</strong>
                <div className={styles.quantity}>
                  <button onClick={() => addCoffeeTocart(item)}>
                    <Plus size={20} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => removerCoffeeFromCart(item)}>
                    <Minus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
