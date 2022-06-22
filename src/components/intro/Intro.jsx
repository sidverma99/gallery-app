import React from 'react'
import "./intro.css";


function Intro() {
    return (
        <div className="intro">
            <div className="introTitles">
                <span className="introTitleSm">Image Gallery</span>
                <span className="introTitleLg">App</span>
                <span className="introTitleMd">Keep All your memories At Single Place</span>
            </div>
            <img className="introImg" src="https://img.freepik.com/free-vector/photo-album-with-family-photos-photography-with-happy-people-good-memory-illustration_277904-3182.jpg?w=2000" alt="" />
        </div>
    )
}

export default Intro