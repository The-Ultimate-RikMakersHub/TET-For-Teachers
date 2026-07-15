// Local database matching precise language splits and Paper II elective streams
const examDatabase = {
    paper1: {
        topics: [
            "Child Development & Pedagogy (30 Marks)", 
            "Language I: Bengali / Regional (30 Marks)", 
            "Language II: English (30 Marks)", 
            "Primary Mathematics & Pedagogy (30 Marks)", 
            "Environmental Studies - EVS (30 Marks)"
        ],
        pdfs: [
            { name: "Official CTET 2025 Paper-I PDF", url: "papers/ctet-2025-p1.pdf" },
            { name: "Official CTET 2024 Paper-I PDF", url: "papers/ctet-2024-p1.pdf" },
            { name: "Official WB-TET Past Paper-I PDF", url: "papers/wbtet-2024-p1.pdf" }
        ]
    },
    paper2: {
        topics: [
            "Child Development & Pedagogy (30 Marks)", 
            "Language I: Bengali / Regional (30 Marks)", 
            "Language II: English (30 Marks)", 
            "Elective A: Math & Science Stream (60 Marks)", 
            "Elective B: Social Science Stream (60 Marks)"
        ],
        pdfs: [
            { name: "Official CTET 2025 Paper-II PDF", url: "papers/ctet-2025-p2.pdf" },
            { name: "Official CTET 2024 Paper-II PDF", url: "papers/ctet-2024-p2.pdf" },
            { name: "Official WB-TET Past Paper-II PDF", url: "papers/wbtet-2024-p2.pdf" }
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
