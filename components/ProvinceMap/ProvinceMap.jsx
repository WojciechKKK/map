import React, { Component } from 'react';
import './ProvinceMap.scss'
import GenerateMap from '../GenerateMap/GenerateMap.jsx';
import Details from '../Details/Details.jsx'

class ProvinceMap extends Component{
    constructor(){
        super();
        this.state = {
            showDetails: false,
            selectedProvince: ''
        }
    }

    componentDidMount = () => {
        // window.addEventListener('resize', function(){
        //     // let widthWindow = window.innerWidth;
        //     let mapEl = document.querySelector('.generate-map');
        //     mapEl.setAttribute("viewBox", `0 -10 620 600`);
        // });
    }

    closeDetails = () => {
        this.setState({
            showDetails: false,
            selectedProvince: ''
        })
    }
    //forGenerateMap - show and set province
    showDetails = (province) => {
        this.setState({
            showDetails: !this.state.showDetails,
            selectedProvince: province
        })
    }
    render(){
        const { showDetails, selectedProvince } = this.state;
        return(
            <div className="province-map">
                <GenerateMap fnClick={this.showDetails} showDetails={showDetails} />
                {
                    showDetails
                    ? <Details fnClick={this.closeDetails} province={selectedProvince}/>
                    : null
                }
            </div>
        )
    }
}

export default ProvinceMap