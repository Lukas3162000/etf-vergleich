import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-4 text-center text-sm text-gray-500 border-t border-gray-300">
      <p>
        <a
          href="https://lukas3162000.github.io/privacy/impressum.html"
          className="underline hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum
        </a>{" "}
        |{" "}
        <a
          href="https://lukas3162000.github.io/privacy/Datenschutz.html"
          className="underline hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutz
        </a>
      </p>
      <p className="mt-1 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Lukas Schneider
      </p>
    </footer>
  );
}
