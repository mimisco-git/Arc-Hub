import { ethers } from 'https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm';

const CONFIG = {
  appName: 'ArcLume',
  networkName: 'Arc Testnet',
  chainId: 5042002,
  rpcUrl: 'https://rpc.testnet.arc.network',
  explorerUrl: 'https://testnet.arcscan.app',
  explorerApi: 'https://testnet.arcscan.app/api',
  communityUrl: 'https://community.arc.network/home',
  sampleAddress: '0x8004A818BFB912233c491871b3d84c89A494BD9e',
  storageKey: 'arclume-v5-profile'
};

const COMMUNITY_DATA = {
  events: [
    {
      title: 'ETHGlobal Cannes Hackathon',
      icon: '⬡',
      badge: 'Live now',
      urgency: 'High',
      urgencyTag: 'tag-danger',
      iso: '2026-04-03T07:00:00Z',
      meta: 'Apr 3 to Apr 5 · Cannes',
      fit: 'Builders on the ground',
      reason: 'Best for networking, booth visibility, and fast community exposure while the event is active.',
      url: 'https://community.arc.network/home/events/ethglobal-pragma-l7dy3xfft9'
    },
    {
      title: 'Arc Discord Office Hours',
      icon: '◎',
      badge: 'Soon',
      urgency: 'Next step',
      urgencyTag: 'tag-success',
      iso: '2026-04-07T17:00:00Z',
      meta: 'Apr 7 · 5:00 PM GMT',
      fit: 'New builders',
      reason: 'Low-friction way to ask questions, show up early, and start visible community participation.',
      url: 'https://community.arc.network/'
    },
    {
      title: 'Building Agentic Commerce on Arc: VibeCard',
      icon: '✦',
      badge: 'Builder spotlight',
      urgency: 'Strategic',
      urgencyTag: 'tag-primary',
      iso: '2026-04-15T17:00:00Z',
      meta: 'Apr 15 · 5:00 PM GMT',
      fit: 'Product and AI builders',
      reason: 'Strong signal if you want to understand where Arc is leaning on agentic commerce products.',
      url: 'https://community.arc.network/'
    },
    {
      title: 'Agentic Economy on Arc Hackathon',
      icon: '⚡',
      badge: '$10K prize pool',
      urgency: 'Highest leverage',
      urgencyTag: 'tag-warning',
      iso: '2026-04-20T07:00:00Z',
      meta: 'Apr 20 to Apr 26 · Hybrid',
      fit: 'Serious teams',
      reason: 'Biggest public builder opportunity on the current slate, with Circle nanopayments and Arc settlement as the core theme.',
      url: 'https://community.arc.network/home/events/agentic-economy-on-arc-hackathon-xoayqenc6j'
    }
  ],
  feed: [
    {
      type: 'Content',
      title: 'Tradable joins the Arc Builders Fund',
      icon: '▣',
      badge: 'Latest',
      meta: 'Blog · Apr 2, 2026',
      description: 'Featured Arc House post on Tradable bringing institutional private credit workflows onto Arc Testnet.',
      url: 'https://community.arc.network/home/blogs/tradable-joins-the-arc-builders-fund-institutional-private-credit-onchain-2026-04-02'
    },
    {
      type: 'Content',
      title: 'Replay: Building an Agentic Economy on Arc with RSoft Agentic Bank',
      icon: '▶',
      badge: 'Replay',
      meta: 'Replay · Apr 1, 2026',
      description: 'Replay covering KYA, agent reputation scoring, treasury management, and atomic settlement on Arc.',
      url: 'https://community.arc.network/en/public/events/building-an-agentic-economy-on-arc-with-rsoft-agentic-bank-79o43gi2cn'
    },
    {
      type: 'Content',
      title: 'Agentic Economy on Arc Hackathon Kickoff Stream',
      icon: '◉',
      badge: 'Kickoff',
      meta: 'Livestream recap',
      description: 'Kickoff stream context for the hackathon and its agent-to-agent commerce direction.',
      url: 'https://community.arc.network/en/public/events/nano-payments-arc-lablab-hackathon-kickoff'
    },
    {
      type: 'Content',
      title: 'Arc House home feed',
      icon: '✧',
      badge: 'Hub',
      meta: 'Events, content, members',
      description: 'Use Arc House itself to browse the full public event slate, content stream, and community navigation.',
      url: 'https://community.arc.network/'
    }
  ],
  resources: [
    {
      title: 'Architects: Program Overview',
      icon: '◎',
      description: 'Public overview of Arc’s ambassador-style Architects program.',
      url: 'https://community.arc.network/home/resources/architects-overview'
    },
    {
      title: 'Architects: Tiers & Benefits',
      icon: '◌',
      description: 'Public breakdown of tier thresholds, from Tier 0 at registration to later high-impact tiers.',
      url: 'https://community.arc.network/home/resources/architects-tiers-and-benefits'
    },
    {
      title: 'Architects: Roles',
      icon: '⬡',
      description: 'Public description of Architect roles like Community Moderator, Meetup Organizer, and Technical Speaker.',
      url: 'https://community.arc.network/home/resources/architects-roles'
    },
    {
      title: 'Contribution Rules',
      icon: '✦',
      description: 'Public rules for points and badges, including speaking, hosting, and event registration actions.',
      url: 'https://community.arc.network/public/contributors/contribution-rules'
    }
  ],
  timeline: [
    {
      title: 'Register on Arc House',
      icon: '①',
      badge: 'Tier 0',
      description: 'Users who register for Arc House start at Tier 0.'
    },
    {
      title: 'Show up in events and community',
      icon: '②',
      badge: 'Earn points',
      description: 'Public contribution rules show points for actions like event speaking, hosting, and registration.'
    },
    {
      title: 'Reach 500 points and opt in',
      icon: '③',
      badge: 'Tier 1',
      description: 'Tier 1 Architect status begins at 500 points after opting in to the program.'
    },
    {
      title: 'Unlock higher tiers and roles',
      icon: '④',
      badge: 'Roles',
      description: 'Higher tiers open additional benefits and role eligibility such as Community Moderator and Meetup Organizer.'
    }
  ],
  spotlight: [
    {
      title: 'Contributor stats stay gated',
      description: 'Arc House publicly shows the leaderboard, but your own points and badges require sign-in.'
    },
    {
      title: 'Agentic economy is a major theme',
      description: 'Current public content and events heavily feature agentic commerce, agent banking, and nanopayment-based systems.'
    },
    {
      title: 'Tier path is finally clearer',
      description: 'The Architects docs now clearly spell out Tier 0 at registration and Tier 1 at 500 points with opt-in.'
    }
  ]
};

