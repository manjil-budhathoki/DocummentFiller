export default function Footer() {
    return (
      <footer className="py-10 px-6 text-center text-gray-400 bg-black border-t border-white/10">
        <p className="mb-4">&copy; {new Date().getFullYear()} SmartLicense.ai — Built for Hackathon Nepal</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    );
  }