import axios from 'axios';
import React, { Component } from 'react'
import Digimon from './Digimon';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            root : process.env.REACT_APP_ROOT,
            digimonsData : [],
            showDigimons : false
        }
    }

    componentDidMount = async () => {
        console.log(this.state.root);
        const digimons = await axios.get(`${this.state.root}/getdigimons`);
        this.setState({
            digimonsData : digimons.data,
            showDigimons : true
        })

    }

    addToFav = async (digimon) => {
        await axios.post(`${this.state.root}/addtofavorite` , digimon);
    }
    render() {
        return (
            <>
                {
                    this.state.showDigimons &&
                    this.state.digimonsData.map((item , idx) => {
                        return (
                            <Digimon
                            digimon = {item}
                            index = {idx}
                            addToFav ={this.addToFav}
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default Main;
