import jwt
encoded_jwt = jwt.encode({"name": "Rajat"}, "myfavoritesecret", algorithm="HS256")
print(encoded_jwt)
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoicGF5bG9hZCJ9.4twFt5NiznN84AWoo1d7KO1T_yoc0Z6XOpOVswacPZg
print(jwt.decode(encoded_jwt, "myfavoritesecret", algorithms=["HS256"]))
# {'some': 'payload'}