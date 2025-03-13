import { motion } from 'framer-motion';

const circleVariants = {
    animate1: {
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
        }
    },

    animate2: {
        scale: [1, 1.1, 1],
        x: [0, -120, 0],
        y: [0, -60, 0],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
        }
    },

    animate3: {
        scale: [1, 1.3, 1],
        x: [0, 140, 0],
        y: [0, 70, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        }
    },

    animate4: {
        scale: [1, 1.4, 1],
        x: [0, 160, 0],
        y: [0, -80, 0],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
        }
    },

    animate5: {
        scale: [1, 1.5, 1],
        x: [0, 180, 0],
        y: [0, 90, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        }
    },

    animate6: {
        scale: [1, 1.6, 1],
        x: [0, 200, 0],
        y: [0, -100, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        }
    }
}

const BlurBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex items-center justify-center filter blur-[100px] opacity-70">
        <motion.div className="bg-taupe w-[350px] h-[250px] rounded-full absolute" variants={circleVariants} animate="animate1" />
        <motion.div className="bg-green-700 w-[250px] h-[150px] rounded-full absolute" variants={circleVariants} animate="animate2" />
        <motion.div className="bg-ebony w-[450px] h-[350px] rounded-full absolute" variants={circleVariants} animate="animate3" />
        <motion.div className="bg-blackolive w-[150px] h-[100px] rounded-full absolute" variants={circleVariants} animate="animate4" />
        <motion.div className="bg-battleshipgray w-[350px] h-[250px] rounded-full absolute" variants={circleVariants} animate="animate5" />
        <motion.div className="bg-teal-100 w-[250px] h-[150px] rounded-full absolute" variants={circleVariants} animate="animate6" />
    </div>
  )
}

export default BlurBackground