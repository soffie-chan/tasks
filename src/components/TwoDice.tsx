import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [firstDie, setFirstDie] = useState<number>(1);
    const [secondDie, setSecondDie] = useState<number>(6);

    function winMessage(one: number, two: number) {
        let message = <div>Keep going...</div>;
        if (one === two) {
            if (one === 1) {
                message = <div>Lose</div>;
            } else {
                message = <div>Win</div>;
            }
        }
        return message;
    }

    return (
        <div>
            <div>Play Snake Eyes!</div>
            <span data-testid="left-die">The first die: {firstDie}</span>
            <span data-testid="right-die"> The second die: {secondDie}</span>

            <div>
                <Button
                    onClick={() => {
                        setFirstDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setSecondDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {winMessage(firstDie, secondDie)}
        </div>
    );
}
