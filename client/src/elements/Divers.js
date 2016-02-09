import React   from 'react';

export default class Divers extends React.Component {
    render() {
        if (this.props.divers == undefined
            || this.props.divers.length == 0)
            return <div />;

        var results = [];
        var titre = 0;
        this.props.divers.map(function(divers) {
            if (divers.text != undefined) {
                titre++;
                if (titre == 1) results.push(<div key={Math.random()} className="activite"><b>Divers : </b>{divers.text}</div>);
                else results.push(<div key={Math.random()} className="activite">{divers.text}</div>);
            }
        });

        return <div>{results}</div>
    }
}
