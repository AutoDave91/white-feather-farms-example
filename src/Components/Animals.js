import React, {Component} from 'react';
import axios from 'axios';
import AnimalProfile from './AnimalProfile';
import Add from './Add';
import './Animals.css';

class Animals extends Component {
    constructor(){
        super();
        this.state = {
            animals:[],
            loading: true,
            index:0,
            error: '',
            userSearch: '',
            view: 'main'
        }
        this.updateAnimals = this.updateAnimals.bind(this);
        this.changeView = this.changeView.bind(this)
    }

    componentDidMount(){
        axios
            .get('/api/animals')
            .then(response =>{
                this.setState({animals: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateAnimals(newAnimals){
        this.setState({animals: newAnimals});
    }
    allAnimals(){
        this.setState({index: 0})
        axios.get('/api/animals')
            .then(res => this.setState({animals: res.data}))
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    pastureAnimals() {
        this.setState({index: 0})
        axios.get('/api/animals/filter?location=Pasture')
          .then(res => this.setState({ animals: res.data }))
    }
    yardAnimals() {
        this.setState({index: 0})
        axios.get('/api/animals/filter?location=yard')
            .then(res => this.setState({ animals: res.data }))
    }
    handleChange(text){
        this.setState({userSearch: text});
    }
    searchAnimals(){
        this.setState({index: 0})
        axios.get(`/api/animals/${this.state.userSearch}`)
            .then(res => this.setState({animals: res.data }))
    }
    changeView(newView){
        this.setState({view: newView})
    }
    // newAnimal(){
    //     let newAnimal = prompt("Who's the addition?");

    //     if(newAnimal != null){

    //     }
    // }

    render(){
        // console.log(this.state.animals)
        // console.log(this.state.index)
        const {animals} = this.state;
        let i = this.state.index;
        return (
            <main className="animalsContainer">
                <header>
                    <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
                    <h1>Animals</h1>
                </header>
                <section className='animal-buttons1'>
                    <button onClick={() => this.pastureAnimals()}>Pasture</button>
                    <button onClick={() => this.allAnimals()}>All</button>
                    <button onClick={() => this.yardAnimals()}>Yard</button>
                    {/* <button className={this.state.view === "add" ? "current" : ""}
                        onClick={() => this.setState({ view: "add" })}>New Animal</button> */}
                </section>
                <section className='animals'>
                    {animals.map((animal, index)=>(
                        index === i ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === i+1 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === i+2 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    {animals.map((animal, index)=>(
                        index === i+3 ? <AnimalProfile key={index} animal={animal} updateAnimals={this.updateAnimals} /> : null
                        ))}
                    </section>
                    <section className='animal-buttons2'>
                        <button onClick={()=> {if(i >=4){
                            this.setState({index: i -4})
                        }}}><strong><i className="prev"></i>Previous</strong></button>
                        <section className='search'>
                            <input type='field' placeholder='search species' onChange={(e) => this.handleChange(e.target.value)} />
                            <button onClick={()=> {this.searchAnimals(this.state.userSearch)}}>Search</button>
                        </section>
                        <button onClick={()=>{ if(i < animals.length-4){
                            this.setState({index: i +4})}}}>
                        <strong>Next<i className="next"></i></strong></button>
                    </section>
            </main>
        );
    }
}

export default Animals;