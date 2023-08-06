import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { indexKeywords } from "@/lib/tags";
import Head from "next/head";

const ContactPage = () => {
  return (

    <>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title className="text-white text-3xl text-center font-bold my-8">{'Contato'}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Na Casa dos Nutrientes, descubra como otimizar suas refeições com uma alimentação saudável, incorporando creatina, whey protein e outros nutrientes, seguindo a pirâmide alimentar. Aprenda receitas saudáveis e a dieta ideal para ganhar massa muscular com o suporte de suplementos de alta qualidade." />
          {
            <meta name="keywords" content={indexKeywords} />
          }
        </Head>
        <Menu />
        <div className="container my-6 mx-auto flex-grow">
          <main className="flex items-center justify-center bg-gray-800">
            <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-md">
              <h1 className="text-2xl text-white font-semibold mb-4">Entre em contato</h1>
              <ContactForm />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
