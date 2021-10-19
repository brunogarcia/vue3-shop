import {
  PricingRule,
  ScannerItem,
  TotalDiscountItem,
  PRODUCT_CODE
} from "@/domain/checkout/checkout.types";
import {
  DiscountRule,
  DISCOUNT_CODE
} from "@/domain/discount-rules/discount.rules.types";

const { EMPTY } = PRODUCT_CODE;

/**
 * Checkout service
 */
export default class CheckoutService {
  private totalCost = 0;
  private scanner: ScannerItem[] = [];
  private pricingRules: PricingRule[];
  private discountRules: DiscountRule[] = [];
  private discountsApplied: TotalDiscountItem[] = [];
  private emptyPricingRule: PricingRule = {
    code: EMPTY,
    price: 0,
    discounts: []
  };

  constructor(pricingRules: PricingRule[], discountRules: DiscountRule[]) {
    this.pricingRules = pricingRules;
    this.discountRules = discountRules;
  }

  /**
   * Get total cost
   *
   * @public
   * @returns {number}
   */
  public getTotalCost(): number {
    return this.totalCost;
  }

  /**
   * Get total items
   *
   * @public
   * @returns {number}
   */
  public getTotalItems(): number {
    return this.scanner.length;
  }

  /**
   * Get total cost with discounts
   *
   * @public
   * @returns {number}
   */
  public getTotalCostWithDiscounts(): number {
    const totalDiscountsApplied = this.getDiscountsApplied()
      .filter(item => item.total > 0)
      .reduce((acc, discount) => {
        return acc + discount.total;
      }, 0);

    return this.totalCost - totalDiscountsApplied;
  }

  /**
   * Get a list of the discounts applied
   *
   * @public
   * @returns {TotalDiscountItem}
   */
  public getDiscountsApplied(): TotalDiscountItem[] {
    return this.discountsApplied.filter(item => item.total > 0);
  }

  /**
   * Scan a product
   *
   * @public
   * @param {PRODUCT_CODE} code - The pricing rule code
   * @returns {this}
   */
  public scan(code: PRODUCT_CODE): this {
    const pricingRule = this.getPricingRule(code);

    this.addPriceToTotal(pricingRule);
    this.addItemToScanner(pricingRule);
    this.updateDiscounts(pricingRule);

    return this;
  }

  /**
   * Remove a product
   *
   * @public
   * @param {PRODUCT_CODE} code - The pricing rule code
   * @returns {this}
   */
  public remove(code: PRODUCT_CODE): this {
    const pricingRule = this.getPricingRule(code);

    this.subtractPriceToTotal(pricingRule);
    this.removeItemFromScanner(pricingRule);
    this.updateDiscounts(pricingRule);

    return this;
  }

  /**
   * Commons - Get princing rule
   *
   * @param {PRODUCT_CODE} code - The product code
   * @returns {PricingRule}
   */
  private getPricingRule(code: PRODUCT_CODE): PricingRule {
    const pricingRule: PricingRule | undefined = this.pricingRules.find(
      item => item.code === code
    );
    return pricingRule || this.emptyPricingRule;
  }

  /**
   * Total Price - Add price to total
   *
   * @param {PricingRule} product - The product
   */
  private addPriceToTotal(product: PricingRule) {
    this.totalCost += product.price;
  }

  /**
   * Total Price - Subtract price to total
   *
   * @param {PricingRule} product - The product
   */
  private subtractPriceToTotal(product: PricingRule) {
    this.totalCost -= product.price;
  }

  /**
   * Scanner- Add item to scanner
   *
   * @param {PricingRule} product - The product to add
   */
  private addItemToScanner(product: PricingRule) {
    const indexItem = this.getItemIndexFromScannerByCode(product.code);
    const existItem = indexItem >= 0;

    if (existItem) {
      this.sumOneToItemScannerCounter(indexItem);
    } else {
      this.addNewItemToScanner(product);
    }
  }

  /**
   * Scanner- Get item index from scanner by code
   *
   * @param {PRODUCT_CODE} code - The product code
   * @returns {number}
   */
  private getItemIndexFromScannerByCode(code: PRODUCT_CODE): number {
    return this.scanner.findIndex(item => item.code === code);
  }

  /**
   * Scanner- Sum one to item counter
   *
   * @param {number} indexItem - The item index on the scanner list
   */
  private sumOneToItemScannerCounter(indexItem: number) {
    const counter = this.scanner[indexItem].counter + 1;
    this.updateItemScannerCounter(indexItem, counter);
  }

  /**
   * Scanner- Update item counter
   *
   * @param {number} indexItem - The product index on the scanner list
   * @param {number} counter - The item counter
   */
  private updateItemScannerCounter(indexItem: number, counter: number) {
    const currentItem = this.scanner[indexItem];

    const itemsFiltered = this.scanner.filter(
      item => item.code !== currentItem.code
    );

    this.scanner = [
      ...itemsFiltered,
      {
        ...currentItem,
        counter
      }
    ];
  }

