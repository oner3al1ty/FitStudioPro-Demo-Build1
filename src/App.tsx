import { Dumbbell, Users, Star, Clock, CheckCircle, Play, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold">FitStudio Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Classes</button>
            <button onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Membership</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">About</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Contact</button>
            <button
              onClick={() => window.location.href = 'mailto:support@fit-studio-pro.eu'}
              className="bg-cyan-400 text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-colors"
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
            alt="Gym equipment with dumbbells and barbells"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Fitness Journey
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Join our premium fitness community where expert trainers, cutting-edge equipment,
              and proven results come together to help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => window.location.href = 'mailto:support@fit-studio-pro.eu'}
                className="bg-cyan-400 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-cyan-300 transition-all hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Classes
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-slate-400">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-slate-400">Locations</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-orange-400">4.9</span>
                  <Star className="w-8 h-8 fill-orange-400 text-orange-400" />
                </div>
                <div className="text-slate-400">Member Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About FitStudio Pro</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              At FitStudio Pro, we believe fitness is more than just working out—it's about creating
              a lifestyle that empowers you to be your best self. Since 2018, we've been dedicated to
              providing a premium fitness experience that combines cutting-edge equipment, expert guidance,
              and a supportive community.
            </p>
          </div>
        </div>
      </section>

      <section id="classes" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Classes</h2>
            <p className="text-lg text-slate-300">
              Choose from expertly designed classes that cater to all fitness levels and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg"
                alt="HIIT Training Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">HIIT Training</h3>
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">High</span>
                </div>
                <p className="text-slate-300 mb-4">
                  High-intensity interval training designed to maximize calorie burn and improve
                  cardiovascular fitness in minimal time.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Max 12 participants</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold mb-2">Weekly Schedule:</div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div>Mon, Wed: 6:00 AM, 7:00 PM</div>
                    <div>Fri: 6:00 AM, 6:00 PM</div>
                    <div>Sat: 9:00 AM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg"
                alt="Yoga Flow Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">Yoga Flow</h3>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">Low-Med</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Mind-body practice combining flowing movements, breath work, and meditation to
                  improve flexibility, strength, and mental clarity.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Max 15 participants</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold mb-2">Weekly Schedule:</div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div>Tue, Thu: 7:00 AM, 6:30 PM</div>
                    <div>Sat: 10:30 AM</div>
                    <div>Sun: 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg"
                alt="Strength Training Class"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">Strength Training</h3>
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold">Med-High</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Progressive resistance training focused on building lean muscle mass, increasing
                  bone density, and boosting metabolic rate.
                </p>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>50 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Max 8 participants</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-400 font-semibold mb-2">Weekly Schedule:</div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <div>Mon, Wed: 6:30 AM, 8:00 PM</div>
                    <div>Fri: 6:30 AM, 7:00 PM</div>
                    <div>Sun: 10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Trainers</h2>
            <p className="text-lg text-slate-300">
              Each session is led by certified trainers committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                alt="Sarah Johnson - HIIT Trainer"
                className="w-24 h-24 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <div className="text-cyan-400 font-semibold mb-2">HIIT & Functional Training</div>
              <div className="text-slate-400 text-sm mb-4">8 years experience</div>
              <p className="text-slate-300 mb-4">
                Former competitive athlete turned fitness coach, specializing in high-intensity
                training that delivers real results.
              </p>
              <div className="space-y-1 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>NASM-CPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>HIIT Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Functional Movement</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg"
                alt="Mike Rodriguez - Strength Trainer"
                className="w-24 h-24 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Mike Rodriguez</h3>
              <div className="text-cyan-400 font-semibold mb-2">Strength & Powerlifting</div>
              <div className="text-slate-400 text-sm mb-4">12 years experience</div>
              <p className="text-slate-300 mb-4">
                Former powerlifting champion with extensive experience in strength training and
                athletic performance.
              </p>
              <div className="space-y-1 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>CSCS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>USA Powerlifting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Sports Nutrition</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all">
              <img
                src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg"
                alt="Emma Chen - Yoga Instructor"
                className="w-24 h-24 rounded-full object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Emma Chen</h3>
              <div className="text-cyan-400 font-semibold mb-2">Yoga & Mindfulness</div>
              <div className="text-slate-400 text-sm mb-4">10 years experience</div>
              <p className="text-slate-300 mb-4">
                Certified yoga instructor focused on the mind-body connection and helping clients
                find balance in their lives.
              </p>
              <div className="space-y-1 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>RYT-500</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Meditation Teacher</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Therapeutic Yoga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-slate-300">
              Real stories from real people who transformed their lives at FitStudio Pro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "FitStudio Pro completely transformed my approach to fitness. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Jessica Martinez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Jessica Martinez</div>
                  <div className="text-sm text-slate-400">Member for 8 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "The HIIT classes with Sarah are absolutely amazing! I've never felt stronger or more energized. The community here is like a second family."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="David Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">David Chen</div>
                  <div className="text-sm text-slate-400">Member for 1 year</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "As someone who was intimidated by gyms, FitStudio Pro made me feel welcome from day one. The yoga classes with Emma have been life-changing for my mental health."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                  alt="Rachel Thompson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Rachel Thompson</div>
                  <div className="text-sm text-slate-400">Member for 6 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "Mike's strength training program helped me achieve goals I never thought possible. I'm now lifting twice what I started with and feel incredible!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                  alt="Marcus Williams"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Marcus Williams</div>
                  <div className="text-sm text-slate-400">Member for 2 years</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "Best investment I've ever made in myself. The facilities are top-notch, and the variety of classes keeps me motivated every single week."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  alt="Amanda Roberts"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Amanda Roberts</div>
                  <div className="text-sm text-slate-400">Member for 10 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "I've tried other gyms before, but nothing compares to FitStudio Pro. The personalized attention and expert guidance make all the difference."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg"
                  alt="James Cooper"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">James Cooper</div>
                  <div className="text-sm text-slate-400">Member for 1.5 years</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "The energy in every class is contagious! I look forward to my workouts now instead of dreading them. This place has genuinely changed my life."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
                  alt="Sophia Lee"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Sophia Lee</div>
                  <div className="text-sm text-slate-400">Member for 7 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "From beginner to confident athlete - FitStudio Pro guided me every step. The community support is unmatched, and I've made lifelong friends here."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg"
                  alt="Carlos Ramirez"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Carlos Ramirez</div>
                  <div className="text-sm text-slate-400">Member for 9 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "After years of inconsistent workouts, FitStudio Pro helped me build a sustainable fitness routine. The flexible schedule and welcoming atmosphere are perfect."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Emily Parker"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Emily Parker</div>
                  <div className="text-sm text-slate-400">Member for 5 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "The results speak for themselves! I've gained muscle, improved my endurance, and feel healthier than ever. FitStudio Pro is worth every penny."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
                  alt="Ryan Mitchell"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Ryan Mitchell</div>
                  <div className="text-sm text-slate-400">Member for 1 year</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "Coming here after work is the highlight of my day. The equipment is always clean, the atmosphere is motivating, and the progress I've made has exceeded my expectations."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg"
                  alt="Nina Patel"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Nina Patel</div>
                  <div className="text-sm text-slate-400">Member for 4 months</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all">
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              <p className="text-slate-300 mb-4">
                "I was recovering from an injury and the trainers here worked with me to build strength safely. Their knowledge and patience made all the difference in my recovery journey."
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg"
                  alt="Tom Anderson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Tom Anderson</div>
                  <div className="text-sm text-slate-400">Member for 11 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Membership</h2>
            <p className="text-lg text-slate-300">
              Flexible membership options designed to fit your lifestyle and fitness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all border-2 border-slate-700">
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <div className="text-slate-400 mb-4">Perfect for beginners getting started</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$39</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Access to gym equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Locker room access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">2 group classes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Basic fitness assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Mobile app access</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl p-8 hover:transform hover:scale-105 transition-all border-2 border-cyan-400 relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
              <div className="text-slate-400 mb-4">Most popular choice for regular members</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$59</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Basic, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Unlimited group classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Personal training consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Nutrition guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Priority booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Guest passes (2 per month)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:transform hover:scale-105 transition-all border-2 border-slate-700">
              <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
              <div className="text-slate-400 mb-4">Complete fitness transformation package</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$89</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Everything in Standard, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">4 personal training sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Custom meal planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Body composition analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">24/7 gym access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Unlimited guest passes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Recovery amenities (sauna, massage)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-400 space-y-2">
            <p>All memberships include a 7-day money-back guarantee</p>
            <p>No setup fees • Cancel anytime • Freeze options available</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Start your fitness journey today with a 7-day free trial. No commitment required.
          </p>
          <button
            onClick={() => window.location.href = 'mailto:support@fit-studio-pro.eu'}
            className="bg-cyan-400 text-slate-900 px-12 py-4 rounded-full font-semibold text-lg hover:bg-cyan-300 transition-all hover:scale-105"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold">FitStudio Pro</span>
              </div>
              <p className="text-slate-400 text-sm">
                At FitStudio Pro, we believe fitness is more than just working out—it's about creating a lifestyle that empowers you to be your best self.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Home</button></li>
                <li><button onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Classes</button></li>
                <li><button onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">Membership</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors">About</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>support@fit-studio-pro.eu</li>
                <li>(555) 123-4567</li>
                <li>123 Fitness Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Mon-Fri: 5:00 AM - 11:00 PM</li>
                <li>Saturday: 6:00 AM - 10:00 PM</li>
                <li>Sunday: 7:00 AM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 FitStudio Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
