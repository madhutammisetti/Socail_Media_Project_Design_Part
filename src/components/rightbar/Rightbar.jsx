import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

    //create Inner components 
      const HomeRightbar =()=>{
        return(
          <>
                <div className="birthadayContainer">
              <img className="birthdayImg" src="assets/gift.png" alt="giftimage"></img>
              <span className="birthdayText">
              <b>Vehanth</b> and <b>2 other friends</b> have a birthday day.
              </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="adimg"></img>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
            {Users.map((u)=> <Online key={u.id} user={u}/>)}
            </ul>
          </>
        );
      };

      const ProfileRightbar=()=>{
        return(
          <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Tanuku</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>  
                <span className="rightbarInfoValue">East Vipparru</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Realtionship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">Friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/1.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/2.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/3.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/4.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/5.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/5.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/5.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/5.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
              <div className="rightbarFollowing">
                <img className="rightbarFollowingImg" src="assets/persons/6.jpeg" alt="followingimg "></img>
                <span className="rightbarFollowingName">Manvik Kodati</span>
              </div>
            </div>
          </>
        )
      }

      return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
