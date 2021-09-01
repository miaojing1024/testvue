
const testApi = [
  {
    path: "/setup",
    name: "setup",
    component: () => import("@/views/testApi/setup.vue")
  },
  {
    path: "/readonly",
    name: "readonly",
    component: () => import("@/views/testApi/readonly.vue")
  },
  {
    path: "/watchEffect",
    name: "watchEffect",
    component: () => import("@/views/testApi/watchEffect.vue")
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("@/views/testApi/watch.vue")
  },
  {
    path: "/onMounted",
    name: "onMounted",
    component: () => import("@/views/testApi/onMounted.vue")
  },
  {
    path: "/provideInject",
    name: "provideInject",
    component: () => import("@/views/testApi/provideInject/index.vue")
  }
]

export default testApi