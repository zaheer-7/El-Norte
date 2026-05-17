import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#18B089] pb-20 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Development / App Development</li>
              <li>E-commerce Solutions</li>
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: elnortecommerce@gmail.com</li>
              <li>Phone: +91 8171955961</li>
              <li>Address: 5th Floor,HDFC Building kacheri Road Civil Lines,Bareilly,Uttar Pradesh 2430001</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">Twitter</a>
              <a href="https://wa.me/+918171955961" className="text-white">Whatsapp</a>
              <a href="https://www.instagram.com/elnortecommerce?igsh=bzM3ZnB6ZHI5NzI5" className="text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t border-white pt-4">
          <p className="text-sm">&copy; 2025 El Norte Commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
