import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Instagram() {

  const [ insta, setInsta ] = useState([])

  useEffect(() => {
    axios.all([
      axios.get('https://www.instagram.com/buzzfeedfood/?__a=1'),
      axios.get('https://www.instagram.com/love_food/?__a=1')
    ])
    .then((res)=>{
      const instaData = []
      res.forEach((val)=>{
        const { edge_media_to_caption:{ edges : [ { node: text } ] }, thumbnail_src, owner:{ username } } = val.data.graphql.user.edge_owner_to_timeline_media.edges[0].node
        instaData.push({
          caption: text.text,
          image: thumbnail_src,
          user: username
        })
      })
      setInsta(instaData)
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <>
        <section className="tm-section row">
        {
            insta.length > 0 &&
            insta.map((val,key)=>{
                return (
                <div key={key} className="col-md-6" style={{'maxWidth': '540px'}}>
                    <div className="row no-gutters">
                    <div className="col-md-4">
                        <img style={{'width':'100%'}} src={val.image} className="card-img"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <p className="card-text">{val.caption}</p>
                        <p className="card-text"><small className="text-muted">{`@${val.user}`}</small></p>
                        </div>
                    </div>
                    </div>
                </div>
                )
            })
        }        
        </section>
    </>
  );
}

export default Instagram;
