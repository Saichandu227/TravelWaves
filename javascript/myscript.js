
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            alert('Thank you for your message! We will get back to you soon.');
            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });


        const scrollTopButton = document.createElement('button');
        scrollTopButton.textContent = '↑';
        scrollTopButton.classList.add('scroll-top-btn');
        document.body.appendChild(scrollTopButton);

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            });
        });


        const navbar = document.querySelector('.navbar');

        const sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add('sticky-navbar');
            } else {
                navbar.classList.remove('sticky-navbar');
            }
        }

        window.onscroll = function() {
            stickyNavbar();
        };
