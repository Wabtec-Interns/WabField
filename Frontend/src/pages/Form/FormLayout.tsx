import { Outlet } from 'react-router-dom'

const FormLayout = () => {
  return (
    <div className="flex w-full h-full">
      {/* 1ª Section - Imagem */}
      <section 
        id='Image' 
        className="flex w-full h-full bg-cover bg-center"
      >
      </section>
      {/* 2ª Section - Formulário */}
      <section id='Form' className="flex items-center justify-center">
        <Outlet />
      </section>
    </div>
  );
};

export default FormLayout;