export default function Profile({username, tag, location, avatar, stats}) {
    return (<>
            <div className="wrapper">
                <div className="profileForm">
                    <div className="userInfo">
                        <img src={avatar} className="avatar"/>
                        <h1 className="userName">{username}</h1>
                        <div className="info">{tag}</div>
                        <div className="info">{location}</div>
                    </div>

                    <div className="socialInfo">
                        <ul>
                            <li>Followers <span className="count">{stats.followers}</span></li>
                            <li>Views <span className="count">{stats.views}</span></li>
                            <li>Likes <span className="count">{stats.likes}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};