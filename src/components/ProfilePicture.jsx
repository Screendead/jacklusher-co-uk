import React from 'react'

function ProfilePicture(props) {
  return (
    <img className="profile-photo" src={props.source} alt="Profile" referrerPolicy="no-referrer" />
  );
}

export default ProfilePicture;