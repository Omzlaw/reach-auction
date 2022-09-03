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
      4: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2],
      7: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
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
    minimumAmount: ctc1
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
    at: './index.rsh:39:83:application',
    fs: ['at ./index.rsh:38:20:application call to [unknown function] (defined at: ./index.rsh:38:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v286 = v285.lengthInBlocks;
  const v287 = v285.minimumAmount;
  
  const txn2 = await (ctc.sendrecv({
    args: [v275, v276, v287, v286],
    evt_cnt: 2,
    funcNum: 1,
    lct: v277,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, '0'), []],
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
    at: './index.rsh:47:11:dot',
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
    const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
    const v348 = stdlib.gt(v347, v312);
    stdlib.assert(v348, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
      msg: 'bid is too low',
      who: 'Auctioneer'
      });
    ;
    const v356 = [v310, v312];
    await txn4.getOutput('Bidder_bid', 'v356', ctc5, v356);
    if (v311) {
      stdlib.protect(ctc6, await interact.seeBid(v290, v347), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
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
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
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
    at: './index.rsh:84:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  ;
  if (v311) {
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:93:29:application',
      fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:93:29:application',
      fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:34:function exp)'],
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
  
  
  const [v275, v276, v291, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v331 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v332 = v331[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v334 = stdlib.gt(v332, v312);
  stdlib.assert(v334, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v275, v276, v291, v309, v310, v311, v312, v313, v331],
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
      const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
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
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v170, from: v342 } = txn1;
  undefined /* setApiDetails */;
  const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
  const v348 = stdlib.gt(v347, v312);
  stdlib.assert(v348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v356 = [v310, v312];
  const v357 = await txn1.getOutput('Bidder_bid', 'v356', ctc5, v356);
  if (v170) {
    stdlib.protect(ctc6, await interact.out(v343, v357), {
      at: './index.rsh:59:19:application',
      fs: ['at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)', 'at ./index.rsh:64:31:application call to "notify" (defined at: ./index.rsh:63:43:function exp)'],
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
    at: './index.rsh:32:53:application',
    fs: ['at ./index.rsh:31:15:application call to [unknown function] (defined at: ./index.rsh:31:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v273 = v272.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v273],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:11:decimal', stdlib.UInt_max, '0'), []],
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
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:11:dot', stdlib.UInt_max, '0'), [[v291, v276]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v297, time: v296, didSend: v50, from: v295 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: v291,
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
    at: './index.rsh:47:11:dot',
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
    const v347 = v343[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
    const v348 = stdlib.gt(v347, v312);
    stdlib.assert(v348, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
      msg: 'bid is too low',
      who: 'Owner'
      });
    ;
    const v356 = [v310, v312];
    await txn4.getOutput('Bidder_bid', 'v356', ctc5, v356);
    if (v311) {
      stdlib.protect(ctc6, await interact.seeBid(v275, v347), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
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
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
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
    args: [v275, v276, v291, v310, v311, v312],
    evt_cnt: 0,
    funcNum: 4,
    lct: v313,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:84:11:decimal', stdlib.UInt_max, '0'), []],
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
    tys: [ctc4, ctc0, ctc2, ctc4, ctc7, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v380, time: v379, didSend: v215, from: v378 } = txn4;
  ;
  const v381 = stdlib.addressEq(v275, v378);
  stdlib.assert(v381, {
    at: './index.rsh:84:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  ;
  if (v311) {
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:93:29:application',
      fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v310, v312), {
      at: './index.rsh:93:29:application',
      fs: ['at ./index.rsh:92:9:application call to [unknown function] (defined at: ./index.rsh:92:34:function exp)'],
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
  appApproval: `BiAKAAEEAiAFCAcooI0GJgIBAAAiNQAxGEEDgSlkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCACQ2GgIXNQQ2GgM2GgEXSSUMQAG+SSQMQAFZSSEFDEAAuiEFEkQhBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQRbNf4hCFs1/YEwWzX8VzggNfuBWVs1+oFhWzX5STUFNfiABEG7PX00+FCwNPgXSTX3NPoNRDT3iAL3gAgAAAAAAAABZDT7NPoWUFCwNPs0+hZQNQc0A1dYARdBABQ0/zT+NP00/DEAIjT3MgY0+UIB3LEisgE0+rIII7IQNPuyB7M0/zT+NP00/DEAIjT3MgY0+UIBuEgkNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/oAEkSc087A0/zEAEkSxIrIBNAMhCFuyEiSyEDQDVzAgshQ0/rIRszQDV1ABF0EAGrEisgEishIkshAyCbIVMgqyFDT+shGzQgHEsSKyATQDgVFbsggjshA0/7IHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgGXJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+gUhbNf2BWFs1/IAEQbFATbA0/TT+iAHgNP8xABJENP80/jT9NPw0A4FQWwg0A1coICM0/TIGNPxCAMFJIwxAAGRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/SEGWzX8gATHtgrVNP0WUDT8FlCwNP80/hZQMQBQNP0WUDT8FlAyBhZQKEsBVwBgZ0glNQEyBjUCQgDqSCEJiAE1IjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwIQmIAQ+xIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgCTNf81/jX9Nfw1+zX6Nfk1+DX3NPo0/w1BADM09zT4FlA0+RZQNPoWUDT7UDT8FlEHCFA0/RZQNP4WUChLAVcAaWdIIQc1ATIGNQJCAEY09zT4FlA0+RZQNPtQNPwWUQcIUDT9FlAoSwFXAFlnSCQ1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 105,
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
  Bytecode: `0x608060405260405162001a0838038062001a088339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61172b80620002dd6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df578063a7661d54146100f4578063ab53f2c614610107578063b62792241461012a57005b80630693c662146100825780631e93b0f11461009557806342ae229d146100b95780637eea518c146100cc57005b3661008057005b005b610080610090366004611232565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c736600461124e565b610197565b6100806100da366004611232565b6101c9565b3480156100eb57600080fd5b506001546100a6565b610080610102366004611232565b6101fb565b34801561011357600080fd5b5061011c61022d565b6040516100b092919061128c565b61013d6101383660046112c6565b6102ca565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b604080516060810182526000602082018181529282015290815261019361018d36849003840184611378565b82610321565b5050565b60408051606081018252600060208201818152928201529081526101936101c3368490038401846113cf565b82610646565b60408051606081018252600060208201818152928201529081526101936101f536849003840184611437565b82610858565b604080516060810182526000602082018181529282015290815261019361022736849003840184611437565b82610a4e565b6000606060005460028080546102429061146f565b80601f016020809104026020016040519081016040528092919081815260200182805461026e9061146f565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102e66110c2565b60208101515183905261030f604080516060810182526000602082018181529282015290815290565b6103198282610321565b519392505050565b6103316007600054146016610c1b565b815161034c90158061034557508251600154145b6017610c1b565b60008080556002805461035e9061146f565b80601f016020809104026020016040519081016040528092919081815260200182805461038a9061146f565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef91906114c0565b9050610411604080516060810182526000602082018181529282015290815290565b60408051338152855160208083019190915286015151518183015290517fc55e6813659179108696e4402c6ac0aad47a66a412d076c5417e97b9b278904d9181900360600190a160c08201516020850151515161047091106014610c1b565b602084015151516104849034146015610c1b565b608082015181516001600160a01b03909116905260c082015181516020015280516040517f049ae3baf7f124a02d2691ea4413c34811c3d713b6c5eacc85699951d1c45cdc916104ee9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260a0820151156105835761050c6110ef565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201528284018051339052805160009085015292880151515183519092019190915281514391015260e084015190516080015261057d81610c41565b50610640565b81608001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f193505050501580156105c4573d6000803e3d6000fd5b506105cd6110ef565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201528284018051339052805160009085015292880151515183519092019190915281514391015260e084015190516080015261063e81610c41565b505b50505050565b6106566001600054146009610c1b565b815161067190158061066a57508251600154145b600a610c1b565b6000808055600280546106839061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546106af9061146f565b80156106fc5780601f106106d1576101008083540402835291602001916106fc565b820191906000526020600020905b8154815290600101906020018083116106df57829003601f168201915b5050505050806020019051810190610714919061157f565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a161077334156008610c1b565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825291518601516080808b019182524360a0808d0182815260026000556001929092558651998a019a909a5296518a1694880194909452935190971690850152945194830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061063e92919061114b565b610868600260005414600e610c1b565b815161088390158061087c57508251600154145b600f610c1b565b6000808055600280546108959061146f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c19061146f565b801561090e5780601f106108e35761010080835404028352916020019161090e565b820191906000526020600020905b8154815290600101906020018083116108f157829003601f168201915b505050505080602001905181019061092691906115b0565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161097d3415600b610c1b565b61099a6109933383602001518460600151610e58565b600c610c1b565b80516109b2906001600160a01b03163314600d610c1b565b6109ba6110ef565b815181516001600160a01b03918216905260208084015183519216910152606082015181516040015260a082015160808301516109f79190610e70565b8151606090810191909152604080840151602080850180516001600160a01b03909316909252815160019101528483015181519092019190915280514392019190915260a083015190516080015261064081610c41565b610a5e6004600054146012610c1b565b8151610a79901580610a7257508251600154145b6013610c1b565b600080805560028054610a8b9061146f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab79061146f565b8015610b045780601f10610ad957610100808354040283529160200191610b04565b820191906000526020600020905b815481529060010190602001808311610ae757829003601f168201915b5050505050806020019051810190610b1c919061161f565b60408051338152855160208083019190915286015115158183015290519192507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722919081900360600190a1610b7334156010610c1b565b8051610b8b906001600160a01b031633146011610c1b565b610ba2816020015182606001518360400151610ec3565b806080015115610bc75760008080556001819055610bc2906002906111cf565b505050565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c04573d6000803e3d6000fd5b5060008080556001819055610bc2906002906111cf565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151608001518151606001511115610d9b576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528151516001600160a01b039081168252825160209081015182168184015283516040908101518185015284516060908101518186015282860180515190941660808601528351830151151560a0860152835182015160c086015292519092015160e08401526007600055436001559051610d779183910160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a0830151151560a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610bc292919061114b565b6040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528d51516001600160a01b03908116808e528f518b015182168a528f518f015189528f8b018051518316885280518c015115158652518f015183526004909b55436001558d51998a019a909a52965189169b88019b909b529351928601929092525190941693830193909352915115159481019490945251908301529060e001610d77565b50565b6000610e6683853085610ed7565b90505b9392505050565b600082610e7d8382611696565b9150811015610ebd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c38565b92915050565b610ece838383610fb1565b610bc257600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610f3e916116bc565b60006040518083038185875af1925050503d8060008114610f7b576040519150601f19603f3d011682016040523d82523d6000602084013e610f80565b606091505b5091509150610f9182826001611082565b5080806020019051810190610fa691906116d8565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611010916116bc565b60006040518083038185875af1925050503d806000811461104d576040519150601f19603f3d011682016040523d82523d6000602084013e611052565b606091505b509150915061106382826002611082565b508080602001905181019061107891906116d8565b9695505050505050565b60608315611091575081610e69565b8251156110a15782518084602001fd5b60405163100960cb60e01b815260048101839052602401610c38565b905290565b6040518060400160405280600081526020016110bd60408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b8280546111579061146f565b90600052602060002090601f01602090048101928261117957600085556111bf565b82601f1061119257805160ff19168380011785556111bf565b828001600101855582156111bf579182015b828111156111bf5782518255916020019190600101906111a4565b506111cb929150611205565b5090565b5080546111db9061146f565b6000825580601f106111eb575050565b601f016020900490600052602060002090810190610e5591905b5b808211156111cb5760008155600101611206565b60006040828403121561122c57600080fd5b50919050565b60006040828403121561124457600080fd5b610e69838361121a565b60006060828403121561122c57600080fd5b60005b8381101561127b578181015183820152602001611263565b838111156106405750506000910152565b82815260406020820152600082518060408401526112b1816060850160208701611260565b601f01601f1916919091016060019392505050565b6000602082840312156112d857600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561131057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561131057634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561131057634e487b7160e01b600052604160045260246000fd5b6000818303604081121561138b57600080fd5b6113936112df565b833581526020601f19830112156113a957600080fd5b6113b1611316565b91506113bb611316565b602094850135815282529283015250919050565b600081830360608112156113e257600080fd5b6113ea6112df565b833581526040601f198301121561140057600080fd5b6114086112df565b60208581013582526040909501358582015293810193909352509092915050565b8015158114610e5557600080fd5b60006040828403121561144957600080fd5b6114516112df565b82358152602083013561146381611429565b60208201529392505050565b600181811c9082168061148357607f821691505b6020821081141561122c57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146114bb57600080fd5b919050565b60006101008083850312156114d457600080fd5b6040519081019067ffffffffffffffff8211818310171561150557634e487b7160e01b600052604160045260246000fd5b81604052611512846114a4565b8152611520602085016114a4565b60208201526040840151604082015260608401516060820152611545608085016114a4565b608082015260a0840151915061155a82611429565b8160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006040828403121561159157600080fd5b6115996112df565b6115a2836114a4565b8152611463602084016114a4565b600060c082840312156115c257600080fd5b6115ca611347565b6115d3836114a4565b81526115e1602084016114a4565b60208201526115f2604084016114a4565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060c0828403121561163157600080fd5b611639611347565b611642836114a4565b8152611650602084016114a4565b60208201526040830151604082015261166b606084016114a4565b6060820152608083015161167e81611429565b608082015260a0928301519281019290925250919050565b600082198211156116b757634e487b7160e01b600052601160045260246000fd5b500190565b600082516116ce818460208701611260565b9190910192915050565b6000602082840312156116ea57600080fd5b8151610e698161142956fea26469706673582212200dc98458d5040d0177b333a0e3b839e360929e822a1a27d80b8ba59441b6ea4c64736f6c634300080c0033`,
  BytecodeLen: 6664,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:45:13:after expr stmt semicolon',
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
    at: './index.rsh:95:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:95:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:57:17:after expr stmt semicolon',
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
