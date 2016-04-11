import React from 'react';
//import '../../_test.css';
import './index.scss';
import ProgressBar from '../Progressbar';
import CircularProgress from '../CircularProgress';
import PulseLogo from '../PulseLogo';

require('../CircularProgress/css/main.css');

export default class App extends React.Component{
  render(){

    return (
      <div> 
			<div >
				
				
					<CircularProgress
                    strokeWidth="15"
                    radius="160"
			/>
				
		
			
			</div>
		
			
		</div>
		
    );
  }
}