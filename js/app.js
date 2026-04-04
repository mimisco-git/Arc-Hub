import { ethers } from 'https://cdn.jsdelivr.net/npm/ethers@6.13.5/+esm';

const CONFIG = {
  appName: 'ArcLume',
  networkName: 'Arc Testnet',
  chainId: 5042002,
  rpcUrl: 'https://rpc.testnet.arc.network',
  explorerUrl: 'https://testnet.arcscan.app',
  explorerApi: 'https://testnet.arcscan.app/api',
  communityUrl: 'https://community.arc.network/home',
  sampleAddress: '0x8004A818BFB912233c491871b3d84c89A494BD9e'
};

const COMMUNITY_DATA = {
  events: [
    {
      title: 'ETHGlobal Cannes Hackathon',
      date: '2026-04-03T09:00:00+02:00',
      badge: 'Hackathon',
      icon: '⬡',
      description: 'Arc House lists the ETHGlobal Cannes Hackathon on the current event slate.',
      url: 'https://community.arc.network/home/events/ethglobal-pragma-l7dy3xfft9'
    },
    {
      title: 'Arc Discord Office Hours',
      date: '2026-04-07T17:00:00Z',
      badge: 'Live Q&A',
      icon: '◎',
      description: 'Recurring Arc House office hours focused on ecosystem discussion and builder questions.',
      url: 'https://community.arc.network/home'
    },
    {
      title: 'Arc Discord Office Hours',
      date: '2026-04-14T17:00:00Z',
      badge: 'Community',
      icon: '◌',
      description: 'Second upcoming office hours session currently listed on the Arc House home page.',
      url: 'https://community.arc.network/home'
    },
    {
      title: 'Building Agentic Commerce on Arc: VibeCard',
      date: '2026-04-15T17:00:00Z',
      badge: 'Builder spotlight',
      icon: '✦',
      description: 'Upcoming session focused on agentic commerce building on Arc.',
      url: 'https://community.arc.network/public/events'
    }
  ],
  content: [
    {
      title: 'Tradable joins the Arc Builders Fund: institutional private credit, onchain',
      meta: 'Blog · Apr 2, 2026',
      badge: 'Latest',
      icon: '▣',
      description: 'Tradable is highlighted as expanding institutional private credit onchain with Arc Testnet deployment.',
      url: 'https://community.arc.network/'
    },
    {
      title: 'Event Replay: Building an Agentic Economy on Arc with RSoft Agentic Bank',
      meta: 'Video · Apr 2, 2026',
      badge: 'Replay',
      icon: '▶',
      description: 'Replay centered on identity signals, scoring, treasury management, and atomic settlement for agents.',
      url: 'https://community.arc.network/'
    },
    {
      title: 'Introducing Arc House and the Architects Program',
      meta: 'External content · Mar 31, 2026',
      badge: 'Launch',
      icon: '✧',
      description: 'Introductory content for the Arc community hub and the new Architects program.',
      url: 'https://community.arc.network/home/events/introducing-arc-house-and-architects-hyp33duk9f?autoRsvp=true'
    },
    {
      title: 'Architects collection and featured resources',
      meta: 'Resources · current',
      badge: 'Guides',
      icon: '◫',
      description: 'Arc House also highlights the Architect overview, tiers, roles, and contribution opportunity resources.',
      url: 'https://community.arc.network/public/content?category=resource'
    }
  ],
  resources: [
    {
      title: 'Architects: Program Overview',
      icon: '◎',
      description: 'Overview of the new Architects program and how recognition works.',
      url: 'https://community.arc.network/home/resources/architects-overview'
    },
    {
      title: 'Architects: Tiers & Benefits',
      icon: '◌',
      description: 'Public breakdown of point tiers and benefits, including Tier 0 and Tier 1 thresholds.',
      url: 'https://community.arc.network/home/resources/architects-tiers-and-benefits'
    },
    {
      title: 'Architects: Roles',
      icon: '⬡',
      description: 'Shows how different Architect roles open up as contributors progress through tiers.',
      url: 'https://community.arc.network/home/resources/architects-roles'
    },
    {
      title: 'Contribution Rules',
      icon: '✦',
      description: 'Public rules for points and badges, including event speaking, hosting, and registration activities.',
      url: 'https://community.arc.network/public/contributors/contribution-rules'
    }
  ],
  timeline: [
    {
      title: 'Create an Arc House account',
      icon: '①',
      badge: 'Tier 0',
      description: 'Arc House users begin at Tier 0 status after registering an account.'
    },
    {
      title: 'Contribute through events, content, and engagement',
      icon: '②',
      badge: 'Earn points',
      description: 'Public contribution rules describe points for activities like event speaking, hosting, and registration.'
    },
    {
      title: 'Reach 500 points and opt in',
      icon: '③',
      badge: 'Tier 1',
      description: 'Tier 1 Architect status begins at 500 points after opting in to the program.'
    },
    {
      title: 'Grow into higher tiers and roles',
      icon: '④',
      badge: 'Roles',
      description: 'Public role docs describe later eligibility for roles like Community Moderator, Meetup Organizer, Technical Speaker, and Regional Lead.'
    }
  ]
};

const els = {
  walletInput: document.getElementById('walletInput'),
  analyzeBtn: document.getElementById('analyzeBtn'),
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
  copyNetworkConfig: document.getElementById('copyNetworkConfig'),
  identityWallet: document.getElementById('identityWallet'),
  identityEmail: document.getElementById('identityEmail'),
  identityPoints: document.getElementById('identityPoints'),
  identityTier: document.getElementById('identityTier'),
  identityBadges: document.getElementById('identityBadges'),
  identityEvents: document.getElementById('identityEvents'),
  communityFeed: document.getElementById('communityFeed'),
  communityTimeline: document.getElementById('communityTimeline'),
  resourceGrid: document.getElementById('resourceGrid')
};

