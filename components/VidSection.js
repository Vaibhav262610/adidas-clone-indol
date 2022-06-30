import React from 'react'

const VidSection = () => {
  return (
    <div>
        <div className='bg-red-500 h-screen'>
        <video id="glass" width="1640" height="360" autoplay loop muted>
    <source src="/img/video.mp4" type="video/mp4" autoplay loop muted />
</video>
        </div>
    </div>
  )
}

export default VidSection