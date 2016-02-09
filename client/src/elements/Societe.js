import React     from 'react';
import Adresses  from './Adresses.js'
import Contacts  from './Contacts.js'
import Activites from './Activites.js'
import Divers    from './Divers.js'

export default class Societe extends React.Component {
    Open() {
        var elements = [];

        var key = this.props.societe.denomination
                .split(" ").join("")
                .split(":").join("")
                .split("-").join("")
                + "data";

        var href = "#" + key;
        var ariaControls = key;

        elements.push(
            <a className="btn btn-primary"
               data-toggle="collapse"
               href={href}
               aria-expanded="false"
               aria-controls={ariaControls}>
                {this.props.societe.denomination}
            </a>
        );


        var datas = [];
        if (this.props.societe.logo != undefined) {
            datas.push(
                    <img src={this.props.societe.logo}
                               alt="Logo Société">
                    </img>);
        }
        if (this.props.societe.siteInternet != undefined) datas.push(<div><a href={this.props.societe.siteInternet}><b>Site internet</b></a></div>);
        if (this.props.societe.linkedin != undefined) datas.push(<div><a href={this.props.societe.linkedin}><b>LinkedIn</b></a></div>);
        if (this.props.societe.freelancebookin != undefined) datas.push(<div><a href={this.props.societe.freelancebookin}><b>Disponibilités</b></a></div>);

        if (this.props.societe.formeJuridique != undefined) datas.push(<div><b>Forme juridique : </b>{this.props.societe.formeJuridique}</div>);
        if (this.props.societe.adresses != undefined
            && this.props.societe.adresses.length != 0)
            datas.push(<Adresses adresses={this.props.societe.adresses}/>);

        if (this.props.societe.contacts != undefined
            && this.props.societe.contacts.length != 0)
            datas.push(<Contacts contacts={this.props.societe.contacts} />);

        if (this.props.societe.activites != undefined
            && this.props.societe.activites.length != 0)
            datas.push(<Activites activites={this.props.societe.activites} />);

        if (this.props.societe.divers != undefined
            && this.props.societe.divers.length != 0)
            datas.push(<Divers divers={this.props.societe.divers} />);

        if (this.props.societe.siret != undefined) datas.push(<div><b>Numéro SIRET : </b>{this.props.societe.siret}</div>);
        if (this.props.societe.capitalSocial != undefined) datas.push(<div><b>Capital Social : </b>{this.props.societe.capitalSocial}</div>);

        return (
            <li id={this.props.societe.denomination}>
                {elements}
                <div className="collapse" id={ariaControls}>
                    <div className="well">
                        {datas}
                    </div>
                </div>
            </li>
        )
    }

    render() {
        if (this.props.closed) return this.Closed();
        return this.Open();
   }
}
