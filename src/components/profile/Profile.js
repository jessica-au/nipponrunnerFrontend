import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHiraStats from './ProfileHiraStats'
import './profile.css'
import sakura from '../../images/sakura.png'

const Profile = (props) => {
    console.log(`>>>> inside Profile component`)
    const { handleLogout, user } = props
    const { username, experience, progress, exp } = user
    const expirationTime = new Date(exp * 1000)
    let currentTime = Date.now()

    if(currentTime >= expirationTime){
        handleLogout()
        alert('session had ended. please login to continue')
    }

    const userData = user ?
    (<div className="informationProfile">
        <div className="infoLeft">
            <img className="infoImg" src={sakura}/>
            <Link to="/profile/stats">
                <button type="button" className="profileStatsButton">
                    View Progress (能力) 
                </button>
            </Link>
        </div>
        <div className="infoRight">
            <p>Username (なまえ) | {username}</p>
            <p>Experience (けいけん) | {experience}</p>
        </div>
    </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="profileError">
                <h3> Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        )
    }

    return (
        <div className="profilePage">
            <h1 className="profileTitle"> Profile </h1><br/>
            <h2 className="profileTitle2">(プロフィール) </h2>
            <div>
                {user ? userData : errorDiv()}
            </div>
            <div className="navButtons">
                <Link to="/">
                    <button type="button" className="profileHomeButton">
                        Home (ホーム)
                    </button>
                </Link>

                <Link to="/gakkou">
                    <button type="button" className="profileGakkouButton">
                        School (がっこう)
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Profile;