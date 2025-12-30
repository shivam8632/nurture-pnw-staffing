import Header from '../Header';
import Footer from '../Footer';
import CallToAction from '../CallToAction';

export default function Services() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Header />
            <main className="w-full max-w-4xl mx-auto px-4 py-8">
                <div className="container">
                    {/* Hero Section */}
                    <section className="text-center py-16">
                        <h1 className="text-4xl font-bold text-black mb-4">Our Services</h1>
                        <p className="text-xl text-zinc-600">Comprehensive caregiver staffing solutions for your needs</p>
                    </section>

                    {/* Services List */}
                    <section className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4">Caregiver Staffing</h3>
                                <p className="text-zinc-700 mb-4">
                                    Professional caregivers trained in various care specialties including elderly care, disability support, and medical assistance.
                                </p>
                                <ul className="list-disc list-inside text-zinc-600">
                                    <li>Personal care assistance</li>
                                    <li>Medication management</li>
                                    <li>Mobility support</li>
                                    <li>Companionship services</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4">Short-term Coverage</h3>
                                <p className="text-zinc-700 mb-4">
                                    Temporary staffing solutions for unexpected absences, vacations, or short-term care needs.
                                </p>
                                <ul className="list-disc list-inside text-zinc-600">
                                    <li>Same-day coverage</li>
                                    <li>Weekend support</li>
                                    <li>Holiday staffing</li>
                                    <li>Emergency situations</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4">Ongoing Placements</h3>
                                <p className="text-zinc-700 mb-4">
                                    Long-term caregiver placements for consistent, reliable care relationships.
                                </p>
                                <ul className="list-disc list-inside text-zinc-600">
                                    <li>Full-time positions</li>
                                    <li>Part-time schedules</li>
                                    <li>Live-in arrangements</li>
                                    <li>Flexible hours</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-2xl font-semibold mb-4">Specialized Care</h3>
                                <p className="text-zinc-700 mb-4">
                                    Expert caregivers for specific care requirements and medical conditions.
                                </p>
                                <ul className="list-disc list-inside text-zinc-600">
                                    <li>Dementia care</li>
                                    <li>Post-surgical care</li>
                                    <li>Palliative care support</li>
                                    <li>Rehabilitation assistance</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <CallToAction
                        title="Ready to Get Started?"
                        description="Contact us today to discuss your staffing needs and find the perfect caregiver match."
                        buttons={[
                            { text: "Contact Us", href: "/contact" }
                        ]}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}