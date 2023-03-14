import React, { useEffect, useState } from 'react'
import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material'

const BACK = process.env.REACT_APP_BACK

const colors = ['salmon', 'tomato', 'indianred', 'darkseagreen']

function Review({ author, avatar, content, date, index }) {
    return (
        <Paper sx={{ width: 360, margin: '10px', marginBottom: '30px' }}>
            <Grid container direction="row" alignItems="center">
                <Avatar alt={author} referrerPolicy="no-referrer" src={avatar}
                    sx={{ width: 50, height: 50, margin: 1, marginRight: 1.5, boxShadow: '0px 4px 12px 0px #000000a1' }} />
                <Grid>
                    <Typography title={author} variant="h6" fontWeight={500} sx={{
                        color: colors[index], textShadow: '0px 4px 16px black, 0px 0px 4px black', fontFamily: 'Raleway',
                        width: 280, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'
                    }}>
                        {author}
                    </Typography>
                    <Typography variant="subtitle2" fontStyle="italic" sx={{ margin: '0px 2px', color: '#dbdbdb', fontFamily: 'Raleway' }}>
                        {(new Date(date)).toDateString()}
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
            <Typography variant="subtitle1" fontStyle="italic" sx={{ margin: 2, height: 116, color: '#dbdbdb', fontFamily: 'Raleway', overflowY: 'hidden' }}>
                <b style={{ color: 'grey' }}>"</b> {content} <b style={{ color: 'grey' }}>"</b>
            </Typography>
        </Paper >
    )
}

export default function ReviewsUI() {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`${BACK}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center"
            sx={{ background: 'radial-gradient(26.76% 85.52% at 86.73% -12.86%,#c241ff 6.65%,#6b57ff 100%)', minHeight: 400 }}>
            <Typography variant="h3" fontWeight={700} sx={{ fontFamily: 'Raleway', margin: 4 }}>
                Mirá lo que opinan los pacientes de nosotros
            </Typography>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                {reviews
                    .slice(0, 3)
                    .map((r, i) => <Review index={i} key={r.id} id={r.id} author={r.author}
                        content={r.content} avatar={r.avatar} date={r.createdAt} />)}
            </Grid>
        </Grid>
    )
}