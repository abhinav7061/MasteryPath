import { stats } from "../../constants";
import styles from "../../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap gap-6 justify-between sm:mb-20 mb-6 py-3`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex justify-start items-center`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-black dark:text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
