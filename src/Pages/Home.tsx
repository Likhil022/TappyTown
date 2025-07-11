import { Button } from "@/Components/ui/button";
import { SignedOut, SignInButton, SignedIn } from "@clerk/clerk-react";
const Home = () => {
  return (
    <div className="flex flex-col items-center ">
      <section className="flex gap-10 justify-center items-center  h-[30rem]">
        <div className="w-[30rem]">
          <h2 className="text-4xl font-semibold text-white/80">
            <span className="block">
              Meet <span className="text-white/90 text-5xl">Instantly.</span>
            </span>
            <span>
              Collaborate{" "}
              <span className="text-white/90 text-5xl">Seamlessly.</span>
            </span>
          </h2>
          <p className="text-[#082148] text-[1.5rem] pt-1.5">
            Pixel Meet lets you start secure video calls with one click.
          </p>
          <div className="pt-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="green">Login to Pixel Meet</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="green">Get Started</Button>
            </SignedIn>
          </div>
        </div>
        <div>
          <img
            src="/assets/Images/Hero.jpg"
            alt="Hero"
            className="h-80 rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
