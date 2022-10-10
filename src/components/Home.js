import { useState } from 'react';
import {Table, Container} from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';


function Home() {
    const [studentData, setStudentData] = useState([
        {"id":"1",
         "name":"Sachin",
         "age":"32",
         "state":"Himachal Pradesh"
        },
        {"id":"2",
        "name":"Sachin",
        "age":"20",
        "state":"Madhya Pradesh"
        },
        {"id":"3",
        "name":"Sachin",
        "age":"20",
        "state":"Madhya Pradesh"
        },
        {id:"4",
        name:"Sachin",
        age:"20",
        state:"Madhya Pradesh"
        }
    ]);
    const [addMode, setAddMode] = useState(false);

    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [studentState, setStudentState] = useState("");

    const addModeHandler = () => {
        setAddMode(true);
    };

    const addStudentHandler = () => {
        setStudentData(current => [...current, {id: 5, name: 'New Student', age: '20', state: 'Kerela'}]);
        setAddMode(false);
    };
    if(!addMode){
        return (
            <div>
                <Container>
                    <Table striped>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((info)=> (
                        <tr>
                            <td>{info.id}</td>
                            <td>{info.name}</td>
                            <td>{info.age}</td>
                            <td>{info.state}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <div style={{align:'center'}}>
                <Button variant="secondary" onClick={addModeHandler}>Add Students</Button>
            </div>
            
            </div>
        );
    } else {
        return( <Container>
            <Form noValidate validated={false} >
                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label className="label">Student Id</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={studentId}
                    name="studentId"
                    required
                    />
                
                    <Form.Label className="label">Student Name</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={studentName}
                    name="studentName"
                    required
                    />
                
                    <Form.Label className="label">Student State</Form.Label>
                    <Form.Control
                    type="text"
                    defaultValue={studentState}
                    name="studentState"
                    required
                    />
                    
                </Form.Group>

                <Button variant="secondary" onClick={addStudentHandler}>Add Student</Button>
            </Form>
        </Container>
        );
    }
  
}

export default Home;