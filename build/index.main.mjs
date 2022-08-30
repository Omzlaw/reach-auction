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
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v29, from: v288 } = txn1;
  ;
  ;
  const v298 = stdlib.protect(ctc2, await interact.startAuction(), {
    at: './index.rsh:40:83:application',
    fs: ['at ./index.rsh:39:20:application call to [unknown function] (defined at: ./index.rsh:39:24:function exp)'],
    msg: 'startAuction',
    who: 'Auctioneer'
    });
  const v299 = v298.lengthInBlocks;
  const v300 = v298.minimumAmount;
  
  const txn2 = await (ctc.sendrecv({
    args: [v288, v289, v300, v299],
    evt_cnt: 2,
    funcNum: 1,
    lct: v290,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v304, v305], secs: v307, time: v306, didSend: v43, from: v303 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v304, v305], secs: v307, time: v306, didSend: v43, from: v303 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v310, time: v309, didSend: v50, from: v308 } = txn3;
  ;
  ;
  const v317 = stdlib.addressEq(v288, v308);
  stdlib.assert(v317, {
    at: './index.rsh:48:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  const v322 = stdlib.safeAdd(v306, v305);
  let v323 = v303;
  let v324 = true;
  let v325 = v304;
  let v326 = v309;
  let v327 = v306;
  
  while (await (async () => {
    const v341 = stdlib.le(v327, v322);
    
    return v341;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: ['time', v322],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v288, v289, v303, v304, v322, v323, v324, v325, v326],
        evt_cnt: 0,
        funcNum: 5,
        lct: v326,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:24:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v399, time: v398, didSend: v227, from: v397 } = txn5;
          
          ;
          const cv323 = v323;
          const cv324 = v324;
          const cv325 = v325;
          const cv326 = v398;
          const cv327 = v326;
          
          await (async () => {
            const v323 = cv323;
            const v324 = cv324;
            const v325 = cv325;
            const v326 = cv326;
            const v327 = cv327;
            
            if (await (async () => {
              const v341 = stdlib.le(v327, v322);
              
              return v341;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v323,
                tok: v289
                });
              if (v324) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v289
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
                  to: v288,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v289
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
        tys: [ctc4, ctc0, ctc4, ctc1, ctc1, ctc4, ctc7, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v399, time: v398, didSend: v227, from: v397 } = txn5;
      ;
      const v400 = stdlib.addressEq(v303, v397);
      stdlib.assert(v400, {
        at: './index.rsh:77:24:dot',
        fs: ['at ./index.rsh:76:40:application call to [unknown function] (defined at: ./index.rsh:76:40:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      const cv323 = v323;
      const cv324 = v324;
      const cv325 = v325;
      const cv326 = v398;
      const cv327 = v326;
      
      v323 = cv323;
      v324 = cv324;
      v325 = cv325;
      v326 = cv326;
      v327 = cv327;
      
      continue;
      }
    else {
      const {data: [v360], secs: v362, time: v361, didSend: v169, from: v359 } = txn4;
      undefined /* setApiDetails */;
      const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:59:14:spread', stdlib.UInt_max, '0')];
      const v365 = stdlib.gt(v364, v325);
      stdlib.assert(v365, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)'],
        msg: 'bid is too low',
        who: 'Auctioneer'
        });
      ;
      const v373 = [v323, v325];
      await txn4.getOutput('Bidder_bid', 'v373', ctc5, v373);
      if (v324) {
        stdlib.protect(ctc6, await interact.seeBid(v359, v364), {
          at: './index.rsh:70:36:application',
          fs: ['at ./index.rsh:69:21:application call to [unknown function] (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
          msg: 'seeBid',
          who: 'Auctioneer'
          });
        
        const cv323 = v359;
        const cv324 = false;
        const cv325 = v364;
        const cv326 = v361;
        const cv327 = v326;
        
        v323 = cv323;
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc6, await interact.seeBid(v359, v364), {
          at: './index.rsh:70:36:application',
          fs: ['at ./index.rsh:69:21:application call to [unknown function] (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
          msg: 'seeBid',
          who: 'Auctioneer'
          });
        
        const cv323 = v359;
        const cv324 = false;
        const cv325 = v364;
        const cv326 = v361;
        const cv327 = v326;
        
        v323 = cv323;
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        
        continue;}}
    
    }
  ;
  if (v324) {
    stdlib.protect(ctc6, await interact.showOutcome(v323, v325), {
      at: './index.rsh:88:29:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:34:function exp)'],
      msg: 'showOutcome',
      who: 'Auctioneer'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v323, v325), {
      at: './index.rsh:88:29:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:34:function exp)'],
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
  
  
  const [v288, v289, v303, v304, v322, v323, v324, v325, v326] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v348 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v349 = v348[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v351 = stdlib.gt(v349, v325);
  stdlib.assert(v351, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v288, v289, v303, v304, v322, v323, v324, v325, v326, v348],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v349, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v360], secs: v362, time: v361, didSend: v169, from: v359 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:59:14:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v364,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v373 = [v323, v325];
      const v374 = await txn1.getOutput('Bidder_bid', 'v373', ctc5, v373);
      
      if (v324) {
        const v663 = v359;
        const v664 = false;
        const v665 = v364;
        const v666 = v361;
        const v668 = stdlib.le(v326, v322);
        if (v668) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v359,
            tok: v289
            });
          sim_r.txns.push({
            kind: 'from',
            to: v288,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v289
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
          to: v323,
          tok: undefined /* Nothing */
          });
        const v669 = v359;
        const v670 = false;
        const v671 = v364;
        const v672 = v361;
        const v674 = stdlib.le(v326, v322);
        if (v674) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v359,
            tok: v289
            });
          sim_r.txns.push({
            kind: 'from',
            to: v288,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v289
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
  const {data: [v360], secs: v362, time: v361, didSend: v169, from: v359 } = txn1;
  undefined /* setApiDetails */;
  const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:59:14:spread', stdlib.UInt_max, '0')];
  const v365 = stdlib.gt(v364, v325);
  stdlib.assert(v365, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v373 = [v323, v325];
  const v374 = await txn1.getOutput('Bidder_bid', 'v373', ctc5, v373);
  if (v169) {
    stdlib.protect(ctc6, await interact.out(v360, v374), {
      at: './index.rsh:59:15:application',
      fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)', 'at ./index.rsh:63:23:application call to "notify" (defined at: ./index.rsh:62:35:function exp)', 'at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v324) {
    const v663 = v359;
    const v664 = false;
    const v665 = v364;
    const v666 = v361;
    const v668 = stdlib.le(v326, v322);
    if (v668) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v669 = v359;
    const v670 = false;
    const v671 = v364;
    const v672 = v361;
    const v674 = stdlib.le(v326, v322);
    if (v674) {
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
  
  
  const v285 = stdlib.protect(ctc1, await interact.setNFT(), {
    at: './index.rsh:33:53:application',
    fs: ['at ./index.rsh:32:15:application call to [unknown function] (defined at: ./index.rsh:32:19:function exp)'],
    msg: 'setNFT',
    who: 'Owner'
    });
  const v286 = v285.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v286],
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
      
      
      const {data: [v289], secs: v291, time: v290, didSend: v29, from: v288 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v289
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
  const {data: [v289], secs: v291, time: v290, didSend: v29, from: v288 } = txn1;
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
  const {data: [v304, v305], secs: v307, time: v306, didSend: v43, from: v303 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v288, v289, v303, v304, v305, v306],
    evt_cnt: 0,
    funcNum: 2,
    lct: v306,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:11:dot', stdlib.UInt_max, '0'), [[v304, v289]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v310, time: v309, didSend: v50, from: v308 } = txn3;
      
      ;
      sim_r.txns.push({
        amt: v304,
        kind: 'to',
        tok: v289
        });
      const v322 = stdlib.safeAdd(v306, v305);
      const v323 = v303;
      const v324 = true;
      const v325 = v304;
      const v326 = v309;
      const v327 = v306;
      
      if (await (async () => {
        const v341 = stdlib.le(v327, v322);
        
        return v341;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v323,
          tok: v289
          });
        if (v324) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v289
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
            to: v288,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v289
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
  const {data: [], secs: v310, time: v309, didSend: v50, from: v308 } = txn3;
  ;
  ;
  const v317 = stdlib.addressEq(v288, v308);
  stdlib.assert(v317, {
    at: './index.rsh:48:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  const v322 = stdlib.safeAdd(v306, v305);
  let v323 = v303;
  let v324 = true;
  let v325 = v304;
  let v326 = v309;
  let v327 = v306;
  
  while (await (async () => {
    const v341 = stdlib.le(v327, v322);
    
    return v341;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: ['time', v322],
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
      const {data: [], secs: v399, time: v398, didSend: v227, from: v397 } = txn5;
      ;
      const v400 = stdlib.addressEq(v303, v397);
      stdlib.assert(v400, {
        at: './index.rsh:77:24:dot',
        fs: ['at ./index.rsh:76:40:application call to [unknown function] (defined at: ./index.rsh:76:40:function exp)'],
        msg: 'sender correct',
        who: 'Owner'
        });
      const cv323 = v323;
      const cv324 = v324;
      const cv325 = v325;
      const cv326 = v398;
      const cv327 = v326;
      
      v323 = cv323;
      v324 = cv324;
      v325 = cv325;
      v326 = cv326;
      v327 = cv327;
      
      continue;
      }
    else {
      const {data: [v360], secs: v362, time: v361, didSend: v169, from: v359 } = txn4;
      undefined /* setApiDetails */;
      const v364 = v360[stdlib.checkedBigNumberify('./index.rsh:59:14:spread', stdlib.UInt_max, '0')];
      const v365 = stdlib.gt(v364, v325);
      stdlib.assert(v365, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:60:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)'],
        msg: 'bid is too low',
        who: 'Owner'
        });
      ;
      const v373 = [v323, v325];
      await txn4.getOutput('Bidder_bid', 'v373', ctc5, v373);
      if (v324) {
        stdlib.protect(ctc6, await interact.seeBid(v359, v364), {
          at: './index.rsh:70:36:application',
          fs: ['at ./index.rsh:69:21:application call to [unknown function] (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
          msg: 'seeBid',
          who: 'Owner'
          });
        
        const cv323 = v359;
        const cv324 = false;
        const cv325 = v364;
        const cv326 = v361;
        const cv327 = v326;
        
        v323 = cv323;
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc6, await interact.seeBid(v359, v364), {
          at: './index.rsh:70:36:application',
          fs: ['at ./index.rsh:69:21:application call to [unknown function] (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:62:35:application call to [unknown function] (defined at: ./index.rsh:62:35:function exp)'],
          msg: 'seeBid',
          who: 'Owner'
          });
        
        const cv323 = v359;
        const cv324 = false;
        const cv325 = v364;
        const cv326 = v361;
        const cv327 = v326;
        
        v323 = cv323;
        v324 = cv324;
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        
        continue;}}
    
    }
  ;
  if (v324) {
    stdlib.protect(ctc6, await interact.showOutcome(v323, v325), {
      at: './index.rsh:88:29:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:34:function exp)'],
      msg: 'showOutcome',
      who: 'Owner'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v323, v325), {
      at: './index.rsh:88:29:application',
      fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:34:function exp)'],
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
  appApproval: `BiANAAEEAiAFBlBICHmBAaCNBiYDAQABAQAiNQAxGEEDpCpkSSJbNQEhCVs1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAIk2GgIXNQQ2GgM2GgEXSSUMQAGiSSQMQAE4SSEFDEAAaCEFEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcoIDX/IQdbNf6ABMyZklywMgY0/g9ENP8xABJENANXACA0AyEEWzT/NAMhCFs0/jQDV1ggNANXeAEXNAMhClsyBjQDIQtbQgHuSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8hBFs1/lcoIDX9IQhbNfwhB1s1+1dYIDX6IQpbNfkhC1s1+Ek1BTX3gATOPHBmNPdQsDIGNPsMRDT3F0k19jT5DUQ09ogCqIAIAAAAAAAAAXU0+jT5FlBQsDT6NPkWUDUHNANXeAEXQQAWNP80/jT9NPw0+zEAIjT2MgY0+EIBS7EisgE0+bIII7IQNPqyB7M0/zT+NP00/DT7MQAiNPYyBjT4QgElJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9IQhbNfyBWFs1+4AEQbFATbA0/DT+iAIfNP8xABJENP80/jT9NPw0+zQDIQdbCDT9IzT8MgY0+0IAwUkjDEAAZEgjNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hBFs1/kk1BUkiWzX9IQlbNfyABMe2CtU0/RZQNPwWULA0/zT+FlAxAFA0/RZQNPwWUDIGFlAoSwFXAGBnSCU1ATIGNQJCASlIIQyIAXUiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhDIgBT7EisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCANI1/zX+Nf01/DX7Nfo1+TX4Nfc19jT/NPoOQQA9NPY09xZQNPhQNPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAH9nKUsBV38KZ0ghBjUBMgY1AkIAebEisgE0+bISJLIQNPuyFDT3shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAKrEisgE0/bIII7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v289",
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
                "name": "v289",
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
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
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
                "name": "v360",
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
    "name": "_reach_oe_v373",
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
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
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
                "name": "v360",
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
  Bytecode: `0x608060405260405162001a1738038062001a178339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b61173a80620002dd6000396000f3fe6080604052600436106100795760003560e01c8063832307571161004b57806383230757146100df5780638e314769146100f4578063ab53f2c614610107578063b62792241461012a57005b80630cf4bd23146100825780631e93b0f11461009557806342ae229d146100b95780637eea518c146100cc57005b3661008057005b005b610080610090366004611215565b610161565b3480156100a157600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100c7366004611231565b610197565b6100806100da366004611215565b6101c9565b3480156100eb57600080fd5b506001546100a6565b610080610102366004611215565b6101fb565b34801561011357600080fd5b5061011c61022d565b6040516100b092919061126f565b61013d6101383660046112a9565b6102ca565b6040805182516001600160a01b0316815260209283015192810192909252016100b0565b604080516060810182526000602082018181529282015290815261019361018d3684900384018461135c565b82610321565b5050565b60408051606081018252600060208201818152928201529081526101936101c3368490038401846113b3565b82610677565b60408051606081018252600060208201818152928201529081526101936101f53684900384018461141b565b82610889565b60408051606081018252600060208201818152928201529081526101936102273684900384018461141b565b82610a90565b60006060600054600280805461024290611453565b80601f016020809104026020016040519081016040528092919081815260200182805461026e90611453565b80156102bb5780601f10610290576101008083540402835291602001916102bb565b820191906000526020600020905b81548152906001019060200180831161029e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102e661109e565b60208101515183905261030f604080516060810182526000602082018181529282015290815290565b6103198282610321565b519392505050565b6103316006600054146012610c74565b815161034c90158061034557508251600154145b6013610c74565b60008080556002805461035e90611453565b80601f016020809104026020016040519081016040528092919081815260200182805461038a90611453565b80156103d75780601f106103ac576101008083540402835291602001916103d7565b820191906000526020600020905b8154815290600101906020018083116103ba57829003601f168201915b50505050508060200190518101906103ef91906114af565b9050610411604080516060810182526000602082018181529282015290815290565b610422826080015143106014610c74565b60408051338152855160208083019190915286015151518183015290517f20e0220c6adfa181ccdf66a11a035e7ee7bc6900d5aa40894042309f10f8f0f99181900360600190a160e08201516020850151515161048191106010610c74565b602084015151516104959034146011610c74565b60a082015181516001600160a01b03909116905260e082015181516020015280516040517fb34ee77931032b4aad64f73c3e988c00103c380d8428bb26f819b96271080a42916104ff9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260c0820151156105a45761051d6110cb565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261059e81610c9a565b50610671565b8160a001516001600160a01b03166108fc8360e001519081150290604051600060405180830381858888f193505050501580156105e5573d6000803e3d6000fd5b506105ee6110cb565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015260808087015185518201528285018051339052805160009085015292890151515183519094019390935281514391015261010085015190519091015261066f81610c9a565b505b50505050565b6106876001600054146009610c74565b81516106a290158061069b57508251600154145b600a610c74565b6000808055600280546106b490611453565b80601f01602080910402602001604051908101604052809291908181526020018280546106e090611453565b801561072d5780601f106107025761010080835404028352916020019161072d565b820191906000526020600020905b81548152906001019060200180831161071057829003601f168201915b5050505050806020019051810190610745919061154b565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a16107a434156008610c74565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915281516001600160a01b0390811680835260208085015183168185019081523360408087019182528984018051516060808a0191825291518601516080808b019182524360a0808d0182815260026000556001929092558651998a019a909a5296518a1694880194909452935190971690850152945194830194909452925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061066f92919061112e565b610899600260005414600e610c74565b81516108b49015806108ad57508251600154145b600f610c74565b6000808055600280546108c690611453565b80601f01602080910402602001604051908101604052809291908181526020018280546108f290611453565b801561093f5780601f106109145761010080835404028352916020019161093f565b820191906000526020600020905b81548152906001019060200180831161092257829003601f168201915b5050505050806020019051810190610957919061157c565b60408051338152855160208083019190915286015115158183015290519192507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950919081900360600190a16109ae3415600b610c74565b6109cb6109c43383602001518460600151610e34565b600c610c74565b80516109e3906001600160a01b03163314600d610c74565b6109eb6110cb565b815181516001600160a01b03918216905260208084015183519083169101526040808401518351921691015260608083015182519091015260a08201516080830151610a379190610e4c565b8151608090810191909152604080840151602080850180516001600160a01b039093169092528151600191015260608086015182519093019290925280514392019190915260a084015190519091015261067181610c9a565b610aa06006600054146017610c74565b8151610abb901580610ab457508251600154145b6018610c74565b600080805560028054610acd90611453565b80601f0160208091040260200160405190810160405280929190818152602001828054610af990611453565b8015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b5050505050806020019051810190610b5e91906114af565b9050610b7281608001514310156019610c74565b60408051338152845160208083019190915285015115158183015290517fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d9181900360600190a1610bc534156015610c74565b6040810151610be0906001600160a01b031633146016610c74565b610be86110cb565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518551820152608080870151865182015260a0870151848701805191909616905260c0870151855190151594019390935260e08601518451909201919091528251439101526101008401519151015261067181610c9a565b816101935760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80600001516080015181602001516080015111610d96576040805161012081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a0189815260e08b018a81526101008c018b81528e51516001600160a01b039081168e528f518c01518116909a528e518e01518a169098528d518701519095528c51909301519091528a8701805151909616905284518601511515905283518801519052915190910151905260069091554360015591519091610d6d91839101611617565b60405160208183030381529060405260029080519060200190610d9192919061112e565b505050565b80516020808201519083015151606090920151610db39290610e9f565b80602001516020015115610dda5760008080556001819055610dd7906002906111b2565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610e1d573d6000803e3d6000fd5b5060008080556001819055610dd7906002906111b2565b6000610e4283853085610eb3565b90505b9392505050565b600082610e5983826116a5565b9150811015610e995760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c91565b92915050565b610eaa838383610f8d565b610d9157600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610f1a916116cb565b60006040518083038185875af1925050503d8060008114610f57576040519150601f19603f3d011682016040523d82523d6000602084013e610f5c565b606091505b5091509150610f6d8282600161105e565b5080806020019051810190610f8291906116e7565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610fec916116cb565b60006040518083038185875af1925050503d8060008114611029576040519150601f19603f3d011682016040523d82523d6000602084013e61102e565b606091505b509150915061103f8282600261105e565b508080602001905181019061105491906116e7565b9695505050505050565b6060831561106d575081610e45565b82511561107d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610c91565b905290565b60405180604001604052806000815260200161109960408051808201909152600060208201908152815290565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b82805461113a90611453565b90600052602060002090601f01602090048101928261115c57600085556111a2565b82601f1061117557805160ff19168380011785556111a2565b828001600101855582156111a2579182015b828111156111a2578251825591602001919060010190611187565b506111ae9291506111e8565b5090565b5080546111be90611453565b6000825580601f106111ce575050565b601f016020900490600052602060002090810190610dd791905b5b808211156111ae57600081556001016111e9565b60006040828403121561120f57600080fd5b50919050565b60006040828403121561122757600080fd5b610e4583836111fd565b60006060828403121561120f57600080fd5b60005b8381101561125e578181015183820152602001611246565b838111156106715750506000910152565b8281526040602082015260008251806040840152611294816060850160208701611243565b601f01601f1916919091016060019392505050565b6000602082840312156112bb57600080fd5b5035919050565b6040805190810167ffffffffffffffff811182821017156112f357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156112f357634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156112f357634e487b7160e01b600052604160045260246000fd5b6000818303604081121561136f57600080fd5b6113776112c2565b833581526020601f198301121561138d57600080fd5b6113956112f9565b915061139f6112f9565b602094850135815282529283015250919050565b600081830360608112156113c657600080fd5b6113ce6112c2565b833581526040601f19830112156113e457600080fd5b6113ec6112c2565b60208581013582526040909501358582015293810193909352509092915050565b8015158114610dd757600080fd5b60006040828403121561142d57600080fd5b6114356112c2565b8235815260208301356114478161140d565b60208201529392505050565b600181811c9082168061146757607f821691505b6020821081141561120f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461149f57600080fd5b919050565b805161149f8161140d565b600061012082840312156114c257600080fd5b6114ca61132a565b6114d383611488565b81526114e160208401611488565b60208201526114f260408401611488565b6040820152606083015160608201526080830151608082015261151760a08401611488565b60a082015261152860c084016114a4565b60c082015260e08381015190820152610100928301519281019290925250919050565b60006040828403121561155d57600080fd5b6115656112c2565b61156e83611488565b815261144760208401611488565b600060c0828403121561158e57600080fd5b60405160c0810181811067ffffffffffffffff821117156115bf57634e487b7160e01b600052604160045260246000fd5b6040526115cb83611488565b81526115d960208401611488565b60208201526115ea60408401611488565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b81516001600160a01b0390811682526020808401518216908301526040808401519182169083015261012082019050606083015160608301526080830151608083015260a083015161167460a08401826001600160a01b03169052565b5060c083015161168860c084018215159052565b5060e083015160e083015261010080840151818401525092915050565b600082198211156116c657634e487b7160e01b600052601160045260246000fd5b500190565b600082516116dd818460208701611243565b9190910192915050565b6000602082840312156116f957600080fd5b8151610e458161140d56fea26469706673582212206427a2e26ab3ce90b34dd86b667ff731c15f27daeaf271a71aa99486123d90f064736f6c634300080c0033`,
  BytecodeLen: 6679,
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
    at: './index.rsh:46:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:90:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:90:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:55:23:after expr stmt semicolon',
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
