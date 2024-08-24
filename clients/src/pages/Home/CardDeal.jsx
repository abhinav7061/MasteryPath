import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../../components/Button";

const CardDeal = () => (
  <section className={`${layout.section} gap-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="md:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button className={`mt-10 py-4 px-6 `} title={`Get Started`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
