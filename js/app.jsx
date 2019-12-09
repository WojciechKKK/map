import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/main.scss'
import ProvinceMap from '../components/ProvinceMap/ProvinceMap.jsx'

const App = () => <ProvinceMap />

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
