<template>
  <q-page padding>
    <div class="flex row q-col-gutter-xl q-pa-lg">
      <div v-for="offer of offers" :key="offer.id" class="col-12 col-sm-6">
        <q-card>
          <q-card-section class="flex flex-center">
            {{ offer.name }}
          </q-card-section>
          <q-card-section class="flex flex-center">
            <q-btn
              color="primary"
              label="Shop Now"
              @click="openDeal(offer.url)"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Service from "../services/Service";

export default {
  name: "OfferList",
  data() {
    return {
      service: new Service(),
      offers: [],
    };
  },

  created() {
    this.service.listValidOffers().then((offers) => (this.offers = offers));
  },
  methods: {
    openDeal(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
