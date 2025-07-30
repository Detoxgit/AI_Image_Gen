import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold">Create AI Images</h1>
      <p className="text-gray-500 mb-8">
        Turn imagination into visuals
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-14">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 rounded-lg xl:w-96"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Introducing the AI Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Unleash your creativity with our AI-powered text-to-image generator.
            Simply describe what you imagine, and our advanced AI instantly
            transforms your words into vivid, high-quality images. Whether
            you're designing, storytelling, or just exploring ideas — bring your
            thoughts to life with the power of artificial intelligence.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;

