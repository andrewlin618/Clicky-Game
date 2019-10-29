import React from "react";
import Header from "./component/Header";
// import Footer from "./component/Footer";
import Jumbotron from "./component/Jumbotron";
import Card from "./component/Card"
import {Container,Col} from "./component/Grid";
import characters from "characters.json"


function App() {
    return (
    <div>
        <Header />
        <Jumbotron />
        <Container>
            <Col size="md-9">
            {characters.map(item => (
            <Card key={item.id} image={item.image}
            />
            ))}
            </Col>
            <Col size="md-3"></Col>
        </Container> 
        {/* <Footer /> */}
    </div>
    )
}

export default App;
