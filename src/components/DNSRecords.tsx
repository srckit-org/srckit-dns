import { useState } from 'react';import { TextField,Paper,Typography,Button,CircularProgress } from '@mui/material';import { lookupDNS,DNS_TYPES } from '../utils/dnsUtils';
export default function DNSRecords(){const[domain,setDomain]=useState('');const[results,setResults]=useState<Awaited<ReturnType<typeof lookupDNS>>[]>([]);const[loading,setLoading]=useState(false);
const lookupAll=async()=>{setLoading(true);setResults([]);const all=await Promise.all(DNS_TYPES.map(t=>lookupDNS(domain,t)));setResults(all);setLoading(false);};
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>All DNS Records</Typography>
<div className="flex gap-2 mb-4"><TextField value={domain} onChange={e=>setDomain(e.target.value)} size="small" className="font-mono flex-1" placeholder="example.com"/>
<Button variant="contained" onClick={lookupAll} disabled={loading||!domain}>{loading?<CircularProgress size={16}/>:'Lookup All'}</Button></div>
{results.map((r,i)=>(<Paper key={i} variant="outlined" className="p-3 mb-2"><Typography variant="subtitle2" sx={{fontWeight:600}}>{DNS_TYPES[i]} Records{r.records.length>0?` (${r.records.length})`:''}</Typography>
{r.records.map((rec,j)=><div key={j} className="font-mono text-sm ml-4">{rec.value} <span className="text-gray-400">TTL: {rec.ttl}</span></div>)}</Paper>))}
</div>);}
