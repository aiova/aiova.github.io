import React from 'react'

import './Video.css'

const Video = () => (
    <video
		className="Video"
        src="/bg.mp4"
        autoPlay
        muted
        loop
    >
        <source src="/bg.mp4" type="video/webm" />
    </video>
)

export default Video