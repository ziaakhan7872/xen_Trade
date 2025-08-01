export const coinRegexValidation = {
  BTC: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
  ETH: /^0x[a-fA-F0-9]{40}$/,
  USDT: /^0x[a-fA-F0-9]{40}$/, // ERC20
  USDC: /^0x[a-fA-F0-9]{40}$/, // ERC20
  TRX: /^T[A-Za-z1-9]{33}$/,
  SOL: /^[1-9A-HJ-NP-Za-km-z]{32,44}$/,
  DOGE: /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/,
  LTC: /^(L|M|ltc1)[A-Za-z0-9]{26,41}$/,
  XRP: /^r[0-9a-zA-Z]{24,34}$/,
  XMR: /^[48][0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/,
  DASH: /^X[1-9A-HJ-NP-Za-km-z]{33}$/,
  ZEC: /^(t1|t3|zs)[0-9A-Za-z]{33}$/
};