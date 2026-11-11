# AuthFlow

A small React single-page app that demonstrates the first Auth0 login flow: hosted sign-in, an authenticated profile view, and sign-out. It follows the [Auth0 React Quickstart](https://auth0.com/docs/quickstart/spa/react).

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm 10+
- An Auth0 tenant and a Single Page Application registered in it

## Configure Auth0

In the Auth0 Dashboard, create a **Single Page Application** and set these URLs in its application settings:

| Setting | Value |
| --- | --- |
| Allowed Callback URLs | `http://localhost:5173` |
| Allowed Logout URLs | `http://localhost:5173` |
| Allowed Web Origins | `http://localhost:5173` |

Save the settings. Copy the application's **Domain** and **Client ID** into a local `.env` file based on `.env.example`:

```dotenv
VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

Keep `.env` local. It is ignored by Git; only the placeholder `.env.example` is tracked.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Use **Continue with Auth0** to sign in. After returning to the app, the profile card confirms the authenticated session. **Sign out** returns to the app's home page.

The application uses `Auth0Provider` with the current origin as its callback URL. The SDK handles the redirect-based sign-in flow; this app never collects or stores a password.

## Project structure

- `src/main.tsx` — Auth0 provider setup and missing-configuration screen
- `src/App.tsx` — login, authenticated profile, error, and logout states
- `.env.example` — required local configuration placeholders

