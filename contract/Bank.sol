pragma solidity ^0.4.23;

contract Bank {
	// 此合約的擁有者
    address private owner;

	// 儲存所有會員的餘額
    mapping (address => uint256) private balance;

    uint money = 0;
    uint month = 0;

	// 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
    event BuyEvent(address indexed from, uint256 value, uint256 timestamp);
    event Buy_OK(address indexed from, uint256 timestamp);
    event Buy_month_OK(address indexed from, uint256 timestamp);
    
    
    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }
    
	// 建構子
    constructor() public payable {
        owner = msg.sender;
    }

	// 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }
    
    //定存
    function buy(uint m) public payable {
        money = msg.value;
        month = m;
        emit BuyEvent(msg.sender, msg.value, now);
        
    }
    
    //合約期滿
    function buy_OK() public payable {
        balance[msg.sender] += (money + money*month/100);
        money=0;
        month=0;
        emit Buy_OK(msg.sender,now);
        
    }
    
    //提早解約
    function buy_n_OK(uint n) public payable {
        balance[msg.sender] += (money + money*month/100*((month-n)*100/month)/100);
        money=0;
        month=0;
        emit Buy_month_OK(msg.sender,now);
        
    }
    

	// 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

	// 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }
    
    
    

	// 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }

    function kill() public isOwner {
        selfdestruct(owner);
    }
}