import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <FacebookIcon  />
            <TwitterIcon  />
            <InstagramIcon  />
            <LinkedInIcon  />
            <YouTubeIcon  />
            <GitHubIcon  />
        </div>
        </div>
        <p> &copy; 2025 newyourkerpizza.com</p>
    </div>
  )
}

export default Footer
