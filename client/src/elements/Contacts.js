import React   from 'react';

export default class Contacts extends React.Component {
   render() {
       if (this.props.contacts == undefined
        || this.props.contacts.length == 0)
           return <div />;

       var results = [];
       this.props.contacts.map(function(contact) {
           if (contact.prenom != undefined) results.push(<div key={Math.random()} className="contacts"><b>Prenom : </b>{contact.prenom}</div>);
           if (contact.nom != undefined) results.push(<div key={Math.random()} className="contacts"><b>Nom : </b>{contact.nom}</div>);
           if (contact.email != undefined) results.push(<div key={Math.random()} className="contacts"><b>Email : </b>{contact.email}</div>);
       });

       return <div>{results}</div>
   }
}
