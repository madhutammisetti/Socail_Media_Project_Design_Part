import "./closefriends.css"


export default function Closefriends({user}) {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" ></img>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
