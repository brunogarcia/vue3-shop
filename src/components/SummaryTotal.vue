<template>
  <div class="summary-total wrapper">
    <ul>
      <li>
        <span class="summary-total-cost">Total to pay</span>
        <span class="summary-total-price" data-test="summary-total-price">
          {{ totalCostWithDiscounts }}€
        </span>
      </li>
    </ul>
    <shop-button :disabled="!hasTotalCost" @click="handleDisplayModal()">
      Checkout
    </shop-button>

    <teleport to="body">
      <Modal v-if="displayModal" @hide-modal="handleHideModal">
        <template v-slot:body>
          <Checkout />
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";
import ShopButton from "@/components/core/Button.vue";
import Checkout from "@/components/Checkout.vue";
import useModal from "@/composable-functions/useModal";
import useShoppingSummary from "@/composable-functions/useShoppingSummary";

export default defineComponent({
  name: "SummaryTotal",

  components: {
    Modal,
    Checkout,
    ShopButton
  },

  setup() {
    const { displayModal, handleDisplayModal, handleHideModal } = useModal();
    const { hasTotalCost, totalCostWithDiscounts } = useShoppingSummary();

    return {
      displayModal,
      handleDisplayModal,
      handleHideModal,
      hasTotalCost,
      totalCostWithDiscounts
    };
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
