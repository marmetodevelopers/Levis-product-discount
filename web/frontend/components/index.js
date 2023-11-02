export { ProductsCard } from "./ProductsCard";
export * from "./providers";
import { DiscountApplicationStrategy } from "../../../extensions/levi-s-discount/generated/api";
import { WeightUnit } from "../../../extensions/levi-s-discount/generated/api";
/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const EMPTY_DISCOUNT = {
    discountApplicationStrategy: DiscountApplicationStrategy.First,
    discounts: [],
  };
  
  /**
   * @param {RunInput} input
   * @returns {FunctionRunResult}
   */
  console.log("input",WeightUnit)
  export function run(input) {
    const configuration = JSON.parse(
      input?.discountNode?.metafield?.value ?? "{}"
    );
  
    return EMPTY_DISCOUNT;
  };
