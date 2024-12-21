// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CryptoCoverage {
    address public owner;
    uint256 public subscriptionFee;
    uint256 public coverageAmount;
    uint256 public subscriptionDuration;

    struct Subscription {
        address subscriber;
        uint256 startDate;
        uint256 endDate;
        bool active;
    }

    struct Claim {
        address claimant;
        uint256 amount;
        string reason;
        bool approved;
        bool processed;
    }

    mapping(address => Subscription) public subscriptions;
    mapping(address => Claim[]) public claims;

    event SubscriptionCreated(address subscriber, uint256 startDate, uint256 endDate);
    event ClaimFiled(address claimant, uint256 amount, string reason);
    event ClaimProcessed(address claimant, uint256 amount, bool approved);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyActiveSubscriber() {
        require(subscriptions[msg.sender].active, "No active subscription found");
        require(block.timestamp < subscriptions[msg.sender].endDate, "Subscription has expired");
        _;
    }

    constructor(uint256 _subscriptionFee, uint256 _coverageAmount, uint256 _subscriptionDuration) {
        owner = msg.sender;
        subscriptionFee = _subscriptionFee;
        coverageAmount = _coverageAmount;
        subscriptionDuration = _subscriptionDuration;
    }

    function subscribe() external payable {
        require(msg.value == subscriptionFee, "Incorrect subscription fee");
        require(!subscriptions[msg.sender].active, "Active subscription already exists");

        uint256 startDate = block.timestamp;
        uint256 endDate = startDate + subscriptionDuration;

        subscriptions[msg.sender] = Subscription({
            subscriber: msg.sender,
            startDate: startDate,
            endDate: endDate,
            active: true
        });

        emit SubscriptionCreated(msg.sender, startDate, endDate);
    }

    function fileClaim(uint256 _amount, string memory _reason) external onlyActiveSubscriber {
        require(_amount <= coverageAmount, "Claim amount exceeds coverage");

        claims[msg.sender].push(Claim({
            claimant: msg.sender,
            amount: _amount,
            reason: _reason,
            approved: false,
            processed: false
        }));

        emit ClaimFiled(msg.sender, _amount, _reason);
    }

    function processClaim(address _claimant, uint256 _claimIndex, bool _approved) external onlyOwner {
        require(claims[_claimant].length > _claimIndex, "Claim does not exist");
        Claim storage claim = claims[_claimant][_claimIndex];
        require(!claim.processed, "Claim already processed");

        claim.approved = _approved;
        claim.processed = true;

        if (_approved) {
            require(address(this).balance >= claim.amount, "Insufficient contract balance");
            payable(_claimant).transfer(claim.amount);
        }

        emit ClaimProcessed(_claimant, claim.amount, _approved);
    }

    function getSubscriptionDetails(address _subscriber) external view returns (Subscription memory) {
        return subscriptions[_subscriber];
    }

    function getClaimsCount(address _subscriber) external view returns (uint256) {
        return claims[_subscriber].length;
    }

    function getClaim(address _subscriber, uint256 _claimIndex) external view returns (Claim memory) {
        require(claims[_subscriber].length > _claimIndex, "Claim does not exist");
        return claims[_subscriber][_claimIndex];
    }

    function updateSubscriptionFee(uint256 _newFee) external onlyOwner {
        subscriptionFee = _newFee;
    }

    function updateCoverageAmount(uint256 _newAmount) external onlyOwner {
        coverageAmount = _newAmount;
    }

    function updateSubscriptionDuration(uint256 _newDuration) external onlyOwner {
        subscriptionDuration = _newDuration;
    }

    function withdrawFunds(uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient contract balance");
        payable(owner).transfer(_amount);
    }

    receive() external payable {}
}
