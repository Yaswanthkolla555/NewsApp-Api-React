import React from 'react'
const NewsItems =(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (
      <div>
        <div className="card" >
        <span className="badge text-bg-danger" style={{ zIndex: 1,position: 'absolute', top: '0%' }}>{source} </span>
          <img src={imageUrl} className="card-img-top" style={{ height: "150px", objectFit: "contain"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItems
