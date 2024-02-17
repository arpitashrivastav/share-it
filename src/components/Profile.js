import defaultProfileImg from "../../public/pp.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <img src={defaultProfileImg} alt="display" className="profile__dp" />
      <div>
        <div>Username: {user.username}</div>
        <div>{user.followers.length} Followers</div>
        <div>{user.following.length} Following</div>
      </div>
    </div>
  );
}