const els = {
  walletInput: document.getElementById('walletInput'),
  emailInput: document.getElementById('emailInput'),
  analyzeBtn: document.getElementById('analyzeBtn'),
  profileForm: document.getElementById('profileForm'),
  latestBlock: document.getElementById('latestBlock'),
  networkBlock: document.getElementById('networkBlock'),
  gasPrice: document.getElementById('gasPrice'),
  lastRefresh: document.getElementById('lastRefresh'),
  balanceValue: document.getElementById('balanceValue'),
  txCountValue: document.getElementById('txCountValue'),
  scoreValue: document.getElementById('scoreValue'),
  walletTypeValue: document.getElementById('walletTypeValue'),
  rpcStatusText: document.getElementById('rpcStatusText'),
  loadingBar: document.getElementById('loadingBar'),
  activityList: document.getElementById('activityList'),
  activityNote: document.getElementById('activityNote'),
  viewWalletTag: document.getElementById('viewWalletTag'),
  liveModeTag: document.getElementById('liveModeTag'),
  rpcEndpoint: document.getElementById('rpcEndpoint'),
  useDemoAddress: document.getElementById('useDemoAddress'),
  copySnapshot: document.getElementById('copySnapshot'),
  quickWalletLink: document.getElementById('quickWalletLink'),
  identityWallet: document.getElementById('identityWallet'),
  identityEmail: document.getElementById('identityEmail'),
  identityStatus: document.getElementById('identityStatus'),
  identityProof: document.getElementById('identityProof'),
  identityPoints: document.getElementById('identityPoints'),
  identityTier: document.getElementById('identityTier'),
  identityBadges: document.getElementById('identityBadges'),
  identityEvents: document.getElementById('identityEvents'),
  readinessScore: document.getElementById('readinessScore'),
  communityModeValue: document.getElementById('communityModeValue'),
  communityModeLabel: document.getElementById('communityModeLabel'),
  identityNote: document.getElementById('identityNote'),
  communityFeed: document.getElementById('communityFeed'),
  communityTimeline: document.getElementById('communityTimeline'),
  resourceGrid: document.getElementById('resourceGrid'),
  spotlightPanel: document.getElementById('spotlightPanel'),
  journeyGrid: document.getElementById('journeyGrid'),
  journeyProgressFill: document.getElementById('journeyProgressFill'),
  journeyPercent: document.getElementById('journeyPercent'),
  journeySummary: document.getElementById('journeySummary'),
  journeyStatusTag: document.getElementById('journeyStatusTag'),
  eventGrid: document.getElementById('eventGrid'),
  signInModal: document.getElementById('signInModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  openSignInModal: document.getElementById('openSignInModal'),
  openSignInModalInline: document.getElementById('openSignInModalInline'),
  openSignInModalHero: document.getElementById('openSignInModalHero'),
  modalWalletValue: document.getElementById('modalWalletValue'),
  modalEmailValue: document.getElementById('modalEmailValue'),
  modalReadinessValue: document.getElementById('modalReadinessValue'),
  modalNextStepValue: document.getElementById('modalNextStepValue'),
  copyModalPrep: document.getElementById('copyModalPrep')
};

const provider = new ethers.JsonRpcProvider(CONFIG.rpcUrl, {
  name: CONFIG.networkName,
  chainId: CONFIG.chainId
}, {
  staticNetwork: true
});

const activityIcons = {
  swap: '⇄',
  bridge: '⇢',
  transfer: '◎',
  contract: '◇',
  stake: '◌',
  mint: '✦',
  deploy: '⬡',
  default: '•'
};

let currentProfile = {
  wallet: '',
  email: '',
  balance: '--',
  txCount: '--',
  score: '--',
  walletType: '--'
};

function abbreviate(value, front = 6, back = 4) {
  if (!value) return '--';
  if (value.length <= front + back) return value;
  return `${value.slice(0, front)}...${value.slice(-back)}`;
}

function formatCompact(value, digits = 2) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '--';
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: digits
  }).format(num);
}

