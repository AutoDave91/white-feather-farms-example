import React, {Component} from 'react';
import axios from 'axios';
import HomeSlides from './HomeSlides';
import './Home.css';

class Home extends Component {
    
    constructor(){
        super();
        this.state = {
            picSlides: [],
            index:0,
            loading: false,
            error: ''
        }
    }
    
    componentDidMount(){
        axios
            .get('/api/home')
            .then(response =>{
                this.setState({picSlides: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateHome(newHome){
        this.setState({picSlides: newHome});
    }

    render(){
        const {picSlides} = this.state;
        let i = this.state.index;
        return (
            <main className="homeContainer" id='home'>
            <header>
                <img className='main-logo' src={require('./Pics/main-logo.jpg')} width='10px' height='10px' alt='logo'/>
            </header>
            <section className='slides'>
                {picSlides.map((picSlides, index)=>(
                    index === i ? <HomeSlides key={index} picSlides={picSlides} updateHome={this.updateHome} /> : null
                    ))}
            </section>
            <section className='navButtons'>
                <button onClick={()=> {if(this.state.index >0){
                    this.setState({index: this.state.index -1})
                }}}><strong><i className="prev"></i>Previous</strong></button>
                <button onClick={()=>{if(this.state.index < this.state.picSlides.length -1){
                    this.setState({index: this.state.index +1})}}}>
                <strong>Next<i className="next"></i></strong></button>
            </section>
        </main>
        );
    }
}

export default Home;

// 84pts as of 2:40PM May 25th