import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("newsletter").insert([{ email }]);
    if (error) {
      setStatus("❌ Error subscribing. Try again.");
    } else {
      setStatus("✅ Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <form onSubmit={subscribe} className="mt-4 flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded flex-1"
        required
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">
        Subscribe
      </button>
      <p className="mt-2 text-sm">{status}</p>
    </form>
  );
}
