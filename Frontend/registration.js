
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newApp form');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.querySelector('.formName').value;
      const email = document.querySelector('.formEmail').value;
      const password = document.querySelector('.formPass').value;
      const cohort = document.querySelector('.cohortSelector').value;

      const data = { name, email, password, cohort };

      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Member registered successfully');
          form.reset();
        } else {
          alert('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });

