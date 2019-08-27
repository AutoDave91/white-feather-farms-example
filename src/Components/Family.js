import React, {Component} from 'react';
import axios from 'axios'
import FamilyProfile from './FamilyProfile';
import './Family.css';

class Family extends Component {
    constructor(){
        super();
        this.state = {
            family: [],
            index:0,
            loading: false,
            error: ''
        }
    }

    componentDidMount(){
        axios
            .get('/api/family')
            .then(response =>{
                this.setState({family: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateFamily(newFamily){
        this.setState({family: newFamily});
    }

    render(){
        const {family} = this.state
        return (
          <main className="familyContainer" id='Family'>
            <header>
              <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
              <h1 id='family'>Family</h1>
            </header>
            <section className='profiles'>
                {family.map((family, index)=>(
                    index === this.state.index ? <FamilyProfile key={index} family={family} updateFamily={this.updateFamily} /> : null
                    ))}
                {family.map((family, index)=>(
                    index === this.state.index+1 ? <FamilyProfile key={index} family={family} updateFamily={this.updateFamily} /> : null
                    ))}
            </section>
            <section className='navButtons'>
                <button onClick={()=> {if(this.state.index >=2){
                        this.setState({index: this.state.index -2})
                    }}}><strong><i className="prev"></i>Previous</strong></button>
                <button onClick={()=> {if(this.state.index+1 < family.length-1){
                        this.setState({index: this.state.index +2})
                    }}}><strong>Next<i className="next"></i></strong></button>
            </section>
          </main>
        );
    }
}

export default Family;