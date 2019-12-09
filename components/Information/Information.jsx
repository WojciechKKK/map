import React, { Component } from 'react'
import './Information.scss'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import Banner from '../Banner/Banner.jsx'

class Information extends Component{
    constructor(){
        super();
        this.state = {
            showOpinion: false,
            listOpinions: []
        }
    }
    //generate a random comments OR you can get from DB(json) = this.props.opinion
    generateRandomComments = () => {
        let opinions = ["Super!","Świetne miejsce na wypoczynek", "Polceam:)","Piękne okolice", "Dużo ładnych zabytków","Dużo zieleni - polecam!", "Idealne miejsca na urlop", "Super rozwinięta komunikacja", "Idealne miasto :)", "Zachęcam odwiedzić to miejsce ;]" ];
        let logins = ['Michał', 'Adam', 'Kacper','Robert','Paweł','Piotr','Renata','Dominik','Konrad','Daniel'];
        let randomNumber = Math.floor(Math.random()*logins.length);
        
        let dateTime = new Date();
        dateTime.setMonth(Math.floor(Math.random()*12));
        dateTime.setDate(Math.floor(Math.random()*28));
        dateTime.setHours(Math.floor(Math.random()*24));
        dateTime.setMinutes(Math.floor(Math.random()*60));
        dateTime.setSeconds(Math.floor(Math.random()*60));
        let times = dateTime.toString().slice(4,25); //delete day(Mon,Tue)

        const newRandomOpinions = [{
            text: opinions[randomNumber],
            time: times,
            user: logins[randomNumber]
        }];
        return newRandomOpinions;
    }
    componentDidMount = () => {
        const firstComment = this.generateRandomComments();
        const secondComment = this.generateRandomComments();
        const thirdComment = this.generateRandomComments();
        const commentsResult = [...firstComment, ...secondComment, ...thirdComment ];
        this.setState({
            listOpinions: commentsResult
        })
      
    }
    showOpinion = () => {
        this.setState({
            showOpinion: !this.state.showOpinion
        })
    }
    render(){
        const { title, city, quantityStar, opinion, areaSize, population,info, herb } = this.props;
        const { showOpinion, listOpinions } = this.state;
        let stars = [];
        for(let i = 0 ; i < quantityStar; i++){
            stars.push(<i key={i} className="fa fa-fw fa-star"></i>)
        }
       
        return(
            <section className="details-description">
                <div className="details-description-container">
                    <h1 className="details-title">{title}</h1>
                    <p className="details-city" >Miasto wojewódzkie: <a title="Więcej" href={`https://pl.wikipedia.org/wiki/${city}`} target="_blank">{city}</a></p>
                    <p className="details-star">{stars}</p>
                    <div onClick={this.showOpinion} className="details-opinion">recenzje <i className={`fa fa-chevron-${showOpinion ? 'up' : 'down'}`}></i>
                        {
                            !showOpinion
                            ? null
                            : <SlideDown>
                                <ul className="opinion-list">
                                    {
                                        listOpinions.map((el,id) => {
                                            return <li className="opinion-el" key={id}>
                                                        <i className="fas fa-user-check"></i>
                                                        <i className="opinion-el__detail">{el.time} 
                                                            <i className="opinion-el__border">{el.user}</i> 
                                                                dodał/a rcenzję:
                                                        </i>
                                                        <p className="opinion-el__text">{el.text}</p>
                                                    </li>
                                        })
                                    }
                                </ul>
                            </SlideDown>
                        }
                    </div>
                    <div className="details-break"></div>
                    <table className="details-table">
                        <tbody>
                            <tr>
                                <td>Powierzchnia:</td>
                                <td>{areaSize}</td>
                            </tr>
                            <tr>
                                <td>Liczba ludności:</td>
                                <td>{population}</td>
                            </tr>
                            <tr>
                                <td>Opis:</td>
                                <td>{info}</td>
                            </tr>
                            <tr>
                                <td>Więcej:</td>
                                <td><a className="detailsLink" title={`https://www.${title.toLowerCase()}.pl`} href={`https://pl.wikipedia.org/wiki/${title}`} target="_blank">https://www.{title.toLowerCase()}.pl</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <footer className="details-footer">
                        <img src={herb} alt="Herb miasta" title={`Herb miasta ${city}`}></img>
                    </footer>
                </div>
                <Banner />    
            </section>
        )
    }
}

export default Information