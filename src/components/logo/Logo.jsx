import  './logo.css'
const Logo = (props)=>{
    return (
        <>
            <img 
            src="https://placehold.co/100x100" 
            alt="logo"
            className={props.classe}
            />
        </>
    )
};

export default Logo;