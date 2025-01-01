import express from 'express';
import { jwtMiddleware } from '../middleware/jwtMiddleware';
import authRouter from '../components/auth/authRouter';
import userRouter from '../components/user/userRouter';
import carouselRouter from '../components/carousel/carouselRouter';
import serviceRouter from '../components/service/serviceRouter';
import galleryRouter from '../components/gallery/galleryRouter';
import testimonyRouter from '../components/testimony/testimonyRouter';
import socmedRouter from '../components/socmed/socmedRouter';
import blogRouter from '../components/blog/blogRouter';
import headerRouter from '../components/header/headerRouter';
import aboutRouter from '../components/about/aboutRouter';
import contactRouter from '../components/contact/contactRouter';
import teamRouter from '../components/team/teamRouter';
import companyRouter from '../components/company/companyRouter';

const app  = express()

app.use(authRouter)

// Apply JWT middleware to protect all API routes
app.use(jwtMiddleware);
app.use(userRouter)
app.use(carouselRouter)
app.use(serviceRouter)
app.use(galleryRouter)
app.use(testimonyRouter)
app.use(socmedRouter)
app.use(blogRouter)
app.use(headerRouter)
app.use(aboutRouter)
app.use(contactRouter)
app.use(teamRouter)
app.use(companyRouter)

export default app;