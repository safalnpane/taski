# Update a todo Item

curl -s -X PUT "http://localhost:3001/64de320dc2ac4bd6f7f9b1a5" \
  -d '{"name": "Updated todo this is"}' \
  -H 'Content-Type: application/json'