function formatUsdc(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '--';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: num >= 1 ? 2 : 4,
    maximumFractionDigits: num >= 1 ? 4 : 6
  }).format(num);
}

function relativeTime(input) {
  if (!input) return 'Unknown';
  const diff = Date.now() - new Date(input).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function timeUntil(input) {
  const diff = new Date(input).getTime() - Date.now();
  const abs = Math.abs(diff);
  const days = Math.floor(abs / 86400000);
  const hours = Math.floor((abs % 86400000) / 3600000);
  if (diff >= 0) return days > 0 ? `in ${days}d ${hours}h` : `in ${hours}h`;
  return days > 0 ? `${days}d ago` : `${hours}h ago`;
}

function classifyTransaction(tx) {
  const method = (tx.functionName || tx.method || '').toLowerCase();
  const input = (tx.input || '').toLowerCase();
  const value = Number(tx.value || 0);

  if (method.includes('swap')) return { type: 'Swap', icon: activityIcons.swap, tag: 'tag-primary' };
  if (method.includes('bridge') || method.includes('deposit') || method.includes('withdraw')) return { type: 'Bridge', icon: activityIcons.bridge, tag: 'tag-accent' };
  if (method.includes('stake') || method.includes('unstake') || method.includes('liquidity')) return { type: 'Liquidity', icon: activityIcons.stake, tag: 'tag-warning' };
  if (method.includes('mint')) return { type: 'Mint', icon: activityIcons.mint, tag: 'tag-success' };
  if (!tx.to) return { type: 'Deploy', icon: activityIcons.deploy, tag: 'tag-warning' };
  if (value > 0 || input === '0x') return { type: 'Transfer', icon: activityIcons.transfer, tag: 'tag-success' };
  return { type: 'Contract call', icon: activityIcons.contract, tag: 'tag-primary' };
}

function computeScore({ balance, txCount, recentCount, uniqueTargets, isContract }) {
  const balanceScore = Math.min(Math.floor(balance * 8), 40);
  const txScore = Math.min(txCount * 4, 120);
  const recentScore = Math.min(recentCount * 6, 60);
  const diversityScore = Math.min(uniqueTargets * 5, 40);
  const contractPenalty = isContract ? 0 : 10;
  return balanceScore + txScore + recentScore + diversityScore + contractPenalty;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function calculateReadiness(wallet, email) {
  let score = 0;
  if (ethers.isAddress(wallet)) score += 60;
  if (isValidEmail(email)) score += 40;
  return score;
}

function communityModeLabel(wallet, email) {
  const hasWallet = ethers.isAddress(wallet);
  const hasEmail = isValidEmail(email);
  if (hasWallet && hasEmail) return 'Wallet + email';
  if (hasWallet) return 'Wallet only';
  if (hasEmail) return 'Email only';
  return 'Awaiting input';
}

function nextStepLabel(wallet, email) {
  const hasWallet = ethers.isAddress(wallet);
  const hasEmail = isValidEmail(email);
  if (!hasWallet && !hasEmail) return 'Add wallet and email';
  if (hasWallet && !hasEmail) return 'Add email for Arc House handoff';
  if (!hasWallet && hasEmail) return 'Add wallet for Arc intelligence';
  return 'Open Arc House and sign in';
}

function loadSavedProfile() {
  const saved = localStorage.getItem(CONFIG.storageKey);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.wallet) els.walletInput.value = parsed.wallet;
    if (parsed.email) els.emailInput.value = parsed.email;
  } catch {}
}

