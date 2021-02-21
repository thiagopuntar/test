<template>
  <q-input
    mask="####-##-##"
    :label="label"
    :value="value"
    @input="input"
    :rules="[isRequired]"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date :value="value" @input="input">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
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