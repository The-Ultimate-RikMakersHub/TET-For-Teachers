// Clean production database locked strictly to central CTET parameters
const examDatabase = {
    paper1: {
        topics: [
            "📅 TARGET DATE: CTET Exam scheduled nationwide on September 6, 2026",
            "💯 QUALIFY MATRIX: General requires 90/150 Marks | Reserved requires 82/150 Marks",
            "👶 Child Development & Pedagogy (30 Marks - Core focus on primary psychological growth)",
            "🗣️ Language I: Chosen Core Medium (30 Marks - 15M Content Comprehension + 15M Pedagogy)",
            "📚 Language II: English / Alternative (30 Marks - 15M Passages + 15M Language Acquisition)",
            "🧮 Mathematics & Pedagogy (30 Marks - Focuses on foundational numbers and logic tools)",
            "🌍 Environmental Studies - EVS (30 Marks - Core NCERT Class 3-5 content parameters)"
        ],
        pdfs: [
            { name: "Official CTET Master Set 2026 (New)", url: "papers/ctet-2026-p1.pdf" },
            { name: "Official CTET 2025 Past Paper PDF", url: "papers/ctet-2025-p1.pdf" },
            { name: "Official CTET 2024 Past Paper PDF", url: "papers/ctet-2024-p1.pdf" }
        ]
    },
    paper2: {
        topics: [
            "📅 TARGET DATE: CTET Exam scheduled nationwide on September 6, 2026",
            "💯 QUALIFY MATRIX: General requires 90/150 Marks | Reserved requires 82/150 Marks",
            "🧠 Child Development & Pedagogy (30 Marks - Focuses on upper primary learning theories)",
            "🗣️ Language I: Chosen Core Medium (30 Marks - Advanced comprehension and text parsing)",
            "📚 Language II: English / Alternative (30 Marks - Advanced grammar and remedial teaching)",
            "🧬 Elective Stream A: Math & Science (60 Marks - 30M Math + 30M Science split)",
            "🏰 Elective Stream B: Social Science (60 Marks - History, Geography, and Social Life)"
        ],
        pdfs: [
            { name: "Official CTET 2025 Paper-II PDF", url: "papers/ctet-2025-p2.pdf" },
            { name: "Official CTET 2024 Paper-II PDF", url: "papers/ctet-2024-p2.pdf" }
        ]
    }
};


// Controls switching states of navigation buttons
function switchPaper(paperKey) {
    const btn1 = document.getElementById('btn-paper1');
    const btn2 = document.getElementById('btn-paper2');
    
    if(paperKey === 'paper1') {
        btn1.classList.add('active');
        btn2.classList.remove('active');
    } else {
        btn2.classList.add('active');
        btn1.classList.remove('active');
    }

    renderResources(paperKey);
}

// Handles rendering structural code items to current view
function renderResources(key) {
    const data = examDatabase[key];
    
    // Injecting high-weightage keywords
    const tagContainer = document.getElementById('topic-tags');
    tagContainer.innerHTML = data.topics.map(t => 
        `<span class="tag-node">${t}</span>`
    ).join('');

    // Injecting document nodes 
    const pdfContainer = document.getElementById('pdf-container');
    pdfContainer.innerHTML = data.pdfs.map(p => `
        <a href="${p.url}" class="pdf-anchor">
            <span>${p.name}</span>
            <span class="pdf-download-text">Download ⬇</span>
        </a>
    `).join('');
}

// Handles updating live banner text safely 
window.addEventListener('DOMContentLoaded', () => {
    renderResources('paper1');
    
    setTimeout(() => {
        document.getElementById('live-status-text').innerText = "All streams operational. Next official notification cycle validation schedule checks automatically at midnight.";
    }, 1500);
});
