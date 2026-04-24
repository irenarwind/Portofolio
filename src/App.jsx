import DataImage from './data'
import { listTools, listProyek } from './data';
import PreLoader from "./components/PreLoader"
import { useRef } from "react";

function App() {
   const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft += direction * width;
    }
  };
return (
    <>
    {/* HOME */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6 animate__animated animate__fadeInUp animate__delay-2s">Hello, I'm Irene Arwinda</h1>
          <p className="text-base/loose mb-6 opacity-50 animate__animated animate__fadeInUp animate__delay-3s">
          Passionate Informatics student with hands-on experience in academic and project-based development. 
          Actively involved in team projects and organizations, where I enjoy collaborating, sharing ideas, 
          and continuously learning to improve my problem-solving skills.</p>
            <div className="flex items-center sm:gap-4 gap-2 animate__animated animate__fadeInUp animate__delay-3s">
              <a href="https://drive.google.com/file/d/1YRb1QsgvXoLfJNCUbTi7cWNAWR1xs7ha/view?usp=sharing" className="bg-zinc-700 p-4 rounded-2xl hover:bg-yellow-600">Download CV <i className="ri-download-fill"></i></a>
              <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-yellow-600">Lihat Proyek <i className="ri-arrow-down-long-line"></i></a>
            </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto text-5xl/tight font-bold mb-6 
        animate__animated animate__fadeInUp animate__delay-2s" loading='lazy'/>
      </div>

      {/* ABOUT */}
      <div className="about mt-35 py-10" id='about'>
        <h1 className='text-4xl/snug font-bold mb-4 text-center' data-aos="fade-up" data-aos-duration="2000" 
        data-aos-once="true">
        EXPERIENCE</h1>
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-5 bg-zinc-800 rounded-lg" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-center justify-between">
              <div>
                <h1 className='text-4xl mb-1 text-yellow-500'>Laboratory Assistant </h1>
                <p>Laboratorium Informatika Universitas Gunadarma</p>
              </div>
              <div>
                <h1 className='text-3xl mb-1'>2024 - Present</h1>
            </div>
          </div>
        </div>
        {/* STUPEN */}
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-5 bg-zinc-800 rounded-lg mt-6" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-start justify-between">
              <div className="max-w-[70%]">
                <h1 className='text-3xl mb-1 text-yellow-500'> Study Independent | Data Analyst & Business Intelligence</h1>
                <p>Celerates Acceleration Mastery Program Batch 3</p>
              </div>
              <div>
                <h1 className='text-3xl mb-1'>2025</h1>
            </div>
          </div>
        </div>
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-5 bg-zinc-800 rounded-lg mt-6" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-start justify-between">
              <div className="max-w-[70%]">
                <h1 className='text-3xl mb-1 text-yellow-500'> Study Independent | WEB Development & UI/UX Design</h1>
                <p>Celerates Acceleration Mastery Program Batch 2</p>
              </div>
              <div>
                <h1 className='text-3xl mb-1'>2025</h1>
            </div>
          </div>
        </div>
        {/* STUPEN */}
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-5 bg-zinc-800 rounded-lg mt-6" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-start justify-between">
              <div className="max-w-[70%]">
                <h1 className='text-3xl mb-1 text-yellow-500'> Human Resources Development</h1>
                <p>Badan Eksekutif Mahasiswa Fakultas Teknologi Industri</p>
              </div>
              <div>
                <h1 className='text-3xl mb-1'>2023-2025</h1>
            </div>
          </div>
        </div>
        <h1 className='text-4xl/snug font-bold mb-4 text-center mt-10' data-aos="fade-up" data-aos-duration="2000" 
        data-aos-once="true">
        EDUCATION</h1>
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-5 bg-zinc-800 rounded-lg" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-center justify-between">
              <div>
                <h1 className='text-4xl mb-1 text-yellow-500'>Bachelor of Information Systems</h1>
                <p>Gunadarma University</p>
              </div>
              <div>
                <h1 className='text-3xl mb-1'>2022 - Present</h1>
              </div>
            </div>
          </div>
  
      {/* TOOLS */}
      <div className='tools mt-32'>
        <h1 className='text-4xl/snug font-bold mb-4 text-center' data-aos="fade-up" data-aos-duration="2000" 
        data-aos-once="true">
        SKILL's</h1>
        <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full 
        text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300"
        data-aos-once="true">
        </p>
        <div className=' tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4'>
          {listTools.map(tool => (
            <div className='flex items-center justify-center p-4 bg-zinc-800 rounded-lg' key={tool.id} className='relative flex items-center justify-center p-4 bg-zinc-800 rounded-lg 
            hover:bg-zinc-700' data-aos="fade-up" data-aos-duration="2000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src= {tool.gambar} alt={tool.nama} className='w-10'/>
            <span 
              className='absolute -bottom-8 scale-0 group-hover:scale-100 
              bg-black px-2 py-1 rounded-md whitespace-nowrap'></span>
              <div>
                {/* <h4 className='font-bold'>{tool.nama}</h4> */}
                {/* <p opacity-50>{tool.ket}</p> */}
              </div>
            </div>  
          ))}
          </div>
        </div>
      </div>
    
    {/* // PROJECT */}
    <div className="project mt-32 py-10" id='project'>
      <h1 className='text-center text-4xl font-bold mb-2' 
      data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">Project</h1>
      <p className='text-base/loose text-center opacity-50'
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
      Berikut ini merupakan beberapa project yang saya buat</p>
      <div className='relative mt-14'>
        {/* LEFT BUTTON */}
          <button onClick={() => scroll(-1)}
            className='absolute left-2 top-1/2 -translate-y-1/2 z-10 
            bg-zinc-800 p-3 rounded-full hover:bg-yellow-600'
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>
          {/* RIGHT BUTTON */}
          <button 
            onClick={() => scroll(1)}
            className='absolute right-2 top-1/2 -translate-y-1/2 z-10 
            bg-zinc-800 p-3 rounded-full hover:bg-yellow-600'
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>
          <div ref={scrollRef} className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-20 scrollbar-hide'>
            {listProyek.map((proyek) => (
          <div key={proyek.id} className='min-w-full flex-shrink-0 snap-center' 
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
          <div className='bg-zinc-800 rounded-xl p-8 max-w-4xl w-full mx-auto shadow-lg'>
            <img src={proyek.gambar} alt="Proyek Image" className='rounded-md mb-4'/>
                <div>
                  <h1 className='text-xl font-bold mb-2 text-center'>{proyek.nama}</h1>
                  <p className='text-sm opacity-60 mb-4 text-center'>{proyek.desk}</p>
                <div className='flex flex-wrap justify-center gap-2'>
                    {proyek.tools.map((tool, index) => (
                      <span key={index}className='text-xs px-2 py-1 bg-zinc-700 rounded-md'>
                        {tool}
                      </span>
                    ))}
                  </div>
              </div>
          </div>  
        </div>
        ))}
      </div>
    </div>
</div>
              {/* <div className='mt-8 text-center'>
                              <a href='#project' className='bg-yellow-700 p-3 rounded-lg block border border-zinc-600 
                              hover:bg-yellow-600'>Lihat Website</a>
                            </div> */}
    {/* // CONTACT */}
    <div className="kontak mt-32 sm:p-10 p-0" id='contact'>
      <h1 className='text-4xl mb-2 font-bold text-center'
       data-aos="fade-up" data-aos-duration="2000" >Kontak</h1>
      <p className='text-base/loose text-center mb-10 opacity-50 mx-auto' 
      data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" data-aos-once="true"
      >Mari terhubung dengan saya</p>
      <form action="https://formsubmit.co/rai.labti7@gmail.com" method="POST" className='bg-zinc-800 p-10 
      sm:w-fit w-full mx-auto rounded-md' autoComplete='off'
      data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" data-aos-once="true">
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold'>Nama Lengkap</label>
            <input type='text' name='nama' placeholder='Nama...' className='border border-zinc-500 p-2 rounded-md' required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold'>Email</label>
            <input type='email' name='email' placeholder='Email...' className='border border-zinc-500 p-2 rounded-md' required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='pesan' className='font-semibold'>
            Pesan</label>
            <textarea name='pesan' id='pesan' cols="45" rows="7" placeholder='Pesan...' 
            className='border border-zinc-500 p-2 rounded-md' required></textarea>
          </div>
          <div className='text-center'>
            <button type="submit" className='bg-yellow-700 p-3 rounded-lg w-full
            cursor-pointer border border-zinc-600 hover:bg-yellow-600'>
            Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
    </>
    
  );
}

export default App
