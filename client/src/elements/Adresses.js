import React   from 'react';

export default class Adresses extends React.Component {
   render() {
       if (this.props.adresses.length == 0) return <div />;

       var secondaire = 0;
       var results = this.props.adresses.map(function(adresse) {
           if (adresse.siege != undefined)
               return <div key={Math.random()} className="adresse"><b>Adresse siège : </b>{adresse.siege}</div>;
           if (adresse.secondaire != undefined) {
               secondaire++;
               if (secondaire == 1)
                   return <div key={Math.random()} className="adresseSecondaire"><b>Adresse secondaire : </b>{adresse.secondaire}</div>
               else
                   return <div key={Math.random()} className="adresseSecondaire">{adresse.secondaire}</div>;
           }
       });

       return (
           <div>{results}</div>
       );
   }
}
