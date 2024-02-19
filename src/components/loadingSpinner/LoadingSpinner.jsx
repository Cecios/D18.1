import { Container, Row, Col } from "react-bootstrap";
const LoadingSpinner = () => {
    
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default LoadingSpinner;