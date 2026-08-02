export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">
            Nix <span className="text-blue-500">Mark</span>
          </h2>

          <p className="mt-2 text-gray-400">
            Turning Clicks Into Clients.
          </p>
        </div>

        <div className="text-center text-gray-400 md:text-right">
          <p>📧 hellonixmark@gmail.com</p>
          <p>📞 +91 9236497210</p>
          <p>📍 Buddh Vihar Part C, Taramandal, Gorakhpur</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2026 Nix Mark. All Rights Reserved.
      </div>
    </footer>
  );
}