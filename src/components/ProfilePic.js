import React from 'react';

function ProfilePic(props) {
  console.log("pic", props);
    return (
      <img height='auto' width='500px' src={props.img}/>
    );
  }


export default ProfilePic;
