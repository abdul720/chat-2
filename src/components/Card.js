import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://api.jsonbin.io/b/61d47e2d2675917a6289eb0c")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let abdul = data.data.conversations
            console.log(abdul);
            setUser(abdul)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
      
      
        <div className="clearfix">
        <div className="row">
          {user.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.user.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.user.profilePic}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.user.firstName +
                      " " +
                      data.user.lastName}
                  </h5>
                  <p className="card-text">
                    {data.user.firstName}
                    <br />
                    <span className="phone">{data.user.updatedAt}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card