function persistProfile() {
  const payload = {
    wallet: els.walletInput.value.trim(),
    email: els.emailInput.value.trim()
  };
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(payload));
}

function updateIdentity(wallet = '', email = '') {
  const readiness = calculateReadiness(wallet, email);
  const mode = communityModeLabel(wallet, email);

  els.identityWallet.textContent = ethers.isAddress(wallet) ? abbreviate(wallet, 8, 6) : 'No valid wallet yet';
  els.identityEmail.textContent = isValidEmail(email) ? email : 'Optional';
  els.identityStatus.textContent = isValidEmail(email) ? 'Ready to continue to Arc House sign-in' : 'Add email or continue with wallet only';
  els.identityProof.textContent = isValidEmail(email) ? 'Prepared locally in ArcLume' : 'Not verified';
  els.identityPoints.textContent = 'Login required';
  els.identityTier.textContent = 'Login required';
  els.identityBadges.textContent = 'Login required';
  els.identityEvents.textContent = 'Login required';
  els.readinessScore.textContent = `${readiness}%`;
  els.communityModeValue.textContent = mode;
  els.communityModeLabel.textContent = mode;
  els.identityNote.textContent = isValidEmail(email)
    ? 'Your email is ready inside ArcLume. Continue to Arc House sign-in when you want private community details like points, badges, and event history.'
    : 'Add an email for a smoother Arc House handoff. Private community details still require Arc House sign-in.';

  updateJourney(wallet, email);
  updateModalSummary(wallet, email);
}

