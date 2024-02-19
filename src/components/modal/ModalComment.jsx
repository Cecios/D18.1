import { useEffect, useState } from "react";

const ModalComment = (comments)=> {

    const [dataComments, setDataComments] = useState()

        console.log(dataComments);
        useEffect(()=>{
            //tutto quello che c'è qui verrà eseguito solo quando il componente viene montato e ogni volta che 
            // vi è un cambio di stato inserito nell'array delle dipendenze
            getData();
            return ()=> {
                //quello che scrivo qui sarà eseguito all'unmount del componente
            }
          }, [])

}
export default ModalComment;