import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [user, setUser] = useState<string>("Your Name");
    const [isStudent, setisStudent] = useState<boolean>(true);

    const editModeOn = (
        <div>
            <Form.Group>
                <Form.Label>User Name:</Form.Label>
                <Form.Control
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUser(e.target.value);
                    }}
                    id="student"
                    value={user}
                ></Form.Control>
            </Form.Group>

            <Form.Check
                type="checkbox"
                checked={isStudent}
                id="student"
                className="form-check-input"
                onChange={(e) => {
                    setisStudent(e.target.checked);
                }}
            ></Form.Check>
        </div>
    );

    return (
        <div>
            <Form.Check
                type="switch"
                id="student"
                checked={edit}
                onChange={(e) => {
                    setEdit(e.target.checked);
                }}
            ></Form.Check>
            {edit ? editModeOn : <div></div>}
            <div>
                /{user} {isStudent ? " is a student" : " is not a student"}/
            </div>
        </div>
    );
}
