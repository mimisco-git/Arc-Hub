window.ARCLUME_CONNECTED_MODE = {
  enabled: false,
  authEndpoint: '',
  profileEndpoint: '',
  notes: 'Static mode only. Configure this when you have a supported Arc House auth connector.'
};

window.ARCLUME_CIRCLE_BACKEND = {
  enabled: true,
  baseUrl: 'https://arc-lume-backend.vercel.app',
  arcscanBaseUrl: 'https://testnet.arcscan.app',
  tokenAddress: '0x3600000000000000000000000000000000000000',
  blockchain: 'ARC-TESTNET',
  notes: 'Backend deployed on Vercel. Circle API calls are proxied securely.'
};
