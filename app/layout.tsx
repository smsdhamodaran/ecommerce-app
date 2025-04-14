import AuthProvider from "../components/Authprovider"
import { CartProvider } from "../context/CartContext"


export const metadata = {
  title: "My E-Commerce Site",
  description: "Built with Next.js App Router",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}