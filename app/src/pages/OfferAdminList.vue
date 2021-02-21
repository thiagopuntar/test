<template>
  <q-page padding>
    <q-btn
      icon="add"
      round
      color="primary"
      @click="$router.push({ name: 'addOffer' })"
    />

    <q-table :data="offers" :columns="columns" row-key="id" class="q-mt-lg">
      <template #body-cell-actions="props">
        <q-td class="flex justify-end" :props="props">
          <div>
            <q-toggle v-model="props.row.enabled" class="q-mx-md" />
            <q-btn
              size="sm"
              round
              icon="edit"
              color="secondary"
              class="q-mx-md"
            />
            <q-btn
              size="sm"
              round
              icon="delete"
              color="negative"
              class="q-mx-md"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import Service from "../services/Service";

export default {
  name: "OfferAdminList",
  data() {
    return {
      offers: [],
      service: new Service(),
      columns: [
        { name: "id", field: "id", label: "#ID", sortable: true },
        { name: "name", field: "name", label: "Name", sortable: true },
        { name: "url", field: "url", label: "Url" },
        { name: "actions", label: "Actions", align: "right" },
      ],
    };
  },

  created() {
    this.service.listAllOffers().then((offers) => (this.offers = offers));
  },
};
</script>
