import { Button, Form } from "react-bootstrap";

const Classroom = () => {
    return <div>
        <Form>
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control id="searchName"/>
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control id="searchMajor"/>
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control id="searchInterest"/>
            <br />
            <Button variant="neutral">Reset Search</Button>
        </Form>
        { /* TODO Students go here! */ }
    </div>

}

export default Classroom;