import { motion } from "framer-motion";
import { SubTitle } from "./PageTitle";

export default function TimelineSection({ title, data }) {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, duration: 0.8 }}
      viewport={{ once: true, amount: 0 }}
    >
      <SubTitle text={title} />
      <motion.ol
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0, duration: 0.8 }}
        viewport={{ once: true, amount: 0 }}
        className="w-11/12 md:w-5/6 lg:w-4/6 pt-4 relative border-s border-highlight2 dark:border-highlight"
      >
        {data.map((data, index) => (
          <li className="mb-10 ms-4" key={index}>
            <div className="absolute w-3 h-3 bg-highlight2 dark:bg-highlight rounded-full mt-1.5 -start-1.5 border border-highlight2 dark:border-highlight"></div>
            <div className="bg-bgColorLight dark:bg-bgColorLight2 shadow-md dark:shadow-none px-5 py-3">
              <time className="mb-1 text-sm font-semibold leading-none text-highlight2 dark:text-highlight">
                {data.time}
              </time>
              <h3 className="text-lg text-fontColor2 dark:text-fontColor font-semibold">
                {data.title}
              </h3>
              <p className="text-base font-normal text-fontColor2 dark:text-fontColor">
                {data.details} <br /> {data.subdetails}
              </p>
            </div>
          </li>
        ))}
      </motion.ol>
    </motion.div>
  );
}
