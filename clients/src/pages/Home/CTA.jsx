import styles from "../../style";
import Button from "../../components/Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 dark:bg-black-gradient rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s Start Learning Today!!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to acquire new skills and
        advance your career from anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
