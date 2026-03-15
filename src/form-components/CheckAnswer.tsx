import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    let correctOrNah = "";
    const [answer, setAnswer] = useState<string>("");
    if (answer === expectedAnswer) {
        correctOrNah = "✔️";
    } else {
        correctOrNah = "❌";
    }

    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAnswer(e.target.value);
                    }}
                    value={answer}
                ></Form.Control>
            </Form.Group>
            <div>{correctOrNah}</div>
        </div>
    );
}
