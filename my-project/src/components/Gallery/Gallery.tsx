import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.png";
import pic6 from "../../assets/6.png"

const Gallery = () => {
  return (
    <div className="flex">
      <div className="w-[1440px]   border-r border-b border-l border-black h-[780px] flex">
        <div className="border-r border-black w-[695px]"></div>
        <div className="flex-col">
          <div className="flex">
            <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <h1 className="text-3xl">Live Plants</h1>
            </div>
            <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <img
                src={pic4}
                alt="flowers"
                className="w-[256px] h-[256px] object-cover"
              />
            </div>
          </div>
          <div className="flex">
            <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <img
                src={pic5}
                alt="flowers"
                className="w-[256px] h-[256px] object-cover"
              />
            </div>
            <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <h1 className="text-3xl">Aroma Candels</h1>
            </div>
          </div>
          <div className="flex">
          <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <h1 className="text-3xl">Aroma Candels</h1>
            </div>
            <div className="border-r border-b border-black w-[260px] h-[260px] flex items-center justify-center">
              <img
                src={pic6}
                alt="flowers"
                className="w-[256px] h-[256px] object-cover"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
