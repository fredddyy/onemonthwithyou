// Love Story Website JavaScript

// Audio Player
let isPlaying = false;
let isMuted = false;
let audio;
let playBtn;
let muteBtn;
let volumeSlider;
let playingText;

// Initialize audio elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    audio = document.getElementById('bgMusic');
    playBtn = document.getElementById('playBtn');
    muteBtn = document.getElementById('muteBtn');
    volumeSlider = document.getElementById('volumeSlider');
    playingText = document.getElementById('playingText');
    
    if (audio) {
        audio.volume = 0.3;
        initializeAudio();
    }
});

function initializeAudio() {
    // Multiple auto-play attempts
    function attemptAutoplay() {
        if (!isPlaying && audio) {
            audio.play().then(() => {
                isPlaying = true;
                updatePlayButton();
                playingText.classList.add('show');
                console.log('Music started successfully!');
            }).catch(error => {
                console.log('Autoplay prevented:', error);
                // Try again on any user interaction
                document.addEventListener('click', attemptAutoplay, { once: true });
                document.addEventListener('scroll', attemptAutoplay, { once: true });
                document.addEventListener('keydown', attemptAutoplay, { once: true });
            });
        }
    }
    
    // Try immediate autoplay
    setTimeout(attemptAutoplay, 1000);
}



function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playingText.classList.remove('show');
    } else {
        audio.play().then(() => {
            isPlaying = true;
            playingText.classList.add('show');
        }).catch(error => {
            console.log('Play failed:', error);
        });
    }
    updatePlayButton();
}

function updatePlayButton() {
    if (playBtn) {
        const icon = playBtn.querySelector('i');
        if (isPlaying) {
            icon.className = 'fas fa-pause';
        } else {
            icon.className = 'fas fa-play';
        }
    }
}

function toggleMute() {
    if (isMuted) {
        audio.volume = volumeSlider.value;
        isMuted = false;
    } else {
        audio.volume = 0;
        isMuted = true;
    }
    updateMuteButton();
}

function updateMuteButton() {
    if (muteBtn) {
        const icon = muteBtn.querySelector('i');
        if (isMuted) {
            icon.className = 'fas fa-volume-mute';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volumeSlider');
    if (volumeSlider && audio) {
        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value;
            isMuted = false;
            updateMuteButton();
        });
    }
});

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('nav-menu-active');
    this.classList.toggle('nav-toggle-active');
});

// Photo Gallery Modal
function openModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('photoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

// Love Letters Modal
const loveLetters = [
    {
        title: "My Dearest Love",
        message: "From the moment I met you, my world changed. You bring light to my darkest days and joy to my every moment. Loving you is the easiest thing I've ever done.",
        color: "#ff6b9d"
    },
    {
        title: "You Complete Me",
        message: "Before you, I was searching. After you, I was found. You are my missing piece, my soulmate, my everything. Every day with you is a gift I never want to return.",
        color: "#c44569"
    },
    {
        title: "Forever Grateful",
        message: "Thank you for loving me, for supporting me, for being my rock. Thank you for the laughter, the adventures, and the quiet moments. Thank you for being you.",
        color: "#f8b500"
    },
    {
        title: "My Favorite Person",
        message: "You are my first thought in the morning and my last dream at night. You make ordinary days extraordinary and ordinary moments magical. You are simply the best.",
        color: "#ff6b9d"
    },
    {
        title: "Growing Together",
        message: "With you, I've learned what true love means. It's not just the butterflies, but the comfort, the trust, the partnership. I can't wait to grow old with you.",
        color: "#c44569"
    },
    {
        title: "My Promise",
        message: "I promise to love you through every season, to support your dreams, to celebrate your victories, and to hold you through challenges. You are my always and forever.",
        color: "#f8b500"
    },
    {
        title: "Little Things",
        message: "I love the way you laugh, the way you care, the way you make everything better. It's the little things that make our love so big and so beautiful.",
        color: "#ff6b9d"
    },
    {
        title: "My Future",
        message: "When I think about my future, I see you. Every plan, every dream, every hope has you in it because my future doesn't make sense without you.",
        color: "#c44569"
    },
    {
        title: "Unconditional Love",
        message: "I love you not just for who you are, but for who I am when I'm with you. You bring out the best in me and make me want to be better every day.",
        color: "#f8b500"
    }
];

function openLetter(letterNumber) {
    const letter = loveLetters[letterNumber - 1];
    document.getElementById('letterTitle').textContent = letter.title;
    document.getElementById('letterMessage').textContent = letter.message;
    document.getElementById('letterPaper').style.setProperty('--accent-color', letter.color);
    document.getElementById('letterModal').style.display = 'flex';
}

function closeLetterModal() {
    document.getElementById('letterModal').style.display = 'none';
}

// Love Word Search Puzzle
const gridSize = 15;
const loveWords = ['LOVE', 'HEART', 'KISS', 'HUG', 'FOREVER', 'ALWAYS', 'SWEETHEART', 'ROMANCE', 'PASSION', 'TOGETHER', 'HAPPY', 'SMILE', 'DREAM', 'SOULMATE'];
let foundWords = [];
let selectedCells = [];

const grid = [
    ['L','O','V','E','H','U','G','F','O','R','E','V','E','R','S'],
    ['O','H','E','A','R','T','K','I','S','S','T','O','G','E','T'],
    ['V','A','L','W','A','Y','S','L','A','W','A','Y','S','H','O'],
    ['E','R','M','A','N','C','E','P','A','S','S','I','O','N','G'],
    ['R','O','M','A','N','C','E','H','A','P','P','Y','S','M','I'],
    ['E','A','D','R','E','A','M','S','O','U','L','M','A','T','E'],
    ['S','W','E','E','T','H','E','A','R','T','L','O','V','E','Y'],
    ['O','U','L','M','A','T','E','F','O','R','E','V','E','R','O'],
    ['U','G','H','T','O','G','E','T','H','E','R','H','A','P','P'],
    ['L','M','A','T','E','S','W','E','E','T','H','E','A','R','T'],
    ['M','A','T','E','L','O','V','E','R','O','M','A','N','C','E'],
    ['A','T','E','S','W','E','E','T','H','E','A','R','T','L','O'],
    ['T','E','S','W','E','E','T','H','E','A','R','T','L','O','V'],
    ['E','S','W','E','E','T','H','E','A','R','T','L','O','V','E']
];

function initializePuzzle() {
    const wordGrid = document.getElementById('wordGrid');
    wordGrid.innerHTML = '';
    
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = grid[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', handleCellClick);
            wordGrid.appendChild(cell);
        }
    }
}

