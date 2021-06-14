import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
class Update extends Component {
    render() {
        return (
            <Form onSubmit = {(e) => this.props.update(e)} style = {{width : '50%' , margin : '30px auto'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image URL </Form.Label>
                    <Form.Control type="text" value = {this.props.img} onChange = {this.props.imgHandler}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.props.name} onChange = {this.props.nameHandler} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Level</Form.Label>
                    <Form.Control type="text" value = {this.props.level} onChange = {this.props.levelHandler} />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Update
                </Button>
            </Form>
        )
    }
}

export default Update
