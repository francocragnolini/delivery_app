import Image from "next/image";
import styles from "../styles/ProductItem.module.css";
const ProductItem = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" width={500} height={500} alt="pizza" />
      <h1 className={styles.title}>FIORI DI ZUCA</h1>
      <span className={styles.price}>$ 19.99</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </div>
  );
};

export default ProductItem;
