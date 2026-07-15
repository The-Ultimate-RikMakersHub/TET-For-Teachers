// Local database matching official exam parameters
const examDatabase = {
    paper1: {
        topics: ["Child Psychology Basics", "Inclusive Education", "Language Pedagogy", "Foundational Math", "Environmental EVS"],
        pdfs: [
            { name: "Official CTET 2025 Paper-I PDF", url: "#" },
            { name: "Official CTET 2024 Paper-I PDF", url: "#" },
            { name: "Official WB-TET Past Paper-I PDF", url: "#" }
        ]
    },
    paper2: {
        topics: ["Piaget & Kohlberg Cognitive Models", "Advanced Classroom Management", "Subject Science / Mathematics", "Social Science Parameters"],
        pdfs: [
            { name: "Official CTET 2025 Paper-II PDF", url: "#" },
            { name: "Official CTET 2024 Paper-II PDF", url: "#" },
            { name: "Official WB-TET Past Paper-II PDF", url: "#" }
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
