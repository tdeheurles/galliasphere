/** @jsx React.DOM */
var Foot = React.createClass({
    render: function() {
        return(
            <div className="text-center">
                <p />
                <p>Gallia Sphere - Association Loi 1901 - Immatriculation: volume 44 folio 69</p>
                <p />
            </div>
        )
    }
});

var Adresses = React.createClass({
   render: function() {
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
});
var Contacts = React.createClass({
   render: function() {
       if (this.props.contacts == undefined
        || this.props.contacts.length == 0)
           return <div />;

       var results = [];
       this.props.contacts.map(function(contact) {
           if (contact.prenom != undefined) results.push(<div key={Math.random()} className="contacts"><b>Prenom : </b>{contact.prenom}</div>);
           if (contact.nom != undefined) results.push(<div key={Math.random()} className="contacts"><b>Nom : </b>{contact.nom}</div>);
           if (contact.email != undefined) results.push(<div key={Math.random()} className="contacts"><b>email : </b>{contact.email}</div>);
       });

       return <div>{results}</div>
   }
});
var Activites = React.createClass({
    render: function() {
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
});
var Divers = React.createClass({
    render: function() {
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
});
var Societe = React.createClass({
    Open: function() {
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
    },
    render: function(){
        if (this.props.closed) return this.Closed();
        return this.Open();
   }
});
var Membres = React.createClass({
    render: function() {
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
});

var Menu = React.createClass({
    render: function() {
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
});
var Logo = React.createClass({
   render: function(){
       return <img src={this.props.urlLogo}
                   alt="Logo Gallia Sphère"
                   className="logoGalliaSphere"
           />
   }
});
var Title = React.createClass({
    render: function() {
        return  <div>
                    <Logo urlLogo={this.props.urlLogo}/>
                </div>
    }
});

var BlogPost = React.createClass({
   render: function() {
       var titleElements = [];
       var ariaControls = Math.random().toString().split(".").join("");
       var href = "#" + ariaControls;

       if (this.props.blog.date != undefined) titleElements.push(<div key={Math.random()}><b>{this.props.blog.date}</b></div>);
       if (this.props.blog.auteur != undefined) titleElements.push(<div key={Math.random()}><b>{this.props.blog.auteur}</b></div>);
       if (this.props.blog.titre != undefined) titleElements.push(<div key={Math.random()}><b>{this.props.blog.titre}</b></div>);

       var postElements = [];
       if (this.props.blog.texts != undefined)
       {
           this.props.blog.texts.map(function(paragraphe){
               if (paragraphe.text != undefined)
                   postElements.push(<p key={Math.random()}>{paragraphe.text}</p>);
               if (paragraphe.pbold != undefined)
                   postElements.push(<div><br/><p key={Math.random()}><b>{paragraphe.pbold}</b></p></div>);
               if (paragraphe.p != undefined)
                   postElements.push(<div><br/><p key={Math.random()}>{paragraphe.p}</p></div>);
           })
       }

       var classes = "collapse";
       if (this.props.number <= 1) classes = " in";

       return (
           <li className="bs-docs-section">
               <a className="btn btn-primary blogPost"
                  data-toggle="collapse"
                  href={href}
                  aria-expanded="false"
                  aria-controls={ariaControls}>
                   {titleElements}
               </a>
               <section className={classes} id={ariaControls}>
                   <div className="well">
                       {postElements}
                   </div>
               </section>
           </li>
       );
   }
});
var Blog = React.createClass({
    render: function() {
        if (this.props.blogs == undefined
            || this.props.blogs.length == 0)
            return <div />;

        var number = 1;
        var results = [];
        this.props.blogs.map(function(blog) {
            results.push(<BlogPost number={number} blog={blog} />);
            number += 1;
        });

        return (
            <div className={this.props.classArgs}>
                <h2>Messages</h2>
                <ul className="nav">
                    {results}
                </ul>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function(){
        return {societes: "Chargement ...", blogs: []};
    },
    componentDidMount: function() {
        // Societes
        $.ajax({
            url: this.props.urlSocietes,
            dataType: 'json',
            success: function(data) {
                this.setState({societes: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

        // Blogs
        $.ajax({
            url: this.props.urlBlogs,
            dataType: 'json',
            success: function(data) {
                this.setState({blogs: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {
        return (
                <div className="container">
                    <div className="row">
                        <Title urlLogo={this.props.urlLogos.galliasphere} />
                    </div>
                    <div className="row">

                        <Membres    classArgs="col-xs-12 col-sm-4 col-md-4"
                                    role = "complementary"
                                    societes={this.state.societes}
                                    urlLogos={this.props.urlLogos}/>

                        <Blog  classArgs="col-xs-12 col-sm-7 col-md-7"
                               role="main"
                               blogs={this.state.blogs}/>
                    </div>
                    <div className="row">
                        <Foot />
                    </div>
                </div>
           );
   }
});
