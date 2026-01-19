document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU TOGGLE
    const hamburger = document.getElementById('sc-hamburger');
    const navMenu = document.getElementById('sc-nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if(navMenu.style.display === 'flex') {
                navMenu.style.position = 'absolute';
                navMenu.style.top = '80px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#fff';
                navMenu.style.flexDirection = 'column';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // 2. COUNTDOWN TIMER LOGIC
    const updateTimer = () => {
        let hElement = document.getElementById('sc-hr');
        let mElement = document.getElementById('sc-mn');
        let sElement = document.getElementById('sc-sc');

        if(!hElement || !mElement || !sElement) return;

        let h = parseInt(hElement.innerText);
        let m = parseInt(mElement.innerText);
        let s = parseInt(sElement.innerText);

        const timer = setInterval(() => {
            if (s > 0) {
                s--;
            } else {
                s = 59;
                if (m > 0) {
                    m--;
                } else {
                    m = 59;
                    if (h > 0) {
                        h--;
                    } else {
                        clearInterval(timer);
                    }
                }
            }

            hElement.innerText = h < 10 ? '0' + h : h;
            mElement.innerText = m < 10 ? '0' + m : m;
            sElement.innerText = s < 10 ? '0' + s : s;
        }, 1000);
    };

    updateTimer();

    // 3. SCROLL REVEAL ANIMATION (Mistake Cards)
    const cards = document.querySelectorAll('.sc-mistake-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });


    // Add this inside your existing document.addEventListener('DOMContentLoaded', () => { ... })

// Select all cards from the new sections to animate them
const newCards = document.querySelectorAll('.sc-framework-card, .sc-mastery-card, .sc-transformation-card');

const newObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

newCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    newObserver.observe(card);
});


// Is line ko purane script.js mein selector list mein add kar dijiye
const syllabusCard = document.querySelector('.sc-syllabus-card');

    if (syllabusCard) {
        // Initial state for Scroll Reveal
        syllabusCard.style.opacity = "0";
        syllabusCard.style.transform = "translateY(30px)";
        syllabusCard.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        observer.observe(syllabusCard);
    }

    // Card Entrance Animation (Sequential)
    const moduleCards = document.querySelectorAll('.sc-module-card');
    
    if (moduleCards.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Adding a small delay for each card for a "staggered" effect
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        moduleCards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.style.transition = "all 0.5s ease-out";
            observer.observe(card);
        });
    }


    const achieveCard = document.querySelector('.sc-achieve-card');
    const achieveItems = document.querySelectorAll('.sc-achieve-item');

    if (achieveCard) {
        // Simple and smooth reveal animation
        achieveCard.style.opacity = "0";
        achieveCard.style.transform = "translateY(20px)";
        achieveCard.style.transition = "all 0.8s ease-out";

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    
                    // Optional: Animate items inside one by one
                    achieveItems.forEach((item, index) => {
                        item.style.opacity = "0";
                        item.style.transform = "translateX(-10px)";
                        item.style.transition = `all 0.4s ease-out ${index * 0.1}s`;
                        
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transform = "translateX(0)";
                        }, 100);
                    });
                }
            });
        }, { threshold: 0.1 });

        observer.observe(achieveCard);
    }


    const audienceCards = document.querySelectorAll('.sc-audience-card');
    const audienceBanner = document.querySelector('.sc-audience-banner');

    // Staggered Entrance Animation
    if (audienceCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        audienceCards.forEach((card, index) => {
            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });
    }

    // Banner Animation
    if (audienceBanner) {
        audienceBanner.style.opacity = "0";
        audienceBanner.style.transform = "scale(0.95)";
        audienceBanner.style.transition = "all 0.8s ease-out 0.5s";

        const bannerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                audienceBanner.style.opacity = "1";
                audienceBanner.style.transform = "scale(1)";
            }
        }, { threshold: 0.1 });

        bannerObserver.observe(audienceBanner);
    }


    const resultCards = document.querySelectorAll('.sc-result-card');

    if (resultCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                    }, index * 150);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        resultCards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            observer.observe(card);
        });
    }



    const ctaCard = document.querySelector('.sc-cta-card');

    if (ctaCard) {
        // Entrance Animation
        ctaCard.style.opacity = "0";
        ctaCard.style.transform = "scale(0.95)";
        ctaCard.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                ctaCard.style.opacity = "1";
                ctaCard.style.transform = "scale(1)";
            }
        }, { threshold: 0.2 });

        observer.observe(ctaCard);
    }


    const mentorCol = document.querySelector('.sc-instructor-column');
    const trustCol = document.querySelector('.sc-trust-column');

    const revealOnScroll = (el, delay = 0) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        }, { threshold: 0.1 });

        observer.observe(el);
    };

    if (mentorCol) revealOnScroll(mentorCol);
    if (trustCol) revealOnScroll(trustCol, 0.2);


    const pricingCard = document.querySelector('.sc-pricing-main-card');

    if (pricingCard) {
        // Entrance Animation
        pricingCard.style.opacity = "0";
        pricingCard.style.transform = "translateY(40px)";
        pricingCard.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                pricingCard.style.opacity = "1";
                pricingCard.style.transform = "translateY(0)";
            }
        }, { threshold: 0.1 });

        observer.observe(pricingCard);
    }


    const faqItems = document.querySelectorAll('.sc-faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.sc-faq-question');
            
            if (question) {
                question.addEventListener('click', () => {
                    // Check if the clicked item is already active
                    const isActive = item.classList.contains('sc-active');

                    // Close all other FAQ items
                    faqItems.forEach(i => i.classList.remove('sc-active'));

                    // If the clicked item was not active, open it
                    if (!isActive) {
                        item.classList.add('sc-active');
                    }
                });
            }
        });
    }


    const closingCard = document.querySelector('.sc-closing-card');

    if (closingCard) {
        // Smooth reveal animation
        closingCard.style.opacity = "0";
        closingCard.style.transform = "translateY(30px)";
        closingCard.style.transition = "all 1s cubic-bezier(0.2, 1, 0.3, 1)";
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                closingCard.style.opacity = "1";
                closingCard.style.transform = "translateY(0)";
            }
        }, { threshold: 0.1 });

        observer.observe(closingCard);
    }


const contactForm = document.getElementById("sc-cp-contact-form");
    const responseMsg = document.getElementById("sc-cp-response-msg");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const submitBtn = document.getElementById("sc-cp-btn");
            const originalText = submitBtn.innerText;

            // UI Feedback
            submitBtn.innerText = "SENDING...";
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    responseMsg.innerText = "Success! Your message has been sent to Arif Boss.";
                    responseMsg.style.color = "#28a745";
                    contactForm.reset();
                } else {
                    responseMsg.innerText = "Error: " + data.message;
                    responseMsg.style.color = "#dc3545";
                }
            } catch (error) {
                responseMsg.innerText = "Something went wrong. Please try again later.";
                responseMsg.style.color = "#dc3545";
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                // Auto hide message after 5 seconds
                setTimeout(() => { responseMsg.innerText = ""; }, 5000);
            }
        });
    }
    

});