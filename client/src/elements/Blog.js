import React    from 'react';
import BlogPost from './BlogPost.js'

export default class Blog extends React.Component {
    render() {
        if (this.props.blogs == undefined
            || this.props.blogs.length == 0)
            return <div ></div>;

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
}
