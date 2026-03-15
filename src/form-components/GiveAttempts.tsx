import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [reqAttempts, setReqAttempts] = useState<string>("");
    const attemptsAdd = parseInt(attempts) + 1 || 0;
    const attemptsSub = parseInt(attempts) - 1 || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => {
                    if (reqAttempts) {
                        setAttempts(
                            String(attemptsAdd + parseInt(reqAttempts) - 1),
                        );
                    }
                }}
            >
                gain
            </Button>
            <Button
                disabled={parseInt(attempts) === 0}
                onClick={() => {
                    setAttempts(String(attemptsSub));
                }}
            >
                use
            </Button>
            <div>Attempts Left = {attempts}</div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(e) => {
                        if (e.target.value !== "") {
                            setReqAttempts(e.target.value);
                        }
                    }}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
