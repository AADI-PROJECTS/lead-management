"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(
      e.currentTarget
    );

    const body = Object.fromEntries(
      formData.entries()
    );

    const response = await fetch(
      "/api/leads",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (response.ok) {
      alert("Lead Submitted");
      e.currentTarget.reset();
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow w-full max-w-lg"
    >
      <h1 className="text-3xl font-bold mb-6">
        Lead Form
      </h1>

      <input
        name="name"
        placeholder="Full Name"
        required
        className="border p-3 w-full mb-4"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-3 w-full mb-4"
      />

      <input
        name="phone"
        placeholder="Phone"
        required
        className="border p-3 w-full mb-4"
      />

      <input
        name="company"
        placeholder="Company"
        className="border p-3 w-full mb-4"
      />

      <textarea
        name="requirement"
        placeholder="Requirement"
        required
        className="border p-3 w-full mb-4"
      />

      <button
        className="bg-black text-white px-6 py-3 rounded"
      >
        {loading
          ? "Submitting..."
          : "Submit"}
      </button>
    </form>
  );
}