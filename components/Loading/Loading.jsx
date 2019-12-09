import React, { Component } from 'react'
import './Loading.scss';

export default class Loading extends Component{
    render(){
        return(
            <div className="loading">
                {/* <div className="loadingCircle"></div> */}
                <div className="loadingEmpik">
                    <img width={100} height={100}src="https://www.empik.com/b/mp/img/svg/load_icon.svg"/>
                </div>
            </div>
        )
    }
}
