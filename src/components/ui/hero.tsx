import { motion } from "framer-motion";
 
export default function Globe3D() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#17181a] pb-10 pt-32 font-light text-white antialiased md:pb-16 md:pt-20"
      style={{
        background: "linear-gradient(135deg, #17181a 0%, #17181a 100%)",
      }}
    >
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(23, 24, 26, 0.15) 0%, rgba(23, 24, 26, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(23, 24, 26, 0.15) 0%, rgba(23, 24, 26, 0) 60%)",
        }}
      />
 
      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-primary/30 px-3 py-1 text-xs text-primary">
            NEXT GENERATION OF CRYPTO TRADING
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Trade Smarter with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">AI-Powered</span> Crypto Insights
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Lunexa combines artificial intelligence with cutting-edge trading
            strategies to help you maximize your crypto investments with
            precision and ease.
          </p>
 
          <div className="mb-10 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/docs/get-started"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] relative w-full overflow-hidden rounded-full border border-primary/20 bg-primary hover:bg-primary/90 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-primary/50 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>Learn how it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="w-full flex h-40 md:h-64 relative overflow-hidden">
            <img
              src="/earth.jpg"
              alt="Earth"
              className="w-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <img
              src="https://blocks.mvp-subha.me/assets/lunexa-db.png"
              alt="Lunexa Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg border border-primary/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 