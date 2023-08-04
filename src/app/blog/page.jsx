import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/10622625/pexels-photo-10622625.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Complete Guide to UI Design for Beginners
          </h1>
          <p className={styles.desc}>
            Write a comprehensive guide on UI (User Interface) design for
            beginners who want to understand the basics of designing user
            interfaces. Start with the fundamental design theories, an
            understanding of grids, effective use of colors and typography, and
            how to grasp user needs and incorporate them into designs. Include
            practical examples and best tips to create attractive and functional
            designs.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Latest Trends in Web Development 2023
          </h1>
          <p className={styles.desc}>
            Research and identify the latest trends in web development relevant
            to the year 2023. Write about the newest technologies and
            programming languages dominating the industry, such as the latest
            updates in HTML, CSS, JavaScript, or other programming languages.
            Include real-world implementation examples of these trends and how
            their usage can enhance user experience and site performance.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Success Stories: How UI Design Helps Businesses Boost Conversions
          </h1>
          <p className={styles.desc}>
            Find success stories from clients or companies that have utilized UI
            design services to significantly improve their conversions. Conduct
            interviews and document how changes in user interface design have
            led to increased sales, registrations, or other user engagements.
            Also, explain the approach taken by UI designers in identifying
            issues and providing solutions. This article will provide concrete
            evidence of the importance of investing in good design.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
