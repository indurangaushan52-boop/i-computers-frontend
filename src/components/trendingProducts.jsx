import ProductCard from "./productCard"

export default function TrendingProducts(){
    return(
    <div>
        <h1 className = "text-3xl text-shadow-rose-800">Trending Products</h1>

        <ProductCard 
            name = "Mac Book Air" 
            price = "150,000" 
            image = "https://th.bing.com/th/id/OIP.iSsDuT1nGrT4L7kwIkNkIAHaFu?w=193&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />

        <ProductCard 
            name = "Acer Laptop" 
            price = "133,000" 
            image = "https://th.bing.com/th/id/OIP.iSsDuT1nGrT4L7kwIkNkIAHaFu?w=193&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />  

        <ProductCard 
            name = "Lenovo XPS 13" 
            price = "165,000" 
            image = "https://th.bing.com/th/id/OIP.iSsDuT1nGrT4L7kwIkNkIAHaFu?w=193&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />  
        <ProductCard 
            name = "Dell I5" 
            price = "143,000" 
            image = "https://th.bing.com/th/id/OIP.iSsDuT1nGrT4L7kwIkNkIAHaFu?w=193&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />  

    </div>
    )
}
