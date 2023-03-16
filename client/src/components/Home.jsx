import React from 'react'
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import Contact from './Contact'

export default function Home() {
    return (
        <div style={{background:'#fff'}}>
            <Slides />
            <QuoterContainer />
            <PopularUI />
            <ReviewsUI />
            <Contact />
            <div style={{ height: 40 }} />
        </div>
    )
}