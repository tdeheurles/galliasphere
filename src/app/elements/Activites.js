import React   from 'react';

export default class Activites extends React.Component {
    render() {
        if (this.props.activites == undefined
            || this.props.activites.length == 0)
            return <div />;

        var results = [];
        var titre = 0;
        this.props.activites.map(function(activite) {
            if (activite.text != undefined) {
                titre++;
                if (titre == 1) results.push(<div key={Math.random()} className="activite"><b>Activite : </b>{activite.text}</div>);
                else results.push(<div key={Math.random()} className="activite">{activite.text}</div>);
            }
        });

        return <div>{results}</div>
    }
}
