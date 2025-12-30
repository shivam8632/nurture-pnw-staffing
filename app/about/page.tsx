import Header from '../Header';
import Footer from '../Footer';
import CallToAction from '../CallToAction';

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Header />
            <main className="w-full max-w-4xl mx-auto px-4 py-8">
                <div className="container">
                    {/* Hero Section */}
                    <section className="text-center py-16">
                        <h1 className="text-4xl font-bold text-black mb-4">About Nurture PNW Staffing</h1>
                        <p className="text-xl text-zinc-600">Dedicated to providing exceptional caregiver staffing solutions</p>
                    </section>

                    {/* Our Story */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                        <p className="text-lg leading-8 text-zinc-700 mb-6">
                            Founded in the Pacific Northwest, Nurture PNW Staffing has been connecting compassionate caregivers with families and healthcare facilities for over a decade. Our commitment to quality care and reliable staffing has made us a trusted partner in the healthcare community.
                        </p>
                        <p className="text-lg leading-8 text-zinc-700">
                            We understand that finding the right caregiver is about more than just filling a position—it's about building meaningful relationships that enhance quality of life. Our team works tirelessly to match caregivers with the perfect opportunities based on skills, personality, and care philosophy.
                        </p>
                    </section>

                    {/* Our Values */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-[#033c7b]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                                <p className="text-zinc-600">We treat every client and caregiver with empathy and respect.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-[#10b981]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                                <p className="text-zinc-600">Dependable service you can count on, every time.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-[#033c7b]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⭐</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                                <p className="text-zinc-600">Committed to the highest standards in caregiver staffing.</p>
                            </div>
                        </div>
                    </section>

                    {/* Our Team */}
                    {/* <section className="mb-16">
                        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
                        <p className="text-lg leading-8 text-zinc-700 mb-6">
                            Our experienced team of healthcare professionals and staffing specialists brings years of industry knowledge to every placement. We stay current with best practices and regulatory requirements to ensure compliance and quality care.
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Leadership</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">Sarah Johnson</h4>
                                    <p className="text-zinc-600">Founder & CEO - 15+ years in healthcare staffing</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Michael Chen</h4>
                                    <p className="text-zinc-600">Operations Director - Former nursing home administrator</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold">Dr. Emily Rodriguez</h4>
                                    <p className="text-zinc-600">Clinical Director - Registered Nurse with geriatric specialization</p>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <CallToAction
                        title="Join Our Mission"
                        description="Whether you're seeking care or looking to provide care, we're here to help."
                        buttons={[
                            { text: "Contact Us", href: "/contact" },
                            { text: "Join Our Team", href: "/careers", variant: "secondary" }
                        ]}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}