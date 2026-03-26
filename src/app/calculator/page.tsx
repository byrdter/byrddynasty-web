'use client'

import { useState } from 'react'

export default function CalculatorPage() {
  const [employees, setEmployees] = useState(3)
  const [avgSalary, setAvgSalary] = useState(60000)

  const employeeCost = employees * avgSalary
  const aiCost = 3600 // $300/mo * 12 months
  const savings = employeeCost - aiCost
  const savingsPercent = ((savings / employeeCost) * 100).toFixed(0)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI vs Employee{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cost Calculator
            </span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            See exactly how much you could save by replacing employees with AI agents.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-8">Your Current Costs</h2>

            <div className="space-y-8 mb-12">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Number of Employees (or planned)
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-3xl font-bold text-primary mt-2">{employees}</div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Average Salary (per employee/year)
                </label>
                <input
                  type="range"
                  min="40000"
                  max="150000"
                  step="10000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-3xl font-bold text-primary mt-2">
                  ${avgSalary.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="border-t border-foreground/10 pt-8">
              <h3 className="text-xl font-bold mb-6">The Results</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                  <div className="text-sm text-red-500 font-semibold mb-2">Current Cost (Employees)</div>
                  <div className="text-4xl font-bold text-red-500">
                    ${employeeCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-foreground/50 mt-2">per year</div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <div className="text-sm text-green-500 font-semibold mb-2">AI Alternative Cost</div>
                  <div className="text-4xl font-bold text-green-500">
                    ${aiCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-foreground/50 mt-2">per year</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-lg p-8 text-center">
                <div className="text-sm font-semibold mb-2">Annual Savings</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  ${savings.toLocaleString()}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {savingsPercent}% Reduction
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-foreground/10">
              <h4 className="font-semibold mb-4">Recommended AI Stack for Your Business:</h4>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>• Foundation models (ChatGPT, Claude): $60/year</li>
                <li>• Automation platform (Zapier, Make): $600/year</li>
                <li>• Specialized agents (Sales, Support, Finance): $2,400/year</li>
                <li>• Deployment & hosting: $540/year</li>
              </ul>
              <a
                href="/tool-stack"
                className="inline-block px-6 py-3 bg-[#1e3a5f] hover:bg-[#2a4a75] text-white rounded-lg font-semibold transition-all hover:scale-105"
              >
                See Complete Tool Stack →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
          <p className="text-foreground/70 mb-8">
            Get our complete implementation guide with step-by-step workflows and tool recommendations.
          </p>
          <a
            href="/frameworks"
            className="inline-block px-8 py-4 bg-[#1e3a5f] hover:bg-[#2a4a75] text-white rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Get Implementation Guide
          </a>
        </div>
      </section>
    </div>
  )
}
