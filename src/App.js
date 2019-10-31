import React from "react";
import Header from "./component/Header";
// import Footer from "./component/Footer";
import Jumbotron from "./component/Jumbotron";
import Card from "./component/Card"
import {Container,Col,Row} from "./component/Grid";
import characters from "./characters.json"

function randomize(array){
    let i = array.length - 1;
    while (i > 0){
        let j = Math.floor(Math.random()* (i-1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
        i --;
    } 
    return array;
}

class App extends React.Component {
    state = {
        score: 0,
        bestScore: 0,
        cards:randomize(characters),
        pickedIds:[],
    };
    
    // handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    // }

    handleOnClick = (id) => {
        const pickedIds = this.state.pickedIds; 
        randomize(this.state.cards);
        if (this.state.pickedIds.indexOf(id) < 0){
            pickedIds.push(id);
            this.setState({pickedCards:pickedIds})
            this.setState({score:this.state.score+1})
            if (this.state.bestScore < this.state.score+1){
                this.setState({bestScore:this.state.score+1})
            }
        }
        else{
            let result = window.confirm('You lose! Play again?');
            if(result){
                this.setState({score:0});
                this.setState({pickedIds:[]});
            }
            else{
                alert('Game over!')
            }
        }
    }

    render(){
        return (
        <div>
            <Header />
            <Jumbotron score={this.state.score} bestScore={this.state.bestScore}/>
            <Container fluid={false} className='w-50'>
                <Row>
                    <Col size="md-3" ></Col>
                    <Col size="md-6">
                    {characters.map(item => (
                    <Card key={item.id} image={item.image} name={item.name} onClick={() => this.handleOnClick(item.id)}/>
                    ))}
                    </Col>
                </Row>
            </Container> 
            {/* <Footer /> */}
    </div>
    )        
}
}

export default App;
