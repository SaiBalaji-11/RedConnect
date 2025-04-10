export const SignupHandler = async (formData) => {
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
  
      const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: data
      });
  
      const result = await res.text();
      console.log(result);
      alert('Signup successful!');
    } catch (err) {
      console.error('Signup failed', err);
      alert('Error during signup');
    }
  };
  


