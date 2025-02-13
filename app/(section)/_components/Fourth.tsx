import Image from "next/image";
import styles from "./styles.module.scss";

const Fourth = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className={`${styles.newContainer}`}>
        <Image
          src={`/images/cover-image.png`}
          width={800}
          height={800}
          alt="cover-image"
        />
      </div>
    </section>
  );
};

export default Fourth;
