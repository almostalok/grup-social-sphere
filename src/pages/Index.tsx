
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, MessageSquare, Calendar, Image, Video, 
  Bell, Search, Plus, Lock, FileText, Heart,
  BrainCircuit, MapPin, CheckSquare, Award
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-white -z-10"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-grupmate-purple/10 to-purple-300/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-orange-300/10 to-grupmate-lavender/20 blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-grupmate-purple to-purple-600">Grupmate</span> – The Social Network for Groups
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Connect with your communities through group chats, shared media, events, and more – all in one place.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-grupmate-purple to-purple-600 hover:from-purple-600 hover:to-grupmate-purple text-white px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Join Grupmate
                </Button>
              </Link>
              <Link to="#features">
                <Button variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Grupmate App Preview" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating element 1 */}
              <motion.div 
                className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg border border-gray-100 w-32"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-grupmate-purple flex items-center justify-center text-white">
                    <Users size={16} />
                  </div>
                  <div className="text-xs font-medium">15 new members</div>
                </div>
              </motion.div>
              
              {/* Floating element 2 */}
              <motion.div 
                className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg border border-gray-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-grupmate-orange flex items-center justify-center text-white">
                    <Bell size={16} />
                  </div>
                  <div className="text-xs font-medium">New event invitation</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Group Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grupmate combines the best features of social media, messaging, and productivity tools in one platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users size={24} />}
              title="Create & Join Groups"
              description="Start a group for your club, team, or friend circle in seconds. Set privacy levels and invite members easily."
              delay={0}
            />
            <FeatureCard 
              icon={<MessageSquare size={24} />}
              title="Real-time Group Chat"
              description="Chat with your entire group or have private conversations with members in real-time."
              delay={1}
            />
            <FeatureCard 
              icon={<Calendar size={24} />}
              title="Event Planning"
              description="Schedule meetings, plan events, and send invites with built-in calendar integration."
              delay={2}
            />
            <FeatureCard 
              icon={<Image size={24} />}
              title="Media Sharing"
              description="Share photos, videos, and documents with your group. Create galleries for events and projects."
              delay={3}
            />
            <FeatureCard 
              icon={<Video size={24} />}
              title="Virtual Rooms"
              description="Create spaces for learning, meetings, or fun hangouts with your group members."
              delay={4}
            />
            <FeatureCard 
              icon={<Heart size={24} />}
              title="Mental Health Check-ins"
              description="Support your group members with anonymous wellness checks and resources."
              delay={5}
            />
            <FeatureCard 
              icon={<Lock size={24} />}
              title="Privacy Controls"
              description="Choose how open or private your group is, with customizable visibility settings."
              delay={6}
            />
            <FeatureCard 
              icon={<FileText size={24} />}
              title="Resource Sharing"
              description="Share important files, links and documents with your group in an organized way."
              delay={7}
            />
            <FeatureCard 
              icon={<BrainCircuit size={24} />}
              title="AI Group Assistant"
              description="Get help with scheduling, summaries, and answering common questions automatically."
              delay={8}
            />
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-grupmate-purple to-purple-600 hover:from-purple-600 hover:to-grupmate-purple text-white px-8 py-6 text-lg shadow-md hover:shadow-lg">
                Join Grupmate Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 md:px-10">
        <div className="absolute left-0 right-0 h-full bg-gray-50 -z-10 transform -skew-y-3"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Grupmate Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easy – create your account and begin connecting with your groups in minutes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-1 bg-gradient-to-r from-grupmate-purple via-purple-400 to-grupmate-purple"></div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grupmate-purple to-purple-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md z-10">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Your Account</h3>
              <p className="text-gray-600">Sign up with your email and create your personal profile on Grupmate.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grupmate-purple to-purple-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md z-10">2</div>
              <h3 className="text-xl font-semibold mb-3">Create or Join Groups</h3>
              <p className="text-gray-600">Start your own group or join existing ones by invitation or discovery.</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-grupmate-purple to-purple-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md z-10">3</div>
              <h3 className="text-xl font-semibold mb-3">Start Collaborating</h3>
              <p className="text-gray-600">Chat, share media, plan events, and coordinate with your group members.</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-grupmate-purple to-purple-600 hover:from-purple-600 hover:to-grupmate-purple text-white px-8 py-6 text-lg shadow-md hover:shadow-lg">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Groups of all types are already using Grupmate to stay connected and organized.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TestimonialCard 
                quote="Grupmate has transformed how our campus club communicates. Everything is in one place now!"
                author="Alex Chen"
                role="Student Club President"
                image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard 
                quote="We use Grupmate for our remote team, and it's made collaboration so much more enjoyable."
                author="Sarah Johnson"
                role="Marketing Team Lead"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TestimonialCard 
                quote="The event planning feature has been a game changer for coordinating our community meetups."
                author="Miguel Rodriguez"
                role="Community Organizer"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Waitlist Form */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform how your group connects?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Grupmate today and bring your community together in one powerful platform.
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30">
                  <option value="" className="text-gray-800">I'm interested in using Grupmate for...</option>
                  <option value="college" className="text-gray-800">College Club</option>
                  <option value="work" className="text-gray-800">Work Team</option>
                  <option value="community" className="text-gray-800">Community Organization</option>
                  <option value="friends" className="text-gray-800">Friend Group</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>
              <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3 font-medium">
                Join Waitlist
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Is Grupmate free to use?</h3>
              <p className="text-gray-600">Grupmate offers a free plan with core features for small groups. Premium plans with additional features are available for larger communities.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">How many people can join a group?</h3>
              <p className="text-gray-600">Free groups can have up to 50 members. Premium groups can have unlimited members with enhanced features.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Is my data secure on Grupmate?</h3>
              <p className="text-gray-600">Yes, we use industry-standard encryption and security practices to protect your data. Private groups are only visible to members.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">Can I use Grupmate for my business?</h3>
              <p className="text-gray-600">Absolutely! Grupmate is perfect for businesses, offering features like team chat, file sharing, and event scheduling in one place.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
