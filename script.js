// JavaScript to hide welcome screen and show main content
setTimeout(() => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const skillsList = document.querySelector('.skills-list');

    // Fade out the welcome screen
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Animate the main content
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(30px)';
        mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Increased speed

        // Display the main content
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';

            // Show skills list with animation
            skillsList.style.display = 'block';
            skillsList.style.opacity = '0';
            skillsList.style.transform = 'translateY(10px)';
            skillsList.style.transition = 'opacity 1s ease, transform 1s ease';

            setTimeout(() => {
                skillsList.style.opacity = '1';
                skillsList.style.transform = 'translateY(0)';
            }, 100); // Slight delay for skills list
        }, 500); // Reduced delay for welcome screen fade out
    }, 1000); // Delay for welcome screen fade out
}, 3000); // Show welcome screen for 3 seconds
