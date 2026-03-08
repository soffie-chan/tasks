import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType() {
        if (type === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }
    let button = (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer </div>}
        </div>
    );

    return button;
}
