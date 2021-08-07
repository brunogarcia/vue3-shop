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
    <button
      :disabled="!hasTotalCost"
      type="button"
      @click="handleDisplayModal()"
    >
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
import { defineComponent } from "vue";
import useModal from "@/hooks/useModal";
import useShopping from "@/hooks/useShopping";
import Modal from "@/components/Modal.vue";
import Checkout from "@/components/Checkout.vue";

export default defineComponent({
  name: "SummaryTotal",

  components: {
    Modal,
    Checkout
  },

  setup() {
    const { handleDisplayModal } = useModal();
    const { hasTotalCost, totalCostWithDiscounts } = useShopping();

    return {
      hasTotalCost,
      handleDisplayModal,
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
