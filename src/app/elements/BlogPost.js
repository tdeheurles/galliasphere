import React    from 'react';

export default class BlogPost extends React.Component {
   render() {
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
}
