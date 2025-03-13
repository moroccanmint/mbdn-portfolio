import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import mark from '../assets/mark-buduan.webp'

const textVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

const imageVariants = {
    hidden: {
        clipPath: 'inset(0 50% 0 50%)',
    },
    visible: {
        clipPath: 'inset(0 0% 0 0%)',
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
        }
    }
}

const Hero = () => {
  return (
    <div className='relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-gray-800'>
        <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='w-full md:w-1/2 p-8'>
            <motion.h1
            variants={textVariants}
            initial='hidden'
            animate='visible'
            className='text-2xl md:text-3xl lg:text-5xl my-14'>
                {HERO_CONTENT.greeting}
            </motion.h1>
            <motion.p
            variants={textVariants}
            className='text-xl md:text-2xl lg:text-4xl mb-4'>
                {HERO_CONTENT.introduction}
            </motion.p>
            <motion.p
            variants={textVariants}
            className='text-xl md:text-2xl lg:text-4xl mb-4'>
                {HERO_CONTENT.description}
            </motion.p>
            <motion.a
            variants={textVariants}
            className='bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl'
            href={HERO_CONTENT.resumeLink}
            download
            rel='noreferrer noopener'
            target='_blank'>
                {HERO_CONTENT.resumeLinkText}
            </motion.a>
        </motion.div>

        <motion.div
        variants={imageVariants}
        initial='hidden'
        animate='visible'
        className='w-full md:w-1/2 p-8'>
            <img src={mark} alt='Mark Buduan' width={560} height={560} className='rounded-3xl'/>
        </motion.div>
    </div>
  )
}

export default Hero