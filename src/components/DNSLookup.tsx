import { useState } from 'react';import { TextField,Paper,Typography,Button,Chip,CircularProgress,MenuItem,Select,FormControl,InputLabel } from '@mui/material';import { lookupDNS,DNS_TYPES } from '../utils/dnsUtils';
export default function DNSLookup(){const[domain,setDomain]=useState('');const[type,setType]=useState('A');const[result,setResult]=useState<Awaited<ReturnType<typeof lookupDNS>>|null>(null);const[loading,setLoading]=useState(false);
const lookup=async()=>{setLoading(true);setResult(null);const r=await lookupDNS(domain,type);setResult(r);setLoading(false);};
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>DNS Lookup</Typography>
<div className="flex gap-2 mb-3"><FormControl size="small" className="w-24"><InputLabel>Type</InputLabel><Select value={type} label="Type" onChange={e=>setType(e.target.value)}>{DNS_TYPES.map(t=><MenuItem key={t} value={t}>{t}</MenuItem>)}</Select></FormControl>
<TextField value={domain} onChange={e=>setDomain(e.target.value)} size="small" className="font-mono flex-1" placeholder="example.com"/>
<Button variant="contained" onClick={lookup} disabled={loading||!domain}>{loading?<CircularProgress size={16}/>:'Lookup'}</Button></div>
{result?.error&&<Chip label={result.error} color="error"/>}
{result?.records.map((r,i)=><Paper key={i} variant="outlined" className="p-2 mb-1 flex items-center gap-2"><Chip label={r.type} size="small" color="primary"/><span className="font-mono text-sm">{r.value}</span><Chip label={`TTL: ${r.ttl}`} size="small" variant="outlined"/></Paper>)}
{result&&result.records.length===0&&<Paper variant="outlined" className="p-8 text-center"><Typography color="text.secondary">No records found.</Typography></Paper>}
</div>);}
