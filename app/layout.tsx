// import { CustomThemeProvider } from '@/context/ThemeProvider'
import { CustomThemeProvider } from '@/context/ThemeProvider'
import './globals.css'
import { Noto_Sans } from 'next/font/google'
import { MessageContextProvider } from '@/context/MessageContext'
const notoSans = Noto_Sans({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], fallback: ["inter"], subsets: ["latin"] })

export const metadata = {
  title: 'My unsplash',
  description: 'This is a photo uploading website you can create your collection.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ width: "100vw", height: "100vh", overflow: "auto" }} className={notoSans.className}>
        <CustomThemeProvider>
          <MessageContextProvider>
            {children}
          </MessageContextProvider>
        </CustomThemeProvider>
      </body>
    </html>
  )
}
