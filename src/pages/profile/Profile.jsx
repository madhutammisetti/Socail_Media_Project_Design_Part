import "./profile.css"
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img className="profileCoverImg" src="assets/posts/7.jpeg" alt="coverimg"></img>
                  <img className="profileUserImg" src="assets/persons/7.jpeg" alt="cerimg"></img>  
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">Madhu Tammisetti</h4>
                  <span className="profileInfoDesc">Hey How are you my friends!!!</span>
                </div>
              </div>
              <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
              </div>
            </div>
        </div>
    </>
  )
}
