import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Clock, DollarSign, Shield, Sparkles } from "lucide-react";

export default function WritersPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-serif italic">BlindPitch</a>
          <div className="flex items-center gap-6">
            <a href="/writers" className="text-sm hover:underline hidden md:inline">
              For writers
            </a>
            <a href="/publications" className="text-sm hover:underline hidden md:inline">
              For publications
            </a>
            <Button variant="ghost" className="text-sm">
              Sign in
            </Button>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-sm">
              Get started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-amber-50 via-white to-neutral-50">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            For Writers
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-serif leading-[1.1] max-w-4xl mx-auto">
            Get published based on your <span className="italic">writing</span>, not your resume
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            No portfolio required. No byline gatekeeping. Just you, your words, and publications that actually want to work with you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 h-14 px-10 text-lg"
            >
              Start pitching for free
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg">
              See how it works
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No portfolio needed
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% free for writers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Get paid fairly
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">34%</div>
            <div className="text-sm text-neutral-400">Average acceptance rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">$487</div>
            <div className="text-sm text-neutral-400">Avg. payment per piece</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">5 days</div>
            <div className="text-sm text-neutral-400">Time to first acceptance</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">127</div>
            <div className="text-sm text-neutral-400">Active publications</div>
          </div>
        </div>
      </section>

      {/* How It Works - Writer POV */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            Your new writing workflow
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg max-w-2xl mx-auto">
            Three simple steps from browsing to getting paid. No cold emails. No portfolio reviews. No bias.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif">
                  1
                </div>
                <h3 className="text-2xl font-serif">Browse blind opportunities</h3>
                <p className="text-neutral-600 leading-relaxed">
                  See the topic, word count, deadline, and payment. The publication name stays hidden until you match.
                </p>
                <div className="pt-4">
                  <div className="bg-neutral-100 p-4 rounded-sm text-sm">
                    <div className="text-xs text-neutral-500 mb-2">[Mystery Publication]</div>
                    <div className="font-medium mb-1">Climate Tech Startups</div>
                    <div className="text-neutral-600">1,500 words • $750 • 14 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif">
                  2
                </div>
                <h3 className="text-2xl font-serif">Pitch anonymously</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Submit your pitch and writing sample. Your name, portfolio, and bylines stay hidden. Pure meritocracy.
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Shield className="w-4 h-4 text-emerald-500" />
                    Identity protected
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    Judged on merit only
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="rounded-sm border-neutral-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-400 text-neutral-900 rounded-sm flex items-center justify-center text-xl font-serif">
                  3
                </div>
                <h3 className="text-2xl font-serif">The reveal</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Get accepted and see who chose your writing. Could be The Atlantic. Could be a scrappy blog. You decide if you accept.
                </p>
                <div className="pt-4">
                  <div className="bg-white p-4 rounded-sm text-sm border border-amber-200">
                    <div className="text-xs text-emerald-600 mb-2 font-medium">✓ ACCEPTED</div>
                    <div className="font-serif text-lg mb-1">Reveal: TechCrunch</div>
                    <div className="text-neutral-600 text-xs">Click to accept or decline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            Why writers choose BlindPitch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-sm flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Transparent compensation</h3>
              <p className="text-neutral-600 leading-relaxed">
                See the exact payment upfront. No negotiations. No surprises. Know what you'll earn before you pitch.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">No portfolio required</h3>
              <p className="text-neutral-600 leading-relaxed">
                New to writing? Career switcher? Doesn't matter. Your pitch and sample are all that count.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Zero bias matching</h3>
              <p className="text-neutral-600 leading-relaxed">
                Editors can't see your name, gender, age, or background. Just your writing. Level playing field, guaranteed.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-sm flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Fast responses</h3>
              <p className="text-neutral-600 leading-relaxed">
                Average response time: 3 days. No more pitching into the void for weeks. Get clarity quickly.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-sm flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Build real clips</h3>
              <p className="text-neutral-600 leading-relaxed">
                Once matched, you get the byline. Add it to your portfolio. Build credibility with every accepted piece.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-sm flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif">Write what you love</h3>
              <p className="text-neutral-600 leading-relaxed">
                Choose topics you're passionate about, not publications you want to impress. Rediscover why you started writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            From struggling to thriving
          </h2>
          <p className="text-center text-neutral-400 mb-16 text-lg">
            Real writers. Real transformations.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Sarah Chen</div>
                    <div className="text-sm text-neutral-400">26, Former teacher</div>
                  </div>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  "I'd been rejected by Vox four times with my name attached. On BlindPitch, my third pitch got accepted—and it was Vox. They chose my writing, not my lack of bylines. I'm now a regular contributor."
                </p>
                <div className="flex items-center gap-4 text-sm pt-4 border-t border-neutral-700">
                  <div className="text-emerald-400">23 pieces published</div>
                  <div className="text-neutral-500">•</div>
                  <div className="text-neutral-400">$11,200 earned</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Marcus Williams</div>
                    <div className="text-sm text-neutral-400">34, Full-time freelancer</div>
                  </div>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  "I stopped chasing 'impressive' outlets and started writing about topics I cared about. Made $4,200 last month. My imposter syndrome is gone. This platform gave me my confidence back."
                </p>
                <div className="flex items-center gap-4 text-sm pt-4 border-t border-neutral-700">
                  <div className="text-emerald-400">31 pieces published</div>
                  <div className="text-neutral-500">•</div>
                  <div className="text-neutral-400">$14,800 earned</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Priya Patel</div>
                    <div className="text-sm text-neutral-400">29, Career switcher</div>
                  </div>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  "The reveal moment is addictive. It's like Christmas every time you get accepted. You never know if it's a startup blog or The Guardian. Either way, someone wanted YOUR words."
                </p>
                <div className="flex items-center gap-4 text-sm pt-4 border-t border-neutral-700">
                  <div className="text-emerald-400">12 pieces published</div>
                  <div className="text-neutral-500">•</div>
                  <div className="text-neutral-400">$5,600 earned</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Alex Thompson</div>
                    <div className="text-sm text-neutral-400">41, Former journalist</div>
                  </div>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  "After 15 years in local news, I wanted to write long-form. But I had zero national bylines. BlindPitch got me into three major outlets in my first two months. This is how writing should work."
                </p>
                <div className="flex items-center gap-4 text-sm pt-4 border-t border-neutral-700">
                  <div className="text-emerald-400">18 pieces published</div>
                  <div className="text-neutral-500">•</div>
                  <div className="text-neutral-400">$8,900 earned</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
                Make real money from your writing
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">
                Writers on BlindPitch earn between $200-$2,000 per piece. No spec work. No "exposure" instead of payment. Just fair compensation for quality writing.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Payment upfront</div>
                    <div className="text-sm text-neutral-600">Know what you'll earn before you pitch</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Protected payments</div>
                    <div className="text-sm text-neutral-600">Money held in escrow until delivery</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Fast payouts</div>
                    <div className="text-sm text-neutral-600">Get paid within 3 days of publication</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl font-serif">Earnings breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-neutral-600">Short pieces (500-800 words)</span>
                      <span className="font-medium">$200-$400</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2 rounded-full">
                      <div className="bg-emerald-500 h-2 rounded-full w-[30%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-neutral-600">Standard pieces (1,000-1,500 words)</span>
                      <span className="font-medium">$400-$800</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2 rounded-full">
                      <div className="bg-amber-500 h-2 rounded-full w-[60%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-neutral-600">Long-form (2,000+ words)</span>
                      <span className="font-medium">$800-$2,000</span>
                    </div>
                    <div className="w-full bg-neutral-100 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-neutral-200">
                  <div className="text-sm text-neutral-600 mb-2">Average monthly earnings (active writers)</div>
                  <div className="text-4xl font-serif text-neutral-900">$2,340</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
            Start getting published today
          </h2>
          <p className="text-xl text-neutral-400">
            Free to join. No portfolio required. Just bring your best ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-14 px-10 text-lg"
            >
              Create your free account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg"
            >
              Browse opportunities
            </Button>
          </div>
          <p className="text-sm text-neutral-500 pt-4">
            Join 2,847 writers • Average first acceptance: 5 days
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="text-2xl font-serif italic">BlindPitch</div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The bias-free writing platform for writers who deserve a fair shot.
              </p>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                For writers
              </div>
              <ul className="space-y-3 text-sm">
                <li><a href="/how-it-works" className="text-neutral-700 hover:underline">How it works</a></li>
                <li><a href="/browse" className="text-neutral-700 hover:underline">Browse jobs</a></li>
                <li><a href="/writers" className="text-neutral-700 hover:underline">Success stories</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                For publications
              </div>
              <ul className="space-y-3 text-sm">
                <li><a href="/publications" className="text-neutral-700 hover:underline">Post opportunities</a></li>
                <li><a href="/publications" className="text-neutral-700 hover:underline">Find writers</a></li>
                <li><a href="/publications" className="text-neutral-700 hover:underline">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Company
              </div>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-neutral-700 hover:underline">About</a></li>
                <li><a href="#" className="text-neutral-700 hover:underline">Blog</a></li>
                <li><a href="#" className="text-neutral-700 hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">© 2025 BlindPitch. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
