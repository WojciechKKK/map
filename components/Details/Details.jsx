import React, { Component } from 'react'
import './Details.scss';
import data from '../../data/information.json'
import Loading from '../Loading/Loading.jsx'
import Information from '../Information/Information.jsx'

//TO DO 
    //KEYUP - ESC- close Details Component
    // window.addEventListener('keyup', function(){
    //     if(event.key == 'Escape'){
    //         -close comp-
    //     }
    // })

const timeLoading = 1.5;  //in seconds

class Details extends Component{
    constructor(){
        super();
        this.state = {
            loading: true,      //show animation
            title: '',  
            city: '',
            quantityStar: '',
            opinion: [],
            areaSize: '',
            population: '',
            info: '',
            img: [],
            herb: '',
            counterImg: 0       //for nex/prev img
        }
    }
    //set info from DB
    componentDidMount = () => {
        let nameProvince = this.props.province;
        let dataProvince = data[nameProvince];
        this.setState({
            title: dataProvince.title,
            city: dataProvince.city,
            quantityStar: dataProvince.quantityStar,
            opinion: dataProvince.opinion,
            areaSize: dataProvince.areaSize,
            population: dataProvince.population,
            info: dataProvince.info,
            img: dataProvince.img,
            herb: dataProvince.herb
        })
        
        setTimeout(() => {
            this.setState({
                loading: false
            })
        },timeLoading*1000)
        console.log(data[nameProvince].title);
    }
    // set in ProvinceMap Comp
    closeDetails = () => {
        if(typeof this.props.fnClick == 'function'){
            this.props.fnClick();
        }
    }
    nextImage = () => {
        if(this.state.counterImg == this.state.img.length-1){
            this.setState({
                counterImg: 0
            })
        } else {
            this.setState({
                counterImg: this.state.counterImg +1
            }) ;
        }
    }
    prevImage = () => {
        if(this.state.counterImg == 0){
            this.setState({
                counterImg: this.state.img.length-1
            });
        } else {
            this.setState({
                counterImg: this.state.counterImg - 1
            }) ;
        }
    }
    setImage = (e) => {
        const numberImg = Number(e.currentTarget.id)
        this.setState({
            counterImg: numberImg
        })
    }
    render(){
        const { loading, title, city, quantityStar, opinion, areaSize, population,info, img, herb } = this.state;
        return(
            <div className="details">
               {
                   loading
                   ? <Loading />
                   :<main className="details-container">
                        <aside className="details-slider">
                            <div className="detailsImg" style={{backgroundImage: `url(${img[this.state.counterImg]})`}}></div>
                            <div className="details-imgOther">
                                {
                                    img.map((el,id) => <img key={id} id={id} onClick={this.setImage}src={el} className={id == this.state.counterImg ? 'details-img-items-active' : 'details-img-items'}></img>)
                                }
                                 <div className="arrowRight" onClick={this.nextImage}>
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                                <div className="arrowLeft" onClick={this.prevImage}>
                                    <i className="fas fa-chevron-left"></i>
                                </div>
                            </div>
                        </aside>
                        <Information 
                            title={title} 
                            city={city}
                            quantityStar={quantityStar}
                            opinion={opinion}
                            areaSize={areaSize}
                            population={population}
                            info={info}
                            herb={herb}
                        /> 
                        <button className="details-btn" onClick={this.closeDetails}>&times;</button>
                    </main>
               }
            </div>
        )
    }
}

export default Details