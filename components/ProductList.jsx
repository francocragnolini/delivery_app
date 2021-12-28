import styles from "../styles/ProductList.module.css";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nemo
        recusandae officia corrupti impedit eius laboriosam sequi sit molestias
        libero quas commodi tempora , praesentium ab.
      </p>
      <div className={styles.wrapper}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductList;
