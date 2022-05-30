import React from 'react'
import {BsFacebook,BsInstagram,BsLinkedin,BsGithub} from "react-icons/bs"

function Member({member}) {
    // console.log(member)
    const {Photo,Social,Function,FullName,Sentence}=member
    const {Facebook,Github,Instagram,Linkden}=Social
  return (
    <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 mb-3">
    <div class="team-detail">
        <div class="team-box text-center">
            <img  src={Photo} alt="section-seprator" style={{minHeight:"300px"}}  />
            <h3 >{FullName}</h3>
        </div>
        <div class="team-content mt-2">
            <h5 style={{cursor:'default'}}>{Function}</h5>
            <p style={{cursor:'default'}}>{Sentence}</p>
            <ul class="social">
                <li><a href={Facebook} title="Facebook"><BsFacebook className='bs'/> </a></li>
                <li><a href={Instagram} title="Twitter"><BsInstagram className='bs'/></a></li>
                <li><a href={Linkden} title="Linkedin"><BsLinkedin className='bs'/></a></li>
                <li><a href={Github} title="Tumblr"><BsGithub className='bs'/></a></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Member
