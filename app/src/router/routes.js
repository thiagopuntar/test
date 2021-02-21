const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/OfferList.vue"),
        name: "home"
      },
      {
        path: "/admin",
        component: () => import("pages/OfferAdminList.vue"),
        name: "offerList"
      },
      {
        path: "/admin/new",
        component: () => import("pages/OfferAdminForm.vue"),
        name: "addOffer"
      },
      {
        path: "/admin/:id",
        component: () => import("pages/OfferAdminForm.vue"),
        name: "editOffer"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
