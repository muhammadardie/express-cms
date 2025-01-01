import express from 'express';
import { findCarousel, getCarousels } from '../components/carousel/carouselController';
import { findService, getServices } from '../components/service/serviceController';
import { findGallery, getGalleries } from '../components/gallery/galleryController';
import { findTestimony, getTestimonies } from '../components/testimony/testimonyController';
import { findSocmed, getSocmeds } from '../components/socmed/socmedController';
import { findBlog, getBlogs } from '../components/blog/blogController';
import { findHeader, getHeaders, findHeaderByPage } from '../components/header/headerController';
import { findAbout, getAbouts } from '../components/about/aboutController';
import { findContact, getContacts } from '../components/contact/contactController';
import { findTeam, getTeams } from '../components/team/teamController';
import { findCompany, getCompanies } from '../components/company/companyController';

const router = express.Router();

router.get('/carousels', getCarousels)
router.get('/carousels/:carouselId', findCarousel)

router.get('/services', getServices)
router.get('/services/:serviceId', findService)

router.get('/galleries', getGalleries)
router.get('/galleries/:galleryId', findGallery)

router.get('/testimonies', getTestimonies)
router.get('/testimonies/:testimonyId', findTestimony)

router.get('/socmeds', getSocmeds)
router.get('/socmeds/:socmedId', findSocmed)

router.get('/blogs', getBlogs)
router.get('/blogs/:blogId', findBlog)

router.get('/headers', getHeaders)
router.get('/headers/:headerId', findHeader)
router.get('/headers/page/:page', findHeaderByPage)

router.get('/abouts', getAbouts)
router.get('/abouts/:aboutId', findAbout)

router.get('/contacts', getContacts)
router.get('/contacts/:contactId', findContact)

router.get('/teams', getTeams)
router.get('/teams/:teamId', findTeam)

router.get('/companies', getCompanies)
router.get('/companies/:companyId', findCompany)

export default router;