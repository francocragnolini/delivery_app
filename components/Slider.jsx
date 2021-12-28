import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Slider.module.css";
const Slider = () => {
  const images = [
    "/img/pizzaOne.jpg",
    "/img/pizzaTwo.jpg",
    "/img/pizzaThree.jpg",
  ];

  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <Image src="/img/arrow.png" alt="left-arrow" layout="fill" />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images &&
          images.map((image, index) => (
            <div key={index} className={styles.imgContainer}>
              <Image src={image} layout="fill" alt="pizza" />
            </div>
          ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("right")}
      >
        <Image src="/img/arrow2.png" alt="right-arrow" layout="fill" />
      </div>
    </div>
  );
};

export default Slider;
