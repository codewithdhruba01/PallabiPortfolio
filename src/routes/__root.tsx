import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Pallabi Pati — Staff Nurse",
      },
      {
        name: "description",
        content:
          "Personal website of Pallabi Pati — Staff Nurse",
      },
      {
        name: "og:title",
        content: "Pallabi Pati — Staff Nurse",
      },
      {
        name: "og:description",
        content:
          "Personal website of Pallabi Pati — Staff Nurse",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: "Pallabi Pati — Staff Nurse",
      },
      {
        name: "twitter:description",
        content:
          "Personal website of Pallabi Pati — Staff Nurse",
      },
      {
        name: "og:image",
        content: "https://pallabipati.in/meta/home.png",
      },
      {
        name: "twitter:image",
        content: "https://pallabipati.in/meta/home.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon/favicon.svg",
      },
      {
        rel: "shortcut icon",
        href: "/favicon/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest",
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">404</h1>
        <p className="text-black/60">Page not found</p>
        <a href="/" className="mt-4 inline-block underline">
          Go home
        </a>
      </div>
    </div>
  ),
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';if(['dark','amber','blue','light'].includes(t)){var h=document.documentElement;['dark','amber','blue'].forEach(function(c){h.classList.remove(c)});if(t!=='light'){h.classList.add(t)}}}catch(e){}})()`;

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
