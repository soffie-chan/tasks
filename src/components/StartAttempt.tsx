import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numOfAttempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        setAttempts(numOfAttempts - 1);
        setInProgress(true);
    }

    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={quizInProgress || numOfAttempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!quizInProgress}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempts(numOfAttempts + 1);
                }}
                disabled={quizInProgress}
            >
                Mulligan
            </Button>
            <div>Number of Attempts Left: {numOfAttempts}</div>
        </div>
    );
}
