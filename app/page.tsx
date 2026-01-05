'use client';
import Header from './Header';
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  PhoneCall,
  Clock,
  Users,
  ArrowRight,
  Check,
  Plus,
  CheckCircle,
  Play,
} from "lucide-react"

import Image from 'next/image';
import Banner1 from "../public/banner_1.webp"
import Banner2 from "../public/banner2.jpg"
import Banner3 from "../public/banner3.jpg"
import Care1 from "../public/care-1.webp"
import Care2 from "../public/care-2.webp"
import Care3 from "../public/care-3.webp"
import PersonalisedImg from "../public/personalised-img.webp"
import MissionImg from "../public/mission-img.webp"
import CaregiverImg from "../public/caregiver-img.jpg"
import LeadersImg from "../public/leaders-img.jpg"
import QuoteBgImg from "../public/quote-img.jpg"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { HealthcareLoader } from "@/components/ui/healthcare-loader"
import { useState } from 'react'
import { toast } from 'react-toastify'


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      toast.success('Request submitted successfully!');
      form.reset(); // ✅ SAFE
    } catch (err: any) {
      toast.error(`${err.message || 'Failed to submit form'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const heroImages = [
    Banner1.src,
    Banner2.src,
    Banner3.src,
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* Full-screen loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-90 flex items-center justify-center z-50 animate-fadeInOut">
          <HealthcareLoader />
        </div>
      )}

      <Header />
      <main className="w-full mx-auto">
        <div className="container">
          {/* Hero Section */}
          <section className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="h-[80vh]"
            >
              {heroImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full">

                    {/* Background Image */}
                    <img
                      src={src}
                      alt={`Hero slide ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
                      <div className="max-w-2xl text-white">
                        <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-4">
                          ⭐ Trusted Care Providers
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                          Good <span className="text-emerald-400">Health</span> Builds <br />
                          Strong Families
                        </h1>

                        <p className="text-lg text-slate-200 mb-8">
                          Compassionate caregivers. Reliable staffing.
                          Quality healthcare starts with people.
                        </p>

                        <div className="flex gap-4">
                          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            Book an Appointment
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-black hover:bg-white hover:text-slate-900"
                          >
                            Watch Video ▶
                          </Button>
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>


          <section className="py-20 px-4 md:px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Schedule Hours */}
              <div className="rounded-2xl bg-emerald-50 p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Schedule Hours
                  </h3>
                  <Clock className="h-7 w-7 text-emerald-600" />
                </div>

                <div className="border-t border-emerald-200/50 my-4" />

                <div className="space-y-3 text-sm text-slate-700">
                  {[
                    ["Monday - Thursday", "08:00 - 18:00"],
                    ["Friday", "09:00 - 17:00"],
                    ["Saturday", "07:30 - 20:30"],
                    ["Sunday", "08:30 - 19:30"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between">
                      <span className="font-medium">{day}</span>
                      <span className="text-slate-500">{time}</span>
                    </div>
                  ))}
                </div>

                <Button className="mt-8 w-full bg-emerald-700 hover:bg-emerald-800 flex items-center justify-between">
                  24/7 Service For Emergencies
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Location Details */}
              <div className="rounded-2xl bg-cyan-50 p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Location Details
                  </h3>
                  <MapPin className="h-7 w-7 text-cyan-600" />
                </div>

                <div className="border-t border-cyan-200/50 my-4" />

                <div className="space-y-4 text-slate-600">
                  <div className="flex items-center gap-2 font-medium text-slate-800">
                    <span className="inline-block h-2 w-2 bg-cyan-600 rounded-full" />
                    Healthcare-Focused
                  </div>

                  <p className="text-sm leading-relaxed">
                    More than 24 locations across the country, we’re always nearby
                    to provide the care you deserve—anytime, anywhere.
                  </p>
                </div>

                <Button className="mt-8 w-full bg-teal-700 hover:bg-teal-800 flex items-center justify-between">
                  24/7 Service For Emergencies
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Scheduled Visits */}
              <div className="rounded-2xl bg-purple-50 p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Scheduled Visits
                  </h3>
                  <PhoneCall className="h-7 w-7 text-purple-600" />
                </div>

                <div className="border-t border-purple-200/50 my-4" />

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Contact us 24/7 for emergencies or to schedule your health visit.
                </p>

                <div className="flex items-center gap-3 text-sm font-medium text-slate-800 mb-6">
                  <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <span>24/7 Support: +884-587-2568</span>
                </div>

                <Button className="w-full bg-purple-700 hover:bg-purple-800 flex items-center justify-between">
                  Request An Appointment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

            </div>
          </section>

          <section className="relative py-24 px-4 md:px-6 lg:px-20 bg-white overflow-hidden">

            {/* Decorative hex pattern */}
            <div className="absolute right-0 bottom-0 opacity-10">
              <svg width="420" height="420" viewBox="0 0 420 420">
                <defs>
                  <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse">
                    <path
                      d="M30 1 L59 16 L59 46 L30 61 L1 46 L1 16 Z"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hex)" />
              </svg>
            </div>

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT IMAGE BLOCK */}
              <div className="relative">

                {/* Vertical watermark */}
                <span className="absolute z-10 -left-16 top-25 opacity-50 rotate-[-90deg] text-6xl font-bold text-emerald-100 tracking-widest select-none">
                  MEDICINE
                </span>

                {/* Image wrapper */}
                <div className="relative w-full h-[520px] clip-polygon bg-emerald-900 overflow-hidden">
                  <Image
                    src={LeadersImg}
                    alt="Medical professional"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute bottom-8 right-8 bg-emerald-100 px-6 py-8 rounded-t-full rounded-br-full shadow-lg text-center">
                  <h3 className="text-4xl font-bold text-slate-900">14</h3>
                  <p className="text-xs uppercase tracking-wide text-slate-700 mt-1">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm mb-4">
                  <Plus className="h-4 w-4" />
                  Friendly & Encouraging
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Leaders in Health & <br /> Healing
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                  We are committed to delivering high-quality, compassionate healthcare
                  tailored to your unique needs. Our experienced medical professionals
                  provide a wide range of services designed to support individuals &
                  families through every stage of life.
                </p>

                <div className="border-t border-slate-200 my-8 max-w-xl" />

                <ul className="space-y-4 mb-10">
                  {[
                    "Comprehensive Primary & Specialty Care",
                    "Personalized Care Plans Preventive",
                    "Health Screenings",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="bg-emerald-700 hover:bg-emerald-800 flex items-center gap-2">
                  View Our History Timeline
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="py-20 bg-gradient-to-b from-slate-50 to-white px-4 md:px-6 lg:px-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-[#033c7b] mb-4">
                How We Work
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A transparent and reliable process designed to deliver qualified caregivers
                when and where you need them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition bg-[#033c7b] text-white">
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-white text-[#033c7b] p-3 rounded-xl">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <CardTitle>Initial Consultation</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 leading-relaxed">
                  Connect with our team to discuss your staffing needs, timelines, and
                  expectations. We tailor solutions specific to your facility.
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition bg-[#10b981] text-white">
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-white text-[#10b981] p-3 rounded-xl">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Caregiver Matching</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 leading-relaxed">
                  We carefully match licensed and experienced caregivers based on skills,
                  availability, and cultural fit.
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition bg-[#033c7b] text-white">
                <CardHeader className="flex items-center gap-4">
                  <div className="bg-white text-[#033c7b] p-3 rounded-xl">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle>Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300 leading-relaxed">
                  Continuous follow-up, performance monitoring, and replacement coverage
                  ensure uninterrupted quality care.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-[#2563eb]/5 to-[#10b981]/5 px-4 md:px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-center mb-14">
              <h2 className="text-4xl font-bold text-[#033c7b] mb-4">
                Care Starts With People
              </h2>
              <p className="text-lg text-slate-600">
                Every caregiver we place represents compassion, reliability, and dignity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                Care1.src,
                Care2.src,
                Care3.src,
              ].map((src, index) => (
                <div key={index} className="relative h-72 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={src}
                    alt="Healthcare professional"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>


          <section className="py-24 bg-gradient-to-br from-[#f59e0b]/5 to-[#8b5cf6]/5 px-4 md:px-6 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-14">
              <h2 className="text-4xl font-bold text-[#033c7b] mb-4">Why Choose Us</h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Licensed Caregivers", desc: "Fully screened & credentialed staff", color: "bg-[#033c7b]/10" },
                { title: "24/7 Support", desc: "Rapid response when you need coverage", color: "bg-[#10b981]/10" },
                { title: "Trusted Partnerships", desc: "Facilities across the PNW", color: "bg-[#f59e0b]/10" },
              ].map((item) => (
                <Card key={item.title} className={`border-slate-200 shadow-sm hover:shadow-md transition ${item.color}`}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="px-4 md:px-6 lg:px-20 py-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden">

              {/* LEFT IMAGE */}
              <div className="relative h-[420px] lg:h-[520px]">
                <Image
                  src={PersonalisedImg}
                  alt="Personalized Treatment"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Play Button */}
                <button
                  aria-label="Play Video"
                  className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10
                       w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center
                       shadow-xl hover:bg-emerald-800 transition"
                >
                  <Play className="h-7 w-7 text-white ml-1" />
                </button>
              </div>

              {/* RIGHT CONTENT */}
              <div className="bg-emerald-50 p-10 lg:p-16 flex items-center">
                <div className="max-w-xl">

                  {/* Subtitle */}
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm mb-4">
                    <Plus className="h-4 w-4" />
                    SEE HOW WE CARE FOR YOU
                  </div>

                  {/* Heading */}
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                    Personalized Treatment That Helps You Heal.
                  </h2>

                  {/* Bullet Points */}
                  <ul className="space-y-4 mt-8">
                    {[
                      "Delivering Quality Healthcare with a Personal Touch.",
                      "Dedicated to Compassionate, Patient-Centered Care.",
                      "Exceptional Care Built on Experience and Trust.",
                      "Delivering Quality Healthcare with a Personal Touch.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-700 mt-1" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Mission */}
          <section className="py-24 bg-gradient-to-br from-[#2563eb]/5 to-[#10b981]/5 px-4 md:px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={MissionImg}
                  alt="Caregiver supporting senior patient"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-4xl font-bold text-[#033c7b] mb-6">
                  Our Mission
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  Our mission is to strengthen healthcare delivery by connecting
                  facilities with dependable, compassionate caregivers. We believe
                  quality care begins with trust, accountability, and meaningful
                  relationships.
                </p>
              </div>

            </div>
          </section>


          {/* Caregiver Requirements */}
          <section className="py-20 px-4 md:px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#033c7b] mb-4">
                  Caregiver Requirements
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  To ensure safety, compliance, and quality care, all caregivers must meet
                  the following requirements.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Government-issued photo ID",
                    "Authorization to work in the U.S.",
                    "Completed application & onboarding",
                    "Relevant caregiver license",
                    "CPR & First Aid certification",
                    "Background check clearance",
                    "TB test / health screening",
                    "Required vaccinations & immunizations",
                    "Verified training & experience",
                    "Reliable transportation & punctuality",
                  ].map((req) => (
                    <div key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#10b981] mt-1" />
                      <p className="text-slate-700">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={CaregiverImg}
                  alt="Professional caregiver documentation"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </section>

          {/* Who We Serve */}
          <section className="py-20 bg-[#10b981]/5 px-4 md:px-6 lg:px-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#033c7b] mb-4">
                Who We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl">
                We support a wide range of healthcare environments with dependable,
                compassionate staffing solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Skilled Nursing Facilities", color: "bg-[#033c7b]/10" },
                { name: "Memory Care Communities", color: "bg-[#10b981]/10" },
                { name: "Hospice & Palliative Care", color: "bg-[#f59e0b]/10" },
                { name: "Rehabilitation Centers", color: "bg-[#ef4444]/10" },
                { name: "Adult Family Homes", color: "bg-[#8b5cf6]/10" },
                { name: "Hospitals & Group Homes", color: "bg-[#06b6d4]/10" },
              ].map((item, index) => (
                <Card key={item.name} className={`border-slate-200 ${item.color}`}>
                  <CardHeader className="flex items-center gap-4">
                    <Building2 className="h-6 w-6 text-[#033c7b]" />
                    <CardTitle className="text-base">{item.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>


          {/* About Us */}
          {/* <section className="py-20 bg-white px-4 md:px-6 lg:px-20">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-[#033c7b] mb-6">
                About Us
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                Nurture PNW Staffing is a caregiver staffing agency serving the Pacific
                Northwest. We are committed to dependable staffing, transparent
                communication, and meaningful partnerships that support quality care.
              </p>
            </div>
          </section> */}


          {/* Service Areas */}
          {/* <section className="py-20 bg-slate-50 px-4 md:px-6 lg:px-20">
            <Card className="max-w-4xl border-slate-200">
              <CardHeader className="flex items-center gap-4">
                <MapPin className="h-7 w-7 text-emerald-600" />
                <CardTitle className="text-3xl">Service Areas</CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-slate-600">
                We proudly serve the Pacific Northwest, including Seattle and surrounding
                communities. Coverage may expand based on staffing availability.
              </CardContent>
            </Card>
          </section> */}


          {/* Get a Free Quote */}
          <section className="py-20 px-4 md:px-6 lg:px-20 relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={QuoteBgImg}
                alt="Healthcare professionals collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/65"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Get a Free Quote
                  </h2>
                  <p className="text-lg text-slate-200 mb-8">
                    Ready to find the perfect caregivers for your facility? Get started with a personalized quote today.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-slate-200">Tell us about your needs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-slate-200">Receive customized recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-slate-200">Get your free quote within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#033c7b] mb-6">Request Your Quote</h3>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="first-name"
                        placeholder="First Name *"
                        required
                        disabled={isLoading}
                      />
                      <Input
                        name="last-name"
                        placeholder="Last Name *"
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <Input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      disabled={isLoading}
                    />

                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      required
                      disabled={isLoading}
                    />

                    <Textarea
                      name="message"
                      placeholder="Tell us about your staffing needs (facility type, number of positions, special requirements, etc.) *"
                      required
                      rows={4}
                      disabled={isLoading}
                    />

                    <Button size="lg" className="w-full" disabled={isLoading}>
                      Request Free Quote
                    </Button>
                  </form>


                  <p className="text-sm text-slate-500 mt-4 text-center">
                    No commitment required. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Contact Us */}
          <section id="contact" className="py-16 bg-slate-900 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <div className="flex justify-center items-center gap-3 text-slate-300">
              <Phone className="h-5 w-5" />
              <span className="text-lg">206-697-4413</span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
