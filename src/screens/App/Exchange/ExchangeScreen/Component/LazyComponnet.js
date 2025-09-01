import { preloadableLazy } from '../../../../../CommonHelperFunction/PreloadableLazy';

export const BuyForm = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.BuyForm }))
);

export const SellForm = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.SellForm }))
);

export const CurrentOrderComponent = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.CurrentOrderComponent }))
);

export const AssetsComponent = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.AssetsComponent }))
);

export const FavoutiteBottomSheetComponnet = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.FavoutiteBottomSheetComponnet }))
);

export const OrderBookForm = preloadableLazy(() =>
  import('./Index').then(m => ({ default: m.OrderBookForm }))
);
