
export default function Contact() {
  return (
    <section id="contato">
      <div className="space-y-16 contato-container relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white bruno-ace-regular">
            Pronto para dar o <p></p>
            <span className="text-pink-500 neon-text-pink">primeiro passo</span>?
          </h1>
          <p className="text-xl text-green-400 neon-text-green bruno-ace-regular">
            Me chama e vamos tirar seu projeto do papel!
          </p>
          <button
            className="justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-pink-500 hover:bg-pink-600 text-white px-12 py-4 text-xl font-semibold border-2 border-pink-500 flex items-center gap-3 mx-auto bruno-ace-regular"
            onClick={() =>
              window.open(
                "https://wa.me/5548988224714?text=Ol%C3%A1%2C%20Carla%20!%0AGostaria%20de%20conhecer%20mais%20sobre%20o%20seu%20trabalho.",
                "_blank"
              )
            }
          >
            <img className="w-6 h-6 " src="/images/whatsapp-icon.svg" alt="WhatsApp" />
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
