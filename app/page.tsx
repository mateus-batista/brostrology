import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <nav className=" bg-white">
        <div className="max-w-4xl mx-auto  flex items-center gap-24 py-4">
          <div className="text-2xl">Brostrology</div>
          <div className="font-sans text-sm flex items-center gap-8">
            <div>Feature</div>
            <div>Examples</div>
            <div>Pricing</div>
            <div>Resources</div>
          </div>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto text-white">
        <h1 className="text-5xl py-12 text-center">Brostrology</h1>
        <div className="flex items-center text-sm gap-4">
          <div className="flex flex-col gap-4 text-center">
            <p>Astrology for bros.</p>
            <p>Ever come across a lady friend who is obsessed about astrology and don&apos;t know what to say?</p>
            <p>Don&apos;t get left behind, learn about it in a way that caters specifically to you.</p>
            <p>Because men have signs too. You deserve it.</p>
            <button className="font-sans font-light bg-gray-800 px-4 py-2 max-w-[200px] mx-auto tracking-wide">START FOR FREE</button>
          </div>
          <div>
            <Image
              src="/bro.jpg"
              alt="Bro. I'm telling you bro. astrology bro. you'll get laid bro I promise."
              className="dark:invert"
              width={984}
              height={1318}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}
