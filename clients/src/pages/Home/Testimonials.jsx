import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[40%] h-[40%] -right-0 rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col gap-6 sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What Learners are saying about us
      </h2>
      <p className={`${styles.paragraph}`}>
        Empowering learners with the knowledge
        they need to succeed in their careers and personal growth,
        no matter where they are in the world.
      </p>
    </div>

    <div className="flex flex-wrap justify-evenly gap-6 w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
