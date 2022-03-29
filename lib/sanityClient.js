import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'np0xg654',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skuFi6gUQYjeiG5FLF6LliMkbCgFuemSDPNqivJlMlY5BT6evfO9Qv7p43a9TYFSahZ3kfgRptJgpnbIRtrilqRkhEzL92jXgSKLovPE2HDkdftiZPUU4zRrB89UG5lGZL3AIbs845pmlcgpTT1yZru7UoVKqd4ivKvEHPeAeKCoZCBga1nY',
  useCdn: false,
})