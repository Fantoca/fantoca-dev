import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Complete Guide to UI Design for Beginners
          </h1>
          <p className={styles.desc}>
            Write a comprehensive guide on UI (User Interface) design for
            beginners who want to understand the basics of designing user
            interfaces. Start with the fundamental design theories, an
            understanding of grids, effective use of colors and typography, and
            how to grasp user needs and incorporate them into designs.
          </p>
          <div className={styles.author}>
            <Image
              src="/header-m.png"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            ></Image>
            <span className={styles.username}>Fantoca</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className={styles.image}
            fill={true}
          ></Image>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          User Interface (UI) design plays a crucial role in creating visually
          appealing and user-friendly digital products. Whether you are an
          aspiring designer or someone interested in understanding the basics of
          UI design, this comprehensive guide will walk you through the
          essential principles and practices of UI design for beginners.
          <br />
          <br />
        </p>
        <ul className={styles.ul}>
          1. Understanding UI Design:
          <li className={styles.li}>
            Define what UI design is and its significance in the digital world.
          </li>
          <li className={styles.li}>
            Explain the relationship between UI and UX (User Experience) design.
          </li>
          <li className={styles.li}>
            Introduce the components of a user interface and how they interact.
          </li>
        </ul>
        <br />
        <br />
        <ul className={styles.ul}>
          2. Design Theory and Principles:
          <li className={styles.li}>
            Cover fundamental design theories, such as balance, contrast, and
            alignment.
          </li>
          <li className={styles.li}>
            Explain the importance of consistency and how it affects user
            experience.
          </li>
          <li className={styles.li}>
            Discuss the psychology of color and how to use it effectively in UI
            design.
          </li>
          <li className={styles.li}>
            Highlight the role of typography in creating a visually pleasing
            interface.
          </li>
        </ul>
        <br />
        <br />
        <ul className={styles.ul}>
          3. The Grid System:
          <li className={styles.li}>
            Introduce the concept of grid systems in UI design.
          </li>
          <li className={styles.li}>
            Demonstrate how grids help maintain a sense of order and harmony in
            layouts.
          </li>
          <li className={styles.li}>
            Provide examples of popular grid structures and their applications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
