'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./Components/NavBar"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  shadows: {
    purple: '0 0 0 3px var(--chakra-colors-purple)'
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <NavBar/>
            {children}
            </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}