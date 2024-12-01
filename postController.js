const post = [
    {id : 1 ,title: 'post one'},
    {id : 2 ,title: 'post Two'},
    {id : 3 ,title: 'post three'}

]

const getPosts = () => post
const getPostLength = () => post.length

module.exports = {getPosts , getPostLength};