import { motion } from 'framer-motion';
import { TECHSTACK } from '../constants';

const Testimonial = () => {
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: i * 0.2,
            },
        }),
    };
    return (
        <section className='px-6 py-10 min-h-screen' id='techstack'>
            <h1 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>
                Tech Stack</h1>
            <div className='h-1 w-20 bg-white mb-8'></div>

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {TECHSTACK.map((techstack, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                        initial='hidden'
                        whileInView='visible'
                        custom={index}
                        className='relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10'
                    >
                        <div className='flex items-center justify-center flex-col gap-2'>
                            <img src={techstack.image} alt={techstack.name} className='w-24 flex align-middle justify-center' loading='lazy' />
                            <h2 className='text-lg font-semibold'>{techstack.name}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
            
        </section>
    )
}

export default Testimonial