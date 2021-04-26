import React, { useState, useEffect } from 'react'
import video from '../../video/earth_bg.mp4'
import './Landing.css'

const phrases = ["Earth", "our planet", "our home", "our children's future", "our chance to do what is right."]

const Landing = () => {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [blink, setBlink] = useState(true)
    const [reverse, setReverse] = useState(false)

    useEffect(() => {
        if (index === phrases.length) {
            return
        }
        // if end of word and not end of phrases list, set reverse for backspace effect
        if (subIndex === phrases[index].length + 1 &&
            index !== phrases.length - 1 && !reverse) {
            const timer = setTimeout(() => {
                setReverse(true)
            }, 1250)
            return () => clearTimeout(timer)
        }

        // back at beginning of phrase, so undo reverse and go to next phrase
        if (subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => prev + 1)
            return
        }

        // timeout values for typing effect
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, Math.max(reverse ? 70 : subIndex === phrases[index].length ? 1000 : 100, 
            parseInt(Math.random() * 250)))

        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse])

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink ((prev) => !prev)
        }, 550)
        return () => clearTimeout(timeout2)
    }, [blink])

    return (
        <div className="outerLandingContainer">
            <h1 className="typewriter">
                { `This is ${phrases[index].substring(0, subIndex)}${blink ? "|" : " "}` }
            </h1>
            {/* To Do */}
            <a href="https://www.pexels.com/photo/a-view-of-planet-earth-from-outer-space-7094565/"
            target={"_blank"} rel="noopener noreferrer">Video by jol acen from Pexels</a>
            <video id="video" className="video" src={video} autoPlay playsInline></video>
        </div>
    )
}

export default Landing