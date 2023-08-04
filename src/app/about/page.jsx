import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../../components/button/button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt="img"
          className={styles.img}
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            accusantium nisi blanditiis earum nihil, sequi repudiandae sed non,
            veritatis molestiae rem, ratione culpa quam aspernatur perspiciatis
            <br />
            <br />
            odit commodi suscipit placeat unde nostrum! Amet, fugit! Commodi,
            ullam quos soluta corporis repudiandae tempora libero, fuga aliquam,
            doloribus atque aut tempore velit numquam maiores facilis.
            Asperiores ea assumenda illo, laboriosam, hic animi facere porro
            debitis exercitationem voluptate, voluptatibus pariatur doloremque
            quos consequatur nam.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            saepe maxime vero, ducimus laborum culpa quas fuga error odio
            molestiae quia cum architecto optio fugiat repudiandae officia,
            quaerat excepturi cupiditate! Dolores quae, officiis odit
            blanditiis, eius fugit quidem tenetur error dolor illo enim autem
            officia at sapiente culpa. Fugiat, ea?
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
}
