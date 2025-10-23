import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Shield, TrendingUp, Clock, CheckCircle2, Star } from "lucide-react";

export default function PublicationsPage() {
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
              Post a job
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            For Publications & Editors
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-serif leading-[1.1] max-w-4xl mx-auto">
            Discover writers you'd <span className="italic">never</span> find through traditional channels
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Stop relying on the same 20 writers. Find fresh voices, diverse perspectives, and authentic pitches. All while staying completely anonymous until you match.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-800 h-14 px-10 text-lg"
            >
              Post your first job
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg">
              See pricing
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              2,847 vetted writers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              3-day avg response time
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
              Zero-bias matching
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">89%</div>
            <div className="text-sm text-neutral-400">Editor satisfaction rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">3 days</div>
            <div className="text-sm text-neutral-400">Avg. time to fill a job</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">127</div>
            <div className="text-sm text-neutral-400">Active publications</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-serif mb-2">12x</div>
            <div className="text-sm text-neutral-400">More diverse pitches</div>
          </div>
        </div>
      </section>

      {/* The Problem (Publications Face) */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-12 text-center leading-tight">
            You're missing out on incredible writers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-sm flex items-center justify-center">
                  <span className="text-2xl">😞</span>
                </div>
                <h3 className="text-xl font-serif">Same writers, same angles</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Your inbox is full of pitches from the same established writers. Fresh voices can't break through the noise.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-100 rounded-sm flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-serif">Unconscious bias</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You want diverse perspectives, but byline recognition influences your decisions before you realize it.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-sm flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-serif">Time-consuming vetting</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Sifting through portfolios, checking credentials, and vetting unknowns takes hours you don't have.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Publication POV */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            How BlindPitch works for you
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg max-w-2xl mx-auto">
            Post a job. Review blind pitches. Reveal identities only when you're ready to hire.
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif">
                  1
                </div>
                <h3 className="text-3xl font-serif">Post your opportunity anonymously</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  List the topic, word count, deadline, and payment. Your publication name stays hidden. This attracts writers who care about the work, not the brand.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Shield className="w-4 h-4 text-indigo-500" />
                    Your identity protected until match
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Zap className="w-4 h-4 text-indigo-500" />
                    Attract authentic pitches, not brand-chasers
                  </div>
                </div>
              </div>
              <Card className="rounded-sm border-neutral-200 bg-neutral-50">
                <CardContent className="p-8 space-y-4">
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Job posting preview
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-neutral-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-xs text-neutral-500 mb-2">[Your Publication - Hidden]</div>
                        <div className="text-xl font-serif">The Future of AI in Healthcare</div>
                      </div>
                      <Badge className="bg-emerald-500 text-white border-0">$1,200</Badge>
                    </div>
                    <div className="text-sm text-neutral-600 space-y-2">
                      <p>2,000 words • Due in 21 days</p>
                      <p className="text-neutral-700">
                        We're looking for a nuanced exploration of how AI is transforming diagnostics and patient care...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-2">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif">
                  2
                </div>
                <h3 className="text-3xl font-serif">Review blind pitches</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Writers submit pitches without their names, portfolios, or bylines. You see their angle, writing sample, and ideas. Nothing else. Judge purely on merit.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Target className="w-4 h-4 text-indigo-500" />
                    Focus on quality, not credentials
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4 text-indigo-500" />
                    Discover diverse voices naturally
                  </div>
                </div>
              </div>
              <Card className="rounded-sm border-neutral-200 bg-neutral-50 lg:order-1">
                <CardContent className="p-8 space-y-4">
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Pitch inbox
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-sm border border-neutral-200">
                      <div className="text-sm text-neutral-500 mb-2">Pitch #1 • [Writer identity hidden]</div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        "I want to explore how AI diagnostics are being adopted in rural hospitals where access to specialists is limited..."
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Decline
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-sm border border-neutral-200 opacity-60">
                      <div className="text-sm text-neutral-500 mb-2">Pitch #2 • [Writer identity hidden]</div>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        "AI is revolutionizing patient care through predictive analytics..."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif">
                  3
                </div>
                <h3 className="text-3xl font-serif">The mutual reveal</h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Accept a pitch and both identities are revealed. See the writer's portfolio. They see your publication. Both parties decide if they want to proceed. Fair and transparent.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    Work begins immediately upon mutual acceptance
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    Payment held in escrow for protection
                  </div>
                </div>
              </div>
              <Card className="rounded-sm border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="p-8 space-y-4">
                  <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
                    ✓ Match confirmed
                  </div>
                  <div className="bg-white p-6 rounded-sm border border-indigo-200">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">Writer revealed</div>
                        <div className="font-serif text-lg">Jessica Martinez</div>
                        <div className="text-sm text-neutral-600">Medical journalist, 8 years experience</div>
                      </div>
                      <div className="pt-4 border-t border-neutral-200">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                          Proceed with hire
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            Why top publications use BlindPitch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Discover hidden talent</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Access to 2,847 vetted writers you'd never find through traditional channels. Fresh voices with unique perspectives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-sm flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Eliminate unconscious bias</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Blind review ensures you hire based on ideas and writing quality, not name recognition or credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-sm flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Save time on vetting</h3>
                <p className="text-neutral-400 leading-relaxed">
                  All writers are pre-screened. Review pitches and samples instead of sifting through portfolios for hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-sm flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Get authentic pitches</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Writers choose your job based on interest in the topic, not your brand. Pitches are genuine and passionate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Higher quality output</h3>
                <p className="text-neutral-400 leading-relaxed">
                  89% of editors report better-than-expected quality. Writers are motivated by passion, not portfolio building.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 border-neutral-700 rounded-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-sm flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white">Fast turnaround</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Average time to fill a position: 3 days. Most jobs get 5-10 quality pitches within 48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            Simple, transparent pricing
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg">
            Only pay when you find the perfect writer
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Free Trial */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-2">Trial</h3>
                  <div className="text-4xl font-serif mb-1">Free</div>
                  <div className="text-sm text-neutral-600">First 2 job posts</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Post up to 2 jobs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Access to full writer pool</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Blind pitch matching</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Start free trial
                </Button>
              </CardContent>
            </Card>

            {/* Pay Per Job */}
            <Card className="rounded-sm border-neutral-900 bg-neutral-900 text-white">
              <CardContent className="p-8 space-y-6">
                <div>
                  <Badge className="bg-amber-400 text-neutral-900 border-0 mb-4">Most Popular</Badge>
                  <h3 className="text-2xl font-serif mb-2">Per Job</h3>
                  <div className="text-4xl font-serif mb-1">$49</div>
                  <div className="text-sm text-neutral-400">per filled position</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Unlimited job posts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Only pay when you hire</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>No monthly commitment</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-100">
                  Get started
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif mb-2">Enterprise</h3>
                  <div className="text-4xl font-serif mb-1">Custom</div>
                  <div className="text-sm text-neutral-600">For large publishers</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Unlimited hires</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Multi-user accounts</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            What editors are saying
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "We found a writer for our AI series who had zero tech bylines but deep industry knowledge. Would never have discovered her through traditional pitching. The blind process works."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-medium">Rachel Kim</div>
                  <div className="text-sm text-neutral-600">Senior Editor, TechCrunch</div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "The quality is consistently better than what we get from traditional pitches. Writers are genuinely interested in the topics, not just chasing our name."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-medium">David Chen</div>
                  <div className="text-sm text-neutral-600">Managing Editor, Vox</div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "Filled three positions in four days. The writer pool is vetted, the pitches are authentic, and the platform makes hiring dead simple. Worth every penny."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-medium">Alexandra Wright</div>
                  <div className="text-sm text-neutral-600">Content Director, The Atlantic</div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  "Our diversity metrics improved dramatically without us even trying. Turns out when you remove bias from the equation, you naturally get more diverse voices."
                </p>
                <div className="pt-4 border-t border-neutral-200">
                  <div className="font-medium">Marcus Johnson</div>
                  <div className="text-sm text-neutral-600">Editor-in-Chief, Wired</div>
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
            Start discovering better writers today
          </h2>
          <p className="text-xl text-neutral-400">
            Post your first job for free. See the difference blind hiring makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-14 px-10 text-lg"
            >
              Post your first job
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg"
            >
              Schedule a demo
            </Button>
          </div>
          <p className="text-sm text-neutral-500 pt-4">
            Free trial • No credit card required • 2 free job posts
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
