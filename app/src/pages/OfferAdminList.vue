<template>
  <q-page padding>
    <q-btn
      icon="add"
      round
      color="primary"
      @click="$router.push({ name: 'addOffer' })"
    />

    <q-table :data="offers" :columns="columns" row-key="id" class="q-mt-lg">
      <template #body-cell-changeState="props">
        <q-td :props="props">
          <q-toggle
            :value="props.row.enabled"
            @input="changeStatus(props.row)"
            class="q-mx-md"
          />
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td class="flex justify-end" :props="props">
          <div>
            <q-btn
              size="sm"
              round
              icon="edit"
              color="secondary"
              class="q-mx-md"
              @click="editOffer(props.row.id)"
            />
            <q-btn
              size="sm"
              round
              icon="delete"
              color="negative"
              class="q-mx-md"
              @click="removeOffer(props.row)"
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
        { name: "state", label: "State", field: "state" },
        { name: "changeState", label: "Forced disable", align: "right" },
        { name: "actions", label: "Actions", align: "right" },
      ],
    };
  },

  created() {
    this.service
      .listAllOffers()
      .then(
        (offers) =>
          (this.offers = offers.map((x) => ({ ...x, enabled: !x.isDisabled })))
      );
  },
  methods: {
    changeStatus(offer) {
      this.service
        .changeStatus(offer.id, offer.enabled)
        .then(() => {
          offer.enabled = !offer.enabled;
        })
        .catch((err) => {
          console.log(err.response);
          this.$q.notify({
            message: "Oops, something got wrong. Try again in a few minutes",
            color: "negative",
          });
        });
    },
    editOffer(id) {
      this.$router.push({ name: "editOffer", params: { id } });
    },
    removeOffer(row) {
      this.$q
        .dialog({
          title: "Remove Offer",
          message: "Are you sure you want to remove this offer?",
          cancel: true,
        })
        .onOk(() => {
          this.service
            .remove(row.id)
            .then(() => {
              this.$q.notify({
                message: "Offer removed successfully",
                color: "positive",
              });
              this.offers.splice(this.offers.indexOf(row), 1);
            })
            .catch((err) => {
              console.log(err);
              this.$q.notify({
                message:
                  "Oops, something got wrong. Try again in a few minutes",
                color: "negative",
              });
            });
        });
    },
  },
};
</script>
