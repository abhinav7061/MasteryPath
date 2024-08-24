import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../../components/Button";

const Deal = () => (
  <section className={`${layout.section} gap-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the right course <br className="md:block hidden" /> in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
        Discover courses tailored to your interests and goals.
        Navigate through curated options and
        choose the path that suits your learning style and ambitions.
      </p>

      <Button className={`mt-10 py-4 px-6 `} title={`Get Started`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Deal;
