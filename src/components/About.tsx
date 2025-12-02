import { GraduationCap, Code2, Laptop, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
                <GraduationCap size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <p className="text-lg mb-2">Tulas Institute</p>
                <p className="text-blue-100">Pursuing excellence in Computer Science and Web Development</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hello! I'm Hritick Kumar
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                A passionate web developer currently studying at Tulas Institute. I love creating
                beautiful, responsive, and user-friendly websites that make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in web development has been exciting and rewarding. I'm constantly
                learning new technologies and improving my skills to deliver the best solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <Code2 size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Clean Code</h4>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <Laptop size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Responsive</h4>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <Sparkles size={32} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Modern UI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
