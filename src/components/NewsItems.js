import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, content, date, source} =this.props;
    return (
      <div>
        <div className="container mx-2">
        <div className="card " style={{backgroundColor: 'rgb(21 21 45 / 63%)',border: '2.5px solid transparent',color: 'ghostwhite'}} >
             <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
              <span className="badge rounded-pill bg-danger">{source}</span>
              </div> 
            <img src={!imageUrl?"../public/logo512.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" >
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{content.slice(0, 200)}...</p>
                <p className="card-text">{new Date(date).toGMTString()}</p>
                  <div className="text-center">
                    <a href={newsUrl} target="/blank" className="btn btn-dark">Read More...</a>
                  </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
