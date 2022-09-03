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
      4: [ctc0, ctc1, ctc0, ctc3, ctc2],
      7: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
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
  const {data: [v276], secs: v278, time: v277, didSend: v29, from: v275 } = txn1;
  ;
  ;
  const v285 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:36:78:application',
    fs: ['at ./index.rsh:35:20:application call to [unknown function] (defined at: ./index.rsh:35:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v286 = v285.lengthInBlocks;
  const v287 = v285.minPrice;
  
  const txn2 = await (ctc.sendrecv({
    args: [v275, v276, v287, v286],
    evt_cnt: 2,
    funcNum: 1,
    lct: v277,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v291, v292], secs: v294, time: v293, didSend: v43, from: v290 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v291, v292], secs: v294, time: v293, didSend: v43, from: v290 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v297, time: v296, didSend: v50, from: v295 } = txn3;
  ;
  ;
  const v304 = stdlib.addressEq(v275, v295);
  stdlib.assert(v304, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v309 = stdlib.safeAdd(v293, v292);
  let v310 = v290;
  let v311 = true;
  let v312 = v291;
  let v313 = v296;
  let v314 = v293;
  
  while (await (async () => {
    const v328 = stdlib.gt(v309, v314);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v343], secs: v345, time: v344, didSend: v170, from: v342 } = txn4;
    undefined /* setApiDetails */;
    const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
    const v348 = stdlib.gt(v347, v312);
    stdlib.assert(v348, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'bid is too low',
      who: 'Auctioneer'
      });
    ;
    const v356 = [v310, v312];
    await txn4.getOutput('Bidder_bid', 'v356', ctc5, v356);
    if (v311) {
      stdlib.protect(ctc6, await interact.seeBid(v290, v347), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv310 = v342;
      const cv311 = false;
      const cv312 = v347;
      const cv313 = v344;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v290, v347), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv310 = v342;
      const cv311 = false;
      const cv312 = v347;
      const cv313 = v344;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
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
  const {data: [], secs: v380, time: v379, didSend: v215, from: v378 } = txn4;
  ;
  const v381 = stdlib.addressEq(v275, v378);
  stdlib.assert(v381, {
    at: './index.rsh:82:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  ;
  if (v311) {
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
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
  
  
  const [v275, v276, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v331 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v332 = v331[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v334 = stdlib.gt(v332, v312);
  stdlib.assert(v334, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v275, v276, v309, v310, v311, v312, v313, v331],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v332, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v343], secs: v345, time: v344, didSend: v170, from: v342 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v347,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v356 = [v310, v312];
      const v357 = await txn1.getOutput('Bidder_bid', 'v356', ctc5, v356);
      
      if (v311) {
        const v588 = v342;
        const v589 = false;
        const v590 = v347;
        const v591 = v344;
        const v593 = stdlib.gt(v309, v313);
        if (v593) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v599 = v342;
        const v600 = false;
        const v601 = v347;
        const v602 = v344;
        const v604 = stdlib.gt(v309, v313);
        if (v604) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v170, from: v342 } = txn1;
  undefined /* setApiDetails */;
  const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
  const v348 = stdlib.gt(v347, v312);
  stdlib.assert(v348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v356 = [v310, v312];
  const v357 = await txn1.getOutput('Bidder_bid', 'v356', ctc5, v356);
  if (v170) {
    stdlib.protect(ctc6, await interact.out(v343, v357), {
      at: './index.rsh:56:19:application',
      fs: ['at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)', 'at ./index.rsh:61:31:application call to "notify" (defined at: ./index.rsh:60:43:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v311) {
    const v588 = v342;
    const v589 = false;
    const v590 = v347;
    const v591 = v344;
    const v593 = stdlib.gt(v309, v313);
    if (v593) {
      return;
      }
    else {
      return;
      }}
  else {
    ;
    const v599 = v342;
    const v600 = false;
    const v601 = v347;
    const v602 = v344;
    const v604 = stdlib.gt(v309, v313);
    if (v604) {
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
  
  
  const v272 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:29:53:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v273 = v272.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v273],
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
      
      
      const {data: [v276], secs: v278, time: v277, didSend: v29, from: v275 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v276
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
  const {data: [v276], secs: v278, time: v277, didSend: v29, from: v275 } = txn1;
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
  const {data: [v291, v292], secs: v294, time: v293, didSend: v43, from: v290 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v275, v276, v290, v291, v292, v293],
    evt_cnt: 0,
    funcNum: 2,
    lct: v293,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:41:20:decimal', stdlib.UInt_max, '1'), v276]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v297, time: v296, didSend: v50, from: v295 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:41:20:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v276
        });
      const v309 = stdlib.safeAdd(v293, v292);
      const v310 = v290;
      const v311 = true;
      const v312 = v291;
      const v313 = v296;
      const v314 = v293;
      
      if (await (async () => {
        const v328 = stdlib.gt(v309, v314);
        
        return v328;})()) {
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
  const {data: [], secs: v297, time: v296, didSend: v50, from: v295 } = txn3;
  ;
  ;
  const v304 = stdlib.addressEq(v275, v295);
  stdlib.assert(v304, {
    at: './index.rsh:44:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v309 = stdlib.safeAdd(v293, v292);
  let v310 = v290;
  let v311 = true;
  let v312 = v291;
  let v313 = v296;
  let v314 = v293;
  
  while (await (async () => {
    const v328 = stdlib.gt(v309, v314);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v343], secs: v345, time: v344, didSend: v170, from: v342 } = txn4;
    undefined /* setApiDetails */;
    const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:56:18:spread', stdlib.UInt_max, '0')];
    const v348 = stdlib.gt(v347, v312);
    stdlib.assert(v348, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:58:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)', 'at ./index.rsh:57:23:application call to [unknown function] (defined at: ./index.rsh:57:23:function exp)'],
      msg: 'bid is too low',
      who: 'Owner'
      });
    ;
    const v356 = [v310, v312];
    await txn4.getOutput('Bidder_bid', 'v356', ctc5, v356);
    if (v311) {
      stdlib.protect(ctc6, await interact.seeBid(v275, v347), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv310 = v342;
      const cv311 = false;
      const cv312 = v347;
      const cv313 = v344;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v275, v347), {
        at: './index.rsh:68:44:application',
        fs: ['at ./index.rsh:67:29:application call to [unknown function] (defined at: ./index.rsh:67:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv310 = v342;
      const cv311 = false;
      const cv312 = v347;
      const cv313 = v344;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      continue;}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v275, v276, v310, v311, v312],
    evt_cnt: 0,
    funcNum: 4,
    lct: v313,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v380, time: v379, didSend: v215, from: v378 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v310,
        tok: v276
        });
      if (v311) {
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v276
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
          to: v275,
          tok: undefined /* Nothing */
          });
        
        sim_r.txns.push({
          kind: 'halt',
          tok: v276
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
    tys: [ctc4, ctc0, ctc4, ctc7, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v380, time: v379, didSend: v215, from: v378 } = txn4;
  ;
  const v381 = stdlib.addressEq(v275, v378);
  stdlib.assert(v381, {
    at: './index.rsh:82:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  if (v311) {
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
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
  appApproval: `BiAJAAEEAiAFCAegjQYmAgEAACI1ADEYQQNkKWRJIls1ASEGWzUCNhoAF0lBABQiNQQjNQaBoJu8gQESRDYaAUIAJDYaAhc1BDYaAzYaARdJJQxAAatJJAxAAUtJIQUMQACwIQUSRCEHNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEEWzX+gShbNf1XMCA1/IFRWzX7gVlbNfpJNQU1+YAEQbs9fTT5ULA0+RdJNfg0+w1ENPiIAuCACAAAAAAAAAFkNPw0+xZQULA0/DT7FlA1BzQDV1ABF0EAEjT/NP40/TEAIjT4MgY0+kIB0bEisgE0+7III7IQNPyyB7M0/zT+NP0xACI0+DIGNPpCAa9IJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABJEnNPOwNP8xABJEsSKyASOyEiSyEDQDVyggshQ0/rIRszQDV0gBF0EAGrEisgEishIkshAyCbIVMgqyFDT+shGzQgG1sSKyATQDgUlbsggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgGIJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+gVhbNf2ABEGxQE2wIzT+iAHXNP8xABJENP80/jT9NAOBUFsINANXKCAjNAOBSFsyBjT9QgDBSSMMQABkSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+STUFSSJbNf0hBls1/IAEx7YK1TT9FlA0/BZQsDT/NP4WUDEAUDT9FlA0/BZQMgYWUChLAVcAYGdIJTUBMgY1AkIA4EghCIgBKyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCEIiAEFsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUChLAVcAKGdIIzUBMgY1AkIAiTX/Nf41/TX8Nfs1+jX5Nfg0+jT/DUEALzT4NPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAGFnSCEHNQEyBjUCQgBCNPg0+RZQNPtQNPwWUQcIUDT9FlAoSwFXAFFnSCQ1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
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
                "name": "v276",
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
                "name": "v276",
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
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
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
                "name": "v343",
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
    "name": "_reach_oe_v356",
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
                "name": "v291",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v292",
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
                "name": "v343",
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
  Bytecode: `0x6080604052604051620019a0380380620019a08339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b6116c380620002dd6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a7661d54146100f4578063ab53f2c614610107578063b62792241461012a57005b80630693c662146100825780631e93b0f11461009557806342ae229d146100b95780637eea518c146100cc57005b3661008057005b005b6100806100903660046111bf565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c73660046111db565b610197565b6100806100da3660046111bf565b6101c9565b3480156100eb57600080fd5b506001546100a6565b6100806101023660046111bf565b6101fb565b34801561011357600080fd5b5061011c61022d565b6040516100b0929190611219565b61013d610138366004611253565b6102ca565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b604080516060810182526000602082018181529282015290815261019361018d368490038401846112d4565b82610321565b5050565b60408051606081018252600060208201818152928201529081526101936101c33684900384018461132b565b82610630565b60408051606081018252600060208201818152928201529081526101936101f536849003840184611393565b82610842565b604080516060810182526000602082018181529282015290815261019361022736849003840184611393565b82610a2a565b600060606000546002808054610242906113cb565b80601f016020809104026020016040519081016040528092919081815260200182805461026e906113cb565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102e6611056565b60208101515183905261030f604080516060810182526000602082018181529282015290815290565b6103198282610321565b519392505050565b6103316007600054146016610bf4565b815161034c90158061034557508251600154145b6017610bf4565b60008080556002805461035e906113cb565b80601f016020809104026020016040519081016040528092919081815260200182805461038a906113cb565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef919061141c565b9050610411604080516060810182526000602082018181529282015290815290565b60408051338152855160208083019190915286015151518183015290517fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d9181900360600190a160a08201516020850151515161047091106014610bf4565b602084015151516104849034146015610bf4565b606082015181516001600160a01b03909116905260a082015181516020015280516040517f049ae3baf7f124a02d2691ea4413c34811c3d713b6c5eacc85699951d1c45cdc916104ee9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a1805183526080820151156105785761050c611083565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c084015190516080015261057281610c1a565b5061062a565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f193505050501580156105b9573d6000803e3d6000fd5b506105c2611083565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c084015190516080015261062881610c1a565b505b50505050565b6106406001600054146009610bf4565b815161065b90158061065457508251600154145b600a610bf4565b60008080556002805461066d906113cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610699906113cb565b80156106e65780601f106106bb576101008083540402835291602001916106e6565b820191906000526020600020905b8154815290600101906020018083116106c957829003601f168201915b50505050508060200190518101906106fe91906114c9565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a161075d34156008610bf4565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825291518601516080808b019182524360a0808d0182815260026000556001929092558651998a019a909a5296518a1694880194909452935190971690850152945194830194909452925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906106289291906110d8565b610852600260005414600e610bf4565b815161086d90158061086657508251600154145b600f610bf4565b60008080556002805461087f906113cb565b80601f01602080910402602001604051908101604052809291908181526020018280546108ab906113cb565b80156108f85780601f106108cd576101008083540402835291602001916108f8565b820191906000526020600020905b8154815290600101906020018083116108db57829003601f168201915b505050505080602001905181019061091091906114fa565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a16109673415600b610bf4565b61098161097a3383602001516001610dec565b600c610bf4565b8051610999906001600160a01b03163314600d610bf4565b6109a1611083565b815181516001600160a01b0391821690526020808401518351921691015260a082015160808301516109d39190610e04565b815160409081019190915282810151602080840180516001600160a01b039093169092528151600191015260608085015182519093019290925280514392019190915260a083015190516080015261062a81610c1a565b610a3a6004600054146012610bf4565b8151610a55901580610a4e57508251600154145b6013610bf4565b600080805560028054610a67906113cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610a93906113cb565b8015610ae05780601f10610ab557610100808354040283529160200191610ae0565b820191906000526020600020905b815481529060010190602001808311610ac357829003601f168201915b5050505050806020019051810190610af89190611595565b60408051338152855160208083019190915286015115158183015290519192507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722919081900360600190a1610b4f34156010610bf4565b8051610b67906001600160a01b031633146011610bf4565b610b7b816020015182604001516001610e57565b806060015115610ba05760008080556001819055610b9b9060029061115c565b505050565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610bdd573d6000803e3d6000fd5b5060008080556001819055610b9b9060029061115c565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151608001518151604001511115610d46576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260076000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e0820152610100015b60405160208183030381529060405260029080519060200190610b9b9291906110d8565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b51516001600160a01b03908116808c528d51890151821688528d89018051518316885280518a015115158652518d015183526004909955436001558b51978801989098529451871699860199909952915190941693830193909352915115159481019490945251908301529060c001610d22565b50565b6000610dfa83853085610e6b565b90505b9392505050565b600082610e11838261162e565b9150811015610e515760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c11565b92915050565b610e62838383610f45565b610b9b57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610ed291611654565b60006040518083038185875af1925050503d8060008114610f0f576040519150601f19603f3d011682016040523d82523d6000602084013e610f14565b606091505b5091509150610f2582826001611016565b5080806020019051810190610f3a9190611670565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610fa491611654565b60006040518083038185875af1925050503d8060008114610fe1576040519150601f19603f3d011682016040523d82523d6000602084013e610fe6565b606091505b5091509150610ff782826002611016565b508080602001905181019061100c9190611670565b9695505050505050565b60608315611025575081610dfd565b8251156110355782518084602001fd5b60405163100960cb60e01b815260048101839052602401610c11565b905290565b60405180604001604052806000815260200161105160408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b8280546110e4906113cb565b90600052602060002090601f016020900481019282611106576000855561114c565b82601f1061111f57805160ff191683800117855561114c565b8280016001018555821561114c579182015b8281111561114c578251825591602001919060010190611131565b50611158929150611192565b5090565b508054611168906113cb565b6000825580601f10611178575050565b601f016020900490600052602060002090810190610de991905b5b808211156111585760008155600101611193565b6000604082840312156111b957600080fd5b50919050565b6000604082840312156111d157600080fd5b610dfd83836111a7565b6000606082840312156111b957600080fd5b60005b838110156112085781810151838201526020016111f0565b8381111561062a5750506000910152565b828152604060208201526000825180604084015261123e8160608501602087016111ed565b601f01601f1916919091016060019392505050565b60006020828403121561126557600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561129d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561129d57634e487b7160e01b600052604160045260246000fd5b600081830360408112156112e757600080fd5b6112ef61126c565b833581526020601f198301121561130557600080fd5b61130d6112a3565b91506113176112a3565b602094850135815282529283015250919050565b6000818303606081121561133e57600080fd5b61134661126c565b833581526040601f198301121561135c57600080fd5b61136461126c565b60208581013582526040909501358582015293810193909352509092915050565b8015158114610de957600080fd5b6000604082840312156113a557600080fd5b6113ad61126c565b8235815260208301356113bf81611385565b60208201529392505050565b600181811c908216806113df57607f821691505b602082108114156111b957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461141757600080fd5b919050565b600060e0828403121561142e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561145f57634e487b7160e01b600052604160045260246000fd5b60405261146b83611400565b815261147960208401611400565b60208201526040830151604082015261149460608401611400565b606082015260808301516114a781611385565b608082015260a0838101519082015260c0928301519281019290925250919050565b6000604082840312156114db57600080fd5b6114e361126c565b6114ec83611400565b81526113bf60208401611400565b600060c0828403121561150c57600080fd5b60405160c0810181811067ffffffffffffffff8211171561153d57634e487b7160e01b600052604160045260246000fd5b60405261154983611400565b815261155760208401611400565b602082015261156860408401611400565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060a082840312156115a757600080fd5b60405160a0810181811067ffffffffffffffff821117156115d857634e487b7160e01b600052604160045260246000fd5b6040526115e483611400565b81526115f260208401611400565b602082015261160360408401611400565b6040820152606083015161161681611385565b60608201526080928301519281019290925250919050565b6000821982111561164f57634e487b7160e01b600052601160045260246000fd5b500190565b600082516116668184602087016111ed565b9190910192915050565b60006020828403121561168257600080fd5b8151610dfd8161138556fea2646970667358221220b38591956a7e5c19a4beb6c29acb6144d6e6847fec5535c8fa2973ddb42fda6664736f6c634300080c0033`,
  BytecodeLen: 6560,
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
    at: './index.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:93:13:after expr stmt semicolon',
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
