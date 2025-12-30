'use client';
import Header from '../Header';
import Footer from '../Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Error submitting form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <Header />
            <main className="w-full max-w-4xl mx-auto px-4 py-8">
                <div className="container">
                    {/* Hero Section */}
                    <section className="text-center py-16">
                        <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
                        <p className="text-xl text-zinc-600">Get in touch with our team</p>
                    </section>

                    {/* Contact Form */}
                    <section className="mb-16">
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700 mb-2">
                                                First Name *
                                            </label>
                                            <Input type="text" id="first-name" name="first-name" required />
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700 mb-2">
                                                Last Name
                                            </label>
                                            <Input type="text" id="last-name" name="last-name" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                                            Email *
                                        </label>
                                        <Input type="email" id="email" name="email" required />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                                            Phone *
                                        </label>
                                        <Input type="tel" id="phone" name="phone" value="206-697-4413" readOnly />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                                            Message *
                                        </label>
                                        <Textarea id="message" name="message" required rows={5} />
                                    </div>

                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <span className="text-[#033c7b] mr-3">📞</span>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-zinc-600">(206) 697-4413</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-[#033c7b] mr-3">📧</span>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-zinc-600">info@nurturepnwstaffing.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-[#033c7b] mr-3">📍</span>
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-zinc-600">Seattle, WA 98101</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm text-zinc-600">
                                        Emergency staffing requests are handled 24/7 through our on-call service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Map Placeholder */}
                    <section className="mb-16">
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Interactive Map Coming Soon</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}