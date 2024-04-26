import React from "react";
import Image from "next/image";

import movingimg from "@/public/images/services/deliveryservice.png";
import star from "@/public/icons/star.svg";

import Text from "@/components/ui/Text";
const DeliveryServices = () => {
  return (
    <>
    <div className="w-full bg-[#48422D] flex justify-center min-h-[400px] mob:px-5 mob:py-5">
      <div className="w-full max-w-[937px]   flex flex-wrap justify-between items-center py-4">
        <div className="flex flex-col ">
          <div className="w-full max-w-[561px]">
            <Text
              as="h1"
              className="text-[#E2E1DB] text-[65px] leading-[54.6px] flex items-center uppercase mob:justify-center "
            >
              02 <span className="text-[32px]  ml-4">Delivery Services</span>
            </Text>
            <Text as="p" className="text-[#E2E1DB] text-[17px] leading-[27px] mob:text-center ">
              Don’t pay high delivery fees or rent a truck to pick up that new
              item you love. Let Bulk Brothers take care of your delivery needs.
            </Text>

            <Text
              as="p"
              className="text-[#E2E1DB] text-[17px] leading-[27px] mt-6 mob:text-center" 
            >
              Pickup and delivery service for
            </Text>

            {/* stars */}
            <div className="flex mob:justify-center">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#E2E1DB] text-[17px] leading-[27px] ml-3 "
              >
                Furniture
              </Text>
            </div>
            <div className="flex mt-1 mob:justify-center">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#E2E1DB] text-[17px] leading-[27px] ml-3 "
              >
                Appliances
              </Text>
            </div>
            <div className="flex mt-1 mob:justify-center">
              <Image src={star} alt="" width={17} height={17} />
              <Text
                as="p"
                className="text-[#E2E1DB] text-[17px] leading-[27px] ml-3 "
              >
                Other large items
              </Text>
            </div>
          </div>
        </div>

        <div className="flex flex-col mob:justify-center mob:mt-[5rem]">
          <Image src={movingimg} alt="" width={339} height={281} />
        </div>
      </div>
      </div>
    </>
  );
};

export default DeliveryServices;
