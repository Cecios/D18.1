import Logo from "../logo/Logo";
import Links from "../links/Links";
import Container from 'react-bootstrap/Container';

const MyNavbar = ()=>{
    return (
        <>
            <Container className="d-flex align-items-center justify-content-between">
                <Logo
                    classe = 'logo'
                />
                <Links/>
            </Container>
        </>
    )
}
export default MyNavbar;