import React from 'react'
import "./intro.css"
import Me from "../../img/myself.jpg"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Anthony Leang</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Content Creator</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Photographer</div>      
                    </div>
                </div>
                <div className="i-desc">
                    I design and develop services for customers of all sizes, specializing
                    in creating stylish, modern websites, web services and online stores.
                </div>
            </div>
        </div>
        <div className="i-right">
            <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro