import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg"
import pic3 from "../../assets/3.png"
const Hero = () => {
  return (
    <div className="w-full border-r border-b border-black  flex">
      <div className="w-[720px]  border border-black h-[520px] flex items-start p-10">
        <div className="flex flex-col justify-start p-4">
          <h1 className="text-6xl text-left">Kyiv</h1>
          <h1 className="text-6xl text-left">LuxeBouquets</h1>
          <p className="text-left mt-2">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service
          </p>

          <div className="border border-black w-full mt-2"></div>
          <div className="flex mt-2 gap-2">
            <img
              src={pic1}
              alt="flowers"
              className="w-[256px] h-[256px] object-cover"
            />
            <div className="border-l border-black h-[256px] w-[256px] flex flex-col justify-end">
              <div className="pl-4 text-left" style={{fontSize:'14px'}}>
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col">
      <div className="flex">
        <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
            <h1 className="text-3xl">
              Fresh Flowers
            </h1>
        </div>
        <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
        <img
              src={pic2}
              alt="flowers"
              className="w-[256px] h-[256px] object-cover"
            />
        </div>
      </div>
      <div className="flex">
      <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
        <img
              src={pic3}
              alt="flowers"
              className="w-[256px] h-[256px] object-cover"
            />
        </div>
        <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
            <h1 className="text-3xl">
              Dried Flowers
            </h1>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
