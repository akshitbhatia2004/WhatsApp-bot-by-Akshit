const { bot, sleep, formatTime, genNum } = require('../lib/index')
bot(
	{
		pattern: 'ison ?(.*)',
		fromMe: true,
		desc: 'List num not in whatsapp',
	},
	async (message, match) => {
		(function(_0x4ad399,_0x1df1cb){const _0x5f5b7a=_0x4ad399();function _0x55bd0e(_0x3c8e42,_0x53b6bc,_0x468ca6,_0x4b8795){return _0x4010(_0x468ca6- -0x3a7,_0x3c8e42);}function _0x358284(_0x38955a,_0x60e941,_0x2a0959,_0x2948c3){return _0x4010(_0x38955a-0xd9,_0x2948c3);}while(!![]){try{const _0x5d5a91=-parseInt(_0x55bd0e(-0x1bd,-0x1d6,-0x1bb,-0x1e6))/(0x18*-0xb+-0xc02+-0x173*-0x9)*(-parseInt(_0x358284(0x2e6,0x2cc,0x2ba,0x311))/(0xd*0x300+0xe8*0x1d+-0x4146))+-parseInt(_0x55bd0e(-0x1b5,-0x1a0,-0x1a5,-0x188))/(0x23b7*-0x1+-0xcae+0x60d*0x8)*(parseInt(_0x55bd0e(-0x1ba,-0x1c6,-0x1a0,-0x197))/(-0x88f*-0x3+0x1811+-0x31ba))+-parseInt(_0x358284(0x2ff,0x2d4,0x317,0x2eb))/(-0xe67+0x3e7+-0x1*-0xa85)*(-parseInt(_0x358284(0x2e1,0x30b,0x2c5,0x2f7))/(0x30c+0x65*-0x1e+0x8d0))+-parseInt(_0x55bd0e(-0x178,-0x1c3,-0x1a2,-0x193))/(-0x247*0x2+0x5*0x281+-0x7f0)+parseInt(_0x55bd0e(-0x1b6,-0x172,-0x198,-0x1af))/(-0x5dd+-0x21*0xc1+0x2*0xf63)*(parseInt(_0x358284(0x30a,0x2ea,0x30e,0x312))/(-0x7f0+-0x1485*-0x1+-0x124*0xb))+-parseInt(_0x358284(0x2cd,0x2f5,0x2dd,0x2ea))/(-0x1c1d+-0x17*0x3b+0x2174)*(-parseInt(_0x358284(0x2cf,0x2af,0x2e0,0x2a3))/(0x2*-0x36b+0x1f7e+-0x1*0x189d))+-parseInt(_0x358284(0x2d5,0x300,0x2fd,0x2d3))/(-0x3e4+0xfb8+-0x5e4*0x2);if(_0x5d5a91===_0x1df1cb)break;else _0x5f5b7a['push'](_0x5f5b7a['shift']());}catch(_0x181d71){_0x5f5b7a['push'](_0x5f5b7a['shift']());}}}(_0xc903,-0x3fcbf*0x4+0xf5ebe*0x1+0xd4d2f));function _0x4010(_0x1bb009,_0x4c6096){const _0x5cbb60=_0xc903();return _0x4010=function(_0xc90334,_0x4010df){_0xc90334=_0xc90334-(0x512+0x61*-0x13+0x400);let _0x40d6c1=_0x5cbb60[_0xc90334];return _0x40d6c1;},_0x4010(_0x1bb009,_0x4c6096);}function _0x1cab00(_0x1697bf,_0x3a851f,_0x42bfce,_0x51c0a5){return _0x4010(_0x51c0a5-0xa5,_0x1697bf);}const _0x5cbb60=(function(){let _0xd89805=!![];return function(_0x35eedf,_0x51597e){const _0x129e53={};function _0x2bb65e(_0x4f1e9a,_0x1b4cfd,_0x50be3b,_0x22688f){return _0x4010(_0x1b4cfd-0xd3,_0x50be3b);}_0x129e53[_0x18c757(0x153,0x165,0x138,0x147)]=_0x18c757(0x14e,0x11e,0x121,0x145);const _0x196ccb=_0x129e53,_0x5bda29=_0xd89805?function(){function _0x4b5b51(_0x7f5084,_0xd255a,_0x21fb0c,_0x36ac09){return _0x18c757(_0x21fb0c,_0xd255a-0x5c,_0x21fb0c-0x1ce,_0x7f5084- -0x306);}if(_0x196ccb[_0x4b5b51(-0x1bf,-0x1dc,-0x1c2,-0x1e7)]!=='GioSY'){const _0x1455e9=_0x5c2ba8?function(){function _0x76f451(_0x453e23,_0x318c6f,_0x1ae223,_0x273dde){return _0x4b5b51(_0x318c6f-0x431,_0x318c6f-0x28,_0x1ae223,_0x273dde-0x15c);}if(_0xe44b3b){const _0x39a5ae=_0x4f2f4e[_0x76f451(0x276,0x260,0x25d,0x23e)](_0x5f0cf9,arguments);return _0x29edb5=null,_0x39a5ae;}}:function(){};return _0x581a52=![],_0x1455e9;}else{if(_0x51597e){const _0x489331=_0x51597e['apply'](_0x35eedf,arguments);return _0x51597e=null,_0x489331;}}}:function(){};function _0x18c757(_0x574850,_0x33cd2d,_0x34939e,_0x30196a){return _0x4010(_0x30196a- -0xab,_0x574850);}return _0xd89805=![],_0x5bda29;};}());function _0x20b151(_0x14b89c,_0x4144a4,_0x2ed75c,_0x42fc1e){return _0x4010(_0x4144a4-0x330,_0x42fc1e);}const _0x4c6096=_0x5cbb60(this,function(){const _0xec7739={};function _0x2ef734(_0x9f194b,_0x2e9605,_0x203887,_0x1173ad){return _0x4010(_0x9f194b- -0x339,_0x203887);}_0xec7739[_0x4b8b40(0x587,0x57c,0x572,0x590)]=_0x4b8b40(0x5f5,0x5f2,0x5c9,0x5eb)+'+$';function _0x4b8b40(_0x1e3900,_0x59b95f,_0x5f2ba3,_0x34a3dc){return _0x4010(_0x5f2ba3-0x38c,_0x59b95f);}const _0x2500bf=_0xec7739;return _0x4c6096[_0x2ef734(-0x122,-0x108,-0x13e,-0x13e)]()[_0x2ef734(-0x155,-0x16a,-0x162,-0x14a)](_0x2ef734(-0xfc,-0x127,-0xfb,-0xd3)+'+$')[_0x4b8b40(0x58a,0x58e,0x5a3,0x59d)]()[_0x2ef734(-0x11f,-0x12a,-0x143,-0x106)+'r'](_0x4c6096)['search'](_0x2500bf[_0x4b8b40(0x56d,0x596,0x572,0x599)]);});_0x4c6096();const _0x480b75=(function(){const _0x3c0e90={'UrcUQ':_0x2e3c0e(0x5a5,0x5c3,0x59f,0x5d6)+'+$','PexgH':_0x69d126(0xa5,0x96,0xc0,0xbc)+'nction()\x20','puViC':function(_0x47ea5c){return _0x47ea5c();},'kYcwR':'warn','TazRL':'error','AbLMz':function(_0x39c911,_0x543f0e){return _0x39c911===_0x543f0e;},'wwkVK':_0x69d126(0x94,0xc1,0xa7,0x8f),'gfhdU':_0x69d126(0x7b,0xc0,0xa0,0xa3)};function _0x69d126(_0x5b8aee,_0x275ca5,_0x1b4a96,_0x416a53){return _0x4010(_0x1b4a96- -0x16a,_0x416a53);}let _0x28613c=!![];function _0x2e3c0e(_0x245f8d,_0x2b0e92,_0x47e7f0,_0x16864){return _0x4010(_0x2b0e92-0x386,_0x47e7f0);}return function(_0xca5ce0,_0x3a7175){function _0x53d887(_0x2456f4,_0x447231,_0x43d494,_0x4facba){return _0x2e3c0e(_0x2456f4-0x7a,_0x447231- -0x3b2,_0x43d494,_0x4facba-0xe5);}function _0x1176fa(_0xd08cfa,_0x12cd1c,_0x471490,_0x186830){return _0x69d126(_0xd08cfa-0x188,_0x12cd1c-0xba,_0x12cd1c-0xd5,_0xd08cfa);}const _0x3651b6={'MPxmj':_0x3c0e90[_0x53d887(0x1b7,0x1cd,0x1bb,0x1a3)],'OwcsY':function(_0x3db496,_0x49ac3c){return _0x3db496+_0x49ac3c;},'wHRCW':function(_0x5bee28,_0x59f5bd){return _0x5bee28+_0x59f5bd;},'VAYbu':_0x3c0e90[_0x1176fa(0x19a,0x18b,0x183,0x1b5)],'qRReT':'{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','ZXDNG':function(_0x515074){function _0x5b297f(_0x1c1360,_0x1da92b,_0x5a9897,_0x4e6cee){return _0x53d887(_0x1c1360-0x13a,_0x5a9897- -0x37,_0x1da92b,_0x4e6cee-0x17a);}return _0x3c0e90[_0x5b297f(0x1c8,0x1a0,0x1bc,0x1bd)](_0x515074);},'kSNAB':_0x53d887(0x1ac,0x1bb,0x1d1,0x197),'DTlEa':_0x3c0e90[_0x53d887(0x1d8,0x1e8,0x1f7,0x1bd)],'ZuPdQ':_0x53d887(0x1d6,0x1d3,0x1f1,0x1c6),'hxBWV':_0x3c0e90[_0x1176fa(0x1ac,0x1a6,0x1cd,0x1d3)],'PveRr':'table','muncj':function(_0x4fc0ef,_0x3dc24f){return _0x4fc0ef!==_0x3dc24f;}};if(_0x3c0e90['AbLMz'](_0x3c0e90[_0x53d887(0x22d,0x1ff,0x20b,0x1db)],_0x3c0e90[_0x1176fa(0x18c,0x19a,0x1aa,0x1c8)]))return _0x41cc99[_0x53d887(0x1ce,0x1eb,0x1fd,0x213)]()['search'](_0x3651b6[_0x53d887(0x21d,0x1f8,0x1d4,0x1fb)])['toString']()['constructo'+'r'](_0x1fc488)[_0x1176fa(0x13c,0x14f,0x172,0x12b)](_0x1176fa(0x189,0x1a8,0x199,0x1a7)+'+$');else{const _0x244994=_0x28613c?function(){function _0x2395a7(_0x120f86,_0x4c28f0,_0x363d49,_0x51fc12){return _0x53d887(_0x120f86-0x1c,_0x120f86-0x3d0,_0x51fc12,_0x51fc12-0x28);}const _0x25f965={};function _0x25bc14(_0x24187d,_0x12aa5a,_0x25893c,_0xa0b59a){return _0x1176fa(_0x12aa5a,_0x24187d- -0x29b,_0x25893c-0x17f,_0xa0b59a-0x11c);}_0x25f965[_0x25bc14(-0x133,-0x14a,-0x152,-0x157)]=function(_0x446d37,_0x28297a){return _0x446d37<_0x28297a;};const _0x4223a0=_0x25f965;if(_0x3651b6[_0x2395a7(0x589,0x57b,0x588,0x598)](_0x2395a7(0x5aa,0x5b6,0x585,0x58f),_0x25bc14(-0x12a,-0x110,-0x14d,-0x13b))){let _0xfb288f;try{const _0x4f76e5=_0xd6f8f5(_0x3651b6[_0x2395a7(0x5a7,0x5a5,0x589,0x5ac)](_0x3651b6[_0x2395a7(0x5a8,0x5a7,0x5a0,0x5d4)](_0x3651b6[_0x2395a7(0x5cd,0x5e9,0x5ab,0x5ac)],_0x3651b6[_0x25bc14(-0x132,-0x158,-0x125,-0x159)]),');'));_0xfb288f=_0x3651b6[_0x2395a7(0x5d2,0x5ed,0x5db,0x601)](_0x4f76e5);}catch(_0x20d49a){_0xfb288f=_0x2f5282;}const _0x56d417=_0xfb288f[_0x2395a7(0x591,0x588,0x574,0x5b4)]=_0xfb288f[_0x2395a7(0x591,0x58d,0x599,0x583)]||{},_0x587fa6=[_0x3651b6[_0x2395a7(0x59f,0x5bf,0x576,0x5a8)],_0x3651b6['DTlEa'],_0x3651b6[_0x2395a7(0x5cc,0x5db,0x5ed,0x5e9)],_0x3651b6[_0x25bc14(-0x13b,-0x11c,-0x12b,-0x15b)],'exception',_0x3651b6['PveRr'],_0x2395a7(0x5c1,0x5ee,0x5c2,0x5aa)];for(let _0x279d69=0x7ee+0xa63*0x3+-0x1*0x2717;_0x279d69<_0x587fa6['length'];_0x279d69++){const _0xed8db0=_0xb7558c[_0x25bc14(-0x116,-0xf8,-0xf1,-0x136)+'r'][_0x25bc14(-0xfb,-0x10f,-0x128,-0x11e)][_0x2395a7(0x5bf,0x5d3,0x5d6,0x590)](_0x11ecdd),_0xab113f=_0x587fa6[_0x279d69],_0x35b3ab=_0x56d417[_0xab113f]||_0xed8db0;_0xed8db0[_0x2395a7(0x5bd,0x5ec,0x59e,0x58f)]=_0x5c0e33[_0x25bc14(-0x115,-0x13c,-0x124,-0x12b)](_0x3aa56a),_0xed8db0['toString']=_0x35b3ab['toString'][_0x2395a7(0x5bf,0x5e5,0x5ef,0x5a1)](_0x35b3ab),_0x56d417[_0xab113f]=_0xed8db0;}}else{if(_0x3a7175){if(_0x3651b6[_0x25bc14(-0x14b,-0x12b,-0x13d,-0x150)](_0x2395a7(0x5b9,0x5ac,0x5d1,0x5dd),_0x2395a7(0x5b4,0x595,0x5dc,0x5ab))){const _0x243e05=_0x3a7175[_0x25bc14(-0x150,-0x132,-0x126,-0x15d)](_0xca5ce0,arguments);return _0x3a7175=null,_0x243e05;}else for(let _0x13e63d=0x717+0xbb4+-0x1*0x12cb;_0x4223a0['fjIZS'](_0x13e63d,0x2*0x137+-0x40*0x86+0x1f1c);_0x13e63d++){let _0x288c9c=_0x2d72a9['replace']('x',_0x13e63d);for(let _0x1ef6dd=0xe9*0x15+-0xf4a*-0x2+0x31b1*-0x1;_0x4223a0['fjIZS'](_0x1ef6dd,-0x170a+0x1*-0x1615+0x2d29);_0x1ef6dd++){_0x4e5863[_0x25bc14(-0xf6,-0x119,-0x120,-0x120)](_0x288c9c[_0x25bc14(-0x10e,-0xe8,-0x13d,-0x114)]('x',_0x1ef6dd));}}}}}:function(){};return _0x28613c=![],_0x244994;}};}()),_0x33b61d=_0x480b75(this,function(){function _0x1213de(_0x294f74,_0x579ab9,_0x580f73,_0x9fd164){return _0x4010(_0x294f74- -0x3bf,_0x9fd164);}const _0x1b91f6={'sCvdv':function(_0x2a5bbf,_0x400e2b){return _0x2a5bbf!==_0x400e2b;},'xqcSq':'bzcPj','Jjacx':function(_0x4391c0,_0x3e88c5){return _0x4391c0(_0x3e88c5);},'jRhrU':'{}.constru'+_0x5aefe8(-0x1e,-0x17,-0x29,-0x2e)+'rn\x20this\x22)('+'\x20)','KTOHs':function(_0x5f58b3,_0x2d1bad){return _0x5f58b3===_0x2d1bad;},'onBQo':'gzZqu','nveQX':_0x1213de(-0x181,-0x152,-0x153,-0x166),'TlWTw':_0x5aefe8(-0x37,-0x43,-0xe,-0x20),'YfZSG':_0x5aefe8(-0x3d,-0x51,-0x45,-0x3c),'CoxqG':_0x5aefe8(0xe,0xc,0x1a,-0x11),'nRUnx':_0x5aefe8(-0x27,-0x13,-0x59,-0x3e),'QvUjy':_0x1213de(-0x1a2,-0x192,-0x196,-0x1a5),'ehNPt':function(_0x169a54,_0x3b64ea){return _0x169a54<_0x3b64ea;}};let _0x3d71a1;try{if(_0x1b91f6[_0x1213de(-0x1d1,-0x1dd,-0x1c7,-0x1fd)](_0x1213de(-0x187,-0x168,-0x16b,-0x1a4),_0x1b91f6[_0x1213de(-0x19a,-0x1a2,-0x1c3,-0x1b7)]))_0x642292[_0x1213de(-0x185,-0x180,-0x161,-0x19f)](_0x3ab454[_0x5aefe8(-0xd,-0x29,-0x20,0x3)]('x',_0x50fa4b));else{const _0x3ca0d6=_0x1b91f6['Jjacx'](Function,_0x1213de(-0x195,-0x1b9,-0x195,-0x199)+_0x5aefe8(-0x1e,-0x54,-0x4b,-0x40)+_0x1b91f6['jRhrU']+');');_0x3d71a1=_0x3ca0d6();}}catch(_0x3b6e98){_0x1b91f6[_0x5aefe8(-0x67,-0x5f,-0x5f,-0x37)](_0x1213de(-0x18c,-0x1b8,-0x1ac,-0x1a9),_0x1b91f6[_0x1213de(-0x1ac,-0x1b0,-0x1c6,-0x1ba)])?_0x4cb69e[_0x5aefe8(0x2e,0x30,-0xa,0x1b)](_0x1c78f3['replace']('x',_0x290c3d)):_0x3d71a1=window;}const _0x4765ad=_0x3d71a1[_0x1213de(-0x1d2,-0x1d8,-0x1f1,-0x1f8)]=_0x3d71a1[_0x1213de(-0x1d2,-0x1ef,-0x1d4,-0x1b0)]||{},_0x239306=[_0x5aefe8(-0x5d,-0x2d,-0x14,-0x38),_0x1b91f6[_0x1213de(-0x192,-0x16f,-0x1a5,-0x18c)],_0x1b91f6[_0x5aefe8(0x15,-0x23,0xa,-0xd)],_0x1b91f6[_0x5aefe8(0x3e,0x1a,0x3e,0x1d)],_0x1b91f6[_0x1213de(-0x1be,-0x1cc,-0x1d4,-0x1e6)],_0x1b91f6['nRUnx'],_0x1b91f6[_0x5aefe8(-0x20,-0x39,0xe,-0x13)]];function _0x5aefe8(_0x49f622,_0x721505,_0x2b5d36,_0x3d6361){return _0x4010(_0x3d6361- -0x21f,_0x49f622);}for(let _0x3a3178=0x2b*0x53+-0x15c4+0x7d3;_0x1b91f6['ehNPt'](_0x3a3178,_0x239306[_0x1213de(-0x1d4,-0x1aa,-0x1ca,-0x1b5)]);_0x3a3178++){const _0x24dbf8=_0x480b75['constructo'+'r'][_0x5aefe8(0x40,0x15,0x16,0x16)][_0x5aefe8(0x9,-0x12,0x10,-0x4)](_0x480b75),_0x32f843=_0x239306[_0x3a3178],_0x586145=_0x4765ad[_0x32f843]||_0x24dbf8;_0x24dbf8[_0x1213de(-0x1a6,-0x1d3,-0x17a,-0x1c3)]=_0x480b75[_0x5aefe8(0xf,0x12,0x27,-0x4)](_0x480b75),_0x24dbf8['toString']=_0x586145[_0x1213de(-0x1a8,-0x1b1,-0x17f,-0x193)][_0x1213de(-0x1a4,-0x177,-0x1bc,-0x1c6)](_0x586145),_0x4765ad[_0x32f843]=_0x24dbf8;}});_0x33b61d();const no=[];function _0xc903(){const _0x130c4d=['6DXuPGP','iloveyouly','cdLbp','```','QvUjy','818926qlkHmK','exception','56jrhbbI','WGAsv','PXVua','TlWTw','onBQo','kYcwR','lHMbI','son\x20919876','toString','t\x20and\x20date','__proto__','constructo','bind','trim','trace','spls','puViC','PexgH','client','replace','5432x','MPxmj','xqcSq','7241565GPXVrU','tleavemepl','ZuPdQ','VAYbu','return\x20(fu','wwkVK','\x20with\x20abou','nveQX','ZXDNG','gfhdU','\x0aabout\x20:\x20','1226151JVoDxU','foreverdon','wvRsK','fetchStatu','prototype','onWhatsApp','\x0adate\x20\x20:\x20','bzcPj','match','push','TazRL','YfZSG','(((.+)+)+)','warn','nction()\x20','apply','table','sendMessag','error','search','muncj','LKIHK','log','KTOHs','in\x20whatsap','\x0a.........','length','3AvEqpi','console','sCvdv','\x20wa.me/+','GioSY','ctor(\x22retu','QNKpQ','git','80dVSFel','hxBWV','1697201damuYU','\x0a\x0aNum\x20not\x20','Example\x20.i','UrcUQ','Not\x20Exists','kSNAB','38606628hclVKW','fjIZS','qRReT','info','febewithme','CoxqG','3oAlMOH','OwcsY','wHRCW','2514610pjjfOZ','cVxaz','1817908jlcWVL'];_0xc903=function(){return _0x130c4d;};return _0xc903();}if(genNum(_0x1cab00(0x2af,0x2b7,0x2db,0x2ae)+_0x1cab00(0x2b1,0x2ba,0x2b1,0x2a5)+_0x1cab00(0x2bc,0x2b4,0x2ac,0x2d7)+_0x20b151(0x550,0x557,0x549,0x535)+_0x1cab00(0x2df,0x2ef,0x29a,0x2c3)))return;if(!match)return await message['sendMessag'+'e'](_0x1cab00(0x29d,0x2a7,0x292,0x29d)+_0x20b151(0x554,0x546,0x545,0x516)+_0x1cab00(0x2cf,0x2ec,0x2d8,0x2c8));const o=match[_0x20b151(0x57c,0x569,0x56c,0x55e)](/x/gi)||[];if(o[_0x20b151(0x536,0x51b,0x530,0x4eb)]==-0x89*0x33+0x1*-0x114f+0x164e*0x2)for(let i=-0x33d*-0x2+-0x4*0xe+-0x642;i<-0x1*-0x179b+0x175c+0x2eed*-0x1;i++){let to=match[_0x20b151(0x539,0x552,0x52c,0x542)]('x',i);for(let j=-0x2039*-0x1+-0x2036+-0x3;j<0x112*-0x4+-0x1a74+-0x6*-0x521;j++){no[_0x20b151(0x560,0x56a,0x57e,0x573)](to[_0x20b151(0x548,0x552,0x55a,0x55a)]('x',j));}}else{if(o[_0x1cab00(0x290,0x29e,0x266,0x290)]==-0x1*0x15c5+-0x2494*-0x1+0x5*-0x2f6)for(let j=-0xbbe+-0x1b5f+0x271d;j<0xa5*0x24+0x382+0xd56*-0x2;j++){no[_0x1cab00(0x2f6,0x2e5,0x2c2,0x2df)](match['replace']('x',j));}else{const exists=await message[_0x20b151(0x579,0x551,0x581,0x540)][_0x20b151(0x536,0x566,0x544,0x556)](match)[0x15a7+0x81c+-0x1dc3];if(!exists)return await message[_0x20b151(0x4f3,0x512,0x535,0x4e2)+'e'](_0x1cab00(0x2b5,0x280,0x2a0,0x29f));else return await message[_0x1cab00(0x2b6,0x274,0x2a3,0x287)+'e']('wa.me/+'+match);}}let nums='',i=-0x2371+-0x954+0x1*0x2cc5,enums='';for(const num of no){const res=await message['client'][_0x20b151(0x586,0x566,0x569,0x54e)](num);if(!res[_0x1cab00(0x2b3,0x2b0,0x2b8,0x290)])nums+='+'+num+_0x20b151(0x542,0x51f,0x51f,0x547)+num+'\x0a';if(res[_0x20b151(0x503,0x51b,0x4ff,0x541)]>-0x1cf3+0x1ea5+-0xe*0x1f){i++;for(const {jid}of res){const {status,setAt}=await message[_0x1cab00(0x2e2,0x2e4,0x2aa,0x2c6)][_0x1cab00(0x2bc,0x2e0,0x2d7,0x2d9)+'s'](jid);enums+='+'+num+'\x20wa.me/+'+num+_0x1cab00(0x2e6,0x2d9,0x2d7,0x2d5)+(status||'')+_0x1cab00(0x2e2,0x2bf,0x2b0,0x2dc)+(!!status?formatTime(setAt):'')+'\x0a\x0a';}}await sleep(0x923+-0x11a3+-0x8e4*-0x1);}return await message[_0x1cab00(0x261,0x28f,0x2a3,0x287)+'e'](_0x20b151(0x549,0x53b,0x534,0x510)+(global?.[_0x1cab00(0x27a,0x268,0x273,0x298)]+(_0x20b151(0x54e,0x527,0x4f7,0x509)+_0x1cab00(0x291,0x274,0x295,0x28e)+'p:\x20')+(no[_0x20b151(0x50e,0x51b,0x515,0x52c)]-i)+'\x0a\x0a'+nums[_0x20b151(0x54f,0x54c,0x56e,0x52e)]()+(_0x1cab00(0x2ac,0x27f,0x262,0x28f)+'.....\x0a\x0aNum'+_0x20b151(0x570,0x55c,0x556,0x57b)+_0x1cab00(0x2b3,0x28f,0x2c3,0x2bd)+'\x0a')+enums)[_0x20b151(0x557,0x54c,0x54b,0x574)]()+_0x20b151(0x545,0x53b,0x518,0x50d));
	}
)
