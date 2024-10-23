import Image from 'next/image';
import Particle from './components/particle';

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
   <Particle/>


     </div>





      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/MoustacheMan.png"
          alt="MoustacheMan"
          width={560}
          height={560}
          className="w-[800px] h-[800px] z-[1] md:w-[560px]"
        />
      </div>

      <Image
        src="/assets/top-left-img.png"
        alt="paint"
        width={560}
        height={560}
        className="absolute left-0 top-0"
      />

      <div className='flex flex-col gap-3 z-[10] pl-40 pt-20'>
        <h1 className='text-[50px] text-white max-w-[500px]'>
          Transforming ideas into <span className='text-blue-500'>Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-white-400 max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus mollitia laborum, tempora nobis incidunt blanditiis odio ut distinctio ducimus eius explicabo necessitatibus dolorum vitae rerum repellat corporis! Deleniti, culpa!
        </p>

        <div className="relative w-[160px] h-[160px] md:w-[160px] md:h-[160px] mt-5">
          <Image 
            src="/assets/rounded-text.png"
            alt="projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
