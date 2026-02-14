export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BP</span>
              </div>
              <span className="font-bold text-white">Beez Pixel</span>
            </div>
            <p className="text-sm text-gray-400">
              Soluții digitale profesionale pentru afacerea ta.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicii</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Web Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">SEO</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Hosting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Domenii</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Companie</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Despre</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Portofoliu</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@beezpixel.ro</li>
              <li>📱 +40 XXX XXX XXX</li>
              <li>🕒 Luni-Vineri: 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Beez Pixel. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