const provider = new ethers.JsonRpcProvider(
  CONFIG.rpcUrl,
  { name: CONFIG.networkName, chainId: CONFIG.chainId },
  { staticNetwork: true }
);

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

function setLoading(isLoading) {
  els.analyzeBtn.disabled = isLoading;
  els.analyzeBtn.textContent = isLoading ? 'Loading...' : 'Analyze wallet';
  els.loadingBar.classList.toggle('active', isLoading);
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
  } catch (error) {
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

  if (!response.ok) {
    throw new Error(`Explorer request failed with status ${response.status}`);
  }

  const data = await response.json();
  if (!data || !Array.isArray(data.result)) return [];
  return data.result;
}

function renderActivities(transactions, note = '') {
  els.activityNote.classList.toggle('hidden', !note);
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
  const communityCards = [
    ...COMMUNITY_DATA.events.map((item) => ({
      title: item.title,
      icon: item.icon,
      badge: item.badge,
      description: item.description,
      meta: `${new Date(item.date).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} • ${timeUntil(item.date)}`,
      url: item.url,
      type: 'Event'
    })),
    ...COMMUNITY_DATA.content.map((item) => ({
      title: item.title,
      icon: item.icon,
      badge: item.badge,
      description: item.description,
      meta: item.meta,
      url: item.url,
      type: 'Content'
    }))
  ];

  els.communityFeed.innerHTML = communityCards.map((item) => `
    <article class="community-card">
      <div class="community-icon">${item.icon}</div>
      <div class="community-main">
        <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start; flex-wrap:wrap;">
          <h4>${item.title}</h4>
          <span class="tag ${item.type === 'Event' ? 'tag-primary' : 'tag-accent'}">${item.badge}</span>
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
}

function resetIdentity(address = '') {
  els.identityWallet.textContent = address ? abbreviate(address, 8, 6) : 'Not checked yet';
  els.identityEmail.textContent = 'Not publicly exposed';
  els.identityPoints.textContent = 'Login required';
  els.identityTier.textContent = 'Login required';
  els.identityBadges.textContent = 'Login required';
  els.identityEvents.textContent = 'Login required';
}

async function analyzeWallet(address) {
  if (!ethers.isAddress(address)) {
    alert('Please enter a valid EVM wallet address.');
    return;
  }

  setLoading(true);
  resetIdentity(address);
  els.viewWalletTag.href = `${CONFIG.explorerUrl}/address/${address}`;
  els.viewWalletTag.textContent = 'Open wallet in Arcscan';
  els.activityList.innerHTML = '<div class="empty">Loading recent activity…</div>';
  els.activityNote.classList.add('hidden');

  try {
    const [balanceBn, txCount, code, latestBlock] = await Promise.all([
      provider.getBalance(address),
      provider.getTransactionCount(address),
      provider.getCode(address),
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
    let explorerNote = 'Arc House profile fields remain private in wallet-only mode. Use Arcscan for wallet activity and Arc House sign-in for personal community details when available.';

    try {
      explorerTransactions = await fetchExplorerTransactions(address);
      if (!explorerTransactions.length) {
        explorerNote = 'Explorer reached, but no recent transactions were returned for this wallet. Arc House personal fields still remain login-gated.';
      }
    } catch (error) {
      explorerNote = 'Recent activity feed could not be loaded from the explorer in this browser session. Live balance and wallet metrics are still real. Arc House personal fields remain login-gated.';
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
  } catch (error) {
    console.error(error);
    els.balanceValue.textContent = '--';
    els.txCountValue.textContent = '--';
    els.scoreValue.textContent = '--';
    els.walletTypeValue.textContent = '--';
    els.activityNote.classList.remove('hidden');
    els.activityNote.textContent = 'Unable to load wallet data right now. Check the address format, then retry.';
    els.activityList.innerHTML = '<div class="empty">Wallet lookup failed. Try again in a moment.</div>';
  } finally {
    setLoading(false);
  }
}

async function copyNetworkConfig() {
  const text = [
    `Network Name: ${CONFIG.networkName}`,
    `RPC URL: ${CONFIG.rpcUrl}`,
    `Chain ID: ${CONFIG.chainId}`,
    `Currency Symbol: USDC`,
    `Explorer URL: ${CONFIG.explorerUrl}`
  ].join('\n');

  try {
    await navigator.clipboard.writeText(text);
    els.copyNetworkConfig.textContent = 'Copied network config';
    setTimeout(() => { els.copyNetworkConfig.textContent = 'Copy Arc network config'; }, 1600);
  } catch {
    alert(text);
  }
}

els.analyzeBtn.addEventListener('click', () => analyzeWallet(els.walletInput.value.trim()));
els.walletInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') analyzeWallet(els.walletInput.value.trim());
});
els.useDemoAddress.addEventListener('click', () => {
  els.walletInput.value = CONFIG.sampleAddress;
  analyzeWallet(CONFIG.sampleAddress);
});
els.copyNetworkConfig.addEventListener('click', copyNetworkConfig);

const queryAddress = new URLSearchParams(window.location.search).get('address');
if (queryAddress) els.walletInput.value = queryAddress;

els.rpcEndpoint.textContent = CONFIG.rpcUrl;
renderCommunity();
resetIdentity();
refreshNetworkPanel();
setInterval(refreshNetworkPanel, 30000);

if (queryAddress && ethers.isAddress(queryAddress)) {
  analyzeWallet(queryAddress);
}
