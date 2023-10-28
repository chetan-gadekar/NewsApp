 import React, { Component } from 'react'
 
 export class NewsItem extends Component {

 

   render() {
     let {title, description , image_Url ,newsUrl,author, date, source} = this.props;
     return (
       <div className="my-4">
          <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'88%',zIndex:'1'}}>{source}</span>
            <img src={!image_Url?"https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202310/0201023054822.jpeg":image_Url} height={180} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} On {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary" rel="noreferrer" target='_blank'>Read More</a>
          </div>
      </div>
       </div>
     )
   }
 }
 
 export default NewsItem
 