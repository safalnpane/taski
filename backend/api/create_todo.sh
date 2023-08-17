# Create new todo Item

curl -s -X POST "http://localhost:3001/" \
  -d '{"name": "test todo"}' \
  -H 'Content-Type: application/json'
