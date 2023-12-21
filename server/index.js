const express = require('express');
const app = express();
const cors = require('cors');
const sdk = require('api')('@shopier/v1.0#8j51sulmevyvux');


sdk.auth('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0NTA2ZjA5YjFhY2U1MGRkMTc2NzdkMmYwZTgzZWM0MSIsImp0aSI6IjllMDNkNDhmMjg3NTc2ZGYxZDk2MjA2MDNhYjZjYzlmZjYyODYzYzhkNzYwMTY0OWIyNGU5Y2FiNmQzZDQ1NWE5ZWIwYjdmYWU5ZjcxY2M5NTU1OTA3YzJjZjQ5OTUyYzNiZWUwMjFhMmYwMmVjMmIwNTUzZTYzYWQ3NTQ4ODc3NTY1MWRmODdkOTMyNTBjYmEwNmU3ZjMwZTA5YmNmODAiLCJpYXQiOjE3MDI2NTUzOTYsIm5iZiI6MTcwMjY1NTM5NiwiZXhwIjoxODYwNDQwMTU2LCJzdWIiOiI1OTQ2NjMiLCJzY29wZXMiOlsib3JkZXJzOnJlYWQiLCJvcmRlcnM6d3JpdGUiLCJwcm9kdWN0czpyZWFkIiwicHJvZHVjdHM6d3JpdGUiLCJzaGlwcGluZ3M6cmVhZCIsInNoaXBwaW5nczp3cml0ZSIsImRpc2NvdW50czpyZWFkIiwiZGlzY291bnRzOndyaXRlIiwicGF5b3V0czpyZWFkIiwicmVmdW5kczpyZWFkIiwicmVmdW5kczp3cml0ZSIsInNob3A6cmVhZCIsInNob3A6d3JpdGUiXX0.iT1tolpoUpn2hKK_JeBMUJrB45YLOpJr5iT45QbZUilhaQE6iX6lJ9RRjxya_IfKZHIATC6NgyfoOWYUpRhmP7VAm0eqSIsMms6RVUC5o3DXQmPkRzcmT9xUyRxEsoKyiRWW43zc8dupuiHdvoUutzi9YWAVcKlW62QjVv6pQAr-dYtYwAPN-mH-J8dDfAdJiSutqTcTrl5kG_aY9cPafq_9xyIsH6uHLB6GjdUV-LttHfYayDCecnhFLbWOgyI1_SnHFxjEIe5nAgXUbuZBuuyAOIYVWuiiE0SiR77dajXgkcyWgjF8km_LYtgqk7Mt4ph68m76xuczKjxXkE5E1Q');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from our server!')
})

app.get('/list-all-products', (req, res) => {
  sdk.getProducts()
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err));  
})

app.get('/list-all-categories', (req, res) => {
  sdk.getCategories({limit: '10', page: '1', sort: 'asc'})
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err));
})


app.listen(8080, () => {
      console.log('server listening on port 8080')
})

