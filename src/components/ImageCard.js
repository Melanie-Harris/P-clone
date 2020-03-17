// the purpose of this component is to show one image by itself. Then auto adjust grid row of images for consistent size

import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};

        // Reference: Gives access to a single Dom element that is rendered by a component. Used in place of document.querySelector which is used in vanilla JS.
        // we create refs in the constructor, assign the to instance variables, then pass to a particular JSX element as props
        this.imageRef = React.createRef();
    }

componentDidMount() {
    // console.log(this.imageRef);
    //allows us to access the actual height of each image on first load
    this.imageRef.current.addEventListener('load', this.setSpans)
}

setSpans = () => {
    // console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 11 );

    this.setState({spans: spans});
}

    render(){
    // destructuring props: no more {this.props.image.x}
        // const {description, urls} = this.props.images;
        console.log(this.props)
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img className='image-attributes' ref={this.imageRef} alt={this.props.image.alt_description} src={this.props.image.urls.small} 
                />
            <h6 className="center-text">{this.props.image.alt_description}</h6>
                
            </div>
        )
    }
}

export default ImageCard;

// steps: 
// 1) let the imageCard render itself and its image
// 2) Reach into the DOM and figure our the height of the image
// 3) Set the image on state to get the component to render
// 4) When rerendering, assign a 'grid-row-ed' to make sure the image take sup the appropriate space 


