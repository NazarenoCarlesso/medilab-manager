const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

async function googleVerify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    })

    const { given_name, family_name, email, picture } = ticket.getPayload()

    return {
        firstName: given_name,
        lastName: family_name,
        email: email,
        picture: picture
    }
}

module.exports = { googleVerify }