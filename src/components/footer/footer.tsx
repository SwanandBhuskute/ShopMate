import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-zinc-900 text-zinc-100 p-4">
      <aside>
        <svg
          width="55"
          height="55"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="font-semibold text-lg">
          ShopMate
          <br />
          Your trusted store for quality and affordability.
        </p>
        <p className="text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <Link to="/about-us" className="link link-hover text-lg font-semibold">About</Link>
          <Link to="/products" className="link link-hover text-lg font-semibold">Products</Link>
        </div>
        <div className="grid grid-flow-col gap-4 mt-4">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.6a9.9 9.9 0 0 1-2.8.8 4.9 4.9 0 0 0 2.1-2.7 9.9 9.9 0 0 1-3.1 1.2 4.9 4.9 0 0 0-8.4 4.5A13.9 13.9 0 0 1 1.7 3.1a4.9 4.9 0 0 0 1.5 6.6A4.9 4.9 0 0 1 1 9.1v.1a4.9 4.9 0 0 0 3.9 4.8 4.9 4.9 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4A9.8 9.8 0 0 1 0 21.6a13.9 13.9 0 0 0 7.5 2.2c9 0 13.9-7.4 13.9-13.8v-.6A9.9 9.9 0 0 0 24 4.6z" />
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M19.6 3H4.4A1.4 1.4 0 0 0 3 4.4v15.2A1.4 1.4 0 0 0 4.4 21h15.2a1.4 1.4 0 0 0 1.4-1.4V4.4A1.4 1.4 0 0 0 19.6 3zM8 18H5v-8h3v8zm-1.5-9.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 18h-3v-4c0-1-.4-2-1.5-2s-1.5 1-1.5 2v4h-3v-8h3v1.1c.4-.8 1.3-1.1 2.1-1.1 2 0 3 1.4 3 3.7V18z" />
            </svg>
          </a>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.2C6.5 2.2 2 6.6 2 12.2s4.5 10 10 10 10-4.4 10-10S17.5 2.2 12 2.2zM12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              <path d="M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
