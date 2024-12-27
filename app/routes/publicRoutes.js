import carousel from '../components/carousel/carouselController';
import service from '../components/service/serviceController';
import gallery from '../components/gallery/galleryController';
import testimony from '../components/testimony/testimonyController';
import socmed from '../components/socmed/socmedController';
import blog from '../components/blog/blogController';
import header from '../components/header/headerController';
import about from '../components/about/aboutController';
import contact from '../components/contact/contactController';
import team from '../components/team/teamController';
import company from '../components/company/companyController';

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

router.get('/contacts', contact.getContacts)
router.get('/contacts/:contactId', contact.findContact)

router.get('/teams', team.getTeams)
router.get('/teams/:teamId', team.findTeam)

router.get('/companies', company.getCompanys)
router.get('/companies/:companyId', company.findCompany)

module.exports = router