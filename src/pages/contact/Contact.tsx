
const Contact = () => {
  return (
    <div 
      className='min-h-screen flex flex-col items-center justify-center px-4' 
      style={{ backgroundColor: 'var(--background-div)', color: 'var(--bg-light)' }}
    >
      <h1 className='text-4xl md:text-5xl font-bold mb-6'>
        Contact Us
      </h1>
      <p className='text-center mb-8' style={{ color: 'var(--bg-light)' }}>
        Feel free to reach out with any inquiries, feedback, or just to say hi!
      </p>

      {/* Contact Form */}
      <form 
        className='w-full max-w-lg p-8 rounded-lg shadow-lg'
        style={{ backgroundColor: 'var(--background-div-light)' }}
      >
        <div className='mb-6'>
          <label htmlFor='name' className='block text-sm font-medium' style={{ color: 'var(--bg-light)' }}>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='mt-1 block w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2'
            style={{ backgroundColor: 'var(--background-div)', color: 'var(--bg-light)', border: '1px solid var(--button-color)' }}
            placeholder='Your name'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='email' className='block text-sm font-medium' style={{ color: 'var(--bg-light)' }}>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='mt-1 block w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2'
            style={{ backgroundColor: 'var(--background-div)', color: 'var(--bg-light)', border: '1px solid var(--button-color)' }}
            placeholder='Your email'
          />
        </div>

        <div className='mb-6'>
          <label htmlFor='message' className='block text-sm font-medium' style={{ color: 'var(--bg-light)' }}>
            Message
          </label>
          <textarea
            id='message'
            className='mt-1 block w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2'
            style={{ backgroundColor: 'var(--background-div)', color: 'var(--bg-light)', border: '1px solid var(--button-color)' }}
            placeholder='Your message'
          ></textarea>
        </div>

        <div className='text-center'>
          <button
            type='submit'
            className='px-6 py-2 rounded-md font-medium'
            style={{ backgroundColor: 'var(--button-color)', color: 'var(--bg-light)' }}
         
            onClick={(e) => 
            {
              e.preventDefault();
              alert("You have to contact us to access the server through the codehons.")
            }
            }
         >
            Send Message
          </button>
        </div>
      </form>

      {/* Social Media Links */}
      <div className='mt-8 flex space-x-4'>
        <a href='#' className='hover:text-green-500' style={{ color: 'var(--bg-light)' }}>
          <i className='fab fa-facebook fa-2x'></i>
        </a>
        <a href='#' className='hover:text-green-500' style={{ color: 'var(--bg-light)' }}>
          <i className='fab fa-twitter fa-2x'></i>
        </a>
        <a href='#' className='hover:text-green-500' style={{ color: 'var(--bg-light)' }}>
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
