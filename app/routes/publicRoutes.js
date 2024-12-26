import carousel from '../components/carousel/carouselController';
import service from '../components/service/serviceController';
import gallery from '../components/gallery/galleryController';
import testimony from '../components/testimony/testimonyController';
import socmed from '../components/socmed/socmedController';
import blog from '../components/blog/blogController';
import header from '../components/header/headerController';
import about from '../components/about/aboutController';

const router = require('express').Router()

router.get('/carousels', carousel.getCarousels)
router.get('/carousels/:carouselId', carousel.findCarousel)

router.get('/services', service.getServices)
router.get('/services/:serviceId', service.findService)

router.get('/galleries', gallery.getGallerys)
router.get('/galleries/:galleryId', gallery.findGallery)

router.get('/testimonies', testimony.getTestimonys)
router.get('/testimonies/:testimonyId', testimony.findTestimony)

router.get('/socmeds', socmed.getSocmeds)
router.get('/socmeds/:socmedId', socmed.findSocmed)

router.get('/blogs', blog.getBlogs)
router.get('/blogs/:blogId', blog.findBlog)

router.get('/headers', header.getHeaders)
router.get('/headers/:headerId', header.findHeader)
router.get('/headers/page/:page', header.findHeaderByPage)

router.get('/abouts', about.getAbouts)
router.get('/abouts/:aboutId', about.findAbout)

// app.use(require('../components/header/headerRouter'))
// app.use(require('../components/about/aboutRouter'))
// app.use(require('../components/contact/contactRouter'))
// app.use(require('../components/inbox/inboxRouter'))
// app.use(require('../components/team/teamRouter'))
// app.use(require('../components/company/companyRouter'))

module.exports = router