function updateJourney(wallet = '', email = '') {
  const hasWallet = ethers.isAddress(wallet);
  const hasEmail = isValidEmail(email);
  const readiness = calculateReadiness(wallet, email);

  const steps = [
    {
      title: 'Connect your Arc wallet input',
      description: 'Enter a valid Arc-compatible wallet so ArcLume can load live balance, nonce, type, and activity.',
      done: hasWallet,
      action: hasWallet ? 'Done' : 'Needed now'
    },
    {
      title: 'Add your Arc House email',
      description: 'Email makes the Arc House handoff cleaner and gives ArcLume a stronger profile mode.',
      done: hasEmail,
      action: hasEmail ? 'Done' : 'Recommended'
    },
    {
      title: 'Open Arc House and sign in',
      description: 'Use Arc House for personal points, badges, contribution history, and login-gated profile details.',
      done: hasWallet && hasEmail,
      action: hasWallet && hasEmail ? 'Ready now' : 'Prepare first'
    },
    {
      title: 'Work toward Tier 1 Architect',
      description: 'The public Architect docs show Tier 1 starts at 500 points after opting in.',
      done: false,
      action: 'Future step'
    }
  ];

  els.journeyGrid.innerHTML = steps.map((step, index) => `
    <article class="journey-step ${step.done ? 'done' : 'pending'}">
      <div class="step-top">
        <div class="step-index">${index + 1}</div>
        <span class="tag ${step.done ? 'tag-success' : 'tag-muted'}">${step.action}</span>
      </div>
      <h4>${step.title}</h4>
      <p>${step.description}</p>
    </article>
  `).join('');

  els.journeyProgressFill.style.width = `${readiness}%`;
  els.journeyPercent.textContent = `${readiness}%`;
  els.journeySummary.textContent = nextStepLabel(wallet, email);
  els.journeyStatusTag.textContent = readiness >= 100 ? 'Ready for Arc House' : readiness >= 60 ? 'Almost ready' : 'Start here';
}

async function refreshNetworkPanel() {
  try {
    const [network, blockNumber, feeData] = await Promise.all([
      provider.getNetwork(),
      provider.getBlockNumber(),
      provider.getFeeData()
    ]);

    els.latestBlock.textContent = formatCompact(blockNumber, 1);
    els.networkBlock.textContent = formatCompact(blockNumber, 1);
    els.rpcStatusText.textContent = `${network.name || CONFIG.networkName} online`;
    els.gasPrice.textContent = feeData.gasPrice ? `${ethers.formatUnits(feeData.gasPrice, 'gwei')} gwei` : 'Unavailable';
    els.lastRefresh.textContent = new Date().toLocaleTimeString();
  } catch {
    els.rpcStatusText.textContent = 'Arc RPC unavailable';
    els.latestBlock.textContent = '--';
    els.networkBlock.textContent = '--';
    els.gasPrice.textContent = 'Unavailable';
  }
}

async function fetchExplorerTransactions(address) {
  const url = `${CONFIG.explorerApi}?module=account&action=txlist&address=${address}&sort=desc&page=1&offset=10`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  });

  if (!response.ok) throw new Error(`Explorer request failed with status ${response.status}`);

  const data = await response.json();
  if (!data || !Array.isArray(data.result)) return [];
  return data.result;
}

function setLoading(isLoading) {
  els.analyzeBtn.disabled = isLoading;
  els.analyzeBtn.textContent = isLoading ? 'Loading...' : 'Analyze profile';
  els.loadingBar.classList.toggle('active', isLoading);
}

