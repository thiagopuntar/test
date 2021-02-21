const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/OfferList.vue") },
      { path: "/admin", component: () => import("pages/OfferAdminList.vue") },
      {
        path: "/admin/new",
        component: () => import("pages/OfferAdminForm.vue")
      },
      {
        path: "/admin/:id",
        component: () => import("pages/OfferAdminForm.vue")
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
