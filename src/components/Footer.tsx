import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        {/* Full-size logo like in navbar */}
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex items-center space-x-2"
            rel="noreferrer noopener"
          >
            <span className="h-10 w-auto flex items-center">
              <LogoIcon className="h-10 w-auto" />
            </span>
          </a>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <a href="#" className="opacity-60 hover:opacity-100">Github</a>
          <a href="#" className="opacity-60 hover:opacity-100">Twitter</a>
          <a href="#" className="opacity-60 hover:opacity-100">Dribbble</a>
        </div>

        {/* Platforms */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <a href="#" className="opacity-60 hover:opacity-100">Web</a>
          <a href="#" className="opacity-60 hover:opacity-100">Mobile</a>
          <a href="#" className="opacity-60 hover:opacity-100">Desktop</a>
        </div>

        {/* About */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <a href="#" className="opacity-60 hover:opacity-100">Features</a>
          <a href="#" className="opacity-60 hover:opacity-100">Pricing</a>
          <a href="#" className="opacity-60 hover:opacity-100">FAQ</a>
          <Link to="/credits" className="opacity-60 hover:opacity-100">Credits</Link>
        </div>

        {/* Community */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <a href="#" className="opacity-60 hover:opacity-100">Youtube</a>
          <a href="#" className="opacity-60 hover:opacity-100">Discord</a>
          <a href="#" className="opacity-60 hover:opacity-100">Twitch</a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; Created by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Clann
          </a>
        </h3>
      </section>
    </footer>
  );
};
