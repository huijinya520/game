import {initial,scenes,operate,operationReady,confirmOperation,choose,move,shiftData,jobsFor,choiceEnabled} from '../story.js';
export const routes={
 relay:{},
 steady:{policy:['technical','rest']},
 silent:{report:'quiet',policy:['technical','rest']},
 hollow:{policy:['rest','reward'],budget:['cuts','reserve','supplier','support']},
 pledge:{union:'promise'},
 quarter:{final:'numbers'},
 unfinished:{days:[['supply'],['supply'],['build0']]}
};
export function run(route={},verify=()=>{}){let s=initial();const act=(action,value)=>{s=operate(s,action,value);verify(s)};for(let guard=0;guard<30&&s.node!=='END';guard++){const n=scenes[s.node],t=n.interaction?.type;
 if(t==='explore')for(const id of route.walk||['engine','tools','ledger'])act('visit',id);
 if(t==='dispatch')for(const id of route.dispatch||['field','tools'])act('toggle',id);
 if(t==='policy')for(const id of route.policy||['technical','voice'])act('toggle',id);
 if(t==='budget')for(const id of route.budget||['workshare','mentor','reserve'])act('toggle',id);
 if(t==='restart'){for(let day=0;day<3&&!operationReady(s);day++){if(route.days){for(const id of route.days[day])act('job',id)}else{const d=shiftData(s);const candidates=[...jobsFor(s).filter(j=>j.kind==='check'),...jobsFor(s).filter(j=>j.kind==='build'),...jobsFor(s).filter(j=>j.kind==='supply')];for(const j of candidates){try{act('job',j.id)}catch{}}}act('day')}}
 if(n.interaction){s=confirmOperation(s);verify(s)}
 if(n.choices){s.phase='action';s=choose(s,route[s.node]||n.choices.find(c=>choiceEnabled(s,c)).id);verify(s)}s=move(s);verify(s);
 }return s}
