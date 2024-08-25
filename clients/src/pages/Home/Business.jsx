import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../../components/Button";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card dark:feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black dark:text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-500 dark:text-dimWhite hover-dim text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo} flex-1`}>
      <h2 className={styles.heading2}>
        You bring the curiosity,  <br className="md:block hidden" /> we’ll handle
        the learning.
      </h2>
      <p className={`${styles.paragraph} mt-5 md:max-w-[470px] `}>
        With the right courses, you can unlock your potential,
        gain new skills, and advance your career.
        But with countless learning platforms available.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
