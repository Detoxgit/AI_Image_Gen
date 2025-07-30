import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/app_context";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Generatebutton = () => {
  const { user, setshowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setshowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1 className="text-5xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        Try Now!
      </h1>
      <button
        onClick={onClickHandler}
        className="inline-flex items gap-2 px-12 py-3 rounded-full bg-black
      text-white m-auto hover:scale-105 transition-all duration-500"
      >
        Generate Image
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default Generatebutton;
