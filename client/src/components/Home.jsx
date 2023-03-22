import React from 'react'
import QuoterContainer from './QuoterContainer'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'
import Contact from './Contact'

export default function Home() {
    return (
        <div style={{marginTop: 100}}>
            <QuoterContainer />
            <EnterpriseUI />
            <PopularUI />
            <ReviewsUI />
            <Contact />
            <div style={{ height: 40 }} />
        </div>
    )
}