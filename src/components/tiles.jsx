import React from "react";
export default function tiles(addCart,prod)
{
  return(
    <div className="col-md-4 col-lg-3 col-sm-12" key={prod.id}>
              <div className="card mb-3" style={{"maxWidth": "540px", "color": "red"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={prod.image} className="card-img" width="100%" height="100%" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body"style={{"maxWidth": "540px", "color": "black"}}>
                      <h5 className="card-title" id="#first-title"style={{"maxWidth": "540px", "color": "black"}}>{prod.title}</h5>
                      <h6 className="card-title" id="#first-title"style={{"maxWidth": "540px", "color": "red"}}>{prod.price}</h6>
                      <div>
                        <button className="btn btn-primary add-btn"
                        onClick={()=>{addCart(prod)}
                         }
                    >add</button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}