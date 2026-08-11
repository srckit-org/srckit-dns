export interface DNSResult { domain:string; records:{type:string;value:string;ttl:number}[];error?:string; }
export async function lookupDNS(domain:string,type:string='A'):Promise<DNSResult>{
  try{const r=await fetch(`https://dns.google/resolve?name=${encodeURIComponent(domain)}&type=${type}`);const d=await r.json();
  if(d.Answer) return {domain,records:d.Answer.map((a:{type:number;data:string;TTL:number})=>({type:typeNumToStr(a.type),value:a.data,ttl:a.TTL}))};
  return {domain,records:[]};
  }catch(e){return {domain,records:[],error:(e as Error).message};}
}
function typeNumToStr(n:number):string{const m:Record<number,string>={1:'A',28:'AAAA',5:'CNAME',2:'NS',15:'MX',16:'TXT',6:'SOA',33:'SRV',257:'CAA'};return m[n]||String(n);}
export const DNS_TYPES=['A','AAAA','CNAME','MX','NS','TXT','SOA','CAA'];
