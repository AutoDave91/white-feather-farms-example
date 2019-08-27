import React, {Component} from 'react';
import axios from 'axios';
import EventSlides from './EventSlides';
import Add from './Add'
import './Events.css';

class Events extends Component {
    constructor(){
        super();
        this.state ={
            eventSlides: [],
            index:0,
            loading: false,
            error: '',
            view: 'events',
            userInput: ''
        }
        this.changeView = this.changeView.bind(this)
        this.updateEvent = this.updateEvent.bind(this)
    }
    changeView(newView){
        this.setState({view: newView});
    }

    componentDidMount(){
        axios
            .get('/api/events')
            .then(response =>{
                this.setState({eventSlides: response.data, loading: false});
            })
            .catch(error =>{
                console.log(error);
                this.setState({loading: false, error: 'An error occurred'})
            })
    }
    updateEvent(newEvent){
        this.setState({eventSlides: newEvent});
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    render(){
        const {eventSlides} = this.state;
        let i = this.state.index;
        return (
        <main className="eventsContainer">
            <header className='Header'>
                <img className='logo' src={require('./Pics/logo.jpg')} width='10px' height='10px' alt='logo'/>
                <h1 className='events'>Events</h1>
            </header>
            <section className='slides'>
                {eventSlides.map((eventSlides, index)=>(
                    index === i ? <EventSlides key={index} eventSlides={eventSlides} updateEvent={this.updateEvent} index={i}/> : null
                    ))}
            </section>
            <section className='navButtons'>
                    <button onClick={()=> {if(i >0){
                    this.setState({index: i -1})
                }}}><strong><i className="prev"></i>Previous</strong></button>
                <div className='addEditDelete'>
                    <button onClick={()=>{
                        let newLink = prompt("new image")
                        // console.log(newLink)
                        axios.put('/api/events/'+ eventSlides[i].title, {image: newLink})
                            .then(response =>{
                            this.updateEvent(response.data);
                        })
                    }}>Edit</button>
                    <button onClick={()=>{
                        // console.log(this.state.eventSlides[i])
                        axios.delete('/api/events/'+ eventSlides[i].title).then(response =>{
                            this.updateEvent(response.data);
                        });
                        if(i >0){
                            this.setState({index: i -1})
                        };
                    }}>Delete</button>
                    <button>Add</button>
                </div>
                <button onClick={()=>{
                    if(i < eventSlides.length -1){
                        this.setState({index: i +1})}}}>
                <strong>Next<i className="next"></i></strong></button>
            </section>
            <section className='adding'>
            {this.state.view === "Events" ? (
                <Events />
                ) : (
                <Add changeView={this.changeView} updateEvent={this.updateEvent} />
            )}
            </section>
            
        </main>
        );
    }

}

export default Events;