function renderActivities(transactions, note = '') {
  els.activityNote.style.display = note ? 'block' : 'none';
  els.activityNote.textContent = note;

  if (!transactions.length) {
    els.activityList.innerHTML = '<div class="empty">No recent explorer activity was loaded for this wallet in this browser session.</div>';
    return;
  }

  els.activityList.innerHTML = transactions.map((tx) => {
    const details = classifyTransaction(tx);
    const ts = tx.timeStamp ? new Date(Number(tx.timeStamp) * 1000).toISOString() : null;
    const amount = Number(tx.value || 0) > 0 ? `${formatUsdc(Number(ethers.formatUnits(tx.value || '0', 18)))} USDC` : 'Interaction';
    const methodLabel = tx.functionName && tx.functionName !== '0x' ? tx.functionName : details.type;

    return `
      <article class="activity-item">
        <div class="activity-icon">${details.icon}</div>
        <div class="activity-main">
          <h4>${methodLabel}</h4>
          <p>${abbreviate(tx.hash, 10, 8)} • ${ts ? relativeTime(ts) : 'Unknown time'} • ${amount}</p>
        </div>
        <div class="activity-meta">
          <span class="tag ${details.tag}">${details.type}</span>
          <a href="${CONFIG.explorerUrl}/tx/${tx.hash}" target="_blank" rel="noreferrer" class="text-link">View tx ↗</a>
        </div>
      </article>
    `;
  }).join('');
}

function renderCommunity() {
  els.eventGrid.innerHTML = COMMUNITY_DATA.events.map((item) => `
    <article class="event-card">
      <div class="event-icon">${item.icon}</div>
      <div class="event-main">
        <div class="event-top">
          <h4>${item.title}</h4>
          <span class="tag ${item.urgencyTag}">${item.urgency}</span>
        </div>
        <p>${item.reason}</p>
        <div class="event-keyline">
          <span class="tag tag-primary">${item.badge}</span>
          <span class="tag tag-muted">${item.meta}</span>
          <span class="tag tag-muted">${timeUntil(item.iso)}</span>
        </div>
        <div class="event-detail"><strong>Best for:</strong> ${item.fit}</div>
        <div class="event-links">
          <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">Open event ↗</a>
        </div>
      </div>
    </article>
  `).join('');

  els.communityFeed.innerHTML = COMMUNITY_DATA.feed.map((item) => `
    <article class="community-card">
      <div class="community-icon">${item.icon}</div>
      <div class="community-main">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start; flex-wrap:wrap;">
          <h4>${item.title}</h4>
          <span class="tag ${item.type === 'Content' ? 'tag-accent' : 'tag-primary'}">${item.badge}</span>
        </div>
        <p>${item.description}</p>
        <div class="community-links">
          <span class="tag tag-muted">${item.meta}</span>
          <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">Open ↗</a>
        </div>
      </div>
    </article>
  `).join('');

  els.communityTimeline.innerHTML = COMMUNITY_DATA.timeline.map((item) => `
    <article class="timeline-item">
      <div class="timeline-icon">${item.icon}</div>
      <div class="timeline-main">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start; flex-wrap:wrap;">
          <h4>${item.title}</h4>
          <span class="tag tag-success">${item.badge}</span>
        </div>
        <p>${item.description}</p>
      </div>
    </article>
  `).join('');

  els.resourceGrid.innerHTML = COMMUNITY_DATA.resources.map((item) => `
    <article class="resource-card">
      <div class="resource-icon">${item.icon}</div>
      <div class="resource-main">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <div class="resource-links">
          <a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">Open resource ↗</a>
        </div>
      </div>
    </article>
  `).join('');

  els.spotlightPanel.innerHTML = COMMUNITY_DATA.spotlight.map((item) => `
    <article class="spotlight-card">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </article>
  `).join('');
}

function updateModalSummary(wallet = '', email = '') {
  const readiness = calculateReadiness(wallet, email);
  els.modalWalletValue.textContent = ethers.isAddress(wallet) ? abbreviate(wallet, 8, 6) : 'Not set';
  els.modalEmailValue.textContent = isValidEmail(email) ? email : 'Not set';
  els.modalReadinessValue.textContent = `${readiness}%`;
  els.modalNextStepValue.textContent = nextStepLabel(wallet, email);
}

