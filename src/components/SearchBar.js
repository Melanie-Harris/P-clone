import React from 'react';
import './styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import cat from '../img/cat.jpg'

class SearchBar extends React.Component{
    
    state = {term: ''};
    
   onFormSubmit = (event) =>{
       event.preventDefault();
    //    console.log(this.state.term)
    //    prevents page from submitting itself

    this.props.onSubmit(this.state.term)
   }

    render() {
        return (
            // took out: ui segment from className
            <div className=" search-bar-container search-bar-img  ">
                <Navbar bg="" expand="lg">
                    {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Form onSubmit={this.onFormSubmit} className="" inline>
                            <FormControl type="text" placeholder="Search for content" className="mr-sm-2 forms " value={this.state.term}
                                onChange={event => this.setState({ term: event.target.value })} />
                        </Form>
                    {/* </Navbar.Collapse> */}
                </Navbar>

                {/* <form  onSubmit={this.onFormSubmit} className="ui form  form-shape">
                    <div className="field "> */}
                        {/* <div className="title-font">Resplash</div>
                        <div className="sub-title-font" >Unsplash clone</div>
                        <label style={{color:'white'}}>Search free high-resolution photos</label> */}
                        {/* <input 
                        type="text" 
                        value={this.state.term}  
                        onChange={event => this.setState({ term: event.target.value })}
                        /> */}
                        {/* <span>Images courtesy of Unsplash</span> */}
                    {/* </div>
                </form> */}

              
            </div>
        );
    }
}

export default SearchBar;