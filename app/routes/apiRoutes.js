import express from 'express';
import path from 'path';
import { jwtMiddleware } from '../middleware/jwtMiddleware';

const app  = express()
const cors = require('cors')

app.use(cors())
app.use(require('../components/auth/authRouter'))

// Apply JWT middleware to protect all API routes
app.use(jwtMiddleware);
app.use(require('../components/user/userRouter'))
app.use(require('../components/carousel/carouselRouter'))
app.use(require('../components/service/serviceRouter'))
app.use(require('../components/gallery/galleryRouter'))
app.use(require('../components/testimony/testimonyRouter'))
app.use(require('../components/socmed/socmedRouter'))
app.use(require('../components/blog/blogRouter'))
app.use(require('../components/header/headerRouter'))
app.use(require('../components/about/aboutRouter'))
app.use(require('../components/contact/contactRouter'))
app.use(require('../components/inbox/inboxRouter'))
app.use(require('../components/team/teamRouter'))
app.use(require('../components/company/companyRouter'))

// fetching image in uploaded file folder
app.get('/fetchImage/:file(*)', (req, res) => {
    let file = req.params.file;
    let fileLocation = path.join(__dirname, '../../', 'uploaded_files/', file);
    //res.send({image: fileLocation});
    res.sendFile(`${fileLocation}`)
})

module.exports = app