import React from 'react';
//import '../../_test.css';
import './index.scss';

export default class ProgressBar extends React.Component{
	constructor(props){
		super(props);
		this.state={progress:0};
	}
	handleChange(){
		if(this.state.progress <= 100) {
       	  var updateProgress = this.state.progress;
       	  updateProgress = updateProgress + 10;
       	  this.setState({progress: updateProgress});
		}
        else{
            this.setState({progress: 100});
        }
	}
	componentDidMount(){
		var updateProgress=this.state.progress + 10;
        this.setState({progress:updateProgress});
	}
	componentDidUpdate(){
		var $this= this;

       var timer= setInterval(function(){
            if($this.state.progress<100){
                $this.handleChange()
            }
           else{
                clearInterval(timer);
            }
      	},2000);
	}
  	render(){      
	  
	  var progress = this.state.progress;
        var innerDivStyle= {
            backgroundColor: 'pink',
            width: progress+'%'

        };
        var outerDivStyle={
          borderStyle: 'solid'

        };
        if(this.state.progress < 100){

            return(
                <div className="col-md-6" style={outerDivStyle} >
                    <div style={innerDivStyle} >{this.state.progress}%</div>
                    
                </div>
            );
        }
        else{
            return(
                <h1>Thank you for downloading with Loudtronix</h1>
				
            );
        }
  }
}
//var ProgressBar = React.createClass({
//    
//    getInitialState: function(){
//        return {progress: 0}//progress is counted in percentile
//    },
//    handleChange: function(){
//
//        if(this.state.progress <= 100) {
//            var updateProgress = this.state.progress;
//            updateProgress = updateProgress + 10;
//            this.setState({progress: updateProgress});
//        }
//        else{
//            this.setState({progress: 100});
//        }
//    },
//    componentDidMount: function(){//runs after initial mount
//        var updateProgress=this.state.progress + 10;
//        this.setState({progress:updateProgress});
//    },
//    componentDidUpdate: function(){//runs every update
//        var $this= this;
//
//       var timer= setInterval(function(){
//            if($this.state.progress<100){
//                $this.handleChange()
//            }
//           else{
//                clearInterval(timer);
//            }
//            },2000
//        );
//
//    },
//    render: function(){
//        var progress = this.state.progress;
//        var innerDivStyle= {
//            backgroundColor: 'pink',
//            width: progress+'%'
//
//        };
//        var outerDivStyle={
//          borderStyle: 'solid'
//
//        };
//        if(this.state.progress < 100){
//
//            return(
//                <div className="col-md-6" style={outerDivStyle} >
//                    <div style={innerDivStyle} >{this.state.progress}%</div>
//                    
//                </div>
//            );
//        }
//        else{
//            return(
//                <h1>Thank you for downloading with Loudtronix</h1>
//				
//            );
//        }
//
//    }
//    
//
//});
//
//
//React.render(<ProgressBar/>,
//    document.getElementById('react-container'));

