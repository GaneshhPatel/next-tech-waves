// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
const Join = () => {
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
            <div className="max-w-[1340px] mx-auto border bg-[#00B2FF] xs:py-10 sm:py-20 sm:px-5 sm:flex justify-between flex-col-2" data-aos="fade-up">
                <div className=" sm:max-w-[70%]">
                    <p className="text-[#FFF] sm:text-mp xs:text-tp md:text-p font-[600] xs:text-center sm:text-left ">Join Us
                        to Elevate UI Design with Next Tech Waves Through Our Subscription Service, Unleash Creativity and
                        Beauty</p>
                </div>
                <div className="  xs:text-center xs:mt-5 sm:mt-0">
                    <button className=" bg-[#FFF] rounded rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  hover:bg-[#FFF] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#00b3ffd8] duration-300">Send
                        Message</button>
                </div>
            </div>

        </>
    )
}

export default Join