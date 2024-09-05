import Image from "next/image";
import Hero from "./_components/Hero";
import BrandBanner from "./_components/BrandBanner";
import ProductSection from "./_components/ProductSection";
import BrowseSection from "./_components/BrowseSection";
import { Suspense } from "react";
import Loading from "./loading";

//npm run dev -- -p 4000

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandBanner />
      
        <ProductSection sectionTitle={`NEW ARRIVALS`} api={`?limit=4`} />
      
      <hr
        className="mx-auto  max-w-screen-xl border-black/10"
        style={{ height: "1px" }}
      />
     
        <ProductSection
          sectionTitle={"top selling"}
          api={`/category/women's clothing?limit=4`}
        />
     
    
        <BrowseSection />
     
    </div>
  );
}
