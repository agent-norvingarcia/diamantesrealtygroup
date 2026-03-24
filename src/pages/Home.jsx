import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="pt-20">
      <section className="relative bg-hero bg-cover bg-center">
        <div className="section-wrap flex min-h-[80vh] items-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand.gold">Inmobiliaria Premium</p>
            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">Norvin García - Agente Inmobiliario</h1>
            <p className="text-lg text-slate-300">
              Descubre propiedades exclusivas con asesoría personalizada, transparencia y tecnología de clase mundial.
            </p>
            <Link to="/propiedades" className="inline-flex rounded-2xl bg-brand.gold px-6 py-3 font-semibold text-slate-900">
              Ver Propiedades
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
