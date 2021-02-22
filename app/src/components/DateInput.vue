<template>
  <q-input :value="value" @input="input" mask="####-##-## ##:##">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date :value="value" @input="input" mask="YYYY-MM-DD HH:mm">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :value="value"
            @input="input"
            mask="YYYY-MM-DD HH:mm"
            format24h
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    },
    isRequired(val) {
      if (!this.required) {
        return true;
      }

      return !!val || "Required field";
    },
  },
};
</script>