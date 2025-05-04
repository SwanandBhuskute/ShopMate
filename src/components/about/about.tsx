const About = () => {
  return (
    <div className="min-h-screen text-zinc-100 px-6 py-12">
      <div className="max-w-4xl mx-auto glass rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">About ShopMate</h1>

        <p className="mb-4 text-lg leading-relaxed text-black">
          Welcome to <span className="font-semibold text-black">ShopMate</span>, your one-stop online destination for
          quality and affordable products. Founded with a vision to bring premium items to your doorstep, we strive to
          make online shopping smooth, secure, and satisfying.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-black">
          Whether you're looking for fashion, electronics, home essentials, or lifestyle accessories — we've got you
          covered. Our curated selection and seamless user experience are tailored to modern consumers who value
          convenience and trust.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-black">
          Our commitment is rooted in:
        </p>

        <ul className="list-disc list-inside mb-6 text-lg text-black space-y-2">
          <li><span className="text-black font-medium">Quality:</span> Only the best products make it to our catalog.</li>
          <li><span className="text-black font-medium">Affordability:</span> Competitive pricing without compromise.</li>
          <li><span className="text-black font-medium">Sustainability:</span> We promote eco-conscious practices and brands.</li>
          <li><span className="text-black font-medium">Support:</span> Always here to help with dedicated customer service.</li>
        </ul>

        <p className="text-lg leading-relaxed text-black">
          Thank you for choosing ShopMate — where smart shopping meets satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
