import React from "react";
import Image from "next/image";

import Text from "@/components/ui/Text";

import bussesimg from "@/public/images/home/hero/herobgnew1.png";
import backimg from "@/public/images/home/hero/herobgnew.png";
import airl from "@/public/images/home/hero/air-l.png";
import airr from "@/public/images/home/hero/air-r.png";

const Hero = () => {
  return (
    <div className="bg-[#48422D] min-h-[735px] mob:min-h-full mob:pt-10 mob:pb-4 relative flex justify-center items-center  overflow-hidden">
      
      <Image
            className="absolute w-full bottom-[130px] mob:bottom-[50px] z-[9]"
            src={backimg}
            alt=""
            width={1484}
            height={555}
          />
      <div className="w-full max-w-[1484px] max-h-[785px] h-full relative pt-[0px] pb-[190px]">
        {/* content */}
        <div className="flex justify-center  relative z-10 mob:px-5">
          <div className="bg-[#191A05]/85 w-full max-w-[860px] min-h-[418px] rounded-[20px] flex justify-center  items-center relative z-[11] ">

          <Image
            className="absolute left-[-50px] bottom-[170px] z-[10]"
            src={airl}
            alt=""
            width={172.57}
            height={89.85}
          />
          <Image
            className="absolute right-[-50px] bottom-[170px] z-[10]"
            src={airr}
            alt=""
            width={172.57}
            height={89.85}
          />

            <div className="relative z-[12]">
              <Text as="h1" className="text-[#FFFFFF] text-center mob:text-[35px] mob:leading-[40px] font-rajdhani uppercase">
                {" "}
                Move with strength, <br /> move with us
              </Text>
             <div className="flex justify-center">
             <Text
                as="p"
                className="text-[#E2E1DB]/70 text-[14px] text-center max-w-[345px] leading-[27px] mt-2 mob:mt-5 "
              >
                {" "}
                Don’t pay high delivery fees or rent a truck to pick up that new
                item you love. Let Bulk Brothers take care of the delivery
                needs.
              </Text>
             </div>
            </div>
          </div>
        </div>
        {/* imgs */}
        <div className="flex justify-center">
         
          <Image
            className="absolute bottom-[-70px] mob:bottom-0 z-10"
            src={bussesimg}
            alt=""
            width={1371}
            height={418}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
