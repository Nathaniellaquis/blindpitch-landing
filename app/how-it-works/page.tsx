import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Eye, EyeOff, Zap, Lock, DollarSign, Users, ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
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
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            How It Works
          </Badge>
          <h1 className="text-6xl lg:text-7xl font-serif leading-[1.1]">
            Bias-free hiring, <span className="italic">both</span> ways
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Writers don't know which publication they're pitching. Publications don't know who's pitching them. Identities are revealed only when both parties are ready to work together.
          </p>
        </div>
      </section>

      {/* The Core Concept */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-12 text-center">
            The double-blind approach
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Writer Side */}
            <Card className="rounded-sm border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-400 rounded-sm flex items-center justify-center">
                    <EyeOff className="w-6 h-6 text-neutral-900" />
                  </div>
                  <h3 className="text-2xl font-serif">Writers are blind to publications</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Publication names hidden</div>
                      <div className="text-sm text-neutral-700">You see the topic, payment, and deadline. Not the brand.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Choose based on interest</div>
                      <div className="text-sm text-neutral-700">Pick topics you care about, not brands you want to impress.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Revealed only when matched</div>
                      <div className="text-sm text-neutral-700">See the publication name after they accept your pitch.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publication Side */}
            <Card className="rounded-sm border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-sm flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif">Publications are blind to writers</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Writer identities hidden</div>
                      <div className="text-sm text-neutral-700">Names, portfolios, and credentials stay hidden.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Judge on merit alone</div>
                      <div className="text-sm text-neutral-700">Review pitches and writing samples without bias.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-1">Revealed when you accept</div>
                      <div className="text-sm text-neutral-700">See the writer's portfolio after accepting their pitch.</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Journey - Writer View */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-xs uppercase tracking-wider mb-4">
              For Writers
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif">
              Your journey from browse to published
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Browse blind opportunities</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Scroll through jobs. See topics, word counts, deadlines, and payments. Publication names are completely hidden—labeled as "[Mystery Publication]."
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-neutral-900 p-6 rounded-sm">
                  <div className="bg-neutral-800 p-6 rounded-sm space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                          [Mystery Publication]
                        </div>
                        <div className="text-xl font-serif text-white">
                          The Future of Remote Work
                        </div>
                      </div>
                      <Badge className="bg-emerald-500 text-white border-0">$600</Badge>
                    </div>
                    <div className="text-sm text-neutral-400">
                      1,200 words • Due in 14 days
                    </div>
                    <p className="text-sm text-neutral-300">
                      Looking for a fresh take on hybrid work models and their impact on company culture...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-neutral-400" />
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:order-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Submit your anonymous pitch</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Write your pitch and attach a writing sample. Your name, portfolio, and credentials are hidden. The editor only sees your ideas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-1">
                <div className="bg-white border border-neutral-200 p-6 rounded-sm space-y-4">
                  <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                    Your pitch submission
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-neutral-700">
                      <strong>Your angle:</strong> I want to explore how companies are rethinking office spaces not as productivity hubs, but as social centers...
                    </div>
                    <div className="text-xs text-neutral-500 bg-neutral-50 p-3 rounded-sm">
                      [Your identity hidden until match] • Writing sample attached
                    </div>
                  </div>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    Submit pitch
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-neutral-400" />
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-sm flex items-center justify-center text-xl font-serif flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Get the reveal</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Your pitch is accepted! Now you see who chose you. It could be your dream publication. It could be someone new. You decide if you want to proceed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-6 rounded-sm text-neutral-900">
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-wider font-medium">
                      🎉 Pitch accepted!
                    </div>
                    <div className="text-3xl font-serif">
                      Reveal: TechCrunch
                    </div>
                    <p className="text-sm">
                      Your pitch for "The Future of Remote Work" has been accepted. Ready to write for them?
                    </p>
                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        className="bg-neutral-900 hover:bg-neutral-800 text-white flex-1"
                      >
                        Accept job ($600)
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-neutral-900 flex-1"
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-neutral-400" />
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:order-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-sm flex items-center justify-center text-xl font-serif flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-2">Write & get paid</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                      Payment is held in escrow. Write your piece, submit it, and get paid within 3 days of approval. Simple, safe, secure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-1">
                <Card className="rounded-sm border-emerald-200 bg-emerald-50">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="font-medium">Article delivered & approved</span>
                    </div>
                    <div className="bg-white p-6 rounded-sm border border-emerald-200">
                      <div className="text-sm text-neutral-600 mb-2">Payment released</div>
                      <div className="text-4xl font-serif text-neutral-900 mb-1">$600.00</div>
                      <div className="text-xs text-neutral-500">Deposited to your account</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey - Publication View */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-xs uppercase tracking-wider mb-4 border-white text-white">
              For Publications
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-serif">
              How editors find amazing writers
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white text-neutral-900 rounded-sm flex items-center justify-center text-xl font-serif">
                1
              </div>
              <h3 className="text-2xl font-serif">Post anonymously</h3>
              <p className="text-neutral-400 leading-relaxed">
                List your opportunity without revealing your publication name. Attract writers who care about the topic, not your brand.
              </p>
              <div className="bg-neutral-800 p-4 rounded-sm text-sm border border-neutral-700">
                <div className="text-neutral-500 mb-2">[Your Publication - Hidden]</div>
                <div className="text-white font-medium">AI in Healthcare</div>
                <div className="text-neutral-400 text-xs mt-1">2,000 words • $1,200</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white text-neutral-900 rounded-sm flex items-center justify-center text-xl font-serif">
                2
              </div>
              <h3 className="text-2xl font-serif">Review blind pitches</h3>
              <p className="text-neutral-400 leading-relaxed">
                See pitches and writing samples without knowing who submitted them. Judge purely on quality and fit.
              </p>
              <div className="bg-neutral-800 p-4 rounded-sm text-sm border border-neutral-700 space-y-2">
                <div className="text-neutral-500">Pitch #3 • [Writer hidden]</div>
                <div className="text-neutral-300 text-xs leading-relaxed">
                  "I want to explore how AI diagnostics are being adopted in rural hospitals..."
                </div>
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs mt-2">
                  Accept pitch
                </Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white text-neutral-900 rounded-sm flex items-center justify-center text-xl font-serif">
                3
              </div>
              <h3 className="text-2xl font-serif">See the writer & hire</h3>
              <p className="text-neutral-400 leading-relaxed">
                Accept a pitch and see the writer's full profile. If you both agree to proceed, work begins immediately.
              </p>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-sm text-sm">
                <div className="text-xs text-white/80 mb-2">Writer revealed</div>
                <div className="text-white font-serif text-lg">Jessica Martinez</div>
                <div className="text-white/90 text-xs">Medical journalist, 8 years</div>
                <Button size="sm" className="bg-white text-neutral-900 hover:bg-neutral-100 text-xs mt-3 w-full">
                  Proceed with hire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            Built on trust and transparency
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg max-w-2xl mx-auto">
            We've designed the platform to protect both writers and publications at every step.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Protection 1 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-sm flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Escrow payments</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Payment is held securely when a job is accepted. Writers get paid within 3 days of approval. No ghosting.
                </p>
              </CardContent>
            </Card>

            {/* Protection 2 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-sm flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Identity protection</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Your identity stays hidden until both parties agree to work together. No leaks, no exceptions.
                </p>
              </CardContent>
            </Card>

            {/* Protection 3 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-sm flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Vetted community</h3>
                <p className="text-neutral-600 leading-relaxed">
                  All writers submit samples before joining. All publications are verified. Quality on both sides.
                </p>
              </CardContent>
            </Card>

            {/* Protection 4 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Transparent pricing</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Writers see payment upfront. Publications set their budget. No negotiations, no surprises.
                </p>
              </CardContent>
            </Card>

            {/* Protection 5 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-sm flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Fast resolution</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Disputes are rare, but when they happen, our team resolves them within 48 hours.
                </p>
              </CardContent>
            </Card>

            {/* Protection 6 */}
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-sm flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif">Mutual opt-in</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Both parties must agree to proceed after the reveal. Either side can decline without penalty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-12 text-center">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">Why is this better than traditional pitching?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Traditional pitching favors established writers with big bylines. BlindPitch removes that bias, giving everyone a fair shot based on their ideas and writing quality—not their credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">What if I accept a job but change my mind after the reveal?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Both parties can decline after the reveal. If a publication accepts your pitch but you don't want to work with them (or vice versa), you can walk away with no penalty.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">How long does the matching process take?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Most publications review pitches within 3-5 days. Writers typically hear back within a week. Our average time from pitch to match is 5 days.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">Is this only for certain types of writing?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  No! We have opportunities across journalism, content marketing, thought leadership, essays, and more. If it's written content, it's on BlindPitch.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">What prevents writers from pitching the same idea to multiple jobs?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Nothing—and that's intentional! Writers can pitch similar ideas to different publications. Once you accept a job, you commit to that specific publication for that piece.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">How do you vet writers and publications?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Writers submit writing samples during signup. Publications verify their identity and payment capability. We review all applicants to maintain quality on both sides.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
            Ready to experience blind pitching?
          </h2>
          <p className="text-xl text-neutral-400">
            Join writers and publications who believe in merit-based hiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-14 px-10 text-lg"
            >
              Get started for free
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
            Free for writers • Fair for everyone • No bias, ever
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