function handleCellClick(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const cellKey = `${row}-${col}`;
    
    if (selectedCells.includes(cellKey)) {
        selectedCells = selectedCells.filter(cell => cell !== cellKey);
        e.target.classList.remove('selected');
    } else {
        selectedCells.push(cellKey);
        e.target.classList.add('selected');
        
        // Check if selected cells form a word
        const word = selectedCells.map(cellKey => {
            const [r, c] = cellKey.split('-').map(Number);
            return grid[r][c];
        }).join('');
        
        if (loveWords.includes(word) && !foundWords.includes(word)) {
            foundWords.push(word);
            updateWordList();
            selectedCells = [];
            document.querySelectorAll('.grid-cell.selected').forEach(cell => {
                cell.classList.remove('selected');
            });
            
            if (foundWords.length === loveWords.length) {
                showCongratulations();
            }
        }
    }
}

function updateWordList() {
    const wordsList = document.getElementById('wordsList');
    const foundCount = document.getElementById('foundCount');
    
    wordsList.innerHTML = '';
    loveWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        if (foundWords.includes(word)) {
            li.classList.add('found');
            li.innerHTML = word + ' ❤️';
        }
        wordsList.appendChild(li);
    });
    
    foundCount.textContent = `Found: ${foundWords.length} / ${loveWords.length}`;
}

function resetPuzzle() {
    foundWords = [];
    selectedCells = [];
    document.querySelectorAll('.grid-cell.selected').forEach(cell => {
        cell.classList.remove('selected');
    });
    updateWordList();
}

function showCongratulations() {
    const message = document.createElement('div');
    message.className = 'congrats-modal';
    message.innerHTML = `
        <div class="congrats-content">
            <h2>🎉 Congratulations! 🎉</h2>
            <p>You found all the words that describe our love!</p>
            <p>Just like how you've found all the pieces of my heart ❤️</p>
            <button onclick="this.parentElement.parentElement.remove(); resetPuzzle();">Play Again</button>
        </div>
    `;
    document.body.appendChild(message);
}

// Initialize puzzle when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePuzzle();
    updateWordList();
});

// Smooth scroll for footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('photo-modal')) {
        closeModal();
    }
    if (e.target.classList.contains('letter-modal')) {
        closeLetterModal();
    }
});

// Add some romantic floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
        position: fixed;
        bottom: -50px;
        left: ${Math.random() * 100}%;
        font-size: ${Math.random() * 20 + 10}px;
        color: rgba(255, 107, 157, 0.7);
        pointer-events: none;
        animation: floatUp ${Math.random() * 3 + 2}s ease-in;
        z-index: 1;
    `;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            bottom: 100vh;
            opacity: 0;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);