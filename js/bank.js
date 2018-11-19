let bankBytecode =
"60806040526000600281905560038190558054600160a060020a031916331790556105d78061002f6000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632e1a7d4d811461009257806341c0e1b5146100ac5780637b83b50b146100c1578063a3b97f5b146100e8578063a9059cbb146100f0578063c751c69614610121578063d0e30db01461012c578063d96a094a14610134575b600080fd5b34801561009e57600080fd5b506100aa60043561013f565b005b3480156100b857600080fd5b506100aa61024f565b3480156100cd57600080fd5b506100d66102f0565b60408051918252519081900360200190f35b6100aa610303565b3480156100fc57600080fd5b506100aa73ffffffffffffffffffffffffffffffffffffffff6004351660243561036c565b6100aa600435610474565b6100aa61050b565b6100aa600435610563565b33600090815260016020526040902054670de0b6b3a76400008202908111156101c957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b604051339082156108fc029083906000818181858888f193505050501580156101f6573d6000803e3d6000fd5b5033600081815260016020908152604091829020805485900390558151858152429181019190915281517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab929181900390910190a25050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f796f7520617265206e6f74206f776e6572000000000000000000000000000000604482015290519081900360640190fd5b60005473ffffffffffffffffffffffffffffffffffffffff16ff5b3360009081526001602052604090205490565b6003805460028054336000818152600160209081526040808320805460649887029890980490950190960190935592839055919093558151428152915190927f76d502edfdac5a3945442e4b9c9de737a4e3b5b75899c6faa91426e166860d06928290030190a2565b33600090815260016020526040902054670de0b6b3a76400008202908111156103f657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f796f75722062616c616e63657320617265206e6f7420656e6f75676800000000604482015290519081900360640190fd5b3360008181526001602090815260408083208054869003905573ffffffffffffffffffffffffffffffffffffffff8716808452928190208054860190558051868152429281019290925280519293927fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69281900390910190a3505050565b6064600354826003540360640281151561048a57fe5b0460646003546002540281151561049d57fe5b04028115156104a857fe5b60028054336000818152600160209081526040808320805498909704909401909601909455918390556003929092558151428152915190927f525375bf85751cd29d221fb31a37688b6c3714664c1d0db57cf7cc382dc85f58928290030190a250565b336000818152600160209081526040918290208054349081019091558251908152429181019190915281517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae2660929181900390910190a2565b346002819055600382905560408051918252426020830152805133927f02eaa22fbb9062b92c96f349b0e3103065eb20fcdd0de3ea47072c85492cdab092908290030190a2505600a165627a7a723058200c7a44f5fa657984d5179678f4dac0c8a48a6ce6096feed0efa3085a098979550029";
let bankAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "m",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "uint256"
			}
		],
		"name": "buy_n_OK",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buy_OK",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "etherValue",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "DepositEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "WithdrawEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "TransferEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BuyEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Buy_OK",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Buy_month_OK",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBankBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
