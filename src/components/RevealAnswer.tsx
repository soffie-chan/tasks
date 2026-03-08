import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function revealAns(): void {
        setVisible(!visible);
    }
    let button = (
        <div>
            <Button onClick={revealAns}>Reveal Answer</Button>
            {visible ?
                <div>42</div>
            :   ""}
        </div>
    );

    return button;
}
