import React from "react";
import "./App.css";
import img from "../src/assets/Manatee.png";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript with Soffie Paul!
            </header>
            <h1>Hello World! Make way for the greatest site EVER!</h1>
            <img src={img} alt="Manatee"></img>
            <div>
                <ul>
                    <li>
                        Did you know? Manatees are one of Soffie&#39;s favorite
                        animals!
                    </li>
                    <li>
                        Manatees are also called &quot;sea cows&quot; because
                        they are large, slow-moving mammals that graze on sea
                        grass and aquatic plants in shallow coastal waters.
                    </li>
                    <li>
                        Manatees are also very gentle, friendly, and curious
                        towards humans.
                    </li>
                </ul>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Say Hello to the World - Log Hello World
                </Button>
            </div>

            <div
                style={{
                    backgroundColor: "red",
                    width: "100px",
                    height: "400px",
                }}
            >
                <Container>
                    <Row>
                        <Col>Did you hear about the cheetah-crab hybrids?</Col>
                        <Col>
                            Apparently things went sideways really fast...
                        </Col>
                    </Row>
                </Container>
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
