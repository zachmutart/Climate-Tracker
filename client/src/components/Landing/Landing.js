import React, { useState, useEffect } from 'react'
import video from '../../video/earth_bg.mp4'
import './Landing.css'

const phrases = ["Earth", "our home", "our children's future", "an opportunity to preserve this vital resource, together."]


/**
 * Landing component -
 * 
 * The main landing page for the web application.
 * 
 */
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
            }, 500)
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
        }, Math.max(reverse ? 70 : subIndex === phrases[index].length ? 500 : 100, 
            parseInt(Math.random() * 250)))

        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse])

    // Control blinking of the cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink ((prev) => !prev)
        }, 550)
        return () => clearTimeout(timeout2)
    }, [blink])

    // Return JSX for the Landing component
    return (
        <div className="outerLandingContainer">
            <h1 className="typewriter">
                { `This is ${phrases[index].substring(0, subIndex)}${blink ? "|" : "\u00A0"}` }
            </h1>
            { index === phrases.length ? null : null }
            <a href="https://www.pexels.com/photo/a-view-of-planet-earth-from-outer-space-7094565/"
            target={"_blank"} rel="noopener noreferrer">Video by jol acen from Pexels</a>
            <video id="video" className="video" src={video} autoPlay playsInline></video>
        </div>
    )
}

// Export the Landing component
export default Landing