import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const faveColors = [
        "Orchid",
        "MediumVioletRed",
        "Gold",
        "LightSkyBlue",
        "PaleVioletRed",
        "FloralWhite",
        "MediumTurquoise",
        "CornflowerBlue",
    ];
    const [color, setColor] = useState<string>(faveColors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {faveColors.map((currcolor) => (
                <Form.Check
                    key={currcolor}
                    inline
                    type="radio"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    checked={color === currcolor}
                    label={currcolor}
                    value={currcolor}
                ></Form.Check>
            ))}
            <div>You have chosen</div>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
