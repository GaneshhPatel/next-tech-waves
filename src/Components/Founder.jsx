// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
 
import AOS from 'aos';
  import 'aos/dist/aos.css';
const Founder = () => {
      useEffect(() => {
        AOS.init({
            offset:100,
            duration: 1500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
  return (
    <>
       <div className="max-w-[1340px] mt-8 my-6 md:px-[15px] px-4 mx-auto" data-aos="fade-up">
  <p className="text-[#00B2FF]  sm:text-tt  xs:text-mt md:text-title md:text-center text-left font-[600]  ">
    Meet
    With Our Company founder &amp; CEO</p>
  <p className=" sm:text-mp xs:text-tp md:text-p md:text-center text-left ">Krishanu is a young entrepreneur
    and
    have experience in creating user-friendly, engaging, and aesthetically pleasing websites and
    applications.</p>
  <div className="sm:max-w-[30%] border-2 rounded-2xl mx-auto m-4 xs:text-center">
    <img src="images/krishanu-mishra.jpg" alt className="rounded-t-lg text-center mx-auto border-b-4" />
    <p className="mt-2 text-center font-[600] sm:text-tt  xs:text-mt md:text-title">Krishanu Mishra</p>
    <p className="text-center  font-[400] sm:text-mp xs:text-tp md:text-p text-[#494949] ">FOUNDER &amp; CEO
      (Product Manager)</p>
  </div>
</div>

    </>
  )
}

export default Founder