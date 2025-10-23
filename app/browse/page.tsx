import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, SlidersHorizontal, Clock, DollarSign, FileText, Sparkles } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    category: "Technology",
    tags: ["AI", "Healthcare", "Innovation"],
    wordCount: "2,000",
    payment: "$1,200",
    deadline: "21 days",
    description: "We're looking for a nuanced exploration of how AI is transforming diagnostics and patient care. Focus on real-world applications and ethical considerations.",
  },
  {
    id: 2,
    title: "Climate Tech Startups Worth Watching",
    category: "Environment",
    tags: ["Climate", "Startups", "Green Tech"],
    wordCount: "1,500",
    payment: "$750",
    deadline: "14 days",
    description: "Profile 3-5 emerging climate tech companies making real impact. We want data-driven storytelling with founder interviews.",
  },
  {
    id: 3,
    title: "The Remote Work Revolution: 5 Years Later",
    category: "Business",
    tags: ["Remote Work", "Culture", "Management"],
    wordCount: "1,200",
    payment: "$600",
    deadline: "10 days",
    description: "Explore how remote work has evolved since 2020. What worked? What didn't? Interview remote workers and managers for real insights.",
  },
  {
    id: 4,
    title: "NFTs Beyond the Hype: Practical Use Cases",
    category: "Technology",
    tags: ["Web3", "NFTs", "Blockchain"],
    wordCount: "1,800",
    payment: "$950",
    deadline: "18 days",
    description: "Look past the speculation and explore legitimate use cases for NFTs in ticketing, identity, and ownership. No crypto evangelism—we want balanced reporting.",
  },
  {
    id: 5,
    title: "Mental Health in the Creator Economy",
    category: "Culture",
    tags: ["Mental Health", "Creators", "Social Media"],
    wordCount: "2,200",
    payment: "$1,100",
    deadline: "28 days",
    description: "An empathetic deep-dive into burnout, anxiety, and the pressure to constantly create. Interview creators at various levels of success.",
  },
  {
    id: 6,
    title: "Sustainable Fashion: Is It Real or Just Marketing?",
    category: "Fashion",
    tags: ["Sustainability", "Fashion", "Consumer"],
    wordCount: "1,400",
    payment: "$700",
    deadline: "16 days",
    description: "Investigate brands claiming to be 'sustainable.' What does it actually mean? What should consumers look for? Include expert perspectives.",
  },
  {
    id: 7,
    title: "The Rise of Micro-Schools",
    category: "Education",
    tags: ["Education", "Innovation", "Kids"],
    wordCount: "1,600",
    payment: "$800",
    deadline: "20 days",
    description: "Explore the growing trend of small, parent-led schools. Visit at least one micro-school and interview parents, teachers, and education experts.",
  },
  {
    id: 8,
    title: "Lab-Grown Meat: Are We Ready?",
    category: "Food & Science",
    tags: ["Food Tech", "Science", "Sustainability"],
    wordCount: "1,900",
    payment: "$1,000",
    deadline: "25 days",
    description: "Where does the technology stand? What are the regulatory hurdles? Would people actually eat it? A balanced look at the future of food.",
  },
  {
    id: 9,
    title: "The Loneliness Epidemic in Gen Z",
    category: "Health & Culture",
    tags: ["Mental Health", "Gen Z", "Society"],
    wordCount: "2,000",
    payment: "$1,150",
    deadline: "22 days",
    description: "Explore why Gen Z reports higher loneliness despite being the most connected generation. Use data and personal stories to paint a complete picture.",
  },
];

