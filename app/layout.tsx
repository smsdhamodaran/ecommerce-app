import AuthProvider from "../components/Authprovider"

export const metadata = {
  title: "My E-Commerce Site",
  description: "Built with Next.js App Router",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
