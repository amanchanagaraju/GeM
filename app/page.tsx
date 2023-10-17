import HeroCarousel from "@/components/HeroCarousel";
import Searchbsr from "@/components/Searchbsr";
import Image from "next/image";


const Home = () => {
  return (
    <>
     <section className="px-6 md:px-20 py-24 border-2 border-red-500" >
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
        <p className="small-text">smart shopping starts here:
        <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow-right"
        width={16}
        height={16}/>
        </p>
        <h1  className="head-text">
          Unleash  the power of the 
          <span className="text-red-500">Buywise</span>
        </h1>
        <p className="text-gray-800 text-lg font-semibold mb-4">
           Welcome to our extraordinary e-commerce emporium! Explore our vast assortment of top-notch products and uncover unbeatable bargains on cutting-edge fashion, state-of-the-art electronics, luxurious home essentials, and much more. Shop with unwavering confidence and indulge in lightning-fast shipping and unparalleled customer care.
         </p>
         <Searchbsr/>

      </div>
      <HeroCarousel/>
      </div>
      </section>
     
    </>
  )
}

export default Home;
