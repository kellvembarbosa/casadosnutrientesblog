import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Head from "next/head";

const ContactPage = () => {
  return (

    <>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title className="text-white text-3xl text-center font-bold my-8">{'Equipe'}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Este é um exemplo de uma meta descrição para uma página." />
          {
            //Aqui é lista de tags fornecidas pelo google keywords
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
