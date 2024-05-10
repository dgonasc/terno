import Image from "next/image"
import { MotionConfig, motion } from "framer-motion";

export default function Footer() {

    return (
        <div className="fixed inset-x-0 bottom-0 flex items-center justify-between px-6 py-1 bg-gray-50 dark:bg-zinc-600">
            <h3 className="ml-2 lg:text-sm font-xilosa dark:text-zinc-300 max-lg:text-xs">© Terno do Binga 2024</h3>
            <MotionConfig>
                <motion.div
                initial={{ x: 100 }}
                animate={{ x: -50 }}
                transition={{ delay: 2 }}
                >
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Calango-2.png"
                        alt='Calango'
                        className='w-10 rounded-full lg:ml-5 lg:w-14 right-4'
                        width={300}
                        height={180}
                    />
                </motion.div>
            </MotionConfig>
        </div>
    )
}