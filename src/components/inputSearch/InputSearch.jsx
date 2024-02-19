import { useState, useEffect } from "react";
const InputSearch = (props)=>{
    const [searchBar, setSearchBar] = useState('')
    const [products,setProducts] = useState({})
    const [filteredProducts, setFilteredProducts] = useState({})
    console.log(filteredProducts);
    useEffect(()=>{
        //tutto quello che c'è qui verrà eseguito solo quando il componente viene montato e ogni volta che 
        // vi è un cambio di stato inserito nell'array delle dipendenze
        
        if (searchBar.length == 0) {
            setProducts(props.Products)
        }
        else{
            products.filter((product)=>{
                let filteredProducts = product.title.toLowerCase().includes(searchBar.toLocaleLowerCase())
                console.log(filteredProducts);
            })
            
        }
        
            
        return ()=> {
            //quello che scrivo qui sarà eseguito all'unmount del componente
        }

      }, [searchBar])

    return(
        <>
            <input
                value={searchBar}
                onChange = {(ev)=> setSearchBar(ev.target.value)}
                name="search" 
                type="text" 
                placeholder="Find your product" />
        </>
    )
}
export default InputSearch;