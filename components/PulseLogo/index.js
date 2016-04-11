import React from 'react';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class PulseLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			pulseHeight:200,
			pulseWidth:200,
			grow: true,
			pulseOpacity:0.75
        };
    }
	changeSize(){
		if(this.state.grow==true){
			if(this.state.pulseHeight <= 250){
				this.setState({
				pulseHeight:this.state.pulseHeight + 3,
				pulseWidth: this.state.pulseWidth +3,
				pulseOpacity: this.state.pulseOpacity +0.025	
				});
			}
			else{
				this.setState({grow:false});
			}
		}
		else if(this.state.grow==false){
			if(this.state.pulseHeight >= 200){
				this.setState({
				pulseHeight:this.state.pulseHeight - 3,
				pulseWidth: this.state.pulseWidth -3,
				pulseOpacity: this.state.pulseOpacity -0.025
				});
			}
			else{
				this.setState({grow:true});
			}
		}
	}
	
	componentDidMount(){
		var th= this;
		setInterval(function(){
			th.changeSize();
		},50);
	}
    render() {
		
		var pulseHeight=this.state.pulseHeight;
		var pulseWidth= this.state.pulseWidth;
		var pulseChange=275-pulseWidth;
       var imgStyle={
		   	margin:pulseChange/2,
		 	height: pulseHeight,
		   	width: pulseWidth,
		   
	   };
	
        return (
            <span className="CircularProgress-Text">
				<img src="../../img/loudtronix_logo.png" style={imgStyle} />
			</span>
        );
    }
}


