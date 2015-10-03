import React from 'react'

export default class Menu extends React.Component {
    render() {
        if (this.props.societes == "Chargement ...") {
            return <div></div>;
        }

        return  (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-brand" href="#">Membres</div>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            {
                                this.props.societes.map(function (societe) {
                                    var link = "#" + societe.denomination;
                                    return (
                                        <li className="active"
                                             key={societe.denomination}>
                                            <a href={link}>{societe.denomination}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
