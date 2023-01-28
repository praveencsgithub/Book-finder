import heroImage from "../assets/bg2.png";

function Hero() {
  return (
    <section className="flex flex-wrap-reverse gap-8 py-2 md:flex-nowrap">
      <div className="flex flex-col gap-4 self-center">
        <h2 className="font-['Space_Grotesk'] text-5xl text-slate-700">
          Find your book of choice.
        </h2>
      </div>
      
        <img src={heroImage}
        className="max-w-md rounded-sm"
        alt="A man reading book"
      />
    </section>
  );
}

export default Hero;