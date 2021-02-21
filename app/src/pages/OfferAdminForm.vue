<template>
  <q-page padding>
    <q-form class="q-pa-xl" @submit="save">
      <h1 class="text-h4">{{ pageTitle }}</h1>
      <q-input
        label="Advertiser Name *"
        v-model="offer.name"
        :rules="[(val) => !!val || 'Required field']"
        autofocus
        ref="inputName"
      />
      <q-input
        label="URL *"
        v-model="offer.url"
        :rules="[(val) => !!val || 'Required field', validateUri]"
      />
      <q-input
        label="Description *"
        v-model="offer.description"
        type="textarea"
        :rules="[
          (val) => !!val || 'Required field',
          (val) => val.length <= 500 || 'Max 500 characters',
        ]"
        hint=""
        counter
      />

      <date-input v-model="offer.startsAt" label="Starts at *" required />
      <date-input v-model="offer.endsAt" label="Ends at" />
      <q-checkbox v-model="offer.isPremium" label="Premium" />
      <div class="q-mt-lg">
        <q-btn type="submit" label="Save" color="primary" />
        <q-btn flat label="Go back" @click="$router.go(-1)" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import Service from "../services/Service";
import DateInput from "../components/DateInput";

class Offer {
  constructor() {
    this.isPremium = false;
  }
}

export default {
  name: "OfferAdminForm",
  components: {
    DateInput,
  },
  data() {
    return {
      offer: new Offer(),
      pageTitle: "New Offer",
      service: new Service(),
    };
  },
  created() {},
  methods: {
    validateUri(val) {
      const rgx = /(^http[s]?:\/{2})|(^www)|(^\/{1,2})/;
      return rgx.test(val) || "URL format invalid.";
    },
    save() {
      this.service
        .save(this.offer)
        .then((res) => {
          this.$q.notify({
            message: "Offer saved successfully",
            color: "positive",
          });
          this.offer = new Offer();
          this.$refs.inputName.focus();
        })
        .catch((err) => {
          console.error(err);
          this.$q.notify({
            message: "Ooops, something got wrong.",
            color: "negative",
          });
        });
    },
  },
};
</script>
