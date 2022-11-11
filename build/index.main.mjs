// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2],
      4: [ctc0, ctc1, ctc0, ctc0, ctc3, ctc2],
      7: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Auctioneer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lengthInBlocks: ctc1,
    minBidDiff: ctc1,
    minPrice: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v378], secs: v380, time: v379, didSend: v29, from: v377 } = txn1;
  ;
  ;
  const v387 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:37:90:application',
    fs: ['at ./index.rsh:36:20:application call to [unknown function] (defined at: ./index.rsh:36:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v388 = v387.lengthInBlocks;
  const v389 = v387.minBidDiff;
  const v390 = v387.minPrice;
  
  const txn2 = await (ctc.sendrecv({
    args: [v377, v378, v390, v389, v388],
    evt_cnt: 3,
    funcNum: 1,
    lct: v379,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v46, from: v394 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v46, from: v394 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v402, time: v401, didSend: v53, from: v400 } = txn3;
  ;
  ;
  const v409 = stdlib.addressEq(v377, v400);
  stdlib.assert(v409, {
    at: './index.rsh:45:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v414 = stdlib.safeAdd(v398, v397);
  let v415 = v394;
  let v416 = true;
  let v417 = v395;
  let v418 = v401;
  let v419 = v398;
  
  let txn4 = txn3;
  while (await (async () => {
    const v433 = stdlib.gt(v414, v419);
    
    return v433;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v454], secs: v456, time: v455, didSend: v245, from: v453 } = txn5;
    undefined /* setApiDetails */;
    const v458 = v454[stdlib.checkedBigNumberify('./index.rsh:57:18:spread', stdlib.UInt_max, '0')];
    const v459 = stdlib.gt(v458, v417);
    stdlib.assert(v459, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:59:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
      msg: 'bid is too low',
      who: 'Auctioneer'
      });
    const v461 = stdlib.safeSub(v458, v417);
    const v462 = stdlib.ge(v461, v396);
    stdlib.assert(v462, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:60:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
      msg: 'bid difference is too low',
      who: 'Auctioneer'
      });
    ;
    const v473 = [v415, v417];
    await txn5.getOutput('Bidder_bid', 'v473', ctc5, v473);
    if (v416) {
      stdlib.protect(ctc6, await interact.seeBid(v394, v458), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv415 = v453;
      const cv416 = false;
      const cv417 = v458;
      const cv418 = v455;
      const cv419 = v418;
      
      v415 = cv415;
      v416 = cv416;
      v417 = cv417;
      v418 = cv418;
      v419 = cv419;
      
      txn4 = txn5;
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v394, v458), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv415 = v453;
      const cv416 = false;
      const cv417 = v458;
      const cv418 = v455;
      const cv419 = v418;
      
      v415 = cv415;
      v416 = cv416;
      v417 = cv417;
      v418 = cv418;
      v419 = cv419;
      
      txn4 = txn5;
      continue;}
    
    }
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v497, time: v496, didSend: v308, from: v495 } = txn5;
  ;
  const v498 = stdlib.addressEq(v377, v495);
  stdlib.assert(v498, {
    at: './index.rsh:84:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  ;
  const v508 = stdlib.safeDiv(v417, stdlib.checkedBigNumberify('./index.rsh:88:50:decimal', stdlib.UInt_max, '100'));
  const v509 = stdlib.safeSub(v417, v508);
  if (v416) {
    stdlib.protect(ctc6, await interact.showOutcome(v415, v417), {
      at: './index.rsh:97:29:application',
      fs: ['at ./index.rsh:96:9:application call to [unknown function] (defined at: ./index.rsh:96:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v415, v417), {
      at: './index.rsh:97:29:application',
      fs: ['at ./index.rsh:96:9:application call to [unknown function] (defined at: ./index.rsh:96:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  
  
  
  
  
  
  
  };
export async function _Bidder_bid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v377, v378, v394, v396, v414, v415, v416, v417, v418] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v436 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v437 = v436[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v439 = stdlib.gt(v437, v417);
  stdlib.assert(v439, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v441 = stdlib.safeSub(v437, v417);
  const v442 = stdlib.ge(v441, v396);
  stdlib.assert(v442, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'bid difference is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v377, v378, v394, v396, v414, v415, v416, v417, v418, v436],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v437, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v454], secs: v456, time: v455, didSend: v245, from: v453 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v458 = v454[stdlib.checkedBigNumberify('./index.rsh:57:18:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v458,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v473 = [v415, v417];
      const v474 = await txn1.getOutput('Bidder_bid', 'v473', ctc5, v473);
      
      if (v416) {
        const v711 = v453;
        const v712 = false;
        const v713 = v458;
        const v714 = v455;
        const v716 = stdlib.gt(v414, v418);
        if (v716) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v415,
          tok: undefined /* Nothing */
          });
        const v724 = v453;
        const v725 = false;
        const v726 = v458;
        const v727 = v455;
        const v729 = stdlib.gt(v414, v418);
        if (v729) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v454], secs: v456, time: v455, didSend: v245, from: v453 } = txn1;
  undefined /* setApiDetails */;
  const v458 = v454[stdlib.checkedBigNumberify('./index.rsh:57:18:spread', stdlib.UInt_max, '0')];
  const v459 = stdlib.gt(v458, v417);
  stdlib.assert(v459, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v461 = stdlib.safeSub(v458, v417);
  const v462 = stdlib.ge(v461, v396);
  stdlib.assert(v462, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
    msg: 'bid difference is too low',
    who: 'Bidder_bid'
    });
  ;
  const v473 = [v415, v417];
  const v474 = await txn1.getOutput('Bidder_bid', 'v473', ctc5, v473);
  if (v245) {
    stdlib.protect(ctc6, await interact.out(v454, v474), {
      at: './index.rsh:57:19:application',
      fs: ['at ./index.rsh:57:19:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)', 'at ./index.rsh:63:31:application call to "notify" (defined at: ./index.rsh:62:43:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v416) {
    const v711 = v453;
    const v712 = false;
    const v713 = v458;
    const v714 = v455;
    const v716 = stdlib.gt(v414, v418);
    if (v716) {
      return;
      }
    else {
      return;
      }}
  else {
    ;
    const v724 = v453;
    const v725 = false;
    const v726 = v458;
    const v727 = v455;
    const v729 = stdlib.gt(v414, v418);
    if (v729) {
      return;
      }
    else {
      return;
      }}
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Object({
    nftId: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc2]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Bool;
  
  
  const v374 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:30:53:application',
    fs: ['at ./index.rsh:29:15:application call to [unknown function] (defined at: ./index.rsh:29:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v375 = v374.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v375],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v378], secs: v380, time: v379, didSend: v29, from: v377 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v378
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v378], secs: v380, time: v379, didSend: v29, from: v377 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc2, ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v395, v396, v397], secs: v399, time: v398, didSend: v46, from: v394 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v377, v378, v394, v395, v396, v397, v398],
    evt_cnt: 0,
    funcNum: 2,
    lct: v398,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:42:20:decimal', stdlib.UInt_max, '1'), v378]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v402, time: v401, didSend: v53, from: v400 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:42:20:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v378
        });
      const v414 = stdlib.safeAdd(v398, v397);
      const v415 = v394;
      const v416 = true;
      const v417 = v395;
      const v418 = v401;
      const v419 = v398;
      
      if (await (async () => {
        const v433 = stdlib.gt(v414, v419);
        
        return v433;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v402, time: v401, didSend: v53, from: v400 } = txn3;
  ;
  ;
  const v409 = stdlib.addressEq(v377, v400);
  stdlib.assert(v409, {
    at: './index.rsh:45:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v414 = stdlib.safeAdd(v398, v397);
  let v415 = v394;
  let v416 = true;
  let v417 = v395;
  let v418 = v401;
  let v419 = v398;
  
  let txn4 = txn3;
  while (await (async () => {
    const v433 = stdlib.gt(v414, v419);
    
    return v433;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v454], secs: v456, time: v455, didSend: v245, from: v453 } = txn5;
    undefined /* setApiDetails */;
    const v458 = v454[stdlib.checkedBigNumberify('./index.rsh:57:18:spread', stdlib.UInt_max, '0')];
    const v459 = stdlib.gt(v458, v417);
    stdlib.assert(v459, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:59:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
      msg: 'bid is too low',
      who: 'Owner'
      });
    const v461 = stdlib.safeSub(v458, v417);
    const v462 = stdlib.ge(v461, v396);
    stdlib.assert(v462, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:60:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)', 'at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
      msg: 'bid difference is too low',
      who: 'Owner'
      });
    ;
    const v473 = [v415, v417];
    await txn5.getOutput('Bidder_bid', 'v473', ctc5, v473);
    if (v416) {
      stdlib.protect(ctc6, await interact.seeBid(v377, v458), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv415 = v453;
      const cv416 = false;
      const cv417 = v458;
      const cv418 = v455;
      const cv419 = v418;
      
      v415 = cv415;
      v416 = cv416;
      v417 = cv417;
      v418 = cv418;
      v419 = cv419;
      
      txn4 = txn5;
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v377, v458), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv415 = v453;
      const cv416 = false;
      const cv417 = v458;
      const cv418 = v455;
      const cv419 = v418;
      
      v415 = cv415;
      v416 = cv416;
      v417 = cv417;
      v418 = cv418;
      v419 = cv419;
      
      txn4 = txn5;
      continue;}
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v377, v378, v394, v415, v416, v417],
    evt_cnt: 0,
    funcNum: 4,
    lct: v418,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v497, time: v496, didSend: v308, from: v495 } = txn5;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v415,
        tok: v378
        });
      const v508 = stdlib.safeDiv(v417, stdlib.checkedBigNumberify('./index.rsh:88:50:decimal', stdlib.UInt_max, '100'));
      const v509 = stdlib.safeSub(v417, v508);
      if (v416) {
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v378
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v377,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v394,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v378
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc4, ctc7, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v497, time: v496, didSend: v308, from: v495 } = txn5;
  ;
  const v498 = stdlib.addressEq(v377, v495);
  stdlib.assert(v498, {
    at: './index.rsh:84:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  const v508 = stdlib.safeDiv(v417, stdlib.checkedBigNumberify('./index.rsh:88:50:decimal', stdlib.UInt_max, '100'));
  const v509 = stdlib.safeSub(v417, v508);
  if (v416) {
    stdlib.protect(ctc6, await interact.showOutcome(v415, v417), {
      at: './index.rsh:97:29:application',
      fs: ['at ./index.rsh:96:9:application call to [unknown function] (defined at: ./index.rsh:96:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v415, v417), {
      at: './index.rsh:97:29:application',
      fs: ['at ./index.rsh:96:9:application call to [unknown function] (defined at: ./index.rsh:96:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  
  
  
  
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_bid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `ByALAAEEAiAFCAdIUKCNBiYDAQAAAQEiNQAxGEED0ClkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCACQ2GgIXNQQ2GgM2GgEXSSUMQAH0SSQMQAGLSSEFDEAA0CEFEkQhBzQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpKSlcAIDX/IQRbNf5XKCA1/SEIWzX8IQlbNftXWCA1+oF5WzX5gYEBWzX4STUFNfeABEG7PX0091CwNPcXSTX2NPkNRDT2NPkJNPwPRDT2iAM1gAgAAAAAAAAB2TT6NPkWUFCwNPo0+RZQNQc0A1d4ARdBABY0/zT+NP00/DT7MQAiNPYyBjT4QgIMsSKyATT5sggjshA0+rIHszT/NP40/TT8NPsxACI09jIGNPhCAeZIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+gWlbNf2ABJEnNPOwNP8xABJEsSKyASOyEiSyEDQDV0ggshQ0/rIRszT9gWQKNfw0A1doARdBABqxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IB9LEisgE0/TT8CbIII7IQNP+yB7OxIrIBNPyyCCOyEDQDVyggsgezsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAbQlEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XKCA1/YFgWzX8gARBsUBNsCM0/ogB/zT/MQASRDT/NP40/TQDIQlbNPw0A4FYWwg0/SM0AyEIWzIGNPxCAM9JIwxAAHJIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJSSJbNf0hBls1/IEQWzX7gATN+aSUNP0WUDT8FlA0+xZQsDT/NP4WUDEAUDT9FlA0/BZQNPsWUDIGFlAoSwFXAGhnSCU1ATIGNQJCAPVIIQqIAUEiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhCogBG7EisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCAJ41/zX+Nf01/DX7Nfo1+TX4Nfc19jT6NP8NQQA9NPY09xZQNPhQNPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAH9nKksBV38KZ0ghBzUBMgY1AkIARTT2NPcWUDT4UDT7UDT8FlEHCFA0/RZQKEsBVwBxZ0gkNQEyBjUCQgAcMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 137,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v378",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v378",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v454",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v473",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T13",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v395",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v454",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d0138038062001d018339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b611a2480620002dd6000396000f3fe6080604052600436106100795760003560e01c8063a7661d541161004b578063a7661d54146100e1578063ab53f2c6146100f4578063b627922414610117578063fd5dba2d1461014e57005b80630693c662146100825780631e93b0f1146100955780637eea518c146100b957806383230757146100cc57005b3661008057005b005b6100806100903660046113a0565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c73660046113a0565b610197565b3480156100d857600080fd5b506001546100a6565b6100806100ef3660046113a0565b6101c9565b34801561010057600080fd5b506101096101fb565b6040516100b09291906113e8565b61012a610125366004611422565b610298565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b61008061015c36600461143b565b6102bb565b604080516060810182526000602082018181529282015290815261019361018d36849003840184611518565b826102ed565b5050565b60408051606081018252600060208201818152928201529081526101936101c33684900384018461157d565b8261065a565b60408051606081018252600060208201818152928201529081526101936101f53684900384018461157d565b8261085d565b600060606000546002808054610210906115b5565b80601f016020809104026020016040519081016040528092919081815260200182805461023c906115b5565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102b582610a97565b92915050565b60408051606081018252600060208201818152928201529081526101936102e7368490038401846115ea565b82610aee565b6102fd6007600054146017610d47565b815161031890158061031157508251600154145b6018610d47565b60008080556002805461032a906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610356906115b5565b80156103a35780601f10610378576101008083540402835291602001916103a3565b820191906000526020600020905b81548152906001019060200180831161038657829003601f168201915b50505050508060200190518101906103bb91906116a4565b90506103dd604080516060810182526000602082018181529282015290815290565b60408051338152855160208083019190915286015151518183015290517fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d9181900360600190a160e08201516020850151515161043c91106014610d47565b60608201516020850151515160e0840151610464929161045b91610d6d565b10156015610d47565b602084015151516104789034146016610d47565b60a082015181516001600160a01b03909116905260e082015181516020015280516040517f02ab241a809b1bafaf55d54c4f191a4d86ce1625c88f3fffa5c0a67db480a628916104e29181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260c08201511561058757610500611225565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261058181610dbc565b50610654565b8160a001516001600160a01b03166108fc8360e001519081150290604051600060405180830381858888f193505050501580156105c8573d6000803e3d6000fd5b506105d1611225565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261065281610dbc565b505b50505050565b61066a600260005414600e610d47565b815161068590158061067e57508251600154145b600f610d47565b600080805560028054610697906115b5565b80601f01602080910402602001604051908101604052809291908181526020018280546106c3906115b5565b80156107105780601f106106e557610100808354040283529160200191610710565b820191906000526020600020905b8154815290600101906020018083116106f357829003601f168201915b50505050508060200190518101906107289190611740565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161077f3415600b610d47565b6107996107923383602001516001610f7a565b600c610d47565b80516107b1906001600160a01b03163314600d610d47565b6107b9611225565b815181516001600160a01b039182169052602080840151835190831691015260408084015183519216910152608082015181516060015260c082015160a08301516108049190610f92565b8151608090810191909152604080840151602080850180516001600160a01b039093169092528151600191015260608086015182519093019290925280514392019190915260c084015190519091015261065481610dbc565b61086d6004600054146012610d47565b815161088890158061088157508251600154145b6013610d47565b60008080556002805461089a906115b5565b80601f01602080910402602001604051908101604052809291908181526020018280546108c6906115b5565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b505050505080602001905181019061092b91906117e5565b90506109436040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a161099634156010610d47565b81516109ae906001600160a01b031633146011610d47565b6109c2826020015183606001516001610fdf565b6109d18260a001516064610ff3565b81526080820151156109f857600080805560018190556109f390600290611288565b610654565b81600001516001600160a01b03166108fc610a1b8460a001518460000151610d6d565b6040518115909202916000818181858888f19350505050158015610a43573d6000803e3d6000fd5b50604080830151825191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a80573d6000803e3d6000fd5b506000808055600181905561065490600290611288565b6040805180820190915260008082526020820152610ab36112c2565b602081015151839052610adc604080516060810182526000602082018181529282015290815290565b610ae682826102ed565b519392505050565b610afe6001600054146009610d47565b8151610b19901580610b1257508251600154145b600a610d47565b600080805560028054610b2b906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b57906115b5565b8015610ba45780601f10610b7957610100808354040283529160200191610ba4565b820191906000526020600020905b815481529060010190602001808311610b8757829003601f168201915b5050505050806020019051810190610bbc919061188f565b604080513381528551602080830191909152808701518051838501529081015160608301529091015160808201529091507f955174907bb1a212127bbf09e3338775932663cd5b51e4058d5b57da257101ec9060a00160405180910390a1610c2634156008610d47565b610c816040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825282518701516080808c01918252935185015160a0808d019182524360c0808f01828152600260005560019290925588519b8c019c909c5298518c16968a01969096529551909916908701525190850152945194830194909452925191810191909152905160e082015261010001604051602081830303815290604052600290805190602001906106529291906112ef565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610d7a83826118d6565b91508111156102b55760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610d64565b8060200151608001518160000151608001511115610eb9576040805161012081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189815260e08b018a81526101008c018b81528e51516001600160a01b039081168e528f518c01518116909a528e518e01518a169098528d518701519095528c51909301519091528a8701805151909616905284518601511515905283518801519052915190910151905260079091554360015591519091610e90918391016118ed565b60405160208183030381529060405260029080519060200190610eb49291906112ef565b505050565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d51516001600160a01b03908116808e528f518b015182168a528f518f0151821689528f8b018051518316885280518c015115158652518f015183526004909b55436001558d51998a019a909a52965189169b88019b909b5293518716928601929092525190941693830193909352915115159481019490945251908301529060e001610e90565b50565b6000610f888385308561103a565b90505b9392505050565b600082610f9f838261197b565b91508110156102b55760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610d64565b610fea838383611114565b610eb457600080fd5b6000816110305760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610d64565b610f8b8284611993565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916110a1916119b5565b60006040518083038185875af1925050503d80600081146110de576040519150601f19603f3d011682016040523d82523d6000602084013e6110e3565b606091505b50915091506110f4828260016111e5565b508080602001905181019061110991906119d1565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611173916119b5565b60006040518083038185875af1925050503d80600081146111b0576040519150601f19603f3d011682016040523d82523d6000602084013e6111b5565b606091505b50915091506111c6828260026111e5565b50808060200190518101906111db91906119d1565b9695505050505050565b606083156111f4575081610f8b565b8251156112045782518084602001fd5b60405163100960cb60e01b815260048101839052602401610d64565b905290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b508054611294906115b5565b6000825580601f106112a4575050565b601f016020900490600052602060002090810190610f779190611373565b60405180604001604052806000815260200161122060408051808201909152600060208201908152815290565b8280546112fb906115b5565b90600052602060002090601f01602090048101928261131d5760008555611363565b82601f1061133657805160ff1916838001178555611363565b82800160010185558215611363579182015b82811115611363578251825591602001919060010190611348565b5061136f929150611373565b5090565b5b8082111561136f5760008155600101611374565b60006040828403121561139a57600080fd5b50919050565b6000604082840312156113b257600080fd5b610f8b8383611388565b60005b838110156113d75781810151838201526020016113bf565b838111156106545750506000910152565b828152604060208201526000825180604084015261140d8160608501602087016113bc565b601f01601f1916919091016060019392505050565b60006020828403121561143457600080fd5b5035919050565b60006080828403121561139a57600080fd5b6040805190810167ffffffffffffffff8111828210171561147e57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561147e57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561147e57634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561147e57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561152b57600080fd5b61153361144d565b833581526020601f198301121561154957600080fd5b611551611484565b915061155b611484565b602094850135815282529283015250919050565b8015158114610f7757600080fd5b60006040828403121561158f57600080fd5b61159761144d565b8235815260208301356115a98161156f565b60208201529392505050565b600181811c908216806115c957607f821691505b6020821081141561139a57634e487b7160e01b600052602260045260246000fd5b600081830360808112156115fd57600080fd5b6040516040810181811067ffffffffffffffff8211171561162e57634e487b7160e01b600052604160045260246000fd5b604052833581526060601f198301121561164757600080fd5b61164f6114b5565b9150602084013582526040840135602083015260608401356040830152816020820152809250505092915050565b80516001600160a01b038116811461169457600080fd5b919050565b80516116948161156f565b600061012082840312156116b757600080fd5b6116bf6114e6565b6116c88361167d565b81526116d66020840161167d565b60208201526116e76040840161167d565b6040820152606083015160608201526080830151608082015261170c60a0840161167d565b60a082015261171d60c08401611699565b60c082015260e08381015190820152610100928301519281019290925250919050565b600060e0828403121561175257600080fd5b60405160e0810181811067ffffffffffffffff8211171561178357634e487b7160e01b600052604160045260246000fd5b60405261178f8361167d565b815261179d6020840161167d565b60208201526117ae6040840161167d565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c082840312156117f757600080fd5b60405160c0810181811067ffffffffffffffff8211171561182857634e487b7160e01b600052604160045260246000fd5b6040526118348361167d565b81526118426020840161167d565b60208201526118536040840161167d565b60408201526118646060840161167d565b606082015260808301516118778161156f565b608082015260a0928301519281019290925250919050565b6000604082840312156118a157600080fd5b6118a961144d565b6118b28361167d565b81526115a96020840161167d565b634e487b7160e01b600052601160045260246000fd5b6000828210156118e8576118e86118c0565b500390565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015161194a60a08401826001600160a01b03169052565b5060c083015161195e60c084018215159052565b5060e083015160e083015261010080840151818401525092915050565b6000821982111561198e5761198e6118c0565b500190565b6000826119b057634e487b7160e01b600052601260045260246000fd5b500490565b600082516119c78184602087016113bc565b9190910192915050565b6000602082840312156119e357600080fd5b8151610f8b8161156f56fea264697066735822122065ec8a301d7eda8d5b994136224b7aff0fdfcf2a64c7748f5ec9ea55d68cfcba64736f6c634300080c0033`,
  BytecodeLen: 7425,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:99:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:99:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:55:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer": Auctioneer,
  "Bidder_bid": Bidder_bid,
  "Owner": Owner
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
