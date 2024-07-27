
# A basic version of PayTM
 Buglist to solve - 
 ## Backend
 - user should not be allowed to update the username. right now its getting updated even tho its not in the zod schema
 - transferring money should allowed by id and username both as they both should be unique
 - Get User Data should only be for signed in users
 - /me endpoint for redirecting the users
 ## Frontend
 - Signed in User should not see themselves in the dashboard user list
 - Redirect logged in users to Dashboard 