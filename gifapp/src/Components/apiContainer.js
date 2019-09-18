import React, { Component } from  "react";
import utils from "../utils/api";
import api from "../utils/api";

class apiContainer extends Component{
    state = {
        result: {},
        search: ""
    };

 componentDidMount(){
     this.searchTenor("Dogs");
 }

 searchTenor = () => {
     API.search(query)
     .then(res => this.setState({ result: res.data}))
     .catch(err => console.log(err));
 };

 handleInputChange = event => {
     const value = event.target.value;
     const name = event.target.name;
     this.setState({
         [name]: value
     });
 };

 handleFormSubmit = event => {
     event.preventDefault();
     this.searchTenor(this.state.search );
     this. 
 };

 
}