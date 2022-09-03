// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

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
      2: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2],
      4: [ctc0, ctc1, ctc0, ctc0, ctc3, ctc2],
      7: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc2, ctc2]
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
  const {data: [v285], secs: v287, time: v286, didSend: v29, from: v284 } = txn1;
  ;
  ;
  const v294 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:36:78:application',
    fs: ['at ./index.rsh:35:20:application call to [unknown function] (defined at: ./index.rsh:35:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v295 = v294.lengthInBlocks;
  const v296 = v294.minPrice;
  
  const txn2 = await (ctc.sendrecv({
    args: [v284, v285, v296, v295],
    evt_cnt: 2,
    funcNum: 1,
    lct: v286,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v306, time: v305, didSend: v50, from: v304 } = txn3;
  ;
  ;
  const v313 = stdlib.addressEq(v284, v304);
  stdlib.assert(v313, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v318 = stdlib.safeAdd(v302, v301);
  let v319 = v299;
  let v320 = true;
  let v321 = v300;
  let v322 = v305;
  let v323 = v302;
  
  while (await (async () => {
    const v337 = stdlib.gt(v318, v323);
    
    return v337;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v352], secs: v354, time: v353, didSend: v170, from: v351 } = txn4;
    undefined /* setApiDetails */;
    const v356 = v352[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
    const v357 = stdlib.gt(v356, v321);
    stdlib.assert(v357, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'bid is too low',
      who: 'Auctioneer'
      });
    ;
    const v365 = [v319, v321];
    await txn4.getOutput('Bidder_bid', 'v365', ctc5, v365);
    if (v320) {
      stdlib.protect(ctc6, await interact.seeBid(v299, v356), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv319 = v351;
      const cv320 = false;
      const cv321 = v356;
      const cv322 = v353;
      const cv323 = v322;
      
      v319 = cv319;
      v320 = cv320;
      v321 = cv321;
      v322 = cv322;
      v323 = cv323;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v299, v356), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv319 = v351;
      const cv320 = false;
      const cv321 = v356;
      const cv322 = v353;
      const cv323 = v322;
      
      v319 = cv319;
      v320 = cv320;
      v321 = cv321;
      v322 = cv322;
      v323 = cv323;
      
      continue;}
    
    }
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v389, time: v388, didSend: v215, from: v387 } = txn4;
  ;
  const v390 = stdlib.addressEq(v284, v387);
  stdlib.assert(v390, {
    at: './index.rsh:82:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  ;
  const v400 = stdlib.safeDiv(v321, stdlib.checkedBigNumberify('./index.rsh:86:50:decimal', stdlib.UInt_max, '100'));
  const v401 = stdlib.safeSub(v321, v400);
  if (v320) {
    stdlib.protect(ctc6, await interact.showOutcome(v319, v321), {
      at: './index.rsh:95:29:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v319, v321), {
      at: './index.rsh:95:29:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:34:function exp)'],
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
  
  
  const [v284, v285, v299, v318, v319, v320, v321, v322] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v340 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v341 = v340[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v343 = stdlib.gt(v341, v321);
  stdlib.assert(v343, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v285, v299, v318, v319, v320, v321, v322, v340],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v341, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v352], secs: v354, time: v353, didSend: v170, from: v351 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v356 = v352[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v356,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v365 = [v319, v321];
      const v366 = await txn1.getOutput('Bidder_bid', 'v365', ctc5, v365);
      
      if (v320) {
        const v603 = v351;
        const v604 = false;
        const v605 = v356;
        const v606 = v353;
        const v608 = stdlib.gt(v318, v322);
        if (v608) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v319,
          tok: undefined /* Nothing */
          });
        const v616 = v351;
        const v617 = false;
        const v618 = v356;
        const v619 = v353;
        const v621 = stdlib.gt(v318, v322);
        if (v621) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v352], secs: v354, time: v353, didSend: v170, from: v351 } = txn1;
  undefined /* setApiDetails */;
  const v356 = v352[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
  const v357 = stdlib.gt(v356, v321);
  stdlib.assert(v357, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v365 = [v319, v321];
  const v366 = await txn1.getOutput('Bidder_bid', 'v365', ctc5, v365);
  if (v170) {
    stdlib.protect(ctc6, await interact.out(v352, v366), {
      at: './index.rsh:56:19:application',
      fs: ['at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:61:31:application call to "notify" (defined at: ./index.rsh:60:43:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v320) {
    const v603 = v351;
    const v604 = false;
    const v605 = v356;
    const v606 = v353;
    const v608 = stdlib.gt(v318, v322);
    if (v608) {
      return;
      }
    else {
      return;
      }}
  else {
    ;
    const v616 = v351;
    const v617 = false;
    const v618 = v356;
    const v619 = v353;
    const v621 = stdlib.gt(v318, v322);
    if (v621) {
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
  
  
  const v281 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:29:53:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v282 = v281.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v282],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285], secs: v287, time: v286, didSend: v29, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v285
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
  const {data: [v285], secs: v287, time: v286, didSend: v29, from: v284 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v300, v301], secs: v303, time: v302, didSend: v43, from: v299 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v284, v285, v299, v300, v301, v302],
    evt_cnt: 0,
    funcNum: 2,
    lct: v302,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:41:20:decimal', stdlib.UInt_max, '1'), v285]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v306, time: v305, didSend: v50, from: v304 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:41:20:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v285
        });
      const v318 = stdlib.safeAdd(v302, v301);
      const v319 = v299;
      const v320 = true;
      const v321 = v300;
      const v322 = v305;
      const v323 = v302;
      
      if (await (async () => {
        const v337 = stdlib.gt(v318, v323);
        
        return v337;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v306, time: v305, didSend: v50, from: v304 } = txn3;
  ;
  ;
  const v313 = stdlib.addressEq(v284, v304);
  stdlib.assert(v313, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v318 = stdlib.safeAdd(v302, v301);
  let v319 = v299;
  let v320 = true;
  let v321 = v300;
  let v322 = v305;
  let v323 = v302;
  
  while (await (async () => {
    const v337 = stdlib.gt(v318, v323);
    
    return v337;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v352], secs: v354, time: v353, didSend: v170, from: v351 } = txn4;
    undefined /* setApiDetails */;
    const v356 = v352[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
    const v357 = stdlib.gt(v356, v321);
    stdlib.assert(v357, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'bid is too low',
      who: 'Owner'
      });
    ;
    const v365 = [v319, v321];
    await txn4.getOutput('Bidder_bid', 'v365', ctc5, v365);
    if (v320) {
      stdlib.protect(ctc6, await interact.seeBid(v284, v356), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv319 = v351;
      const cv320 = false;
      const cv321 = v356;
      const cv322 = v353;
      const cv323 = v322;
      
      v319 = cv319;
      v320 = cv320;
      v321 = cv321;
      v322 = cv322;
      v323 = cv323;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v284, v356), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv319 = v351;
      const cv320 = false;
      const cv321 = v356;
      const cv322 = v353;
      const cv323 = v322;
      
      v319 = cv319;
      v320 = cv320;
      v321 = cv321;
      v322 = cv322;
      v323 = cv323;
      
      continue;}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v284, v285, v299, v319, v320, v321],
    evt_cnt: 0,
    funcNum: 4,
    lct: v322,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v389, time: v388, didSend: v215, from: v387 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v319,
        tok: v285
        });
      const v400 = stdlib.safeDiv(v321, stdlib.checkedBigNumberify('./index.rsh:86:50:decimal', stdlib.UInt_max, '100'));
      const v401 = stdlib.safeSub(v321, v400);
      if (v320) {
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v285
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
          to: v284,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v299,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v285
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
  const {data: [], secs: v389, time: v388, didSend: v215, from: v387 } = txn4;
  ;
  const v390 = stdlib.addressEq(v284, v387);
  stdlib.assert(v390, {
    at: './index.rsh:82:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  const v400 = stdlib.safeDiv(v321, stdlib.checkedBigNumberify('./index.rsh:86:50:decimal', stdlib.UInt_max, '100'));
  const v401 = stdlib.safeSub(v321, v400);
  if (v320) {
    stdlib.protect(ctc6, await interact.showOutcome(v319, v321), {
      at: './index.rsh:95:29:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v319, v321), {
      at: './index.rsh:95:29:application',
      fs: ['at ./index.rsh:94:9:application call to [unknown function] (defined at: ./index.rsh:94:34:function exp)'],
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
  appApproval: `BiAKAAEEAiAFCAdIoI0GJgMBAAABASI1ADEYQQOkKWRJIls1ASEGWzUCNhoAF0lBABQiNQQjNQaBoJu8gQESRDYaAUIAJDYaAhc1BDYaAzYaARdJJQxAAdxJJAxAAXhJIQUMQAC9IQUSRCEHNAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpJVwAgNf8hBFs1/lcoIDX9IQhbNfxXUCA1+4FxWzX6gXlbNflJNQU1+IAEQbs9fTT4ULA0+BdJNfc0+g1ENPeIAxiACAAAAAAAAAFtNPs0+hZQULA0+zT6FlA1BzQDV3ABF0EAFDT/NP40/TT8MQAiNPcyBjT5QgH3sSKyATT6sggjshA0+7IHszT/NP40/TT8MQAiNPcyBjT5QgHTSCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/oFpWzX9gASRJzTzsDT/MQASRLEisgEjshIkshA0A1dIILIUNP6yEbM0/YFkCjX8NANXaAEXQQAasSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAduxIrIBNP00/AmyCCOyEDT/sgezsSKyATT8sggjshA0A1coILIHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgGbJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+VyggNf2BWFs1/IAEQbFATbAjNP6IAeY0/zEAEkQ0/zT+NP00/DQDgVBbCDT9IzQDIQhbMgY0/EIAwUkjDEAAZEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BUkiWzX9IQZbNfyABMe2CtU0/RZQNPwWULA0/zT+FlAxAFA0/RZQNPwWUDIGFlAoSwFXAGBnSCU1ATIGNQJCAO9IIQmIATsiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhCYgBFbEisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCAJg1/zX+Nf01/DX7Nfo1+TX4Nfc0+jT/DUEAOTT3NPgWUDT5UDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAH9nKksBV38CZ0ghBzUBMgY1AkIARTT3NPgWUDT5UDT7UDT8FlEHCFA0/RZQKEsBVwBxZ0gkNQEyBjUCQgAcMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
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
                "name": "v285",
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
                "name": "v285",
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
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
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
                "name": "v352",
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
    "name": "_reach_oe_v365",
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
                "name": "v300",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v301",
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
                "name": "v352",
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
  Bytecode: `0x608060405260405162001b7538038062001b758339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61189880620002dd6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a7661d54146100f4578063ab53f2c614610107578063b62792241461012a57005b80630693c662146100825780631e93b0f11461009557806342ae229d146100b95780637eea518c146100cc57005b3661008057005b005b610080610090366004611350565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c736600461136c565b610197565b6100806100da366004611350565b6101c9565b3480156100eb57600080fd5b506001546100a6565b610080610102366004611350565b6101fb565b34801561011357600080fd5b5061011c61022d565b6040516100b09291906113aa565b61013d6101383660046113e4565b6102ca565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b604080516060810182526000602082018181529282015290815261019361018d36849003840184611496565b82610321565b5050565b60408051606081018252600060208201818152928201529081526101936101c3368490038401846114ed565b82610654565b60408051606081018252600060208201818152928201529081526101936101f536849003840184611555565b82610866565b604080516060810182526000602082018181529282015290815261019361022736849003840184611555565b82610a5c565b6000606060005460028080546102429061158d565b80601f016020809104026020016040519081016040528092919081815260200182805461026e9061158d565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102e66111e0565b60208101515183905261030f604080516060810182526000602082018181529282015290815290565b6103198282610321565b519392505050565b6103316007600054146016610c96565b815161034c90158061034557508251600154145b6017610c96565b60008080556002805461035e9061158d565b80601f016020809104026020016040519081016040528092919081815260200182805461038a9061158d565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef91906115de565b9050610411604080516060810182526000602082018181529282015290815290565b60408051338152855160208083019190915286015151518183015290517fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d9181900360600190a160c08201516020850151515161047091106014610c96565b602084015151516104849034146015610c96565b608082015181516001600160a01b03909116905260c082015181516020015280516040517ff7c21eb3c1ea024de15c30538869f6b963be52b9140986a0694fd8267e3d279f916104ee9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260a08201511561058a5761050c61120d565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051339052805160009084015291880151515182519093019290925280514392019190915260e084015190516080015261058481610cbc565b5061064e565b81608001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f193505050501580156105cb573d6000803e3d6000fd5b506105d461120d565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051339052805160009084015291880151515182519093019290925280514392019190915260e084015190516080015261064c81610cbc565b505b50505050565b6106646001600054146009610c96565b815161067f90158061067857508251600154145b600a610c96565b6000808055600280546106919061158d565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd9061158d565b801561070a5780601f106106df5761010080835404028352916020019161070a565b820191906000526020600020905b8154815290600101906020018083116106ed57829003601f168201915b505050505080602001905181019061072291906116a4565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a161078134156008610c96565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825291518601516080808b019182524360a0808d0182815260026000556001929092558651998a019a909a5296518a1694880194909452935190971690850152945194830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061064c929190611269565b610876600260005414600e610c96565b815161089190158061088a57508251600154145b600f610c96565b6000808055600280546108a39061158d565b80601f01602080910402602001604051908101604052809291908181526020018280546108cf9061158d565b801561091c5780601f106108f15761010080835404028352916020019161091c565b820191906000526020600020905b8154815290600101906020018083116108ff57829003601f168201915b505050505080602001905181019061093491906116d5565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161098b3415600b610c96565b6109a561099e3383602001516001610ee0565b600c610c96565b80516109bd906001600160a01b03163314600d610c96565b6109c561120d565b815181516001600160a01b03918216905260208084015183519083169101526040808401518351921691015260a08201516080830151610a059190610ef8565b8151606090810191909152604080840151602080850180516001600160a01b03909316909252815160019101528483015181519092019190915280514392019190915260a083015190516080015261064e81610cbc565b610a6c6004600054146012610c96565b8151610a87901580610a8057508251600154145b6013610c96565b600080805560028054610a999061158d565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac59061158d565b8015610b125780601f10610ae757610100808354040283529160200191610b12565b820191906000526020600020905b815481529060010190602001808311610af557829003601f168201915b5050505050806020019051810190610b2a9190611744565b9050610b426040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1610b9534156010610c96565b8151610bad906001600160a01b031633146011610c96565b610bc1826020015183606001516001610f4b565b610bd08260a001516064610f5f565b8152608082015115610bf75760008080556001819055610bf2906002906112ed565b61064e565b81600001516001600160a01b03166108fc610c1a8460a001518460000151610fa6565b6040518115909202916000818181858888f19350505050158015610c42573d6000803e3d6000fd5b50604080830151825191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610c7f573d6000803e3d6000fd5b506000808055600181905561064e906002906112ed565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151608001518151606001511115610e1f576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015284516060908101518186015282860180515190941660808601528351830151151560a0860152835182015160c086015292519092015160e08401526007600055436001559051610df69183910160006101008201905060018060a01b03808451168352806020850151166020840152806040850151166040840152606084015160608401528060808501511660808401525060a0830151151560a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610e1a929190611269565b505050565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d51516001600160a01b03908116808e528f518b015182168a528f518f0151821689528f8b018051518316885280518c015115158652518f015183526004909b55436001558d51998a019a909a52965189169b88019b909b5293518716928601929092525190941693830193909352915115159481019490945251908301529060e001610df6565b50565b6000610eee83853085610ff5565b90505b9392505050565b600082610f0583826117d8565b9150811015610f455760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610cb3565b92915050565b610f568383836110cf565b610e1a57600080fd5b600081610f9c5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610cb3565b610ef182846117f0565b600082610fb38382611812565b9150811115610f455760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610cb3565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161105c91611829565b60006040518083038185875af1925050503d8060008114611099576040519150601f19603f3d011682016040523d82523d6000602084013e61109e565b606091505b50915091506110af828260016111a0565b50808060200190518101906110c49190611845565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161112e91611829565b60006040518083038185875af1925050503d806000811461116b576040519150601f19603f3d011682016040523d82523d6000602084013e611170565b606091505b5091509150611181828260026111a0565b50808060200190518101906111969190611845565b9695505050505050565b606083156111af575081610ef1565b8251156111bf5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610cb3565b905290565b6040518060400160405280600081526020016111db60408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b8280546112759061158d565b90600052602060002090601f01602090048101928261129757600085556112dd565b82601f106112b057805160ff19168380011785556112dd565b828001600101855582156112dd579182015b828111156112dd5782518255916020019190600101906112c2565b506112e9929150611323565b5090565b5080546112f99061158d565b6000825580601f10611309575050565b601f016020900490600052602060002090810190610edd91905b5b808211156112e95760008155600101611324565b60006040828403121561134a57600080fd5b50919050565b60006040828403121561136257600080fd5b610ef18383611338565b60006060828403121561134a57600080fd5b60005b83811015611399578181015183820152602001611381565b8381111561064e5750506000910152565b82815260406020820152600082518060408401526113cf81606085016020870161137e565b601f01601f1916919091016060019392505050565b6000602082840312156113f657600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561142e57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561142e57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561142e57634e487b7160e01b600052604160045260246000fd5b600081830360408112156114a957600080fd5b6114b16113fd565b833581526020601f19830112156114c757600080fd5b6114cf611434565b91506114d9611434565b602094850135815282529283015250919050565b6000818303606081121561150057600080fd5b6115086113fd565b833581526040601f198301121561151e57600080fd5b6115266113fd565b60208581013582526040909501358582015293810193909352509092915050565b8015158114610edd57600080fd5b60006040828403121561156757600080fd5b61156f6113fd565b82358152602083013561158181611547565b60208201529392505050565b600181811c908216806115a157607f821691505b6020821081141561134a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146115d957600080fd5b919050565b60006101008083850312156115f257600080fd5b6040519081019067ffffffffffffffff8211818310171561162357634e487b7160e01b600052604160045260246000fd5b81604052611630846115c2565b815261163e602085016115c2565b602082015261164f604085016115c2565b60408201526060840151606082015261166a608085016115c2565b608082015260a0840151915061167f82611547565b8160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6000604082840312156116b657600080fd5b6116be6113fd565b6116c7836115c2565b8152611581602084016115c2565b600060c082840312156116e757600080fd5b6116ef611465565b6116f8836115c2565b8152611706602084016115c2565b6020820152611717604084016115c2565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060c0828403121561175657600080fd5b61175e611465565b611767836115c2565b8152611775602084016115c2565b6020820152611786604084016115c2565b6040820152611797606084016115c2565b606082015260808301516117aa81611547565b608082015260a0928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117eb576117eb6117c2565b500190565b60008261180d57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611824576118246117c2565b500390565b6000825161183b81846020870161137e565b9190910192915050565b60006020828403121561185757600080fd5b8151610ef18161154756fea264697066735822122057cd1d127f37f56b51315f517440ab33fb99b34e9df744c79b80a8680171080264736f6c634300080c0033`,
  BytecodeLen: 7029,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:33:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:42:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:81:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:97:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:97:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:54:17:after expr stmt semicolon',
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
