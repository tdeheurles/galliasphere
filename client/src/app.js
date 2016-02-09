var React = require('react');
var ReactDOM = require('react-dom');
import App from './elements/App.js'

var logos = { "mainLogo": "/images/sphereClubAffaires.png" };

ReactDOM.render(
    <App urlSocietes="/data/societes.json"
       urlBlogs="/data/blog.json"
       urlLogos={logos}>
    </App>,
    document.getElementById('root')
);