function openModal() {
  updateModalSummary(els.walletInput.value.trim(), els.emailInput.value.trim());
  els.signInModal.classList.add('is-open');
  els.signInModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  els.signInModal.classList.remove('is-open');
  els.signInModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function resetProfileUI(wallet = '', email = '') {
  updateIdentity(wallet, email);
  currentProfile = { wallet, email, balance: '--', txCount: '--', score: '--', walletType: '--' };
}

async function analyzeProfile(wallet, email) {
  updateIdentity(wallet, email);
  persistProfile();

  if (!ethers.isAddress(wallet)) {
    els.balanceValue.textContent = '--';
    els.txCountValue.textContent = '--';
    els.scoreValue.textContent = '--';
    els.walletTypeValue.textContent = '--';
    els.activityNote.style.display = 'block';
    els.activityNote.textContent = 'Enter a valid wallet address to load live Arc data. Email alone powers profile mode, not onchain metrics.';
    els.activityList.innerHTML = '<div class="empty">Wallet lookup is waiting for a valid Arc-compatible address.</div>';
    currentProfile = { wallet, email, balance: '--', txCount: '--', score: '--', walletType: '--' };
    return;
  }

  setLoading(true);
  const walletUrl = `${CONFIG.explorerUrl}/address/${wallet}`;
  els.viewWalletTag.href = walletUrl;
  els.viewWalletTag.textContent = 'Open in Arcscan';
  els.quickWalletLink.href = walletUrl;
  els.activityList.innerHTML = '<div class="empty">Loading recent activity…</div>';
  els.activityNote.style.display = 'none';

  try {
    const [balanceBn, txCount, code, latestBlock] = await Promise.all([
      provider.getBalance(wallet),
      provider.getTransactionCount(wallet),
      provider.getCode(wallet),
      provider.getBlockNumber()
    ]);

    const balance = Number(ethers.formatUnits(balanceBn, 18));
    const isContract = code && code !== '0x';

    els.balanceValue.textContent = `${formatUsdc(balance)} USDC`;
    els.txCountValue.textContent = formatCompact(txCount, 0);
    els.walletTypeValue.textContent = isContract ? 'Contract' : 'EOA';
    els.latestBlock.textContent = formatCompact(latestBlock, 1);
    els.networkBlock.textContent = formatCompact(latestBlock, 1);
    els.liveModeTag.textContent = 'Live mode';

    let explorerTransactions = [];
    let explorerNote = isValidEmail(email)
      ? 'Wallet data is live. Your email is prepared locally inside ArcLume, and Arc House sign-in remains the next step for private profile fields.'
      : 'Wallet data is live. Add an email for a smoother Arc House handoff. Private profile fields remain login-gated there.';

    try {
      explorerTransactions = await fetchExplorerTransactions(wallet);
      if (!explorerTransactions.length) {
        explorerNote = 'Explorer reached, but no recent transactions were returned for this wallet. Arc House private profile fields still remain behind sign-in.';
      }
    } catch {
      explorerNote = 'Recent activity feed could not be loaded from the explorer in this browser session. Live balance and wallet metrics are still real. Arc House private profile fields still remain behind sign-in.';
      els.liveModeTag.textContent = 'RPC live, explorer limited';
    }

    const uniqueTargets = new Set(explorerTransactions.map(tx => tx.to).filter(Boolean)).size;
    const score = computeScore({
      balance,
      txCount,
      recentCount: explorerTransactions.length,
      uniqueTargets,
      isContract
    });

    els.scoreValue.textContent = formatCompact(score, 0);
    renderActivities(explorerTransactions, explorerNote);
    els.lastRefresh.textContent = new Date().toLocaleTimeString();

    currentProfile = {
      wallet,
      email,
      balance: `${formatUsdc(balance)} USDC`,
      txCount: formatCompact(txCount, 0),
      score: formatCompact(score, 0),
      walletType: isContract ? 'Contract' : 'EOA'
    };
    updateModalSummary(wallet, email);
  } catch (error) {
    console.error(error);
    els.balanceValue.textContent = '--';
    els.txCountValue.textContent = '--';
    els.scoreValue.textContent = '--';
    els.walletTypeValue.textContent = '--';
    els.activityNote.style.display = 'block';
    els.activityNote.textContent = 'Unable to load wallet data right now. Check the address format, then retry.';
    els.activityList.innerHTML = '<div class="empty">Wallet lookup failed. Try again in a moment.</div>';
    currentProfile = { wallet, email, balance: '--', txCount: '--', score: '--', walletType: '--' };
  } finally {
    setLoading(false);
  }
}

async function copyText(text, buttonEl, doneText, revertText) {
  try {
    await navigator.clipboard.writeText(text);
    if (buttonEl) {
      const previous = buttonEl.textContent;
      buttonEl.textContent = doneText;
      setTimeout(() => { buttonEl.textContent = revertText || previous; }, 1500);
    }
  } catch {
    alert(text);
  }
}

function buildSnapshotText() {
  return [
    'ArcLume V5 Snapshot',
    `Wallet: ${currentProfile.wallet || 'Not set'}`,
    `Email: ${currentProfile.email || 'Not set'}`,
    `Balance: ${currentProfile.balance}`,
    `Tx Count: ${currentProfile.txCount}`,
    `Arc Score: ${currentProfile.score}`,
    `Wallet Type: ${currentProfile.walletType}`,
    'Arc House private stats: Login required',
    `Next step: ${nextStepLabel(currentProfile.wallet || '', currentProfile.email || '')}`
  ].join('\n');
}

els.profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const wallet = els.walletInput.value.trim();
  const email = els.emailInput.value.trim();
  analyzeProfile(wallet, email);
});

