import React, { PureComponent } from 'react';
import axios from 'axios';
import {URL_HOME} from '../utils/paths';
import SliderWidget from '../utils/slider';
import Subscription from '../utils/subscribe';
import Blocks from './block';
import Poll from './poll';


class Home extends PureComponent {

    state = {
        home:''
    }

    componentDidMount(){
        axios.get(URL_HOME)
        .then(response => {
            console.log(response.data);
            this.setState({home:response.data});
        })
    }


    render(){
        return(
        <>
        <SliderWidget slides={this.state.home.slider}/>
        <Subscription/>
        <Blocks blocks= {this.state.home.blocks}/>
        <Poll/>
        </>
    )}
}

export default Home;