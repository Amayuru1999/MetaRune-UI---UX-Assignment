const Offer = () => {
  return (
    <div className="flex">
      <div className="w-[695px]  border border-black h-[620px] flex items-start p-10">
        <h1 className="text-6xl">Why choose us?</h1>
      </div>
      <div className="w-[520px]  border border-black h-[620px] flex flex-col">
        <div className="border-b border-black h-[232px] ">
        <div className="flex flex-col justify-start items-start p-5">
          <h1 className="text-3xl mt-2">Stylish bouquets by florists</h1>
          <h2 className="text-left mt-2 ">
            At our floral studio, our professional florists craft the most
            elegant and stylish bouquets using only the freshest and highest
            quality materials available. We stay up-to-date with the latest
            floral design trends and offer unique arrangements that are sure to
            impress. Let us brighten up your day with our stunning bouquets and
            same-day delivery service.
          </h2>
        </div>
        </div>
        <div className="border-b border-black h-[200px] ">
        <div className="flex flex-col justify-start items-start p-5">
          <h1 className="text-3xl mt-2">On-time delivery</h1>
          <h2 className="text-left mt-2 ">
          Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.
          </h2>
        </div>
        </div>
        <div className="border-b border-black h-[200px] ">
        <div className="flex flex-col justify-start items-start p-5">
          <h1 className="text-3xl mt-2">Safe payment</h1>
          <h2 className="text-left mt-2 ">
          You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
