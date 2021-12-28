import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="footer" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES. FRANCO PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304. <br /> New York, 85022 <br />
            (602)867-1013
          </p>
          <p className={styles.text}>
            1654 R. Ocean Drive #1004. <br /> Miami, 75022 <br />
            (602)867-1021
          </p>
          <p className={styles.text}>
            1654 R. Retrivier #1004. <br /> Las Vegas, 75022 <br />
            (602)867-1021
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9.00 - 22.00
          </p>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 12.00 - 24.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
