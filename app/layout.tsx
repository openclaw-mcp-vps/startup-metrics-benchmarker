import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Benchmarker — Compare Your Startup Metrics Anonymously',
  description: 'Anonymous benchmarking platform where startups can compare key metrics against similar companies by stage and industry. Know where you stand.',
  openGraph: {
    title: 'Startup Metrics Benchmarker',
    description: 'Compare your startup metrics anonymously against peers by stage and industry.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40cb20bc-a279-4451-9b8e-18e93343815f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
