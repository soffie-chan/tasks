import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE); //List of buttons representing people
    const [team, setTeam] = useState<string[]>([]); //List of people representing a team

    function chooseMember(option: string) {
        if (!team.includes(option)) {
            const newTeam = [...team, option];
            setTeam(newTeam);

            const resetOptions = allOptions.filter(
                (optionInList: string) => optionInList !== option,
            );
            setAllOptions(resetOptions);
        }
    }

    function clearTeam() {
        setTeam([]);
        const resetOptions = PEOPLE;
        setAllOptions(resetOptions);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add {option}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
