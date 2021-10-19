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
    <shop-button :disabled="!hasTotalCost" @click="displayModal()">
      Checkout
    </shop-button>

    <teleport to="body">
      <Modal v-if="isModalDisplayed" @hide-modal="hideModal">
        <template v-slot:body>
          <Checkout />
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useModal from "@/application/services/useModal";
import useShoppingSummary from "@/application/services/useShoppingSummary";

import Modal from "@/ui/components/Modal.vue";
import Checkout from "@/ui/components/Checkout.vue";
import ShopButton from "@/ui/components/core/Button.vue";

export default defineComponent({
  name: "SummaryTotal",

  components: {
    Modal,
    Checkout,
    ShopButton
  },

  setup() {
    const { isModalDisplayed, displayModal, hideModal } = useModal();
    const { hasTotalCost, totalCostWithDiscounts } = useShoppingSummary();

    return {
      isModalDisplayed,
      displayModal,
      hideModal,
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
