import React   from 'react';
import Title   from './Title.js'
import Membres from './Membres.js'
import Blog    from './Blog.js'
import Foot    from './Foot.js'

export default class App extends React.Component {
    // getInitialState() {
    //     return {societes: "Chargement ...", blogs: []};
    // }
    constructor(props) {
        super(props)
        this.state = {societes: "Chargement ...", blogs: []}
    }

    componentDidMount() {
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
    }

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <Title urlLogo={this.props.urlLogos.mainLogo} />
                    </div>
                    <div className="row">
                        <Blog classArgs="col-xs-12 col-sm-7 col-md-7"
                              role="main"
                              blogs={this.state.blogs}/>
                        <Membres classArgs="col-xs-12 col-sm-4 col-md-4"
                                 role = "complementary"
                                 societes={this.state.societes}
                                 urlLogos={this.props.urlLogos}/>
                    </div>
                    <div className="row">
                        <Foot />
                    </div>
                </div>
           );
   }
}
