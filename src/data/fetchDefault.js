export {fetchDefault}
const fetchDefault = async (key,url,method,body) => {

    
    let  options = {
         method: method,
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
                },
        body:JSON.stringify(body),
        }
        try{
            let resp = await fetch(url,options)
            if (resp.status >= 200 && resp.status < 300){

                console.log('Request successfully done');
                let data = await resp.json()
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error)};
};

