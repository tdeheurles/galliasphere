import React   from 'react';
import Logo   from './Logo.js'

export default class Title extends React.Component {
    render() {
        return  <div>
                    <Logo urlLogo={this.props.urlLogo}/>
                </div>
    }
}
