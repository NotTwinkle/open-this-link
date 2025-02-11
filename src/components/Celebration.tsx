import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const gifMemes = [
  "https://media.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.gif?cid=790b7611wikm4w2l40cy19xz4d0zqdld36o852wilauk75fa&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF4Y2RxbWx0M2t6ZWd0ZmQ2bWd4NmZxbDV1ZHd6YnBxaXJ1NXR6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWN0ZWR2ZWFqcXJxbmxqbWt0ZnJyaWx5ZWdxbWx5ZnBxaXJyMnJ5dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWRwbWRyeWRkbmRxNmRxbWxqcmRyeGNyaXBxbWxqcmRyeGNyaXBxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/artj92V8o75VPL7AeQ/giphy.gif",
  "https://media.giphy.com/media/FDbIUZLwbCUS4786z3/giphy.gif?cid=790b76110vhaj6rjupfwh1r37r3iotnquvjbmpph2ohmck15&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1sanJkcnhjcmlwcW1sanJkcnhjcmlwcW1sanJkcnhjcmlwcW1sanJkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xRF0v9WMAUVLNK/giphy.gif",
];

export const Celebration = () => {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl mb-8 text-red-400 font-serif">
        Yay! 💖
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {gifMemes.map((gif, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="aspect-square bg-valentine-pink rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={gif}
              alt="Celebration gif"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
