import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
function SSRPage() {
	let host = null;
	if(process.browser){
		host = window.location.search;
	}

  const { data, error } = useSWR('https://services.nextaxe.com/api/setup'+host, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello 
        <li key={data.Payload.store.name}>{data.Payload.store.name}</li>
        <li key={data.Payload.store.currency}>{data.Payload.store.currency}</li>
        <li key={data.Payload.store.logo}>{data.Payload.store.logo}</li>
    </div>
}

export default SSRPage