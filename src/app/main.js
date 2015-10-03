import React  from 'react';
import App   from './elements/App.js'

var logos = { "galliasphere": "/images/logoGalliaSphere.jpg" };

React.render(
  <App urlSocietes="/javascripts/societes.json"
       urlBlogs="/javascripts/blog.json"
       urlLogos={logos}>
  </App>,
  document.getElementById('root')
)