els.walletInput.addEventListener('input', () => {
  updateIdentity(els.walletInput.value.trim(), els.emailInput.value.trim());
  persistProfile();
  if (ethers.isAddress(els.walletInput.value.trim())) {
    els.quickWalletLink.href = `${CONFIG.explorerUrl}/address/${els.walletInput.value.trim()}`;
  }
});

els.emailInput.addEventListener('input', () => {
  updateIdentity(els.walletInput.value.trim(), els.emailInput.value.trim());
  persistProfile();
});

els.useDemoAddress.addEventListener('click', () => {
  els.walletInput.value = CONFIG.sampleAddress;
  analyzeProfile(CONFIG.sampleAddress, els.emailInput.value.trim());
});

els.copySnapshot.addEventListener('click', () => {
  copyText(buildSnapshotText(), els.copySnapshot, 'Copied snapshot', 'Copy profile snapshot');
});

[els.openSignInModal, els.openSignInModalInline, els.openSignInModalHero].forEach((button) => {
  if (button) button.addEventListener('click', openModal);
});

els.closeModalBtn.addEventListener('click', closeModal);

els.signInModal.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-modal]')) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && els.signInModal.classList.contains('is-open')) closeModal();
});

els.copyModalPrep.addEventListener('click', () => {
  copyText(buildSnapshotText(), els.copyModalPrep, 'Copied prep', 'Copy prep summary');
});

const queryAddress = new URLSearchParams(window.location.search).get('address');
if (queryAddress) els.walletInput.value = queryAddress;

els.rpcEndpoint.textContent = CONFIG.rpcUrl;
renderCommunity();
loadSavedProfile();
if (ethers.isAddress(els.walletInput.value.trim())) {
  els.quickWalletLink.href = `${CONFIG.explorerUrl}/address/${els.walletInput.value.trim()}`;
}
resetProfileUI(els.walletInput.value.trim(), els.emailInput.value.trim());
refreshNetworkPanel();
setInterval(refreshNetworkPanel, 30000);

if (queryAddress && ethers.isAddress(queryAddress)) {
  analyzeProfile(queryAddress, els.emailInput.value.trim());
}
