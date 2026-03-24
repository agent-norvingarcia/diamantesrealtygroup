import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { getPropiedad } from '../services/firebase'

export default function PropiedadDetalle() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    getPropiedad(id).then(setProperty)
  }, [id])

  if (!property) {
    return <main className="section-wrap pt-28">Cargando detalle...</main>
  }

  return (
    <main className="section-wrap pt-28">
      <h1 className="mb-6 text-4xl font-semibold">{property.titulo}</h1>
      <Swiper modules={[Navigation]} navigation className="mb-8 overflow-hidden rounded-2xl">
        {(property.images?.length ? property.images : ['https://placehold.co/1000x600']).map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt={property.titulo} className="h-[480px] w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid gap-6 md:grid-cols-3">
        <article className="glass rounded-2xl p-6 md:col-span-2">
          <p className="mb-4 text-3xl font-bold text-brand.gold">US$ {Number(property.precio).toLocaleString()}</p>
          <p className="text-slate-200">{property.descripcion}</p>
        </article>
        <aside className="glass space-y-3 rounded-2xl p-6">
          <h2 className="text-xl font-semibold">Contacto directo</h2>
          <a className="block rounded-xl bg-green-500 px-4 py-2 text-center font-semibold text-white" href="https://wa.me/18090000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="block rounded-xl bg-blue-600 px-4 py-2 text-center font-semibold text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="block rounded-xl bg-sky-500 px-4 py-2 text-center font-semibold text-white" href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </aside>
      </div>
    </main>
  )
}
