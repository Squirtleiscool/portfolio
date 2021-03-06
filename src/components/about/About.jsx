import React from 'react'
import "./about.css"
import Web from "../../img/webcode.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Web} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be reading this content.
            </p>
            <p className="a-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
  )
}

export default About