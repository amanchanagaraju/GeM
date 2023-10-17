"use server"
import { scrapeAmazonProduct } from "../scraper";
export async function scrapeAndStoreProduct(producturl: string){
    if(!producturl) return;
    try {
        const scrapedProduct=await scrapeAmazonProduct(producturl);
    } catch(error: any) {
        throw new Error(`Could not scrape product:${error.message}`)
    }

    
}