import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <a href="https://www.empik.com/premium" target="_blank" title="Empik Premium">
                    <img className="banner-img" alt="Grafika Premium Go" src="https://media.empik.com/content/cpl/kotoserver/app/kcVkiyFAwh.jpg" />
                </a>
            </div>
        )
    }
}

export default Banner