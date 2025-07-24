import Image from "next/image";


export default function Footer() {
  return (
    <footer 
      className="text-white mt-12 flex h-[5rem]"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Carla Harumi. Todos os direitos reservados.
        </p>
        <div>
        <div className="flex justify-center">
          <p className="text-xs mt-2">
            Desenvolvido por{" "}
            <a href={process.env.NEXT_LINK_DEV_PROFILE}
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              style={{ cursor: "pointer" }} 
            >
              <strong>
                Werik Santos
              </strong>                       
            </a>            
          </p>
          <img className="h-4 w-4 mt-2" src="/images/code-tech.svg" alt="codedev" />
        </div> 
        </div>
      </div>
      <Image
        alt="footer-background"
        src="/images/footer-background.webp"
        width={1350}
        height={1080}
        className="absolute z-0 opacity-25 object-cover pointer-events-none opacity-25 w-auto h-auto self-end"
      />
    </footer>
  ); 
};