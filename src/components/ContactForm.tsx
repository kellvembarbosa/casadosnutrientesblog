// components/ContactForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      // Enviar os dados do formulário para a rota de API do Next.js (sem Axios)
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    // Resto do código continua o mesmo
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-400 font-medium mb-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Este campo é obrigatório' })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Este campo é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'E-mail inválido',
            },
          })}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Este campo é obrigatório' })}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>
      <button type="submit" className="w-full py-2 px-4 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
