import PRODUCT from "@/enums/product";
import { PricingRule, DiscountRule, ScannerItem } from "@/types";
import discountRules from "@/middleware/discountRules";

const { EMPTY } = PRODUCT;

export default class Checkout {
  private totalCost = 0;
  private scanner: ScannerItem[] = [];
  private pricingRules: PricingRule[];
  private discountRules: DiscountRule[] = [];
  private emptyPricingRule: PricingRule = {
    code: EMPTY,
    price: 0,
    discounts: []
  };

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
    this.discountRules = discountRules();
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
   * Scan a product
   *
   * @public
   * @param {PRODUCT} code - The pricing rule code
   * @returns {this}
   */
  public scan(code: PRODUCT): this {
    const pricingRule = this.getPricingRule(code);

    this.addPriceToTotal(pricingRule);
    this.addItemToScanner(pricingRule);

    return this;
  }

  /**
   * Remove a product
   *
   * @public
   * @param {PRODUCT} code - The pricing rule code
   * @returns {this}
   */
  public remove(code: PRODUCT): this {
    const pricingRule = this.getPricingRule(code);
    this.subtractPriceToTotal(pricingRule);

    return this;
  }

  /**
   * Commons - Get princing rule
   *
   * @param {PRODUCT} code - The product code
   * @returns {PricingRule}
   */
  private getPricingRule(code: PRODUCT): PricingRule {
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
   * @param {PRODUCT} code - The product code
   * @returns {number}
   */
  private getItemIndexFromScannerByCode(code: PRODUCT): number {
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
}
