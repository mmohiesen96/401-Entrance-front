import axios from 'axios';
import React, { Component } from 'react'
import FavDigimon from './FavDigimon';
import Update from './Update';

class FavoriteDigimons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDigimons: [],
            showFav: false,
            root: process.env.REACT_APP_ROOT,
            showForm: false,
            name: '',
            img: '',
            level: '',
            index: 0
        }
    }

    componentDidMount = async () => {
        const favorite = await axios.get(`${this.state.root}/getfavorite`);
        this.setState({
            favDigimons: favorite.data,
            showFav: true
        })
    }

    delete = async (index) => {
        const id = this.state.favDigimons[index]._id;
        const newData = await axios.delete(`${this.state.root}/delete/${id}`);
        this.setState({
            favDigimons: newData.data
        })
    }

    imgHandler = (e) => { this.setState({ img: e.target.value }) }
    nameHandler = (e) => { this.setState({ name: e.target.value }) }
    levelHandler = (e) => { this.setState({ level: e.target.value }) }

    showForm = (index) => {
        const digimon = this.state.favDigimons[index];
        this.setState({
            showForm : true,
            img : digimon.img,
            level:digimon.level,
            name : digimon.name,
            index : index
        })
    }


    updateDigi = async (e) => {
        e.preventDefault();
        const updatedDigi = {
            img: this.state.img,
            name: this.state.name,
            level: this.state.level,
        }

        const updatedData = await axios.put(`${this.state.root}/update/${this.state.index}` , updatedDigi);

        this.setState({
            favDigimons : updatedData.data
        })
    }
    render() {
        return (
            <>
                {
                    this.state.showForm &&
                    <Update
                    img = {this.state.img}
                    name = {this.state.name}
                    level = {this.state.level}
                    levelHandler = {this.levelHandler}
                    nameHandler = {this.nameHandler}
                    imgHandler = {this.imgHandler}
                    update = {this.updateDigi}
                    />
                }
                {
                    this.state.showFav &&
                    this.state.favDigimons.map((item, idx) => {
                        return (
                            <FavDigimon
                                digimon={item}
                                index={idx}
                                delete={this.delete}
                                showForm = {this.showForm}
                            />
                        )
                    })
                }
            </>
        )
    }
}

export default FavoriteDigimons;
