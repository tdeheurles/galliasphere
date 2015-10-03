import React   from 'react';
import Societe   from './Societe.js'

export default class Membres extends React.Component {
    render() {
        if (this.props.societes == "Chargement ...") {
            return <div></div>;
        }

        var elements = [];
        this.props.societes.map( function(societe) {
            elements.push(
                <Societe key={societe.denomination}
                         societe={societe}/>
            )
        });

        return  <div className={this.props.classArgs}>
                    <h2>Nos {this.props.societes.length} membres</h2>
                    <ul className="nav">
                        {elements}
                    </ul>
                </div>
    }
}
