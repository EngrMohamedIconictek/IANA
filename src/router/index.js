import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/forntend/home/Index.vue'),
        name: 'home',
        meta: {
          auth: false,
          title: "Home",
        },
      },
      {
        path: '/about_us',
        component: () => import('@/pages/forntend/about/Index.vue'),
        name: 'about_us',
        meta: {
          auth: false,
          title: "About Us",
        },
      },
      {
        path: '/volunteer',
        component: () => import('@/pages/forntend/about/Volunteer.vue'),
        name: 'volunteer',
        meta: {
          auth: false,
          title: "Volunteer",
        },
      },
      {
        path: '/iana_videos',
        component: () => import('@/pages/forntend/about/IanaVideos.vue'),
        name: 'iana videos',
        meta: {
          auth: false,
          title: "Iana Videos",
        },
      },
      {
        path: '/fatwa',
        component: () => import('@/pages/forntend/fatwas/Index.vue'),
        name: 'fatwa',
        meta: {
          auth: false,
          title: "Fatwa",
        },
      },
      {
        path: '/services',
        component: () => import('@/pages/forntend/services/Index.vue'),
        name: 'services',
        meta: {
          auth: false,
          title: "Services",
        },
      },
      {
        path: '/pressrelease',
        component: () => import('@/pages/forntend/pressrelease/Index.vue'),
        name: 'pressrelease',
        meta: {
          auth: false,
          title: "Press Release",
        },
      },
      {
        path: '/dawaactivity',
        component: () => import('@/pages/forntend/dawaactivity/Index.vue'),
        name: 'dawaactivity',
        meta: {
          auth: false,
          title: "Da'wa Activity",
        },
      },
      {
        path: '/ianarelief',
        component: () => import('@/pages/forntend/ianarelief/Index.vue'),
        name: 'ianarelief',
        meta: {
          auth: false,
          title: "IANA Relief",
        },
      },
      {
        path: '/iana-somali-involvement',
        component: () => import('@/pages/forntend/ianasomali/Index.vue'),
        name: 'ianasomali',
        meta: {
          auth: false,
          title: "IANA Somali Involvement",
        },
      },
      {
        path: '/announcement/:id',
        component: () => import('@/pages/forntend/announcements/AnnouncementDetail.vue'),
        name: 'announcement-detail',
        meta: {
          auth: false,
          title: "Announcement Detail",
        },
      },
      {
        path: '/events/:id',
        component: () => import('@/pages/forntend/events/EventsDetails.vue'),
        name: 'events-detail',
        meta: {
          auth: false,
          title: "Events Detail",
        },
      },
      {
        path: '/covid19',
        component: () => import('@/pages/forntend/covid19/Index.vue'),
        name: 'covid19',
        meta: {
          auth: false,
          title: "COVID-19",
        },
      },
      {
        path: '/civicsengagement',
        component: () => import('@/pages/forntend/civicsengagement/Index.vue'),
        name: 'civicsengagement',
        meta: {
          auth: false,
          title: "Civic Engagement",
        },
      },
      {
        path: '/family-business-counseling',
        component: () => import('@/pages/forntend/familybusiness/Index.vue'),
        name: 'family business counseling',
        meta: {
          auth: false,
          title: "Family & Business Counseling",
        },
      },
      {
        path: '/healthawareness',
        component: () => import('@/pages/forntend/healthawareness/Index.vue'),
        name: 'healthawareness',
        meta: {
          auth: false,
          title: "Health Awareness",
        },
      },
      {
        path: '/ianaadvocacy',
        component: () => import('@/pages/forntend/ianaadvocacy/Index.vue'),
        name: 'ianaadvocacy',
        meta: {
          auth: false,
          title: "IANA Advocacy Involvement",
        },
      },
      {
        path: '/ianaannualbanquet',
        component: () => import('@/pages/forntend/ianaannualbanquet/Index.vue'),
        name: 'ianaannualbanquet',
        meta: {
          auth: false,
          title: "IANA Annual Banquet",
        },
      },
      {
        path: '/ianacnnualconference',
        component: () => import('@/pages/forntend/ianacnnualconference/Index.vue'),
        name: 'ianacnnualconference',
        meta: {
          auth: false,
          title: "IANA Annual Conference",
        },
      },
      {
        path: '/islamic-holidays',
        component: () => import('@/pages/forntend/islamicholidays/Index.vue'),
        name: 'islamicholidays',
        meta: {
          auth: false,
          title: "Islamic Holidays",
        },
      },
      {
        path: '/member-centers',
        component: () => import('@/pages/forntend/membercenters/Index.vue'),
        name: 'membercenters',
        meta: {
          auth: false,
          title: "Member Centers",
        },
      },
      {
        path: '/youth-family',
        component: () => import('@/pages/forntend/youthandfamily/Index.vue'),
        name: 'youthandfamily',
        meta: {
          auth: false,
          title: "Youth and Family",
        },
      },
      {
        path: '/waqf-initiative',
        component: () => import('@/pages/forntend/waqfinitiative/Index.vue'),
        name: 'waqafinitiative',
        meta: {
          auth: false,
          title: "Waqaf Initiative",
        },
      },
      {
        path: '/announcements',
        component: () => import('@/pages/forntend/announcements/Index.vue'),
        name: 'announcements',
        meta: {
          auth: false,
          title: "Announcements",
        },
      },
      {
        path: '/events',
        component: () => import('@/pages/forntend/events/Index.vue'),
        name: 'events',
        meta: {
          auth: false,
          title: "Events",
        },
      },
      {
        path: '/contactus',
        component: () => import('@/pages/forntend/contactus/Index.vue'),
        name: 'contactus',
        meta: {
          auth: false,
          title: "Contact Us",
        },
      }
    ]
  },
  {
    path: '/dashboard',
    component: AppLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/Dashboard.vue'),
        name: 'dashboard',
        meta: {
          auth: true,
          title: "Dashboard",
        },
      },
      {
        path: 'create',
        component: () => import('@/pages/dashboard/events/Create.vue'),
        name: 'events-create',
        meta: {
          auth: true,
          title: "Create Event",
        },
      },
      {
        path: 'events',
        component: () => import('@/pages/dashboard/events/Index.vue'),
        name: 'dashboard-events',
        meta: {
          auth: true,
          title: "Events",
        },
      },
      {
        path: 'services',
        component: () => import('@/pages/dashboard/services/Index.vue'),
        name: 'dashboard-services',
        meta: {
          auth: true,
          title: "Services",
        },
      },
      {
        path: 'services/create',
        component: () => import('@/pages/dashboard/services/Create.vue'),
        name: 'services-create',
        meta: {
          auth: true,
          title: "Create Service",
        },
      },
      {
        path: 'services/category',
        component: () => import('@/pages/dashboard/services/CategoryList.vue'),
        name: 'services-category',
        meta: {
          auth: true,
          title: "Service Categories List",
        },
      },
      {
        path: 'services/create_category',
        component: () => import('@/pages/dashboard/services/CreateCategory.vue'),
        name: 'services-create-category',
        meta: {
          auth: true,
          title: "Create Service Category",
        },
      },
      {
        path: 'services/category',
        component: () => import('@/pages/dashboard/services/CategoryList.vue'),
        name: 'services-category',
        meta: {
          auth: true,
          title: "Service Categories List",
        },
      },
      {
        path: 'fatwas',
        component: () => import('@/pages/dashboard/fatwas/Index.vue'),
        name: 'fatwas',
        meta: {
          auth: true,
          title: "Fatwas",
        },
      },
      {
        path: 'fatwas/categories',
        component: () => import('@/pages/dashboard/fatwas/FatwaCategories.vue'),
        name: 'fatwas-categories',
        meta: {
          auth: true,
          title: "Fatwa Categories",
        },
      },
      {
        path: 'fatwas/hotline',
        component: () => import('@/pages/dashboard/fatwas/FatwaHotline.vue'),
        name: 'fatwas-hotline',
        meta: {
          auth: true,
          title: "Fatwa Hotline",
        },
      },
      {
        path: 'sponsors',
        component: () => import('@/pages/dashboard/sponsors/Index.vue'),
        name: 'dashboard-sponsors',
        meta: {
          auth: true,
          title: "Sponsors List",
        },
      },
      {
        path: 'sponsors/types',
        component: () => import('@/pages/dashboard/sponsors/SponsorTypes.vue'),
        name: 'sponsor-types',
        meta: {
          auth: true,
          title: "Sponsor Types",
        },
      },
      {
        path: 'sponsors/form',
        component: () => import('@/pages/dashboard/sponsors/SponsorForm.vue'),
        name: 'sponsor-form',
        meta: {
          auth: true,
          title: "Sponsor Form List",
        },
      },
      {
        path: 'sponsors/create',
        component: () => import('@/pages/dashboard/sponsors/Create.vue'),
        name: 'sponsors-create',
        meta: {
          auth: true,
          title: "Add Sponsor",
        },
      },
      {
        path: 'news',
        component: () => import('@/pages/dashboard/news/Index.vue'),
        name: 'dashboard-news',
        meta: {
          auth: true,
          title: "News",
        },
      },
      {
        path: 'islam/5_pillar_islam',
        component: () => import('@/pages/dashboard/islam/Index.vue'),
        name: '5-pillar-islam',
        meta: {
          auth: true,
          title: "5 Pillar List",
        },
      },
      {
        path: 'islam/6_pillar_islam',
        component: () => import('@/pages/dashboard/islam/PillarIslam.vue'),
        name: '6-pillar-islam',
        meta: {
          auth: true,
          title: "6 Pillar List",
        },
      },
      {
        path: 'news/create',
        component: () => import('@/pages/dashboard/news/Create.vue'),
        name: 'news-create',
        meta: {
          auth: true,
          title: "Create News",
        },
      }
    ]
  },
  {
    path: '/auth/login',
    component: () => import('@/pages/auth/Login.vue'),
    name: 'SignIn',
    meta: {
      auth: false,
      title: "Sign IN",
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notfound/NotFound.vue'),
    name: 'NotFound',
    meta: {
      auth: false,
      title: "Page Not Found - 404",
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
