import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      details: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("/api/events", {
              image: this.state.image,
              title: this.state.title,
              details: this.state.details
            })
            .then(response =>{
              this.props.updateEvent(response.data)})
            .catch(error => {
              console.log(error);
            })
        }}
      >
        <input name="image" onChange={this.handleChange} placeholder="Image" />
        <input name="title" onChange={this.handleChange} placeholder="title" />
        <input name="details" onChange={this.handleChange} placeholder="details" />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Add;