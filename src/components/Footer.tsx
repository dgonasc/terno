import Image from "next/image"

export default function Footer() {
    return (
        <div  className="fixed inset-x-0 bottom-0 flex items-center justify-between px-6 py-1 rounded-t-md bg-gradient-to-b from-zinc-50 to-zinc-100">
            <h3 className="ml-2 lg:text-sm font-xilosa">© Terno do Binga 2023</h3>
            <Image
            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Calango-2.png"
            alt='Calango'
            className='w-10 rounded-full group-hover:animate-logo lg:ml-5 lg:w-14 right-4'
            width={300}
            height={180}
            />
        </div>
    )
}