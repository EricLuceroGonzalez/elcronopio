/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false,
    },
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatar.iran.liara.run',
          port: '', // Si es necesario especificar el puerto, agrégalo aquí. Deja vacío si no.
          pathname: '/public/**', // Puedes usar comodines para definir rutas más específicas
        },
      ],
    
  }
  
  
};

export default nextConfig;
