const toFirstName = (str) => {
    arr = str.split(' ')
    str = arr[0]
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const toLastName = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const toUnique = (str1, str2, uid) => {
    return str1.slice(0, 3) + str2.slice(0, 3) + uid
}

const toPhoto = (sex) => {
    sex = sex === 'F' ? 'women' : 'men'
    return `https://randomuser.me/api/portraits/${sex}/${Math.floor(Math.random() * 90)}.jpg`
}

module.exports = { toFirstName, toLastName, toUnique, toPhoto }