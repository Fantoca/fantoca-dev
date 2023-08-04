import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "../../components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital Products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portofolio" text="See Our Works"></Button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img}></Image>
      </div>
    </div>
  );
}
