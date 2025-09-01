import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/home/Index.vue'),
        name: 'home',
        meta: {
          auth: true,
          title: "Home",
        },
      },
      {
        path: '/about_us',
        component: () => import('@/pages/about/Index.vue'),
        name: 'about_us',
        meta: {
          auth: true,
          title: "About Us",
        },
      },
      {path: '/volunteer',
        component: () => import('@/pages/about/Volunteer.vue'),
        name: 'volunteer',
        meta: {
          auth: true,
          title: "Volunteer",
        },
      },
      {path: '/iana_videos',
        component: () => import('@/pages/about/IanaVideos.vue'),
        name: 'iana videos',
        meta: {
          auth: true,
          title: "Iana Videos",
        },
      },
      {
        path: '/fatwas',
        component: () => import('@/pages/fatwas/Index.vue'),
        name: 'fatwas',
        meta: {
          auth: true,
          title: "Fatwas",
        },
      },
      {
        path: '/services',
        component: () => import('@/pages/services/Index.vue'),
        name: 'services',
        meta: {
          auth: true,
          title: "Services",
        },
      },
      {
        path: '/pressrelease',
        component: () => import('@/pages/pressrelease/Index.vue'),
        name: 'pressrelease',
        meta: {
          auth: true,
          title: "Press Release",
        },
      },
      {
        path: '/dawaactivity',
        component: () => import('@/pages/dawaactivity/Index.vue'),
        name: 'dawaactivity',
        meta: {
          auth: true,
          title: "Da'wa Activity",
        },
      },
      {
        path: '/ianarelief',
        component: () => import('@/pages/ianarelief/Index.vue'),
        name: 'ianarelief',
        meta: {
          auth: true,
          title: "IANA Relief",
        },
      },
      {
        path: '/iana-somali-involvement',
        component: () => import('@/pages/ianasomali/Index.vue'),
        name: 'ianasomali',
        meta: {
          auth: true,
          title: "IANA Somali Involvement",
        },
      },
      {
        path: '/covid19',
        component: () => import('@/pages/covid19/Index.vue'),
        name: 'covid19',
        meta: {
          auth: true,
          title: "COVID-19",
        },
      },
      {
        path: '/civicsengagement',
        component: () => import('@/pages/civicsengagement/Index.vue'),
        name: 'civicsengagement',
        meta: {
          auth: true,
          title: "Civic Engagement",
        },
      },
      {
        path: '/family-business-counseling',
        component: () => import('@/pages/familybusiness/Index.vue'),
        name: 'family business counseling',
        meta: {
          auth: true,
          title: "Family & Business Counseling",
        },
      },
      {
        path: '/healthawareness',
        component: () => import('@/pages/healthawareness/Index.vue'),
        name: 'healthawareness',
        meta: {
          auth: true,
          title: "Health Awareness",
        },
      },
      {
        path: '/ianaadvocacy',
        component: () => import('@/pages/ianaadvocacy/Index.vue'),
        name: 'ianaadvocacy',
        meta: {
          auth: true,
          title: "IANA Advocacy Involvement",
        },
      },
      {
        path: '/ianaannualbanquet',
        component: () => import('@/pages/ianaannualbanquet/Index.vue'),
        name: 'ianaannualbanquet',
        meta: {
          auth: true,
          title: "IANA Annual Banquet",
        },
      },
      {
        path: '/ianacnnualconference',
        component: () => import('@/pages/ianacnnualconference/Index.vue'),
        name: 'ianacnnualconference',
        meta: {
          auth: true,
          title: "IANA Annual Conference",
        },
      },
      {
        path: '/islamic-holidays',
        component: () => import('@/pages/islamicholidays/Index.vue'),
        name: 'islamicholidays',
        meta: {
          auth: true,
          title: "Islamic Holidays",
        },
      },
      {
        path: '/member-centers',
        component: () => import('@/pages/membercenters/Index.vue'),
        name: 'membercenters',
        meta: {
          auth: true,
          title: "Member Centers",
        },
      },
      {
        path: '/youth-family',
        component: () => import('@/pages/youthandfamily/Index.vue'),
        name: 'youthandfamily',
        meta: {
          auth: true,
          title: "Youth and Family",
        },
      },
      {
        path: '/waqf-initiative',
        component: () => import('@/pages/waqfinitiative/Index.vue'),
        name: 'waqafinitiative',
        meta: {
          auth: true,
          title: "Waqaf Initiative",
        },
      },
      {
        path: '/news',
        component: () => import('@/pages/news/Index.vue'),
        name: 'news',
        meta: {
          auth: true,
          title: "News",
        },
      },
      {
        path: '/events',
        component: () => import('@/pages/events/Index.vue'),
        name: 'events',
        meta: {
          auth: true,
          title: "Events",
        },
      },
      {
        path: '/contactus',
        component: () => import('@/pages/contactus/Index.vue'),
        name: 'contactus',
        meta: {
          auth: true,
          title: "Contact Us",
        },
      }
    ]
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
