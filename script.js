
setTimeout(() => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const skillsList = document.querySelector('.skills-list');

    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';

        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(30px)';
        mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; 

        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';

            skillsList.style.display = 'block';
            skillsList.style.opacity = '0';
            skillsList.style.transform = 'translateY(10px)';
            skillsList.style.transition = 'opacity 1s ease, transform 1s ease';

            setTimeout(() => {
                skillsList.style.opacity = '1';
                skillsList.style.transform = 'translateY(0)';
            }, 100); 
        }, 500);
    }, 1000);
}, 3000); 
