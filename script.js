// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// API data for classes, items, and characters
const gameData = {
    classes: [
        {
            name: "Battlemage",
            description: "A hybrid warrior who combines melee combat with elemental magic.",
            skills: ["Elemental Weapon", "Superconductor", "Vacuum Touch"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Battlemage"
        },
        {
            name: "Rogue",
            description: "A stealthy fighter who specializes in backstabs and critical hits.",
            skills: ["Backstab", "Chloroform", "Mortal Blow"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Rogue"
        },
        {
            name: "Ranger",
            description: "A master of ranged combat who can attack from a distance with precision.",
            skills: ["Ballistic Shot", "Barrage", "First Aid"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Ranger"
        },
        {
            name: "Wizard",
            description: "A powerful spellcaster who manipulates the elements to devastating effect.",
            skills: ["Fireball", "Ice Fan", "Chain Lightning"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Wizard"
        },
        {
            name: "Cleric",
            description: "A holy warrior who heals allies and smites enemies with divine magic.",
            skills: ["Restoration", "Cleanse Wounds", "Holy Flame"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Cleric"
        },
        {
            name: "Necromancer",
            description: "A dark mage who manipulates life force and raises the dead.",
            skills: ["Raise Bloated Corpse", "Blood Sucker", "Infect"],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Necromancer"
        }
    ],
    items: [
        {
            name: "Fang of the Winter Dragon",
            type: "Unique Dagger",
            description: "A dagger forged from the fang of an ancient frost dragon.",
            stats: "12-14 Physical Damage, +1 Finesse, 10% Chance to Freeze",
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Dragon+Dagger"
        },
        {
            name: "Eternal Stormblade",
            type: "Unique Two-Handed Sword",
            description: "A massive sword crackling with storm energy.",
            stats: "24-28 Physical Damage, +1 Strength, 15% Chance to Shock",
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Stormblade"
        },
        {
            name: "Armor of the Eternal",
            type: "Unique Chest Armor",
            description: "Ancient armor said to have been worn by the last Divine.",
            stats: "45 Physical Armor, 45 Magical Armor, +1 Constitution",
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Eternal+Armor"
        },
        {
            name: "Ring of Intelligence",
            type: "Ring",
            description: "A simple ring that enhances magical abilities.",
            stats: "+2 Intelligence, +1 Memory",
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Int+Ring"
        },
        {
            name: "Idol of Rebirth",
            type: "Relic",
            description: "A sacred idol that brings its bearer back from death.",
            stats: "Auto-resurrect once per combat",
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Rebirth+Idol"
        }
    ],
    characters: [
        {
            name: "Lohse",
            race: "Human",
            class: "Enchanter",
            origin: "Yes",
            talents: ["Maddening Song", "What a Rush!", "Demon"],
            abilities: [
                {
                    name: "Maddening Song",
                    description: "Lohse sings a song that charms nearby enemies for 1 turn."
                },
                {
                    name: "Demon",
                    description: "Lohse has a demon inside her that occasionally takes control."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Lohse"
        },
        {
            name: "Ifan ben-Mezd",
            race: "Human",
            class: "Wayfarer",
            origin: "Yes",
            talents: ["Wolf Companion", "Dangerous to Know", "Rebel"],
            abilities: [
                {
                    name: "Wolf Companion",
                    description: "Ifan can summon a spirit wolf to fight by his side."
                },
                {
                    name: "Dangerous to Know",
                    description: "Ifan has connections with various factions in Rivellon."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Ifan"
        },
        {
            name: "Sebille",
            race: "Elf",
            class: "Scoundrel",
            origin: "Yes",
            talents: ["Flesh Sacrifice", "Break the Chains", "Slave"],
            abilities: [
                {
                    name: "Flesh Sacrifice",
                    description: "Sebille sacrifices flesh to gain +1 AP and +10% damage for 3 turns."
                },
                {
                    name: "Break the Chains",
                    description: "Sebille is determined to break free from her past."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Sebille"
        },
        {
            name: "The Red Prince",
            race: "Lizard",
            class: "Fighter",
            origin: "Yes",
            talents: ["Dragon's Blaze", "Noble", "Fire Resistance"],
            abilities: [
                {
                    name: "Dragon's Blaze",
                    description: "The Red Prince breathes fire in a cone, dealing fire damage."
                },
                {
                    name: "Noble",
                    description: "The Red Prince is a member of the Lizard nobility."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Red+Prince"
        },
        {
            name: "Beast",
            race: "Dwarf",
            class: "Battlemage",
            origin: "Yes",
            talents: ["Petrifying Touch", "Dwarven Guile", "Dwarf"],
            abilities: [
                {
                    name: "Petrifying Touch",
                    description: "Beast can petrify enemies with a touch."
                },
                {
                    name: "Dwarven Guile",
                    description: "Beast is particularly resistant to being knocked down."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Beast"
        },
        {
            name: "Fane",
            race: "Undead",
            class: "Wizard",
            origin: "Yes",
            talents: ["Play Dead", "Time Warp", "Undead"],
            abilities: [
                {
                    name: "Play Dead",
                    description: "Fane can pretend to be dead, causing enemies to ignore him."
                },
                {
                    name: "Time Warp",
                    description: "Fane can grant an ally an extra turn."
                }
            ],
            image: "https://via.placeholder.com/300x200/2c3e50/ecf0f1?text=Fane"
        }
    ]
};

// Navigation functionality
document.getElementById('homeLink').addEventListener('click', (e) => {
    e.preventDefault();
    loadHomeContent();
    setActiveLink('homeLink');
});

document.getElementById('classesLink').addEventListener('click', (e) => {
    e.preventDefault();
    loadClassesContent();
    setActiveLink('classesLink');
});

document.getElementById('itemsLink').addEventListener('click', (e) => {
    e.preventDefault();
    loadItemsContent();
    setActiveLink('itemsLink');
});

document.getElementById('charactersLink').addEventListener('click', (e) => {
    e.preventDefault();
    loadCharactersContent();
    setActiveLink('charactersLink');
});

function setActiveLink(linkId) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(linkId).classList.add('active');
}

function loadHomeContent() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="hero">
            <img src="https://via.placeholder.com/1200x400/2c3e50/ecf0f1?text=Divinity+Original+Sin+2" alt="Divinity Original Sin 2 Banner">
        </div>
        
        <div class="content-section">
            <h2>Welcome to Rivellon</h2>
            <p>Divinity: Original Sin II is a single- and multiplayer top-down, party-based role-playing game with pen & paper RPG-like levels of freedom. It features turn-based combat, a strong focus on systematic gameplay and a well-grounded narrative.</p>
            <p>Divinity: Original Sin II is the sequel to the critically acclaimed Divinity: Original Sin, winner of over 150 Game of the Year awards and nominations.</p>
        </div>
        
        <div class="content-section">
            <h2>The Story</h2>
            <p>The game is set in the world of Rivellon, years after the first Divinity: Original Sin. The Voidwoken, demonic creatures of the Void, have invaded, and the Magisters—the religious military order of the Divine—are rounding up and imprisoning anyone with the potential to become a Sourcerer, as their powers are believed to be the cause of the Voidwoken invasion.</p>
            <p>You are a Sourcerer, captured by the Magisters and placed on a prison ship heading to the Fort Joy island prison. When the ship is attacked by a kraken-like Voidwoken creature, you escape and wash ashore on Fort Joy. From there, you must find a way to escape the island, all while learning more about your powers as a Godwoken—one who has the potential to become the next Divine.</p>
        </div>
    `;
}

function loadClassesContent() {
    const mainContent = document.getElementById('mainContent');
    let classesHTML = `
        <div class="content-section">
            <h2>Classes</h2>
            <p>Choose from a variety of classes to create your perfect character. Each class has unique abilities and playstyles.</p>
            
            <div class="card-grid">
    `;
    
    gameData.classes.forEach(cls => {
        classesHTML += `
            <div class="card">
                <img src="${cls.image}" alt="${cls.name}">
                <div class="card-content">
                    <h3>${cls.name}</h3>
                    <p>${cls.description}</p>
                    <h4>Skills:</h4>
                    <ul>
                        ${cls.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    classesHTML += `
            </div>
        </div>
    `;
    
    mainContent.innerHTML = classesHTML;
}

function loadItemsContent() {
    const mainContent = document.getElementById('mainContent');
    let itemsHTML = `
        <div class="content-section">
            <h2>Items</h2>
            <p>Discover powerful weapons, armor, and artifacts throughout your journey in Rivellon.</p>
            
            <div class="card-grid">
    `;
    
    gameData.items.forEach(item => {
        itemsHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p><strong>Type:</strong> ${item.type}</p>
                    <p>${item.description}</p>
                    <p><strong>Stats:</strong> ${item.stats}</p>
                </div>
            </div>
        `;
    });
    
    itemsHTML += `
            </div>
        </div>
    `;
    
    mainContent.innerHTML = itemsHTML;
}

function loadCharactersContent() {
    const mainContent = document.getElementById('mainContent');
    let charactersHTML = `
        <div class="content-section">
            <h2>Characters</h2>
            <p>Meet the origin characters you can play as or recruit as companions in your journey.</p>
            
            <div class="card-grid">
    `;
    
    gameData.characters.forEach(char => {
        charactersHTML += `
            <div class="card">
                <img src="${char.image}" alt="${char.name}">
                <div class="card-content">
                    <h3>${char.name}</h3>
                    <p><strong>Race:</strong> ${char.race}</p>
                    <p><strong>Class:</strong> ${char.class}</p>
                    <p><strong>Origin:</strong> ${char.origin}</p>
                    <h4>Talents:</h4>
                    <ul>
                        ${char.talents.map(talent => `<li>${talent}</li>`).join('')}
                    </ul>
                    <div class="character-abilities">
                        ${char.abilities.map(ability => `
                            <div class="ability">
                                <h4>${ability.name}</h4>
                                <p>${ability.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    charactersHTML += `
            </div>
        </div>
    `;
    
    mainContent.innerHTML = charactersHTML;
}

// Initialize the page with home content
loadHomeContent();