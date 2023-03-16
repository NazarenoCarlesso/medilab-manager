import React from 'react'
import QuoterContainer from './QuoterContainer'
import Slides from './Slides'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'
import Contact from './Contact'

export default function Home() {
    return (
        <div>
            <Slides />
            <QuoterContainer />
            <PopularUI />
            <ReviewsUI />
            <EnterpriseUI />
            <Contact />
            <div style={{ height: 40 }} />
        </div>
    )
}