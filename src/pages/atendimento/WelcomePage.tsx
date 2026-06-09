import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag } from "lucide-react";
import { useOrderStore } from "@/stores/orderStore";
import type { OrderType } from "@/types";

export default function WelcomePage() {
  const navigate = useNavigate();
  const setOrderType = useOrderStore((s) => s.setOrderType);

  function handleSelectType(type: OrderType) {
    setOrderType(type);
    navigate("/menu");
  }

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* ── Header ───────────────────────────────────────── */}
      <header className="flex items-center justify-center py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="text-5xl">🍔</span>
          <h1 className="text-white text-4xl font-black tracking-tight">
            BURGER<span className="text-brand-primary">FAST</span>
          </h1>
        </motion.div>
      </header>

      {/* ── Banner principal ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-6 rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary p-8 text-white text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
          Oferta do dia
        </p>
        <h2 className="text-4xl font-black mt-1">X-Burguer + Fritas</h2>
        <p className="text-6xl font-black mt-2">R$ 29,90</p>
        <p className="text-sm opacity-75 mt-1">
          Válido somente hoje • Retirada no balcão
        </p>
      </motion.div>

      {/* ── Chamada para ação ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10"
      >
        <p className="text-white/60 text-lg font-medium">
          Toque para começar seu pedido
        </p>
        <motion.div
          animate={{ scaleX: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mt-3 h-1 w-16 rounded-full bg-brand-primary"
        />
      </motion.div>

      {/* ── Botões de tipo de pedido ─────────────────────── */}
      <div className="flex gap-4 mx-6 mt-10">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleSelectType("DINE_IN")}
          className="flex-1 bg-brand-card border-2 border-white/10 hover:border-brand-primary rounded-3xl p-8 flex flex-col items-center gap-4 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-20 h-20 rounded-2xl bg-brand-primary/10 group-hover:bg-brand-primary/20 flex items-center justify-center transition-colors">
            <UtensilsCrossed className="text-brand-primary" size={40} />
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-black">Comer Aqui</p>
            <p className="text-white/50 text-sm mt-1">
              Retire no balcão e sente-se
            </p>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleSelectType("TAKEOUT")}
          className="flex-1 bg-brand-card border-2 border-white/10 hover:border-brand-primary rounded-3xl p-8 flex flex-col items-center gap-4 transition-all duration-200 group cursor-pointer"
        >
          <div className="w-20 h-20 rounded-2xl bg-brand-secondary/10 group-hover:bg-brand-secondary/20 flex items-center justify-center transition-colors">
            <ShoppingBag className="text-brand-secondary" size={40} />
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-black">Retirar</p>
            <p className="text-white/50 text-sm mt-1">Levo para viagem</p>
          </div>
        </motion.button>
      </div>

      {/* ── Footer ───────────────────────────────────────── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-auto py-6 text-center"
      >
        <p className="text-white/20 text-xs">
          Toque em qualquer opção para continuar
        </p>
      </motion.footer>
    </div>
  );
}
