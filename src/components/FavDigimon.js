import React, { Component } from 'react';
import {Card , Button} from 'react-bootstrap';


class FavDigimon extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' , display : 'inline-block' , margin : '45px 45px'}}>
                <Card.Img variant="top" src={this.props.digimon.img} />
                <Card.Body>
                    <Card.Title>{this.props.digimon.name}</Card.Title>
                    <Card.Text>
                        {
                            this.props.digimon.level
                        }
                    </Card.Text>
                    <Button variant="warning" onClick = {() => this.props.delete(this.props.index)}>Delete</Button>
                    <Button variant="danger" onClick = {() => this.props.showForm(this.props.index)}>Update</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default FavDigimon;
