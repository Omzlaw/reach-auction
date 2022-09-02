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
      6: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
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
  const {data: [v271], secs: v273, time: v272, didSend: v29, from: v270 } = txn1;
  ;
  ;
  const v280 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:39:83:application',
    fs: ['at ./index.rsh:38:20:application call to [unknown function] (defined at: ./index.rsh:38:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v281 = v280.lengthInBlocks;
  const v282 = v280.minimumAmount;
  
  const txn2 = await (ctc.sendrecv({
    args: [v270, v271, v282, v281],
    evt_cnt: 2,
    funcNum: 1,
    lct: v272,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v286, v287], secs: v289, time: v288, didSend: v43, from: v285 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v286, v287], secs: v289, time: v288, didSend: v43, from: v285 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v292, time: v291, didSend: v50, from: v290 } = txn3;
  ;
  ;
  const v299 = stdlib.addressEq(v270, v290);
  stdlib.assert(v299, {
    at: './index.rsh:47:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v304 = stdlib.safeAdd(v288, v287);
  let v305 = v285;
  let v306 = true;
  let v307 = v286;
  let v308 = v291;
  let v309 = v288;
  
  while (await (async () => {
    const v323 = stdlib.gt(v304, v309);
    
    return v323;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v338], secs: v340, time: v339, didSend: v170, from: v337 } = txn4;
    undefined /* setApiDetails */;
    const v342 = v338[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
    const v343 = stdlib.gt(v342, v307);
    stdlib.assert(v343, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
      msg: 'bid is too low',
      who: 'Auctioneer'
      });
    ;
    const v351 = [v305, v307];
    await txn4.getOutput('Bidder_bid', 'v351', ctc5, v351);
    if (v306) {
      stdlib.protect(ctc6, await interact.seeBid(v285, v342), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv305 = v337;
      const cv306 = false;
      const cv307 = v342;
      const cv308 = v339;
      const cv309 = v308;
      
      v305 = cv305;
      v306 = cv306;
      v307 = cv307;
      v308 = cv308;
      v309 = cv309;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v285, v342), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Auctioneer'
        });
      
      const cv305 = v337;
      const cv306 = false;
      const cv307 = v342;
      const cv308 = v339;
      const cv309 = v308;
      
      v305 = cv305;
      v306 = cv306;
      v307 = cv307;
      v308 = cv308;
      v309 = cv309;
      
      continue;}
    
    }
  ;
  if (v306) {
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  
  
  
  
  
  };
export async function _Bidder_bid6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v270, v271, v286, v304, v305, v306, v307, v308] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v326 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v327 = v326[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v329 = stdlib.gt(v327, v307);
  stdlib.assert(v329, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v270, v271, v286, v304, v305, v306, v307, v308, v326],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v327, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v338], secs: v340, time: v339, didSend: v170, from: v337 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v342 = v338[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v342,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v351 = [v305, v307];
      const v352 = await txn1.getOutput('Bidder_bid', 'v351', ctc5, v351);
      
      if (v306) {
        const v567 = v337;
        const v568 = false;
        const v569 = v342;
        const v570 = v339;
        const v572 = stdlib.gt(v304, v308);
        if (v572) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v337,
            tok: v271
            });
          sim_r.txns.push({
            kind: 'from',
            to: v270,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v271
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v305,
          tok: undefined /* Nothing */
          });
        const v573 = v337;
        const v574 = false;
        const v575 = v342;
        const v576 = v339;
        const v578 = stdlib.gt(v304, v308);
        if (v578) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v337,
            tok: v271
            });
          sim_r.txns.push({
            kind: 'from',
            to: v270,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v271
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v338], secs: v340, time: v339, didSend: v170, from: v337 } = txn1;
  undefined /* setApiDetails */;
  const v342 = v338[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
  const v343 = stdlib.gt(v342, v307);
  stdlib.assert(v343, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v351 = [v305, v307];
  const v352 = await txn1.getOutput('Bidder_bid', 'v351', ctc5, v351);
  if (v170) {
    stdlib.protect(ctc6, await interact.out(v338, v352), {
      at: './index.rsh:59:19:application',
      fs: ['at ./index.rsh:59:19:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)', 'at ./index.rsh:64:31:application call to "notify" (defined at: ./index.rsh:63:43:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v306) {
    const v567 = v337;
    const v568 = false;
    const v569 = v342;
    const v570 = v339;
    const v572 = stdlib.gt(v304, v308);
    if (v572) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v573 = v337;
    const v574 = false;
    const v575 = v342;
    const v576 = v339;
    const v578 = stdlib.gt(v304, v308);
    if (v578) {
      return;
      }
    else {
      ;
      ;
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
  
  
  const v267 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:32:53:application',
    fs: ['at ./index.rsh:31:15:application call to [unknown function] (defined at: ./index.rsh:31:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v268 = v267.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v268],
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
      
      
      const {data: [v271], secs: v273, time: v272, didSend: v29, from: v270 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v271
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
  const {data: [v271], secs: v273, time: v272, didSend: v29, from: v270 } = txn1;
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
  const {data: [v286, v287], secs: v289, time: v288, didSend: v43, from: v285 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v270, v271, v285, v286, v287, v288],
    evt_cnt: 0,
    funcNum: 2,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:11:dot', stdlib.UInt_max, '0'), [[v286, v271]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v292, time: v291, didSend: v50, from: v290 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: v286,
        kind: 'to',
        tok: v271
        });
      const v304 = stdlib.safeAdd(v288, v287);
      const v305 = v285;
      const v306 = true;
      const v307 = v286;
      const v308 = v291;
      const v309 = v288;
      
      if (await (async () => {
        const v323 = stdlib.gt(v304, v309);
        
        return v323;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v305,
          tok: v271
          });
        if (v306) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v271
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
            to: v270,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v271
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc4, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v292, time: v291, didSend: v50, from: v290 } = txn3;
  ;
  ;
  const v299 = stdlib.addressEq(v270, v290);
  stdlib.assert(v299, {
    at: './index.rsh:47:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v304 = stdlib.safeAdd(v288, v287);
  let v305 = v285;
  let v306 = true;
  let v307 = v286;
  let v308 = v291;
  let v309 = v288;
  
  while (await (async () => {
    const v323 = stdlib.gt(v304, v309);
    
    return v323;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v338], secs: v340, time: v339, didSend: v170, from: v337 } = txn4;
    undefined /* setApiDetails */;
    const v342 = v338[stdlib.checkedBigNumberify('./index.rsh:59:18:spread', stdlib.UInt_max, '0')];
    const v343 = stdlib.gt(v342, v307);
    stdlib.assert(v343, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:61:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)'],
      msg: 'bid is too low',
      who: 'Owner'
      });
    ;
    const v351 = [v305, v307];
    await txn4.getOutput('Bidder_bid', 'v351', ctc5, v351);
    if (v306) {
      stdlib.protect(ctc6, await interact.seeBid(v270, v342), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv305 = v337;
      const cv306 = false;
      const cv307 = v342;
      const cv308 = v339;
      const cv309 = v308;
      
      v305 = cv305;
      v306 = cv306;
      v307 = cv307;
      v308 = cv308;
      v309 = cv309;
      
      continue;}
    else {
      ;
      stdlib.protect(ctc6, await interact.seeBid(v270, v342), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:29:application call to [unknown function] (defined at: ./index.rsh:69:54:function exp)'],
        msg: 'seeBid',
        who: 'Owner'
        });
      
      const cv305 = v337;
      const cv306 = false;
      const cv307 = v342;
      const cv308 = v339;
      const cv309 = v308;
      
      v305 = cv305;
      v306 = cv306;
      v307 = cv307;
      v308 = cv308;
      v309 = cv309;
      
      continue;}
    
    }
  ;
  if (v306) {
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
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
  if (step == 6) {return _Bidder_bid6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BiAIAAEEAiAIBqCNBiYCAQAAIjUAMRhBAxQpZEkiWzUBIQVbNQI2GgAXSUEAFCI1BCM1BoGgm7yBARJENhoBQgAcNhoCFzUENhoDNhoBF0klDEABHkkkDEAAuSQSRCEGNAESRDQESSISTDQCEhFEKGRJNQNJSkpJVwAgNf8hBFs1/oEoWzX9gTBbNfxXOCA1+4FZWzX6gWFbNflJNQU1+IAEzjxwZjT4ULA0+BdJNfc0+g1ENPeIApKACAAAAAAAAAFfNPs0+hZQULA0+zT6FlA1BzQDV1gBF0EAFDT/NP40/TT8MQAiNPcyBjT5QgFEsSKyATT6sggjshA0+7IHszT/NP40/TT8MQAiNPcyBjT5QgEgJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+gUhbNf2BWFs1/IAEQbFATbA0/TT+iAITNP8xABJENP80/jT9NPw0A4FQWwg0A1coICM0/TIGNPxCAMFJIwxAAGRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/SEFWzX8gATHtgrVNP0WUDT8FlCwNP80/hZQMQBQNP0WUDT8FlAyBhZQKEsBVwBgZ0glNQEyBjUCQgEdSCEHiAFoIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwIQeIAUKxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgDGNf81/jX9Nfw1+zX6Nfk1+DX3NPo0/w1BADM09zT4FlA0+RZQNPoWUDT7UDT8FlEHCFA0/RZQNP4WUChLAVcAaWdIIQY1ATIGNQJCAHmxIrIBNPmyEiSyEDT7shQ0+LIRszT8QQAasSKyASKyEiSyEDIJshUyCrIUNPiyEbNCACqxIrIBNP2yCCOyEDT3sgezsSKyASKyEiSyEDIJshUyCrIUNPiyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v271",
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
                "name": "v271",
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
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v338",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v351",
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
        "internalType": "struct T12",
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
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v338",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001755380380620017558339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61147880620002dd6000396000f3fe60806040526004361061006e5760003560e01c80637eea518c1161004b5780637eea518c146100c157806383230757146100d4578063ab53f2c6146100e9578063b62792241461010c57005b80630cf4bd23146100775780631e93b0f11461008a57806342ae229d146100ae57005b3661007557005b005b610075610085366004610ffb565b610143565b34801561009657600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100bc366004611017565b610179565b6100756100cf366004610ffb565b6101ab565b3480156100e057600080fd5b5060015461009b565b3480156100f557600080fd5b506100fe6101dd565b6040516100a5929190611055565b61011f61011a36600461108f565b61027a565b6040805182516001600160a01b0316815260209283015192810192909252016100a5565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611110565b826102d1565b5050565b60408051606081018252600060208201818152928201529081526101756101a536849003840184611167565b826105f6565b60408051606081018252600060208201818152928201529081526101756101d7368490038401846111cf565b82610808565b6000606060005460028080546101f290611207565b80601f016020809104026020016040519081016040528092919081815260200182805461021e90611207565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610296610e8b565b6020810151518390526102bf604080516060810182526000602082018181529282015290815290565b6102c982826102d1565b519392505050565b6102e160066000541460126109fe565b81516102fc9015806102f557508251600154145b60136109fe565b60008080556002805461030e90611207565b80601f016020809104026020016040519081016040528092919081815260200182805461033a90611207565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f9190611258565b90506103c1604080516060810182526000602082018181529282015290815290565b60408051338152855160208083019190915286015151518183015290517f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f99181900360600190a160c082015160208501515151610420911060106109fe565b6020840151515161043490341460116109fe565b608082015181516001600160a01b03909116905260c082015181516020015280516040517faf193e909392ac2b4f7ea23a31d2592ae321f8a543577321330f65b9c95c2cf09161049e9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260a082015115610533576104bc610eb8565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201528284018051339052805160009085015292880151515183519092019190915281514391015260e084015190516080015261052d81610a24565b506105f0565b81608001516001600160a01b03166108fc8360c001519081150290604051600060405180830381858888f19350505050158015610574573d6000803e3d6000fd5b5061057d610eb8565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201528284018051339052805160009085015292880151515183519092019190915281514391015260e08401519051608001526105ee81610a24565b505b50505050565b61060660016000541460096109fe565b815161062190158061061a57508251600154145b600a6109fe565b60008080556002805461063390611207565b80601f016020809104026020016040519081016040528092919081815260200182805461065f90611207565b80156106ac5780601f10610681576101008083540402835291602001916106ac565b820191906000526020600020905b81548152906001019060200180831161068f57829003601f168201915b50505050508060200190518101906106c49190611317565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a1610723341560086109fe565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825291518601516080808b019182524360a0808d0182815260026000556001929092558651998a019a909a5296518a1694880194909452935190971690850152945194830194909452925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906105ee929190610f14565b610818600260005414600e6109fe565b815161083390158061082c57508251600154145b600f6109fe565b60008080556002805461084590611207565b80601f016020809104026020016040519081016040528092919081815260200182805461087190611207565b80156108be5780601f10610893576101008083540402835291602001916108be565b820191906000526020600020905b8154815290600101906020018083116108a157829003601f168201915b50505050508060200190518101906108d69190611348565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161092d3415600b6109fe565b61094a6109433383602001518460600151610c21565b600c6109fe565b8051610962906001600160a01b03163314600d6109fe565b61096a610eb8565b815181516001600160a01b03918216905260208084015183519216910152606082015181516040015260a082015160808301516109a79190610c39565b8151606090810191909152604080840151602080850180516001600160a01b03909316909252815160019101528483015181519092019190915280514392019190915260a08301519051608001526105f081610a24565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6020810151608001518151606001511115610b83576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528151516001600160a01b039081168252825160209081015182168184015283516040908101518185015284516060908101518186015282860180515190941660808601528351830151151560a0860152835182015160c086015292519092015160e08401526006600055436001559051610b5a9183910160006101008201905060018060a01b0380845116835280602085015116602084015260408401516040840152606084015160608401528060808501511660808401525060a0830151151560a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b7e929190610f14565b505050565b80516020808201519083015151604090920151610ba09290610c8c565b80602001516020015115610bc75760008080556001819055610bc490600290610f98565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c0a573d6000803e3d6000fd5b5060008080556001819055610bc490600290610f98565b6000610c2f83853085610ca0565b90505b9392505050565b600082610c4683826113e3565b9150811015610c865760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610a1b565b92915050565b610c97838383610d7a565b610b7e57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610d0791611409565b60006040518083038185875af1925050503d8060008114610d44576040519150601f19603f3d011682016040523d82523d6000602084013e610d49565b606091505b5091509150610d5a82826001610e4b565b5080806020019051810190610d6f9190611425565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610dd991611409565b60006040518083038185875af1925050503d8060008114610e16576040519150601f19603f3d011682016040523d82523d6000602084013e610e1b565b606091505b5091509150610e2c82826002610e4b565b5080806020019051810190610e419190611425565b9695505050505050565b60608315610e5a575081610c32565b825115610e6a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a1b565b905290565b604051806040016040528060008152602001610e8660408051808201909152600060208201908152815290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610f2090611207565b90600052602060002090601f016020900481019282610f425760008555610f88565b82601f10610f5b57805160ff1916838001178555610f88565b82800160010185558215610f88579182015b82811115610f88578251825591602001919060010190610f6d565b50610f94929150610fce565b5090565b508054610fa490611207565b6000825580601f10610fb4575050565b601f016020900490600052602060002090810190610bc491905b5b80821115610f945760008155600101610fcf565b600060408284031215610ff557600080fd5b50919050565b60006040828403121561100d57600080fd5b610c328383610fe3565b600060608284031215610ff557600080fd5b60005b8381101561104457818101518382015260200161102c565b838111156105f05750506000910152565b828152604060208201526000825180604084015261107a816060850160208701611029565b601f01601f1916919091016060019392505050565b6000602082840312156110a157600080fd5b5035919050565b6040805190810167ffffffffffffffff811182821017156110d957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156110d957634e487b7160e01b600052604160045260246000fd5b6000818303604081121561112357600080fd5b61112b6110a8565b833581526020601f198301121561114157600080fd5b6111496110df565b91506111536110df565b602094850135815282529283015250919050565b6000818303606081121561117a57600080fd5b6111826110a8565b833581526040601f198301121561119857600080fd5b6111a06110a8565b60208581013582526040909501358582015293810193909352509092915050565b8015158114610bc457600080fd5b6000604082840312156111e157600080fd5b6111e96110a8565b8235815260208301356111fb816111c1565b60208201529392505050565b600181811c9082168061121b57607f821691505b60208210811415610ff557634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461125357600080fd5b919050565b600061010080838503121561126c57600080fd5b6040519081019067ffffffffffffffff8211818310171561129d57634e487b7160e01b600052604160045260246000fd5b816040526112aa8461123c565b81526112b86020850161123c565b602082015260408401516040820152606084015160608201526112dd6080850161123c565b608082015260a084015191506112f2826111c1565b8160a082015260c084015160c082015260e084015160e0820152809250505092915050565b60006040828403121561132957600080fd5b6113316110a8565b61133a8361123c565b81526111fb6020840161123c565b600060c0828403121561135a57600080fd5b60405160c0810181811067ffffffffffffffff8211171561138b57634e487b7160e01b600052604160045260246000fd5b6040526113978361123c565b81526113a56020840161123c565b60208201526113b66040840161123c565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000821982111561140457634e487b7160e01b600052601160045260246000fd5b500190565b6000825161141b818460208701611029565b9190910192915050565b60006020828403121561143757600080fd5b8151610c32816111c156fea264697066735822122008d10fe0b64c96f7675b44e697cfddbaf4fa53171a9ff5a549659fa24dc4ed4f64736f6c634300080c0033`,
  BytecodeLen: 5973,
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
    at: './index.rsh:93:13:after expr stmt semicolon',
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
