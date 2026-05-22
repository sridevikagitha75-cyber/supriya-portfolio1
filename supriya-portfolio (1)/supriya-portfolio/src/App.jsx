
export default function RecruiterPortfolio() {
  const skills = [
    'IT Recruitment',
    'End-to-End Hiring',
    'LinkedIn Sourcing',
    'Naukri Hiring',
    'Vendor Management',
    'Stakeholder Management',
    'Salary Negotiation',
    'ATS Tracking'
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 py-24 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Talent Acquisition Specialist
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Kagitha
              <span className="block text-purple-400">Sridevi</span>
              <span className="block">Supriya</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Nearly 4 years of experience in IT Recruitment with expertise in
              end-to-end hiring, stakeholder management, technical screening,
              and talent acquisition.
            </p>

            <button className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all font-semibold">
              Contact Me
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 text-center">
            <div className="text-7xl mb-4">👩‍💼</div>
            <h2 className="text-3xl font-bold mb-2">IT Recruiter</h2>
            <p className="text-gray-400">
              Technical Hiring • Talent Acquisition • HR Operations
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-20 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            Recruitment Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-black border border-white/10 rounded-2xl p-6 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 Kagitha Sridevi Supriya
      </footer>
    </div>
  );
}
