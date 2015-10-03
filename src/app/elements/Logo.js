import React   from 'react';

export default class Logo extends React.Component {
   render() {
       return <img src={this.props.urlLogo}
                   alt="Logo GalliaSphere"
                   className="logoGalliaSphere"
           />
   }
}
