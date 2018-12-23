import React, {Component} from 'react';
import errimg from '../Slices/placeholder_for_missing_posters.png';
export default class ItemComponent extends Component {
    render() {
        console.log(this.props.content)
        var graphImage;
        try{
            graphImage = require('../Slices/' + this.props.content['poster-image'])
        }catch(e) {}
        return(
            <div class="w-1/3 ">
                <img class="i-set" src={graphImage} onerror = {errimg}/>
                <div class="mb-1">{this.props.content.name}</div>
            </div>
        )
    }
}