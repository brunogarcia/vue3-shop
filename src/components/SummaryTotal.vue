<template>
  <div class="summary-total wrapper">
    <ul>
      <li>
        <span class="summary-total-cost">Total cost</span>
        <span class="summary-total-price" data-test="summary-total-price">
          {{ totalCostWithDiscounts }}€
        </span>
      </li>
    </ul>
    <button :disabled="isDisabled()" type="button" @click="handleCheckout()">
      Checkout
    </button>

    <teleport to="body">
      <Modal>
        <template v-slot:body>
          <Checkout />
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import Checkout from "@/components/Checkout.vue";

export default defineComponent({
  name: "SummaryTotal",
  components: {
    Modal,
    Checkout
  },
  computed: {
    ...mapGetters({
      totalCostWithDiscounts: "shopping/totalCostWithDiscounts"
    })
  },
  methods: {
    ...mapActions({
      updateModal: "modal/updateModal"
    }),

    handleCheckout() {
      this.updateModal(true);
    },

    isDisabled() {
      return this.totalCostWithDiscounts === 0;
    }
  }
});
</script>

<style scoped>
.summary-total {
  align-self: flex-end;
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 0;
  border-top: 1px solid rgba(33, 34, 64, 0.16);
  color: #212240;
}

.summary-total-cost {
  flex-basis: 100%;
  text-transform: uppercase;
}

.summary-total-price {
  font-weight: bold;
}
</style>
