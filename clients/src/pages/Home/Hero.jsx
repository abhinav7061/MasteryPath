import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient dark:bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="dark:text-white">20%</span> Discount For{" "}
            <span className="dark:text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] dark:text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] dark:text-white ss:leading-[100.8px] leading-[75px] w-full">
          Learning Process.
        </h1>
        <p className={`${styles.paragraph} md:max-w-[550px] mt-5 `}>
          Our team of educators uses advanced methodologies to identify
          the courses that best fit your goals. We carefully evaluate course content,
          teaching styles, and outcomes to ensure you get the education you deserve.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] pink__gradient top-[30%]" />
        <div className="absolute z-[1] w-[80%] h-[70%] rounded-full white__gradient bottom-0" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
