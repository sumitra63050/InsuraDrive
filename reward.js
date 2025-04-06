//Add your JavaScript functionality here
// For example, displaying benefits when a block is clicked.

const pointsCards = document.querySelectorAll('.points-card');
const rewardTiers = document.querySelectorAll('.reward-tier');
const benefitsDisplay = document.getElementById('benefits-display');

pointsCards.forEach(card => {
    card.addEventListener('click', () => {
        const benefits = card.dataset.benefits;
        const color = card.dataset.color;
        benefitsDisplay.textContent = benefits;
        benefitsDisplay.style.backgroundColor = color;
        benefitsDisplay.style.display = 'block';
    });
});

rewardTiers.forEach(tier => {
    tier.addEventListener('click', () => {
        const benefits = tier.dataset.benefits;
        const color = tier.dataset.color;
        benefitsDisplay.textContent = benefits;
        benefitsDisplay.style.backgroundColor = color;
        benefitsDisplay.style.display = 'block';
    });
});