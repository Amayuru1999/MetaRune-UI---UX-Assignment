import pic1 from '../../assets/1.jpg'
const Hero = () => {
  return (
    <div className="w-full border border-black flex">
      <div className="w-[720px] border border-black h-[720px] flex items-start p-10">
        <div className="flex flex-col justify-start p-4"> 
          <h1 className="text-6xl text-left">Kyiv</h1> 
          <h1 className="text-6xl text-left">LuxeBouquets</h1> 
          <p className='text-left'>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
          <div>
            <div className='border border-black w-full'></div>
          <img src={pic1} alt="flowers" className="w-[256px] h-[256px] object-cover"/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
  
export default Hero;
