
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Users, MessageSquare, Calendar, Image, Video, Bell, Search, Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-grupmate-purple">Grupmate</span> – The Social Network for Groups
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Connect with your communities through group chats, shared media, events, and more – all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/signup">
                <Button className="bg-grupmate-purple hover:bg-purple-600 text-white px-8 py-6 text-lg">
                  Join Grupmate
                </Button>
              </Link>
              <Link to="#features">
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Grupmate App Preview" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Group Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grupmate combines the best features of social media, messaging, and productivity tools in one platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <FeatureCard 
                icon={<Users size={24} />}
                title="Create & Join Groups"
                description="Start a group for your club, team, or friend circle in seconds. Set privacy levels and invite members easily."
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <FeatureCard 
                icon={<MessageSquare size={24} />}
                title="Real-time Group Chat"
                description="Chat with your entire group or have private conversations with members in real-time."
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <FeatureCard 
                icon={<Calendar size={24} />}
                title="Event Planning"
                description="Schedule meetings, plan events, and send invites with built-in calendar integration."
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <FeatureCard 
                icon={<Image size={24} />}
                title="Media Sharing"
                description="Share photos, videos, and documents with your group. Create galleries for events and projects."
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <FeatureCard 
                icon={<Video size={24} />}
                title="Video Meetings"
                description="Launch video calls directly from your group for virtual meetups and presentations."
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <FeatureCard 
                icon={<Bell size={24} />}
                title="Smart Notifications"
                description="Get notified about important updates without being overwhelmed by every message."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Grupmate Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easy – create your account and begin connecting with your groups in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-grupmate-purple text-white flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Your Account</h3>
              <p className="text-gray-600">Sign up with your email and create your personal profile on Grupmate.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-grupmate-purple text-white flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-semibold mb-3">Create or Join Groups</h3>
              <p className="text-gray-600">Start your own group or join existing ones by invitation or discovery.</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 rounded-full bg-grupmate-purple text-white flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-semibold mb-3">Start Collaborating</h3>
              <p className="text-gray-600">Chat, share media, plan events, and coordinate with your group members.</p>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/signup">
              <Button className="bg-grupmate-purple hover:bg-purple-600 text-white px-8 py-6 text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Groups of all types are already using Grupmate to stay connected and organized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <TestimonialCard 
                quote="Grupmate has transformed how our campus club communicates. Everything is in one place now!"
                author="Alex Chen"
                role="Student Club President"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <TestimonialCard 
                quote="We use Grupmate for our remote team, and it's made collaboration so much more enjoyable."
                author="Sarah Johnson"
                role="Marketing Team Lead"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <TestimonialCard 
                quote="The event planning feature has been a game changer for coordinating our community meetups."
                author="Miguel Rodriguez"
                role="Community Organizer"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform how your group connects?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Grupmate today and bring your community together in one powerful platform.
          </p>
          <Link to="/signup">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 font-medium">
              Create Your Group
            </Button>
          </Link>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold mb-2">Is Grupmate free to use?</h3>
              <p className="text-gray-600">Grupmate offers a free plan with core features for small groups. Premium plans with additional features are available for larger communities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold mb-2">How many people can join a group?</h3>
              <p className="text-gray-600">Free groups can have up to 50 members. Premium groups can have unlimited members with enhanced features.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-semibold mb-2">Is my data secure on Grupmate?</h3>
              <p className="text-gray-600">Yes, we use industry-standard encryption and security practices to protect your data. Private groups are only visible to members.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold mb-2">Can I use Grupmate for my business?</h3>
              <p className="text-gray-600">Absolutely! Grupmate is perfect for businesses, offering features like team chat, file sharing, and event scheduling in one place.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
