"use client"

import { scrapeAndStoreProduct } from "@/lib/actions"
import { FormEvent, useState } from "react"
const isValidAmazonProductUrl=(url: string) =>{
    try{
      const parsedURL=new URL(url);
      const hostname = parsedURL.hostname
     
      if(hostname.includes('amazon')|| hostname.includes('amazon.com') || hostname.includes('amazon.')){
        return true;
      }
    }
    catch{
      return false;
    }
    return false;

}
const Searchbsr = () => {
   const [searchPrompt, setSearchPrompt] =useState('')
   const [ isLoading, setIsLoading] =useState(false)
    const handleSubmit=async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValidlink=isValidAmazonProductUrl(searchPrompt);
        alert(isValidlink ?'valid' :'invalid');
        try {
        setIsLoading(true)
        const product=await  scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
          console.error(error);
        }
    }
  return (
    <form className="flex flex-wrap gap-4 mt-12"
    onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your product" 
        className="searchbar-input" />
        <button type="submit" className="searchbar-button">
        {isLoading?"Searching...":'Search'}
        </button>

    </form>
  )
}

export default Searchbsr
