import React   from 'react';

export default class Adresses extends React.Component {
   render() {
       if (this.props.adresses.length == 0) return <div />;

       var results = [];
       var secondaire = 0;
       this.props.adresses.map(function(adresse) {
           if (adresse.siege != undefined) results.push(<div key={Math.random()} className="adresse"><b>Adresse siège : </b>{adresse}</div>);
           if (adresse.secondaire != undefined) {
               secondaire++;
               if (secondaire == 1) results.push(<div key={Math.random()} className="adresseSecondaire"><b>Adresse secondaire : </b>{adresse}</div>);
               else results.push(<div key={Math.random()} className="adresseSecondaire">{adresse}</div>);
           }
       });

       return <div>{results}</div>
   }
}
