import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif italic">BlindPitch</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:underline hidden md:inline">
              For writers
            </a>
            <a href="#" className="text-sm hover:underline hidden md:inline">
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
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="outline" className="text-xs uppercase tracking-wider">
                For writers who deserve a chance
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-serif leading-[1.1]">
                You don't know who they are.
                <br />
                They don't know who you are.
                <br />
                <span className="italic">And that's the point.</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                A freelance writing platform where publications stay anonymous
                until you accept the job. No bias. No gatekeeping. Just your
                words against the world.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-800 h-12 px-8"
                >
                  Start pitching
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-neutral-900 text-white p-8 rounded-sm shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="text-xs uppercase tracking-wider text-neutral-400">
                          Mystery Publication
                        </div>
                        <div className="text-2xl font-serif">
                          [REDACTED]
                        </div>
                      </div>
                      <Badge className="bg-emerald-500 text-white border-0">
                        $750
                      </Badge>
                    </div>
                    <div className="space-y-3 text-sm text-neutral-300 leading-relaxed border-t border-neutral-700 pt-6">
                      <p className="font-medium text-white">
                        Seeking: 1,500-word feature on climate tech startups
                      </p>
                      <p>
                        We're looking for a thoughtful exploration of how
                        emerging companies are addressing climate change...
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-300 text-xs"
                        >
                          Technology
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800 text-neutral-300 text-xs"
                        >
                          Environment
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-400 text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg rounded-sm">
                  Could be anyone →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 lg:px-12 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-serif mb-1">87%</div>
              <div className="text-sm text-neutral-600">
                of new writers can't break into major outlets
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">2,847</div>
              <div className="text-sm text-neutral-600">
                writers matched with dream publications
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">$487</div>
              <div className="text-sm text-neutral-600">
                average payment per accepted piece
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif mb-1">5 days</div>
              <div className="text-sm text-neutral-600">
                average time to first acceptance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              The writing industry runs on reputation. Which means it runs on
              bias.
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-neutral-700">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  You've written for years. You're good—maybe even great. But
                  when The Atlantic or Wired sees your pitch, they don't see
                  your words. They see your lack of bylines. They see risk.
                </p>
                <p className="text-lg leading-relaxed">
                  Meanwhile, you're chasing publications for their name, not
                  because you care about the topic. Everyone loses.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Publications say they want fresh voices. But when someone
                  without a "name" pitches them, that pitch goes to the bottom
                  of the pile. Or worse, straight to the trash.
                </p>
                <p className="text-lg leading-relaxed font-medium text-neutral-900">
                  We're breaking that cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            How it works
          </h2>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="text-6xl font-serif text-neutral-600">01</div>
                <h3 className="text-3xl font-serif">
                  Browse opportunities blindly
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  Scroll through writing gigs. See the topic, word count,
                  deadline, and payment. But the publication name? Hidden. You
                  choose based on what interests you, not what impresses your
                  LinkedIn followers.
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-sm border border-neutral-700">
                <div className="space-y-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                        [Mystery Publication]
                      </div>
                      <div className="text-xl font-serif">
                        The Future of Remote Work
                      </div>
                    </div>
                    <Badge className="bg-emerald-500 text-white border-0">
                      $600
                    </Badge>
                  </div>
                  <div className="text-sm text-neutral-400 space-y-2">
                    <p>1,200 words • Due in 14 days</p>
                    <p className="text-neutral-300">
                      Looking for a fresh take on hybrid work models and their
                      impact on company culture...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4 lg:order-2">
                <div className="text-6xl font-serif text-neutral-600">02</div>
                <h3 className="text-3xl font-serif">
                  Pitch without a byline
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  Submit your pitch. Your name, portfolio, and credentials stay
                  hidden. The editor sees your idea, your angle, and your
                  writing sample. That's it. You're judged on merit, not
                  reputation.
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-sm border border-neutral-700 lg:order-1">
                <div className="space-y-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">
                    Your pitch
                  </div>
                  <div className="text-neutral-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      I want to explore how companies are rethinking office
                      spaces not as productivity hubs, but as social centers...
                    </p>
                    <p className="text-neutral-500">
                      [Identity hidden until match]
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Submit pitch
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="text-6xl font-serif text-neutral-600">03</div>
                <h3 className="text-3xl font-serif">The reveal</h3>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  You get an acceptance. Now you see who wants to work with
                  you. It could be a publication you've dreamed of writing for.
                  It could be someone you've never heard of. Either way,
                  they chose you for your writing. Accept or decline—you decide.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-6 rounded-sm text-neutral-900">
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-wider font-medium">
                    🎉 Pitch accepted!
                  </div>
                  <div className="text-2xl font-serif">
                    Reveal: TechCrunch
                  </div>
                  <p className="text-sm">
                    Your pitch for "The Future of Remote Work" has been
                    accepted. Ready to write for them?
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-neutral-900 hover:bg-neutral-800 text-white flex-1"
                    >
                      Accept job
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
        </div>
      </section>

      {/* Writer Stories */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-4 text-center">
            Real writers, real breakthroughs
          </h2>
          <p className="text-center text-neutral-600 mb-16 text-lg">
            No fluff. These are actual stories from the platform.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-8 bg-white rounded-sm border border-neutral-200">
              <div className="text-sm text-neutral-500">Sarah, 26</div>
              <p className="text-lg leading-relaxed text-neutral-800">
                "My third pitch got accepted. Turns out it was for Vox. I'd
                been rejected by them four times before with my name attached.
                This time, my writing spoke for itself."
              </p>
              <div className="text-sm text-neutral-500 pt-4 border-t border-neutral-200">
                Now a regular contributor
              </div>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-sm border border-neutral-200">
              <div className="text-sm text-neutral-500">Marcus, 34</div>
              <p className="text-lg leading-relaxed text-neutral-800">
                "I stopped pitching 'impressive' outlets and started pitching
                topics I actually cared about. Made $4,200 last month. My
                imposter syndrome is gone."
              </p>
              <div className="text-sm text-neutral-500 pt-4 border-t border-neutral-200">
                Full-time freelancer
              </div>
            </div>

            <div className="space-y-4 p-8 bg-white rounded-sm border border-neutral-200">
              <div className="text-sm text-neutral-500">Priya, 29</div>
              <p className="text-lg leading-relaxed text-neutral-800">
                "The reveal moment is addictive. It's like Christmas every time
                you get an acceptance. You never know if you're writing for a
                scrappy startup blog or The Guardian."
              </p>
              <div className="text-sm text-neutral-500 pt-4 border-t border-neutral-200">
                12 pieces published
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 px-6 lg:px-12 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
            This isn't just a platform.
            <br />
            It's a movement.
          </h2>
          <p className="text-xl text-neutral-700 leading-relaxed">
            We're building a world where talented writers get opportunities
            based on their craft, not their credentials. Where publications
            discover voices they'd never find through traditional channels.
            Where every pitch has a fair shot.
          </p>
          <p className="text-lg text-neutral-600">
            The writing industry is broken. We're fixing it, one blind pitch at
            a time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-serif leading-tight">
            Ready to write without barriers?
          </h2>
          <p className="text-xl text-neutral-400">
            Create your account. Start pitching. Get published.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-14 px-10 text-lg"
            >
              Start writing today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-14 px-10 text-lg"
            >
              Learn more
            </Button>
          </div>
          <p className="text-sm text-neutral-500 pt-4">
            Free to join • No portfolio required • Get paid fairly
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
                The bias-free writing platform for writers who deserve a fair
                shot.
              </p>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                For writers
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Browse jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Success stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                For publications
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Post opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Find writers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Company
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-700 hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2025 BlindPitch. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
