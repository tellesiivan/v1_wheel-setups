import React from "react";

export default function Feed() {
  return (
    <section
      aria-labelledby="primary-heading"
      className="flex flex-col flex-1 h-full min-w-0 overflow-y-auto"
    >
      <h1 id="primary-heading" className="sr-only">
        Account
      </h1>
      {/* Your content */}
      <p>Feed goes here...</p>
    </section>
  );
}
