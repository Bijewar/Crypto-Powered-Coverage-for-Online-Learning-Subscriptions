# CryptoCoverage 🛡️
Decentralized protection for online learning investments - Never lose money on abandoned or low-quality courses again.

## 🏆 Problem & Solution

### The Problem
- $100B+ is spent annually on online courses
- 40-80% of courses are never completed
- Most platforms have restrictive refund policies
- Students lose money on courses that don't meet expectations

### Our Solution
CryptoCoverage introduces a first-of-its-kind decentralized insurance protocol for online learning. Using smart contracts, we provide:
- Risk-free course purchases with up to 100% coverage
- Transparent, immutable claim processing
- Automated payouts
- No centralized insurance provider
## 🌟 Key Features

- **Smart Coverage**: Dynamic pricing based on course completion statistics
- **Instant Claims**: File claims directly through the dApp
- **Token Integration**: Uses ERC20 tokens for seamless payments
- **Cross-Platform**: Works with any online learning platform
- **DAO Governance**: Community-driven claim validation (coming soon)

## 🔗 Contract Address
Ethereum Mainnet: `0x5ACDbe7a088Fbc692831B490128a66C36bc32F27`

## 🛠️ Tech Stack

### Smart Contracts
- Solidity 0.8+
- OpenZeppelin (Ownable, ERC20)
- Hardhat deployment framework

### Frontend
- React with Web3 integration
- MetaMask wallet connection
- Responsive Material UI design
## 📋 Contract Interface

### User Functions
```solidity
function createSubscription(
    uint256 _price,     // Course price
    uint256 _coverageAmount,     // Desired coverage amount
    uint256 _duration    // Coverage duration in days
) external

function fileClaim(uint256 _amount) external

function cancelSubscription() external
```

### Admin Functions
```solidity
function processClaim(
    address _subscriber,     // Claimer address
    uint256 _claimIndex,     // Claim ID
    bool _approved    // Approval status
) external onlyOwner
```

### View Functions
```solidity
function getSubscriptionDetails(address _subscriber)
    external view returns (Subscription memory)

function getClaim(
    address _subscriber,
    uint256 _claimIndex
) external view returns (Claim memory)
```
## 🚀 Quick Start

```bash
git clone [repository-url]
cd cryptocoverage
npm install
npm run dev
```

Connect MetaMask, buy coverage, done!

## 💻 Development

Requirements:
- Node 14+
- npm 6+
- MetaMask

Local setup:
```bash
cp .env.example .env
# Edit .env with your values
npm install
npm run dev
```

Testing:
```bash
npm test
```

## 🌐 Deployment

1. Deploy contract:
```bash
npx hardhat run scripts/deploy.js --network mainnet
```

2. Build frontend:
```bash
npm run build
```

3. Deploy to hosting provider

## 🔒 Security Features

- Role-based access control via OpenZeppelin
- Coverage amount verification
- Safe ERC20 transfer implementation
- Multi-stage claim validation
- Subscription status verification
## 🔄 Future Roadmap

- Multi-chain deployment
- DAO-based governance
- AI-powered fraud detection
- Course provider partnerships
- Mobile app release

## 💪 Competitive Advantages

1. First mover in course coverage space
2. Fully decentralized solution
3. Cross-platform compatibility
4. Low operational costs
5. Transparent claim processing

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Submit pull request

## 📝 License

MIT

---

Built with ❤️ for ETHGlobal Hackathon 2024.
