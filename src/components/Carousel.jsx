import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state={
        index:0
    }
}
    increment=()=>{
        if(this.state.index>=images.length-1){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
                index: this.state.index+1
            })
        }
    }
    decrease=()=>{
        if(this.state.index<=0){
            this.setState({
                index: 2
            })
        }else{
            this.setState({
                index: this.state.index-1
            })
        }
    }

  render(){
    return (
        <>
            <div className="carousel-container flex">
                    <div className="leftArrow arrowDiv flex" onClick={()=>this.decrease()}>
                        <ArrowBackIosIcon />
                    </div>
                    <h2 className="title">{images[this.state.index].title}</h2>
                    <img  src={images[this.state.index].img} alt=""/>
                    <h4 className="subtitle title">{images[this.state.index].subtitle}</h4>
                    <div className="rightArrow arrowDiv flex" onClick={()=>this.increment()}>
                        <ArrowForwardIosIcon />
                    </div>
            </div>        
        </>
    )
  }
}

export default Carousel;