import ProfileName from './ProfileName.js';
import ProfilePhoto from './ProfilePhoto.js';
import ProfileNavigationBar from './ProfileNavigationBar.js';

function Profile(){
  return(
    <React.Fragment>
      <ProfilePhoto />
      <ProfileName />
      <ProfileNavigationBar />
    </React.Fragment>
  );
}

export default Profile;