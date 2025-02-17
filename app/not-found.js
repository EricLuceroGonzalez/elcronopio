import Link from "next/link";
import { Main, MainBg } from "./ComponentsStyled";
import Image from "next/image";

export default function NotFound() {
  return (
    <Main
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#6C63FF",
          margin: "20px auto",
          alignItems: "center",
          fontFamily: "monospace",
        }}
      >
        <h1>Error 404:</h1>
        <h2>Dirección no encontrada.</h2>

        <div style={{ maxWidth: "70%" }}>
          <Image
            src={
              "https://res.cloudinary.com/dcvnw6hvt/image/upload/v1739809759/elCronopio/grieupwoegcwgtg9p7jy.png"
            } // Ruta de la imagen del autor
            alt={"Un ovni llevándose a los usuarios de la pagina no encontrada"} // Texto alternativo
            width={180} // Ancho de la imagen
            height={180} // Alto de la imagen
            priority
            // placeholder="blur"
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <p>La dirección que has colocado no ha sido creada todavía.</p>
        <p>
          Verifica que la hayas escrito bien, o vuelve a la página principal.
        </p>
        <Link href="/">Regresar</Link>
        {/* https://res.cloudinary.com/dcvnw6hvt/image/upload/v1739809759/elCronopio/xle8npibijpsgk9qkfnd.png */}
      </div>
    </Main>
  );
}