export default function BrowsePage() {
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

      {/* Header */}
      <section className="pt-32 pb-12 px-6 lg:px-12 bg-gradient-to-br from-amber-50 via-white to-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="text-xs uppercase tracking-wider mb-4">
                Browse Opportunities
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-4">
                Mystery publications, <span className="italic">real</span> opportunities
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl">
                Choose based on the work you want to do, not the brand you want on your resume. Every publication name is hidden until you match.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search topics, keywords..."
                  className="w-full h-12 pl-12 pr-4 rounded-sm border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="h-12 px-6 rounded-sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 text-sm text-neutral-600 pt-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span><strong className="text-neutral-900">23 new</strong> jobs this week</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span><strong className="text-neutral-900">$487</strong> avg. payment</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <Clock className="w-4 h-4 text-blue-500" />
                <span><strong className="text-neutral-900">34%</strong> acceptance rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-neutral-600">
              Showing <strong className="text-neutral-900">{jobs.length} opportunities</strong>
            </div>
            <select className="text-sm border border-neutral-200 rounded-sm px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>Most recent</option>
              <option>Highest paying</option>
              <option>Ending soonest</option>
              <option>Best match</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="rounded-sm border-neutral-200 hover:border-neutral-400 transition-colors group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                        [Mystery Publication]
                      </div>
                      <h3 className="text-xl font-serif leading-tight group-hover:text-neutral-600 transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    <Badge className="bg-emerald-500 text-white border-0 flex-shrink-0">
                      {job.payment}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-neutral-100 text-neutral-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 pt-2 border-t border-neutral-100 text-sm text-neutral-600">
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      <span>{job.wordCount} words</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{job.deadline}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a href={`/browse/${job.id}`}>
                    <Button className="w-full bg-neutral-900 hover:bg-neutral-800 rounded-sm">
                      View & pitch
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-sm">
              Load more opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-12 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
            Not sure where to start?
          </h2>
          <p className="text-lg text-neutral-400">
            Browse opportunities, pitch the ones that excite you, and see who's interested in your writing. It's that simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-12 px-8"
            >
              Create free account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 h-12 px-8"
            >
              Learn how it works
            </Button>
          </div>
        </div>
      </section>

      {/* How Pitching Works */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            How to pitch successfully
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-sm flex items-center justify-center text-xl font-serif">
                  1
                </div>
                <h3 className="text-xl font-serif">Choose what interests you</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Don't chase prestige. Pick topics you're genuinely curious about. Your passion will show in your pitch.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-sm flex items-center justify-center text-xl font-serif">
                  2
                </div>
                <h3 className="text-xl font-serif">Submit your angle</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Include a unique perspective, clear structure, and a writing sample. Show them how you think, not just what you've done.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-sm flex items-center justify-center text-xl font-serif">
                  3
                </div>
                <h3 className="text-xl font-serif">Wait for the reveal</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Get accepted and see who chose you. You'll know the publication before deciding whether to accept the job.
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
            Common questions
          </h2>

          <div className="space-y-6">
            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">Why don't I see the publication names?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  The mystery is the point. When publication names are hidden, you choose based on the work itself—not the brand. This leads to better matches and removes bias from the equation.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">What if I accept a job and don't like the publication?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You can decline after the reveal. Both parties must agree to proceed. If a publication accepts your pitch but you don't want to work with them, you can politely decline.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">How do I know I'll actually get paid?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Payment is held in escrow when you accept a job. Once you deliver the piece and it's approved, you get paid within 3 days. Publications can't ghost you.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">Do I need a portfolio to pitch?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Nope. You submit a pitch and a writing sample for each job. Your identity and portfolio remain hidden until you match with a publication.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-sm border-neutral-200 bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-serif mb-2">How many jobs can I pitch at once?</h3>
                <p className="text-neutral-600 leading-relaxed">
                  As many as you want! There's no limit. Pitch everything that interests you. Most writers pitch 5-10 jobs per week.
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
            Ready to start pitching?
          </h2>
          <p className="text-xl text-neutral-400">
            Create your free account and browse {jobs.length}+ opportunities from publications who value your writing.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 h-14 px-10 text-lg"
            >
              Get started for free
            </Button>
          </div>
          <p className="text-sm text-neutral-500 pt-4">
            Free forever for writers • No portfolio required • Get paid fairly
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
