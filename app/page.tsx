export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Anonymous &amp; Secure
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Compare your startup metrics{' '}
          <span className="text-[#58a6ff]">anonymously</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing if your MRR growth, churn, or CAC is on track. Benchmark against real startups at your stage and industry — no names, no exposure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Benchmarking — $39/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Your data is always anonymized.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-10 text-center">
          {[['500+', 'Startups benchmarked'], ['12', 'Industries covered'], ['40+', 'Key metrics tracked'], ['100%', 'Anonymous submissions']].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, transparent pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Full access. No surprises.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Submit unlimited metrics anonymously',
              'Real-time benchmark dashboard',
              'Filter by stage, industry & geography',
              'Percentile rankings for 40+ KPIs',
              'Monthly benchmark report PDF',
              'Slack alerts when benchmarks shift',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How is my data kept anonymous?',
              a: 'We strip all identifying information before storing metrics. No company names, domains, or founder details are ever linked to submitted data. Each submission receives a random token — even we cannot trace it back to you.'
            },
            {
              q: 'Which metrics can I benchmark?',
              a: 'MRR, ARR, MoM growth, churn rate, CAC, LTV, LTV:CAC ratio, payback period, NPS, DAU/MAU, burn rate, runway, headcount efficiency, and 30+ more. New metrics are added monthly based on community requests.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel from your billing portal with one click. You keep access until the end of your billing period and your anonymized data remains in the benchmark pool to help the community.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        <p>&copy; {new Date().getFullYear()} Startup Metrics Benchmarker. All rights reserved.</p>
      </footer>
    </main>
  )
}
