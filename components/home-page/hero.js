import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/cartoon-avatar-aesthetic-illustration_569774-79.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Sofia</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