  /**
   * Scanner- Add new product to scanner
   *
   * @param {PricingRule} product - The product to add
   */
  private addNewItemToScanner(product: PricingRule) {
    this.scanner = [
      ...this.scanner,
      {
        ...product,
        counter: 1
      }
    ];
  }

  /**
   * Scanner- Remove item from scanner
   *
   * @param {PricingRule} product - The product to remove
   */
  private removeItemFromScanner(product: PricingRule) {
    const indexItem = this.getItemIndexFromScannerByCode(product.code);
    const isValidItem = this.isValidToRestOneItem(indexItem);

    if (isValidItem) {
      this.restOneItemToCounter(indexItem);
    } else {
      this.removeProductFromScanner(product.code);
    }
  }

  /**
   * Scanner- Check if the item is valid to rest one item
   *
   * @param indexItem - item index
   * @returns {boolean}
   */
  private isValidToRestOneItem(indexItem: number): boolean {
    const existsItem = indexItem >= 0;

    if (existsItem) {
      const { counter } = this.scanner[indexItem];
      const currentCounterGreaterThanZero = counter > 0;
      const nextCounterGreaterThanZero = counter - 1 > 0;

      return currentCounterGreaterThanZero && nextCounterGreaterThanZero;
    }

    return false;
  }

  /**
   * Scanner- Rest one to item to counter
   *
   * @param {number} indexItem - The item index on the scanner list
   */
  private restOneItemToCounter(indexItem: number) {
    const counter = this.scanner[indexItem].counter - 1;
    this.updateItemScannerCounter(indexItem, counter);
  }

  /**
   * Scanner- Remove product from scanner
   *
   * @param {PRODUCT_CODE} code - The product code
   */
  private removeProductFromScanner(code: PRODUCT_CODE) {
    this.scanner = this.scanner.filter(item => item.code !== code);
  }

  /**
   * Discounts - Update discounts
   *
   * @param {PricingRule} product - The product
   */
  private updateDiscounts(product: PricingRule) {
    const discountsRulesByProduct = this.discountRules.filter(discount => {
      return discount.products.includes(product.code);
    });

    discountsRulesByProduct.forEach(discount => {
      const totalDiscount = this.applyProductDiscount(discount);
      this.updateTotalDiscounts(discount, totalDiscount);
    });
  }

  /**
   * Discounts - Apply product discount
   *
   * @param {DiscountRule} discount - The discount rule to apply
   */
  private applyProductDiscount(discount: DiscountRule): number {
    const indexItem = this.getItemIndexFromScannerByDiscountCode(discount.code);

    const isValidToApplyDiscount = this.isValidItemToApplyDiscount({
      indexItem,
      minToApply: discount.minToApply
    });

    if (isValidToApplyDiscount) {
      return discount.calculateDiscount(this.scanner[indexItem]);
    }

    return 0;
  }

  /**
   * Discounts - Get item index from scanner by discount code
   *
   * @param {DISCOUNT_CODE} code - The product code
   * @returns {number}
   */
  private getItemIndexFromScannerByDiscountCode(code: DISCOUNT_CODE): number {
    return this.scanner.findIndex(product => product.discounts.includes(code));
  }

  /**
   * Discounts - Check if the item is valid for apply the discount
   *
   * @param {number} payload.indexItem - item index
   * @param {number} payload.minToApply - min number of items to apply
   * @returns {boolean}
   */
  private isValidItemToApplyDiscount(payload: Record<string, number>): boolean {
    const { indexItem, minToApply } = payload;

    const existItem = indexItem >= 0;

    if (existItem) {
      return this.scanner[indexItem].counter >= minToApply;
    }

    return false;
  }

  /**
   * Discounts - Update total discount list
   *
   * @param {DiscountRule} discount - The discount rule
   * @param {number} totalDiscount - The total discount
   */
  private updateTotalDiscounts(discount: DiscountRule, totalDiscount: number) {
    const indexItem = this.discountsApplied.findIndex(
      item => item.code === discount.code
    );

    const existsItem = indexItem >= 0;
    const discountItem = this.getTotalDiscountItem(discount, totalDiscount);

    if (existsItem) {
      this.discountsApplied[indexItem] = discountItem;
    } else {
      this.discountsApplied = [...this.discountsApplied, discountItem];
    }
  }

  /**
   * Discounts - Get total discount item
   *
   * @param {DiscountRule} discount - The discount rule
   * @param {number} totalDiscount - The total discount
   * @returns {TotalDiscountItem}
   */
  private getTotalDiscountItem(
    discount: DiscountRule,
    totalDiscount: number
  ): TotalDiscountItem {
    return {
      code: discount.code,
      literal: discount.literal,
      total: totalDiscount
    };
  }
}
