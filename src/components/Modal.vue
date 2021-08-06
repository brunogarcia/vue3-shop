<template>
  <transition name="modal">
    <div v-if="displayModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <Title title="Resume" />
          </div>

          <div class="modal-body">
            <h2>Subtotal</h2>

            <ul class="checkout-items border">
              <li>
                <span>{{ totalItems }} Items </span>
                <span>
                  {{ totalCost }}
                  <span class="currency">€</span>
                </span>
              </li>
            </ul>

            <h2>Discounts</h2>

            <ul class="checkout-items border">
              <li v-for="item in discountsApplied" :key="item.code">
                <span>{{ item.literal }}</span>
                <span>-{{ item.total }}€</span>
              </li>
            </ul>

            <h2>Total to pay</h2>
            <ul class="checkout-items border">
              <li>
                <span>Total</span>
                <span>{{ totalCostWithDiscounts }}€ </span>
              </li>
            </ul>
          </div>

          <div class="modal-footer">
            <button type="button" @click="handleClose()">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Modal",

  components: {
    Title
  },

  computed: {
    ...mapGetters({
      displayModal: "modal/display",
      totalCost: "shopping/totalCost",
      totalItems: "shopping/totalItems",
      discountsApplied: "shopping/discountsApplied",
      totalCostWithDiscounts: "shopping/totalCostWithDiscounts"
    })
  },

  methods: {
    ...mapActions({
      updateModal: "modal/updateModal"
    }),

    handleClose() {
      this.updateModal(false);
    }
  }
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.checkout-items {
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
}

.checkout-items li {
  display: flex;
  justify-content: space-between;
}

.checkout-items li > *:nth-child(2) {
  font-weight: bold;
}

.checkout-items li + li {
  margin-top: 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
