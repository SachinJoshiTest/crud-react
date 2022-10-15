import { useState } from 'react';
import {Table, Container} from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';


function ResumeBuilder() {
    
    const [pageStep, setPageStep] = useState(1);

    const goToNextPage = () => {
        setPageStep(pageStep+1);
    };


    const goToPrevPage = () => {
        setPageStep(pageStep-1);
    };
    if(pageStep == 1){
        return( <Container>
            <Form noValidate validated={false} >
                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">Name</Form.Label>
                    <Form.Control
                    type="text"
                    name="studentName"
                    required
                    />
                
                    <Form.Label className="label">Mobile Number</Form.Label>
                    <Form.Control
                    type="text"
                    name="studentMobile"
                    required
                    />
                
                    <Form.Label className="label">Email Address</Form.Label>
                    <Form.Control
                    type="text"
                    name="studentEmail"
                    required
                    />
                    
                </Form.Group>

                <Button variant="secondary" onClick={goToNextPage}>Next</Button>
            </Form>
        </Container>
        );
    }
    else if(pageStep == 2){
        return( <Container>
            <Form noValidate validated={false} >
                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">Skills</Form.Label>
                    <Form.Control
                    type="text"
                    name="studentName"
                    required
                    />
                                    
                </Form.Group>

                <Button variant="secondary" onClick={goToNextPage}>Next</Button>
                <Button variant="secondary" onClick={goToPrevPage}>Prev</Button>

            </Form>
        </Container>
        );
    }
  
}

export default ResumeBuilder;