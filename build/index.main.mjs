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
      2: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]
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
  const ctc3 = stdlib.T_Object({
    minBid: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v296], secs: v298, time: v297, didSend: v29, from: v295 } = txn1;
  ;
  ;
  const v305 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:40:83:application',
    fs: ['at ./index.rsh:39:20:application call to [unknown function] (defined at: ./index.rsh:39:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v306 = v305.lengthInBlocks;
  const v307 = v305.minimumAmount;
  
  const v312 = stdlib.protect(ctc3, await interact.setMinBid(), {
    at: './index.rsh:44:57:application',
    fs: ['at ./index.rsh:43:20:application call to [unknown function] (defined at: ./index.rsh:43:24:function exp)'],
    msg: 'setMinBid',
    who: 'Auctioneer'
    });
  const v313 = v312.minBid;
  
  const txn2 = await (ctc.sendrecv({
    args: [v295, v296, v307, v306, v313],
    evt_cnt: 3,
    funcNum: 1,
    lct: v297,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v50, from: v315 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v50, from: v315 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v323, time: v322, didSend: v57, from: v321 } = txn3;
  ;
  ;
  const v330 = stdlib.addressEq(v295, v321);
  stdlib.assert(v330, {
    at: './index.rsh:51:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v335 = stdlib.safeAdd(v319, v317);
  let v336 = v315;
  let v337 = true;
  let v338 = v318;
  let v339 = v322;
  let v340 = v319;
  
  while (await (async () => {
    const v354 = stdlib.le(v340, v335);
    
    return v354;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: ['time', v335],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v295, v296, v315, v316, v335, v336, v337, v338, v339],
        evt_cnt: 0,
        funcNum: 5,
        lct: v339,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:80:24:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v412, time: v411, didSend: v234, from: v410 } = txn5;
          
          ;
          const cv336 = v336;
          const cv337 = v337;
          const cv338 = v338;
          const cv339 = v411;
          const cv340 = v339;
          
          await (async () => {
            const v336 = cv336;
            const v337 = cv337;
            const v338 = cv338;
            const v339 = cv339;
            const v340 = cv340;
            
            if (await (async () => {
              const v354 = stdlib.le(v340, v335);
              
              return v354;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: v296
                });
              if (v337) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v296
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
                  to: v295,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v296
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc0, ctc5, ctc1, ctc1, ctc5, ctc8, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v412, time: v411, didSend: v234, from: v410 } = txn5;
      ;
      const v413 = stdlib.addressEq(v315, v410);
      stdlib.assert(v413, {
        at: './index.rsh:80:24:dot',
        fs: ['at ./index.rsh:79:40:application call to [unknown function] (defined at: ./index.rsh:79:40:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      const cv336 = v336;
      const cv337 = v337;
      const cv338 = v338;
      const cv339 = v411;
      const cv340 = v339;
      
      v336 = cv336;
      v337 = cv337;
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      
      continue;
      }
    else {
      const {data: [v373], secs: v375, time: v374, didSend: v176, from: v372 } = txn4;
      undefined /* setApiDetails */;
      const v377 = v373[stdlib.checkedBigNumberify('./index.rsh:62:14:spread', stdlib.UInt_max, '0')];
      const v378 = stdlib.gt(v377, v338);
      stdlib.assert(v378, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:63:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)'],
        msg: 'bid is too low',
        who: 'Auctioneer'
        });
      ;
      const v386 = [v336, v338];
      await txn4.getOutput('Bidder_bid', 'v386', ctc6, v386);
      if (v337) {
        stdlib.protect(ctc7, await interact.seeBid(v372, v377), {
          at: './index.rsh:73:36:application',
          fs: ['at ./index.rsh:72:21:application call to [unknown function] (defined at: ./index.rsh:72:46:function exp)', 'at ./index.rsh:65:35:application call to [unknown function] (defined at: ./index.rsh:65:35:function exp)'],
          msg: 'seeBid',
          who: 'Auctioneer'
          });
        
        const cv336 = v372;
        const cv337 = false;
        const cv338 = v377;
        const cv339 = v374;
        const cv340 = v339;
        
        v336 = cv336;
        v337 = cv337;
        v338 = cv338;
        v339 = cv339;
        v340 = cv340;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc7, await interact.seeBid(v372, v377), {
          at: './index.rsh:73:36:application',
          fs: ['at ./index.rsh:72:21:application call to [unknown function] (defined at: ./index.rsh:72:46:function exp)', 'at ./index.rsh:65:35:application call to [unknown function] (defined at: ./index.rsh:65:35:function exp)'],
          msg: 'seeBid',
          who: 'Auctioneer'
          });
        
        const cv336 = v372;
        const cv337 = false;
        const cv338 = v377;
        const cv339 = v374;
        const cv340 = v339;
        
        v336 = cv336;
        v337 = cv337;
        v338 = cv338;
        v339 = cv339;
        v340 = cv340;
        
        continue;}}
    
    }
  ;
  if (v337) {
    stdlib.protect(ctc7, await interact.showOutcome(v336, v338), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc7, await interact.showOutcome(v336, v338), {
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
  
  
  const [v295, v296, v315, v316, v335, v336, v337, v338, v339] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v361 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v362 = v361[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v364 = stdlib.gt(v362, v338);
  stdlib.assert(v364, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v295, v296, v315, v316, v335, v336, v337, v338, v339, v361],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v362, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v373], secs: v375, time: v374, didSend: v176, from: v372 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v377 = v373[stdlib.checkedBigNumberify('./index.rsh:62:14:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v377,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v386 = [v336, v338];
      const v387 = await txn1.getOutput('Bidder_bid', 'v386', ctc5, v386);
      
      if (v337) {
        const v676 = v372;
        const v677 = false;
        const v678 = v377;
        const v679 = v374;
        const v681 = stdlib.le(v339, v335);
        if (v681) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v372,
            tok: v296
            });
          sim_r.txns.push({
            kind: 'from',
            to: v295,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v296
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
          to: v336,
          tok: undefined /* Nothing */
          });
        const v682 = v372;
        const v683 = false;
        const v684 = v377;
        const v685 = v374;
        const v687 = stdlib.le(v339, v335);
        if (v687) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v372,
            tok: v296
            });
          sim_r.txns.push({
            kind: 'from',
            to: v295,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v296
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
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v373], secs: v375, time: v374, didSend: v176, from: v372 } = txn1;
  undefined /* setApiDetails */;
  const v377 = v373[stdlib.checkedBigNumberify('./index.rsh:62:14:spread', stdlib.UInt_max, '0')];
  const v378 = stdlib.gt(v377, v338);
  stdlib.assert(v378, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:63:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v386 = [v336, v338];
  const v387 = await txn1.getOutput('Bidder_bid', 'v386', ctc5, v386);
  if (v176) {
    stdlib.protect(ctc6, await interact.out(v373, v387), {
      at: './index.rsh:62:15:application',
      fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:15:function exp)', 'at ./index.rsh:66:23:application call to "notify" (defined at: ./index.rsh:65:35:function exp)', 'at ./index.rsh:65:35:application call to [unknown function] (defined at: ./index.rsh:65:35:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v337) {
    const v676 = v372;
    const v677 = false;
    const v678 = v377;
    const v679 = v374;
    const v681 = stdlib.le(v339, v335);
    if (v681) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v682 = v372;
    const v683 = false;
    const v684 = v377;
    const v685 = v374;
    const v687 = stdlib.le(v339, v335);
    if (v687) {
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
  
  
  const v292 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:33:53:application',
    fs: ['at ./index.rsh:32:15:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v293 = v292.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v293],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v296], secs: v298, time: v297, didSend: v29, from: v295 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v296
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
  const {data: [v296], secs: v298, time: v297, didSend: v29, from: v295 } = txn1;
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
  const {data: [v316, v317, v318], secs: v320, time: v319, didSend: v50, from: v315 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v295, v296, v315, v316, v317, v318, v319],
    evt_cnt: 0,
    funcNum: 2,
    lct: v319,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:11:dot', stdlib.UInt_max, '0'), [[v316, v296]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v323, time: v322, didSend: v57, from: v321 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: v316,
        kind: 'to',
        tok: v296
        });
      const v335 = stdlib.safeAdd(v319, v317);
      const v336 = v315;
      const v337 = true;
      const v338 = v318;
      const v339 = v322;
      const v340 = v319;
      
      if (await (async () => {
        const v354 = stdlib.le(v340, v335);
        
        return v354;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v336,
          tok: v296
          });
        if (v337) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v296
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
            to: v295,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v296
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
    tys: [ctc4, ctc0, ctc4, ctc2, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v323, time: v322, didSend: v57, from: v321 } = txn3;
  ;
  ;
  const v330 = stdlib.addressEq(v295, v321);
  stdlib.assert(v330, {
    at: './index.rsh:51:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v335 = stdlib.safeAdd(v319, v317);
  let v336 = v315;
  let v337 = true;
  let v338 = v318;
  let v339 = v322;
  let v340 = v319;
  
  while (await (async () => {
    const v354 = stdlib.le(v340, v335);
    
    return v354;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: ['time', v335],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 5,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v412, time: v411, didSend: v234, from: v410 } = txn5;
      ;
      const v413 = stdlib.addressEq(v315, v410);
      stdlib.assert(v413, {
        at: './index.rsh:80:24:dot',
        fs: ['at ./index.rsh:79:40:application call to [unknown function] (defined at: ./index.rsh:79:40:function exp)'],
        msg: 'sender correct',
        who: 'Owner'
        });
      const cv336 = v336;
      const cv337 = v337;
      const cv338 = v338;
      const cv339 = v411;
      const cv340 = v339;
      
      v336 = cv336;
      v337 = cv337;
      v338 = cv338;
      v339 = cv339;
      v340 = cv340;
      
      continue;
      }
    else {
      const {data: [v373], secs: v375, time: v374, didSend: v176, from: v372 } = txn4;
      undefined /* setApiDetails */;
      const v377 = v373[stdlib.checkedBigNumberify('./index.rsh:62:14:spread', stdlib.UInt_max, '0')];
      const v378 = stdlib.gt(v377, v338);
      stdlib.assert(v378, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:63:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)', 'at ./index.rsh:62:33:application call to [unknown function] (defined at: ./index.rsh:62:33:function exp)'],
        msg: 'bid is too low',
        who: 'Owner'
        });
      ;
      const v386 = [v336, v338];
      await txn4.getOutput('Bidder_bid', 'v386', ctc5, v386);
      if (v337) {
        stdlib.protect(ctc6, await interact.seeBid(v372, v377), {
          at: './index.rsh:73:36:application',
          fs: ['at ./index.rsh:72:21:application call to [unknown function] (defined at: ./index.rsh:72:46:function exp)', 'at ./index.rsh:65:35:application call to [unknown function] (defined at: ./index.rsh:65:35:function exp)'],
          msg: 'seeBid',
          who: 'Owner'
          });
        
        const cv336 = v372;
        const cv337 = false;
        const cv338 = v377;
        const cv339 = v374;
        const cv340 = v339;
        
        v336 = cv336;
        v337 = cv337;
        v338 = cv338;
        v339 = cv339;
        v340 = cv340;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc6, await interact.seeBid(v372, v377), {
          at: './index.rsh:73:36:application',
          fs: ['at ./index.rsh:72:21:application call to [unknown function] (defined at: ./index.rsh:72:46:function exp)', 'at ./index.rsh:65:35:application call to [unknown function] (defined at: ./index.rsh:65:35:function exp)'],
          msg: 'seeBid',
          who: 'Owner'
          });
        
        const cv336 = v372;
        const cv337 = false;
        const cv338 = v377;
        const cv339 = v374;
        const cv340 = v339;
        
        v336 = cv336;
        v337 = cv337;
        v338 = cv338;
        v339 = cv339;
        v340 = cv340;
        
        continue;}}
    
    }
  ;
  if (v337) {
    stdlib.protect(ctc6, await interact.showOutcome(v336, v338), {
      at: './index.rsh:91:29:application',
      fs: ['at ./index.rsh:90:9:application call to [unknown function] (defined at: ./index.rsh:90:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v336, v338), {
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
  appApproval: `BiANAAEEAiAFBlBICHmBAaCNBiYDAQABAQAiNQAxGEEDtSpkSSJbNQEhCVs1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAIk2GgIXNQQ2GgM2GgEXSSUMQAGlSSQMQAE4SSEFDEAAaCEFEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcoIDX/IQdbNf6ABMyZklywMgY0/g9ENP8xABJENANXACA0AyEEWzT/NAMhCFs0/jQDV1ggNANXeAEXNAMhClsyBjQDIQtbQgH/SCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8hBFs1/lcoIDX9IQhbNfwhB1s1+1dYIDX6IQpbNfkhC1s1+Ek1BTX3gATOPHBmNPdQsDIGNPsMRDT3F0k19jT5DUQ09ogCuYAIAAAAAAAAAYI0+jT5FlBQsDT6NPkWUDUHNANXeAEXQQAWNP80/jT9NPw0+zEAIjT2MgY0+EIBXLEisgE0+bIII7IQNPqyB7M0/zT+NP00/DT7MQAiNPYyBjT4QgE2JRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9IQhbNfyBYFs1+4AEQbFATbA0/DT+iAIwNP8xABJENP80/jT9NPw0+zQDIQdbCDT9IzQDgVhbMgY0+0IAz0kjDEAAckgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BUlJIls1/SEJWzX8gRBbNfuABM35pJQ0/RZQNPwWUDT7FlCwNP80/hZQMQBQNP0WUDT8FlA0+xZQMgYWUChLAVcAaGdIJTUBMgY1AkIBKUghDIgBdSI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsCEMiAFPsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUChLAVcAKGdIIzUBMgY1AkIA0jX/Nf41/TX8Nfs1+jX5Nfg19zX2NP80+g5BAD009jT3FlA0+FA0+RZQNPoWUDT7UDT8FlEHCFA0/RZQNP4WUChLAVcAf2cpSwFXfwpnSCEGNQEyBjUCQgB5sSKyATT5shIkshA0+7IUNPeyEbM0/EEAGrEisgEishIkshAyCbIVMgqyFDT3shGzQgAqsSKyATT9sggjshA09rIHs7EisgEishIkshAyCbIVMgqyFDT3shGzQgAAMRkhBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 137,
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
                "name": "v296",
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
                "name": "v296",
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
                "name": "v316",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
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
                "name": "v373",
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
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v386",
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
                "name": "v316",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v318",
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
                "name": "v373",
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
  Bytecode: `0x608060405260405162001ad238038062001ad28339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b6117f580620002dd6000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063ab53f2c6146100f4578063b627922414610117578063fd5dba2d1461014e57005b80630cf4bd23146100825780631e93b0f1146100955780637eea518c146100b957806383230757146100cc57005b3661008057005b005b61008061009036600461125c565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c736600461125c565b610197565b3480156100d857600080fd5b506001546100a6565b6100806100ef36600461125c565b6101c9565b34801561010057600080fd5b506101096101fb565b6040516100b09291906112a4565b61012a6101253660046112de565b610298565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b61008061015c3660046112f7565b6102ef565b604080516060810182526000602082018181529282015290815261019361018d368490038401846113d4565b82610321565b5050565b60408051606081018252600060208201818152928201529081526101936101c336849003840184611439565b82610677565b60408051606081018252600060208201818152928201529081526101936101f536849003840184611439565b8261087e565b60006060600054600280805461021090611471565b80601f016020809104026020016040519081016040528092919081815260200182805461023c90611471565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102b46110e5565b6020810151518390526102dd604080516060810182526000602082018181529282015290815290565b6102e78282610321565b519392505050565b604080516060810182526000602082018181529282015290815261019361031b368490038401846114a6565b82610a62565b6103316006600054146012610cbb565b815161034c90158061034557508251600154145b6013610cbb565b60008080556002805461035e90611471565b80601f016020809104026020016040519081016040528092919081815260200182805461038a90611471565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef9190611560565b9050610411604080516060810182526000602082018181529282015290815290565b610422826080015143106014610cbb565b60408051338152855160208083019190915286015151518183015290517f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f99181900360600190a160e08201516020850151515161048191106010610cbb565b602084015151516104959034146011610cbb565b60a082015181516001600160a01b03909116905260e082015181516020015280516040517fe44cad4ce1b4a6ffd3e1574023dc3ea13e3a17a0185c15c6a2cf06cfb37dcd48916104ff9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260c0820151156105a45761051d611112565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261059e81610ce1565b50610671565b8160a001516001600160a01b03166108fc8360e001519081150290604051600060405180830381858888f193505050501580156105e5573d6000803e3d6000fd5b506105ee611112565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261066f81610ce1565b505b50505050565b610687600260005414600e610cbb565b81516106a290158061069b57508251600154145b600f610cbb565b6000808055600280546106b490611471565b80601f01602080910402602001604051908101604052809291908181526020018280546106e090611471565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b505050505080602001905181019061074591906115fc565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a161079c3415600b610cbb565b6107b96107b23383602001518460600151610e7b565b600c610cbb565b80516107d1906001600160a01b03163314600d610cbb565b6107d9611112565b815181516001600160a01b03918216905260208084015183519083169101526040808401518351921691015260608083015182519091015260c082015160808301516108259190610e93565b8151608090810191909152604080840151602080850180516001600160a01b039093169092528151600191015260a08501518151909201919091528051436060919091015260c084015190519091015261067181610ce1565b61088e6006600054146017610cbb565b81516108a99015806108a257508251600154145b6018610cbb565b6000808055600280546108bb90611471565b80601f01602080910402602001604051908101604052809291908181526020018280546108e790611471565b80156109345780601f1061090957610100808354040283529160200191610934565b820191906000526020600020905b81548152906001019060200180831161091757829003601f168201915b505050505080602001905181019061094c9190611560565b905061096081608001514310156019610cbb565b60408051338152845160208083019190915285015115158183015290517fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d9181900360600190a16109b334156015610cbb565b60408101516109ce906001600160a01b031633146016610cbb565b6109d6611112565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551820152608080870151865182015260a0870151848701805191909616905260c0870151855190151594019390935260e08601518451909201919091528251439101526101008401519151015261067181610ce1565b610a726001600054146009610cbb565b8151610a8d901580610a8657508251600154145b600a610cbb565b600080805560028054610a9f90611471565b80601f0160208091040260200160405190810160405280929190818152602001828054610acb90611471565b8015610b185780601f10610aed57610100808354040283529160200191610b18565b820191906000526020600020905b815481529060010190602001808311610afb57829003601f168201915b5050505050806020019051810190610b3091906116a1565b604080513381528551602080830191909152808701518051838501529081015160608301529091015160808201529091507f955174907bb1a212127bbf09e3338775932663cd5b51e4058d5b57da257101ec9060a00160405180910390a1610b9a34156008610cbb565b610bf56040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825282518701516080808c01918252935185015160a0808d019182524360c0808f01828152600260005560019290925588519b8c019c909c5298518c16968a01969096529551909916908701525190850152945194830194909452925191810191909152905160e0820152610100016040516020818303038152906040526002908051906020019061066f929190611175565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80600001516080015181602001516080015111610ddd576040805161012081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189815260e08b018a81526101008c018b81528e51516001600160a01b039081168e528f518c01518116909a528e518e01518a169098528d518701519095528c51909301519091528a8701805151909616905284518601511515905283518801519052915190910151905260069091554360015591519091610db4918391016116d2565b60405160208183030381529060405260029080519060200190610dd8929190611175565b505050565b80516020808201519083015151606090920151610dfa9290610ee6565b80602001516020015115610e215760008080556001819055610e1e906002906111f9565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e64573d6000803e3d6000fd5b5060008080556001819055610e1e906002906111f9565b6000610e8983853085610efa565b90505b9392505050565b600082610ea08382611760565b9150811015610ee05760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610cd8565b92915050565b610ef1838383610fd4565b610dd857600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610f6191611786565b60006040518083038185875af1925050503d8060008114610f9e576040519150601f19603f3d011682016040523d82523d6000602084013e610fa3565b606091505b5091509150610fb4828260016110a5565b5080806020019051810190610fc991906117a2565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161103391611786565b60006040518083038185875af1925050503d8060008114611070576040519150601f19603f3d011682016040523d82523d6000602084013e611075565b606091505b5091509150611086828260026110a5565b508080602001905181019061109b91906117a2565b9695505050505050565b606083156110b4575081610e8c565b8251156110c45782518084602001fd5b60405163100960cb60e01b815260048101839052602401610cd8565b905290565b6040518060400160405280600081526020016110e060408051808201909152600060208201908152815290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b82805461118190611471565b90600052602060002090601f0160209004810192826111a357600085556111e9565b82601f106111bc57805160ff19168380011785556111e9565b828001600101855582156111e9579182015b828111156111e95782518255916020019190600101906111ce565b506111f592915061122f565b5090565b50805461120590611471565b6000825580601f10611215575050565b601f016020900490600052602060002090810190610e1e91905b5b808211156111f55760008155600101611230565b60006040828403121561125657600080fd5b50919050565b60006040828403121561126e57600080fd5b610e8c8383611244565b60005b8381101561129357818101518382015260200161127b565b838111156106715750506000910152565b82815260406020820152600082518060408401526112c9816060850160208701611278565b601f01601f1916919091016060019392505050565b6000602082840312156112f057600080fd5b5035919050565b60006080828403121561125657600080fd5b6040805190810167ffffffffffffffff8111828210171561133a57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561133a57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561133a57634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561133a57634e487b7160e01b600052604160045260246000fd5b600081830360408112156113e757600080fd5b6113ef611309565b833581526020601f198301121561140557600080fd5b61140d611340565b9150611417611340565b602094850135815282529283015250919050565b8015158114610e1e57600080fd5b60006040828403121561144b57600080fd5b611453611309565b8235815260208301356114658161142b565b60208201529392505050565b600181811c9082168061148557607f821691505b6020821081141561125657634e487b7160e01b600052602260045260246000fd5b600081830360808112156114b957600080fd5b6040516040810181811067ffffffffffffffff821117156114ea57634e487b7160e01b600052604160045260246000fd5b604052833581526060601f198301121561150357600080fd5b61150b611371565b9150602084013582526040840135602083015260608401356040830152816020820152809250505092915050565b80516001600160a01b038116811461155057600080fd5b919050565b80516115508161142b565b6000610120828403121561157357600080fd5b61157b6113a2565b61158483611539565b815261159260208401611539565b60208201526115a360408401611539565b604082015260608301516060820152608083015160808201526115c860a08401611539565b60a08201526115d960c08401611555565b60c082015260e08381015190820152610100928301519281019290925250919050565b600060e0828403121561160e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561163f57634e487b7160e01b600052604160045260246000fd5b60405261164b83611539565b815261165960208401611539565b602082015261166a60408401611539565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6000604082840312156116b357600080fd5b6116bb611309565b6116c483611539565b815261146560208401611539565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015161172f60a08401826001600160a01b03169052565b5060c083015161174360c084018215159052565b5060e083015160e083015261010080840151818401525092915050565b6000821982111561178157634e487b7160e01b600052601160045260246000fd5b500190565b60008251611798818460208701611278565b9190910192915050565b6000602082840312156117b457600080fd5b8151610e8c8161142b56fea2646970667358221220197814dbc661036518d63e25746d74985ee8797bd9985e0494e9ccc08f3105f964736f6c634300080c0033`,
  BytecodeLen: 6866,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:13:after expr stmt semicolon',
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
    at: './index.rsh:58:23:after expr stmt semicolon',
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
