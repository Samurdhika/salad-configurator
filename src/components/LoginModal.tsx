import { useState } from "react";
import { Modal } from "./Modal";
import { login as loginApi } from "../services/api";
import { useAuthStore } from "../store/useAuthStore";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginApi(email, password);

      
      login(data.token, data.name);

      setEmail("");
      setPassword("");
      onClose();
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-zinc-900 text-white rounded-3xl p-8 w-[360px] shadow-2xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
        >
          ✕
        </button>

       
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

         
          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-[#A2D135]"
            />
          </div>

         
          <div>
            <label className="text-sm text-zinc-400">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full mt-1 p-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-[#A2D135]"
            />
          </div>

          
          <button
            type="submit"
            className="mt-4 bg-[#A2D135] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
}