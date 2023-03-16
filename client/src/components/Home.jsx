import React from 'react'
import QuoterContainer from './QuoterContainer'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'

export default function Home() {
    return (
        <div>
            <QuoterContainer />
            <EnterpriseUI />
            <PopularUI />
            <ReviewsUI />
            <div style={{ height: 40 }} />
        </div>
    )
}