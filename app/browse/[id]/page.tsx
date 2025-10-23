import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Clock, DollarSign, Calendar, AlertCircle, CheckCircle2, Upload, Sparkles } from "lucide-react";

// Mock job data - in a real app this would come from a database
const jobs: Record<string, any> = {
  "1": {
    id: 1,
    title: "The Future of AI in Healthcare",
    category: "Technology",
    tags: ["AI", "Healthcare", "Innovation"],
    wordCount: "2,000",
    payment: "$1,200",
    deadline: "21 days",
    deadlineDate: "March 15, 2025",
    description: "We're looking for a nuanced exploration of how AI is transforming diagnostics and patient care. Focus on real-world applications and ethical considerations.",
    fullDescription: `We're seeking a thoughtful, well-researched piece that explores how artificial intelligence is revolutionizing healthcare—specifically in diagnostics and patient care.

This isn't a puff piece about "AI will save the world." We want nuance. What's working? What's overhyped? Where are the ethical landmines?

**What we're looking for:**
- Real-world case studies of AI being used in hospitals or clinics today
- Interviews with at least 2-3 healthcare professionals (doctors, nurses, or administrators)
- Discussion of ethical considerations (bias in algorithms, privacy concerns, job displacement)
- A balanced perspective that acknowledges both promise and pitfalls
- Clear, accessible writing that explains technical concepts without dumbing them down

**What we DON'T want:**
- Generic "AI is amazing" cheerleading
- Purely speculative future predictions without grounding in current reality
- Overly technical jargon that alienates general readers
- Rehashing of existing articles on the topic without fresh reporting

**Ideal writer:**
- Has experience writing about healthcare or technology (or both)
- Can conduct interviews and incorporate expert voices
- Writes in a clear, engaging style for a general audience
- Can deliver a 2,000-word piece that's tight and well-structured`,
    requirements: [
      "Original reporting required (interviews, not just desk research)",
      "Must include at least 2-3 expert sources",
      "No previously published work on this exact topic",
      "Chicago Manual of Style for citations",
      "First draft due 3 days before deadline for revisions"
    ],
    acceptanceRate: "34%",
    avgResponseTime: "3 days",
    publicationType: "Digital magazine",
    audienceSize: "500K+ monthly readers"
  },
  "2": {
    id: 2,
    title: "Climate Tech Startups Worth Watching",
    category: "Environment",
    tags: ["Climate", "Startups", "Green Tech"],
    wordCount: "1,500",
    payment: "$750",
    deadline: "14 days",
    deadlineDate: "March 8, 2025",
    description: "Profile 3-5 emerging climate tech companies making real impact. We want data-driven storytelling with founder interviews.",
    fullDescription: `Climate tech is hot right now—but most coverage is surface-level. We want you to dig deeper.

Profile 3-5 climate tech startups that are doing something genuinely innovative. Not the unicorns everyone knows about. We want the companies flying under the radar that could be huge in 3-5 years.

**What we're looking for:**
- Startups working on carbon capture, renewable energy, sustainable materials, or related fields
- Companies with real traction (not just pre-seed ideas)
- Founder interviews that go beyond the press release
- Data on their impact (tons of CO2 reduced, energy saved, etc.)
- Why these companies matter in the bigger climate picture

**Structure:**
- Brief intro explaining why climate tech matters now
- 3-5 company profiles (300-400 words each)
- Each profile should include: what they do, why it matters, current traction, founder quote
- Closing thoughts on what these companies tell us about the future of climate tech

**What we DON'T want:**
- Profiles of well-known companies (Tesla, etc.)
- Purely promotional content
- Vague claims without data
- Companies that are pure vaporware`,
    requirements: [
      "Must interview founders of each profiled company",
      "Include concrete metrics (funding, customers, impact numbers)",
      "No startups you have a financial interest in",
      "AP Style preferred"
    ],
    acceptanceRate: "42%",
    avgResponseTime: "2 days",
    publicationType: "Tech blog",
    audienceSize: "200K+ monthly readers"
  }
};

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobs[params.id] || jobs["1"]; // Fallback to first job if ID not found

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

      {/* Back Button */}
      <div className="pt-24 pb-8 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <a href="/browse" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to all opportunities
          </a>
        </div>
      </div>

      {/* Job Header */}
      <section className="pb-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-sm p-8 lg:p-12">
            {/* Mystery Publication Badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <Badge variant="outline" className="text-xs uppercase tracking-wider mb-4 border-amber-400 text-amber-600">
                  [Mystery Publication]
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-serif leading-tight mb-4">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                  <span className="font-medium text-neutral-900">{job.category}</span>
                  <span>•</span>
                  <span>{job.publicationType}</span>
                  <span>•</span>
                  <span>{job.audienceSize}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-emerald-500 text-white px-6 py-3 rounded-sm text-center">
                  <div className="text-2xl font-serif">{job.payment}</div>
                  <div className="text-xs opacity-90">Fixed rate</div>
                </div>
              </div>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 pb-8 border-b border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Length</div>
                  <div className="font-medium">{job.wordCount} words</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Deadline</div>
                  <div className="font-medium">{job.deadline}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Due date</div>
                  <div className="font-medium">{job.deadlineDate}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-sm flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-neutral-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Acceptance rate</div>
                  <div className="font-medium">{job.acceptanceRate}</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {job.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-neutral-100 text-neutral-700">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Quick Summary */}
            <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-amber-900 mb-1">Quick summary</div>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="rounded-sm border-neutral-200 bg-neutral-50">
                <CardContent className="p-4">
                  <div className="text-sm text-neutral-600 mb-1">Avg. response time</div>
                  <div className="text-2xl font-serif text-neutral-900">{job.avgResponseTime}</div>
                </CardContent>
              </Card>
              <Card className="rounded-sm border-neutral-200 bg-neutral-50">
                <CardContent className="p-4">
                  <div className="text-sm text-neutral-600 mb-1">Acceptance rate</div>
                  <div className="text-2xl font-serif text-neutral-900">{job.acceptanceRate}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="pb-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-sm border-neutral-200">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl font-serif mb-6">What we're looking for</h2>
              <div className="prose prose-neutral max-w-none">
                <div className="whitespace-pre-line text-neutral-700 leading-relaxed">
                  {job.fullDescription}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="pb-12 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-sm border-neutral-200">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl font-serif mb-6">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pitch Form */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <Card className="rounded-sm border-neutral-900 bg-gradient-to-br from-neutral-50 to-neutral-100">
            <CardContent className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-serif mb-3">Submit your pitch</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Your identity will remain hidden until the publication accepts your pitch. Focus on your angle, your approach, and why you're the right person to write this piece.
                </p>
              </div>

              <form className="space-y-6">
                {/* Pitch Angle */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Your angle <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="What's your unique perspective on this topic? What will you explore that hasn't been done before? Be specific about your approach..."
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
                  />
                  <div className="text-xs text-neutral-500 mt-1">Recommended: 200-400 words</div>
                </div>

                {/* Why You're Qualified */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Why you? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What makes you qualified to write this piece? Relevant experience, expertise, or unique access to sources..."
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
                  />
                  <div className="text-xs text-neutral-500 mt-1">No need to list every credential—focus on what's relevant to THIS piece</div>
                </div>

                {/* Writing Sample */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Writing sample <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-sm p-8 text-center hover:border-neutral-400 transition-colors cursor-pointer bg-white">
                    <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                    <div className="text-sm text-neutral-600 mb-1">
                      <span className="font-medium text-neutral-900">Click to upload</span> or drag and drop
                    </div>
                    <div className="text-xs text-neutral-500">
                      PDF, DOC, or link to published work (Max 5MB)
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    Upload a relevant writing sample (similar topic or style). This helps editors evaluate your writing quality.
                  </div>
                </div>

                {/* Additional Links */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Additional links (optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://your-published-work.com"
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                  <div className="text-xs text-neutral-500 mt-1">Share up to 3 relevant published pieces</div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Can you meet the deadline? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="deadline" className="w-4 h-4" defaultChecked />
                      <span className="text-sm">Yes, I can deliver by {job.deadlineDate}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="radio" name="deadline" className="w-4 h-4" />
                      <span className="text-sm">I need a few extra days (please explain in your pitch)</span>
                    </label>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-sm p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <strong className="font-medium">Your identity is protected:</strong> The publication won't see your name, portfolio, or any identifying information until they accept your pitch. You'll both decide whether to proceed after the reveal.
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 h-14 text-lg rounded-sm"
                  >
                    Submit pitch anonymously
                  </Button>
                  <p className="text-xs text-neutral-500 text-center mt-3">
                    You'll hear back within {job.avgResponseTime} on average
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Similar Opportunities */}
      <section className="pb-24 px-6 lg:px-12 bg-neutral-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">Similar opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Similar Job 1 */}
            <Card className="rounded-sm border-neutral-200 hover:border-neutral-400 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      [Mystery Publication]
                    </div>
                    <h3 className="text-lg font-serif leading-tight">
                      The Ethics of Facial Recognition Technology
                    </h3>
                  </div>
                  <Badge className="bg-emerald-500 text-white border-0 flex-shrink-0">$900</Badge>
                </div>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  Explore the privacy implications and ethical concerns around facial recognition in public spaces...
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-600 pt-2 border-t border-neutral-200">
                  <span>1,600 words</span>
                  <span>•</span>
                  <span>18 days</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Job 2 */}
            <Card className="rounded-sm border-neutral-200 hover:border-neutral-400 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      [Mystery Publication]
                    </div>
                    <h3 className="text-lg font-serif leading-tight">
                      Telemedicine: The Post-Pandemic Reality
                    </h3>
                  </div>
                  <Badge className="bg-emerald-500 text-white border-0 flex-shrink-0">$850</Badge>
                </div>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  How has telemedicine evolved since 2020? Interview doctors and patients about what's working and what isn't...
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-600 pt-2 border-t border-neutral-200">
                  <span>1,800 words</span>
                  <span>•</span>
                  <span>16 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
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
