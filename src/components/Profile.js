import React from 'react';
import ProfileName from './ProfileName.js';
import ProfilePhoto from './ProfilePhoto.js';
import ProfileNavigationBar from './ProfileNavigationBar.js';

function Profile(){
  return(
    <React.Fragment>
      <div class="profile">
        <div class="profile-photo">
          <ProfilePhoto />
        </div>
        <div class="profile-name">
          <ProfileName />
        </div>
      </div>
      <div className="profile-nav">
        <ProfileNavigationBar />
      </div>
    </React.Fragment>
  );
}

export default Profile;