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
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
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
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v280, v281, v304, v305, v306, v307, v308] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v330 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v331 = v330[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v333 = stdlib.gt(v331, v307);
  stdlib.assert(v333, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v281, v304, v305, v306, v307, v308, v330],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v331, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v342], secs: v344, time: v343, didSend: v161, from: v341 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v346 = v342[stdlib.checkedBigNumberify('./index.rsh:49:14:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v355 = [v305, v307];
      const v356 = await txn1.getOutput('Bidder_bid', 'v355', ctc5, v355);
      
      if (v306) {
        const v611 = v341;
        const v612 = false;
        const v613 = v346;
        const v614 = v343;
        const v616 = stdlib.le(v308, v304);
        if (v616) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v341,
            tok: v281
            });
          sim_r.txns.push({
            kind: 'from',
            to: v280,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v281
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
        const v617 = v341;
        const v618 = false;
        const v619 = v346;
        const v620 = v343;
        const v622 = stdlib.le(v308, v304);
        if (v622) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v341,
            tok: v281
            });
          sim_r.txns.push({
            kind: 'from',
            to: v280,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v281
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v342], secs: v344, time: v343, didSend: v161, from: v341 } = txn1;
  undefined /* setApiDetails */;
  const v346 = v342[stdlib.checkedBigNumberify('./index.rsh:49:14:spread', stdlib.UInt_max, '0')];
  const v347 = stdlib.gt(v346, v307);
  stdlib.assert(v347, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v355 = [v305, v307];
  const v356 = await txn1.getOutput('Bidder_bid', 'v355', ctc5, v355);
  if (v161) {
    stdlib.protect(ctc6, await interact.out(v342, v356), {
      at: './index.rsh:49:15:application',
      fs: ['at ./index.rsh:49:15:application call to [unknown function] (defined at: ./index.rsh:49:15:function exp)', 'at ./index.rsh:53:23:application call to "notify" (defined at: ./index.rsh:52:35:function exp)', 'at ./index.rsh:52:35:application call to [unknown function] (defined at: ./index.rsh:52:35:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v306) {
    const v611 = v341;
    const v612 = false;
    const v613 = v346;
    const v614 = v343;
    const v616 = stdlib.le(v308, v304);
    if (v616) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v617 = v341;
    const v618 = false;
    const v619 = v346;
    const v620 = v343;
    const v622 = stdlib.le(v308, v304);
    if (v622) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lengthInBlocks: ctc0,
    minimumBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc0]);
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Bool;
  
  
  const v273 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:30:82:application',
    fs: ['at ./index.rsh:29:17:application call to [unknown function] (defined at: ./index.rsh:29:21:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v274 = v273.lengthInBlocks;
  const v275 = v273.minimumBid;
  const v276 = v273.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v276, v275, v274],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v281, v282, v283], secs: v285, time: v284, didSend: v35, from: v280 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v281
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v281, v282, v283], secs: v285, time: v284, didSend: v35, from: v280 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v280, v281, v282, v283, v284],
    evt_cnt: 0,
    funcNum: 1,
    lct: v284,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:13:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:34:17:decimal', stdlib.UInt_max, '1'), v281]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v292, time: v291, didSend: v42, from: v290 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:34:17:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v281
        });
      const v304 = stdlib.safeAdd(v284, v283);
      const v305 = v280;
      const v306 = true;
      const v307 = v282;
      const v308 = v291;
      const v309 = v284;
      
      if (await (async () => {
        const v323 = stdlib.le(v309, v304);
        
        return v323;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v305,
          tok: v281
          });
        if (v306) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v281
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
            to: v280,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v281
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
    tys: [ctc4, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v292, time: v291, didSend: v42, from: v290 } = txn2;
  ;
  ;
  const v299 = stdlib.addressEq(v280, v290);
  stdlib.assert(v299, {
    at: './index.rsh:37:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v304 = stdlib.safeAdd(v284, v283);
  let v305 = v280;
  let v306 = true;
  let v307 = v282;
  let v308 = v291;
  let v309 = v284;
  
  while (await (async () => {
    const v323 = stdlib.le(v309, v304);
    
    return v323;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v304],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v280, v281, v304, v305, v306, v307, v308],
        evt_cnt: 0,
        funcNum: 4,
        lct: v308,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:67:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v375, time: v374, didSend: v217, from: v373 } = txn4;
          
          ;
          const cv305 = v305;
          const cv306 = v306;
          const cv307 = v307;
          const cv308 = v374;
          const cv309 = v308;
          
          await (async () => {
            const v305 = cv305;
            const v306 = cv306;
            const v307 = cv307;
            const v308 = cv308;
            const v309 = cv309;
            
            if (await (async () => {
              const v323 = stdlib.le(v309, v304);
              
              return v323;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v305,
                tok: v281
                });
              if (v306) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v281
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
                  to: v280,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v281
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
        tys: [ctc4, ctc1, ctc0, ctc4, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v375, time: v374, didSend: v217, from: v373 } = txn4;
      ;
      const v376 = stdlib.addressEq(v280, v373);
      stdlib.assert(v376, {
        at: './index.rsh:67:21:dot',
        fs: ['at ./index.rsh:66:40:application call to [unknown function] (defined at: ./index.rsh:66:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv305 = v305;
      const cv306 = v306;
      const cv307 = v307;
      const cv308 = v374;
      const cv309 = v308;
      
      v305 = cv305;
      v306 = cv306;
      v307 = cv307;
      v308 = cv308;
      v309 = cv309;
      
      continue;
      }
    else {
      const {data: [v342], secs: v344, time: v343, didSend: v161, from: v341 } = txn3;
      undefined /* setApiDetails */;
      const v346 = v342[stdlib.checkedBigNumberify('./index.rsh:49:14:spread', stdlib.UInt_max, '0')];
      const v347 = stdlib.gt(v346, v307);
      stdlib.assert(v347, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:50:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)', 'at ./index.rsh:49:33:application call to [unknown function] (defined at: ./index.rsh:49:33:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v355 = [v305, v307];
      await txn3.getOutput('Bidder_bid', 'v355', ctc5, v355);
      if (v306) {
        stdlib.protect(ctc6, await interact.seeBid(v341, v346), {
          at: './index.rsh:59:40:application',
          fs: ['at ./index.rsh:59:40:application call to [unknown function] (defined at: ./index.rsh:59:40:function exp)', 'at ./index.rsh:59:40:application call to "liftedInteract" (defined at: ./index.rsh:59:40:application)', 'at ./index.rsh:52:35:application call to [unknown function] (defined at: ./index.rsh:52:35:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv305 = v341;
        const cv306 = false;
        const cv307 = v346;
        const cv308 = v343;
        const cv309 = v308;
        
        v305 = cv305;
        v306 = cv306;
        v307 = cv307;
        v308 = cv308;
        v309 = cv309;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc6, await interact.seeBid(v341, v346), {
          at: './index.rsh:59:40:application',
          fs: ['at ./index.rsh:59:40:application call to [unknown function] (defined at: ./index.rsh:59:40:function exp)', 'at ./index.rsh:59:40:application call to "liftedInteract" (defined at: ./index.rsh:59:40:application)', 'at ./index.rsh:52:35:application call to [unknown function] (defined at: ./index.rsh:52:35:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv305 = v341;
        const cv306 = false;
        const cv307 = v346;
        const cv308 = v343;
        const cv309 = v308;
        
        v305 = cv305;
        v306 = cv306;
        v307 = cv307;
        v308 = cv308;
        v309 = cv309;
        
        continue;}}
    
    }
  ;
  if (v306) {
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
      at: './index.rsh:77:33:application',
      fs: ['at ./index.rsh:77:33:application call to [unknown function] (defined at: ./index.rsh:77:33:function exp)', 'at ./index.rsh:77:33:application call to "liftedInteract" (defined at: ./index.rsh:77:33:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc6, await interact.showOutcome(v305, v307), {
      at: './index.rsh:77:33:application',
      fs: ['at ./index.rsh:77:33:application call to [unknown function] (defined at: ./index.rsh:77:33:function exp)', 'at ./index.rsh:77:33:application call to "liftedInteract" (defined at: ./index.rsh:77:33:application)'],
      msg: 'showOutcome',
      who: 'Creator'
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
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BiAKAAEEBSggCFFZoI0GJgIBAAAiNQAxGEEDEylkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHQ2GgIXNQQ2GgM2GgEXSYEDDEABEUkkDEAAWSQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAgNANXUAEXNAMhB1syBjQDIQhbQgGHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBFs1/VcwIDX8IQdbNfshCFs1+kk1BTX5gATXkLTdNPlQsDIGNP0MRDT5F0k1+DT7DUQ0+IgCO4AIAAAAAAAAAWM0/DT7FlBQsDT8NPsWUDUHNANXUAEXQQASNP80/jT9MQAiNPgyBjT6QgD3sSKyATT7sggjshA0/LIHszT/NP40/TEAIjT4MgY0+kIA1UkjDEAAVyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/oE4WzX9gASai5F0sCM0/ogBwDT/MQASRDT/NP40/TQDgTBbCDT/IzQDIQRbMgY0/UIAeEghCYgBgSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAFGsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAvTX/Nf41/TX8Nfs1+jX5Nfg0/zT6DkEALjT4NPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAGFnSCU1ATIGNQJCAHexIrIBI7ISJLIQNPuyFDT5shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAKrEisgE0/bIII7IQNPiyB7OxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
                "name": "v281",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
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
                "name": "v281",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T7",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v355",
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
        "internalType": "struct T9",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v342",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T7",
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
  Bytecode: `0x6080604052604051620016a2380380620016a283398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b61131e80620003846000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f61565b610143565b6100756100bc366004610f61565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f61565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b604051610092929190610fa9565b61011f61011a366004610fe3565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611064565b826102d1565b5050565b60408051606081018252600060208201818152928201529081526101756101a5368490038401846110c9565b826105f1565b60408051606081018252600060208201818152928201529081526101756101d7368490038401846110c9565b826107d4565b6000606060005460028080546101f290611101565b80601f016020809104026020016040519081016040528092919081815260200182805461021e90611101565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610296610df8565b6020810151518390526102bf604080516060810182526000602082018181529282015290815290565b6102c982826102d1565b519392505050565b6102e1600560005414600f61099c565b81516102fc9015806102f557508251600154145b601061099c565b60008080556002805461030e90611101565b80601f016020809104026020016040519081016040528092919081815260200182805461033a90611101565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f9190611152565b90506103c1604080516060810182526000602082018181529282015290815290565b6103d282604001514310601161099c565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a160a0820151602085015151516104319110600d61099c565b60208401515151610445903414600e61099c565b606082015181516001600160a01b03909116905260a082015181516020015280516040517f428c70b3247458b3c7e89e7318f08e4ea5397457cec705359355d62734306af4916104af9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a180518352608082015115610539576104cd610e25565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c0840151905160800152610533816109c2565b506105eb565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f1935050505015801561057a573d6000803e3d6000fd5b50610583610e25565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526105e9816109c2565b505b50505050565b610601600160005414600b61099c565b815161061c90158061061557508251600154145b600c61099c565b60008080556002805461062e90611101565b80601f016020809104026020016040519081016040528092919081815260200182805461065a90611101565b80156106a75780601f1061067c576101008083540402835291602001916106a7565b820191906000526020600020905b81548152906001019060200180831161068a57829003601f168201915b50505050508060200190518101906106bf91906111ff565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16107163415600861099c565b6107306107293383602001516001610b8e565b600961099c565b8051610748906001600160a01b03163314600a61099c565b610750610e25565b815181516001600160a01b03918216905260208084015183519216910152608082015160608301516107829190610ba6565b81516040908101919091528251602080840180516001600160a01b039093169092528151600191015283820151815190920191909152805143606090910152608080840151915101526105eb816109c2565b6107e4600560005414601461099c565b81516107ff9015806107f857508251600154145b601561099c565b60008080556002805461081190611101565b80601f016020809104026020016040519081016040528092919081815260200182805461083d90611101565b801561088a5780601f1061085f5761010080835404028352916020019161088a565b820191906000526020600020905b81548152906001019060200180831161086d57829003601f168201915b50505050508060200190518101906108a29190611152565b90506108b68160400151431015601661099c565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16109093415601261099c565b8051610921906001600160a01b03163314601361099c565b610929610e25565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a086015184519092019190915282514391015260c0840151915101526105eb816109c2565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80516040015160208201516080015111610af1576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610aec929190610e7a565b505050565b610b0d8160000151602001518260200151600001516001610bf9565b80602001516020015115610b345760008080556001819055610b3190600290610efe565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b77573d6000803e3d6000fd5b5060008080556001819055610b3190600290610efe565b6000610b9c83853085610c0d565b90505b9392505050565b600082610bb38382611289565b9150811015610bf35760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016109b9565b92915050565b610c04838383610ce7565b610aec57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c74916112af565b60006040518083038185875af1925050503d8060008114610cb1576040519150601f19603f3d011682016040523d82523d6000602084013e610cb6565b606091505b5091509150610cc782826001610db8565b5080806020019051810190610cdc91906112cb565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610d46916112af565b60006040518083038185875af1925050503d8060008114610d83576040519150601f19603f3d011682016040523d82523d6000602084013e610d88565b606091505b5091509150610d9982826002610db8565b5080806020019051810190610dae91906112cb565b9695505050505050565b60608315610dc7575081610b9f565b825115610dd75782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109b9565b905290565b604051806040016040528060008152602001610df360408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610e8690611101565b90600052602060002090601f016020900481019282610ea85760008555610eee565b82601f10610ec157805160ff1916838001178555610eee565b82800160010185558215610eee579182015b82811115610eee578251825591602001919060010190610ed3565b50610efa929150610f34565b5090565b508054610f0a90611101565b6000825580601f10610f1a575050565b601f016020900490600052602060002090810190610b3191905b5b80821115610efa5760008155600101610f35565b600060408284031215610f5b57600080fd5b50919050565b600060408284031215610f7357600080fd5b610b9f8383610f49565b60005b83811015610f98578181015183820152602001610f80565b838111156105eb5750506000910152565b8281526040602082015260008251806040840152610fce816060850160208701610f7d565b601f01601f1916919091016060019392505050565b600060208284031215610ff557600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561102d57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561102d57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561107757600080fd5b61107f610ffc565b833581526020601f198301121561109557600080fd5b61109d611033565b91506110a7611033565b602094850135815282529283015250919050565b8015158114610b3157600080fd5b6000604082840312156110db57600080fd5b6110e3610ffc565b8235815260208301356110f5816110bb565b60208201529392505050565b600181811c9082168061111557607f821691505b60208210811415610f5b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461114d57600080fd5b919050565b600060e0828403121561116457600080fd5b60405160e0810181811067ffffffffffffffff8211171561119557634e487b7160e01b600052604160045260246000fd5b6040526111a183611136565b81526111af60208401611136565b6020820152604083015160408201526111ca60608401611136565b606082015260808301516111dd816110bb565b608082015260a0838101519082015260c0928301519281019290925250919050565b600060a0828403121561121157600080fd5b60405160a0810181811067ffffffffffffffff8211171561124257634e487b7160e01b600052604160045260246000fd5b60405261124e83611136565b815261125c60208401611136565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600082198211156112aa57634e487b7160e01b600052601160045260246000fd5b500190565b600082516112c1818460208701610f7d565b9190910192915050565b6000602082840312156112dd57600080fd5b8151610b9f816110bb56fea26469706673582212203a83ec4be61e3dad4ad454837ba468610fb27c6fed89ff966dd23ec0a7be5df064736f6c634300080c0033`,
  BytecodeLen: 5794,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:78:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:78:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:45:23:after expr stmt semicolon',
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
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
