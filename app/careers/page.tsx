import Header from '../Header';
import Footer from '../Footer';
import CallToAction from '../CallToAction';

export default function Careers() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Header />
            <main className="w-full max-w-4xl mx-auto px-4 py-8">
                <div className="container">
                    {/* Hero Section */}
                    <section className="text-center py-16">
                        <h1 className="text-4xl font-bold text-black mb-4">Careers at Nurture PNW Staffing</h1>
                        <p className="text-xl text-zinc-600">Join our team of compassionate caregivers</p>
                    </section>

                    {/* Why Join Us */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Why Choose Nurture PNW?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Competitive Pay</h3>
                                <p className="text-zinc-700">
                                    Industry-leading compensation with opportunities for bonuses and overtime pay.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
                                <p className="text-zinc-700">
                                    Choose shifts that work for your lifestyle with part-time and full-time options.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
                                <p className="text-zinc-700">
                                    Ongoing training and certification opportunities to advance your career.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Supportive Environment</h3>
                                <p className="text-zinc-700">
                                    Work with a dedicated team that values your contributions and well-being.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Current Openings */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-2">Certified Nursing Assistant (CNA)</h3>
                                <p className="text-zinc-600 mb-4">Provide essential care in skilled nursing facilities and assisted living communities.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">Full-time</span>
                                    <span className="bg-[#10b981]/10 text-[#10b981] px-3 py-1 rounded-full text-sm">Part-time</span>
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">$18-25/hr</span>
                                </div>
                                <p className="text-sm text-zinc-500">Locations: Seattle, Bellevue, Tacoma</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-2">Home Health Aide</h3>
                                <p className="text-zinc-600 mb-4">Assist clients with daily living activities in their homes.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">Full-time</span>
                                    <span className="bg-[#10b981]/10 text-[#10b981] px-3 py-1 rounded-full text-sm">Part-time</span>
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">$16-22/hr</span>
                                </div>
                                <p className="text-sm text-zinc-500">Locations: Throughout Puget Sound region</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-2">Personal Care Assistant</h3>
                                <p className="text-zinc-600 mb-4">Provide non-medical care and companionship to elderly and disabled clients.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-[#10b981]/10 text-[#10b981] px-3 py-1 rounded-full text-sm">Part-time</span>
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">Per Diem</span>
                                    <span className="bg-[#033c7b]/10 text-[#033c7b] px-3 py-1 rounded-full text-sm">$15-20/hr</span>
                                </div>
                                <p className="text-sm text-zinc-500">Locations: Seattle metro area</p>
                            </div>
                        </div>
                    </section>

                    {/* Application Process */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="bg-[#033c7b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                                    <h4 className="font-semibold mb-2">Submit Application</h4>
                                    <p className="text-sm text-zinc-600">Complete our online application form</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-[#10b981] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                                    <h4 className="font-semibold mb-2">Background Check</h4>
                                    <p className="text-sm text-zinc-600">Complete required screenings</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-[#033c7b] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                                    <h4 className="font-semibold mb-2">Interview & Training</h4>
                                    <p className="text-sm text-zinc-600">Meet our team and complete orientation</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-[#10b981] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                                    <h4 className="font-semibold mb-2">Start Working</h4>
                                    <p className="text-sm text-zinc-600">Begin your rewarding career</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CallToAction
                        title="Ready to Start Your Career?"
                        description="Join our team of dedicated caregivers and make a difference in people's lives."
                        buttons={[
                            { text: "Apply Now", href: "/contact" }
                        ]}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}