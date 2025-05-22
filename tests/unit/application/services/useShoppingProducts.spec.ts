import useShoppingProducts from '@/application/services/useShoppingProducts';
import { useStore } from '@/infrastructure/store';
import { ACTIONS, GETTERS } from '@/infrastructure/store/shopping/shopping.types';
import { PRODUCT_CODE } from '@/domain/checkout/checkout.types';
import mockStore from '../../../_mocks/mockStore'; // Adjust path if necessary

// Mock the store
jest.mock('@/infrastructure/store', () => ({
  useStore: jest.fn(),
}));

describe('useShoppingProducts', () => {
  let storeMock: any;

  beforeEach(() => {
    // Reset mocks before each test
    storeMock = mockStore();
    (useStore as jest.Mock).mockReturnValue(storeMock);
  });

  it('should be defined', () => {
    const { products, addProduct, removeProduct } = useShoppingProducts();
    expect(products).toBeDefined();
    expect(addProduct).toBeDefined();
    expect(removeProduct).toBeDefined();
  });

  it('should return products from store getters', () => {
    const mockProducts = [
      { code: PRODUCT_CODE.CAP, name: 'Cap', price: 5 },
      { code: PRODUCT_CODE.TSHIRT, name: 'T-Shirt', price: 20 },
    ];
    storeMock.getters[GETTERS.PRODUCTS] = mockProducts;

    const { products } = useShoppingProducts();

    expect(products.value).toEqual(mockProducts);
    expect(storeMock.getters[GETTERS.PRODUCTS]).toEqual(mockProducts); // Double check getter was indeed set
  });

  it('should dispatch SCAN_PRODUCT action when addProduct is called', async () => {
    const productCodeToAdd = PRODUCT_CODE.MUG;
    const { addProduct } = useShoppingProducts();

    await addProduct(productCodeToAdd);

    expect(storeMock.dispatch).toHaveBeenCalledWith(
      ACTIONS.SCAN_PRODUCT,
      productCodeToAdd
    );
  });

  it('should dispatch REMOVE_PRODUCT action when removeProduct is called', async () => {
    const productCodeToRemove = PRODUCT_CODE.TSHIRT;
    const { removeProduct } = useShoppingProducts();

    await removeProduct(productCodeToRemove);

    expect(storeMock.dispatch).toHaveBeenCalledWith(
      ACTIONS.REMOVE_PRODUCT,
      productCodeToRemove
    );
  });

  // More tests will be added here in subsequent steps
});
