import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            transition: { delay: 0.5, staggerChildren: 0.3, ease: 'easeOut' } 
        },
    }

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' } 
        },
    }


  return (
    <section className='px-6 py-10' id='experience'>
        <h2 className='text-4xl md:text-6xl font-medium tracking-tight mb-10'>Educational Background</h2>
        <div className='h-1 w-20 mb-8 bg-white'></div>
        <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            className='space-y-10'
        >
            {EXPERIENCES.map((experience, index) => (
                <motion.div
                    variants={childVariants}
                    key={index}
                >
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div className='text-sm md:w-1/4 mb-2 md:mb-0 p-4'>
                            {experience.yearRange}
                        </div>

                        <div className='md:w-3/4 mb-10'>
                            <div className='max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg'>
                                <h2 className='text-xl mb-2'>
                                    {experience.title}
                                </h2>
                                <p className='mb-4 text-sm italic'>{experience.location}</p>
                                <ul className='list-disc list-inside'>
                                    {experience.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default Experience