// script.js - începe cu JSON-ul personal
const studentData = {
    personalInfo: {
      firstName: "Calin",
      lastName: "Racaru",
      email: "racarucalin21@stud.ase.ro",
      phone: "+40 123 4522 9",
      birthDate: "2002-09-14"
    },
    education: {
      university: "ASE",
      faculty: "CSIE - eBusiness",
      year: 1,
      group: "1115"
    },
    skills: [
      { name: "HTML", level: 30, category: "Frontend" },
      { name: "CSS", level: 25, category: "Frontend" },
      { name: "JavaScript", level: 20, category: "Frontend" },
      { name: "Python", level: 10, category: "Backend" }
    ],
    projects: [
      {
        title: "Primul meu website",
        description: "Un website personal creat cu HTML și CSS care afiseaza iamginini si text.",
        technologies: ["HTML", "CSS"],
        link: "https://github.com/username/project1"
      },
      {
        title: "Calculator Spring Boot",
        description: "Calculator funcțional cu operații matematice",
        technologies: ["Java", "Spring Boot"],
        link: "https://github.com/CalinFlorian7/Calculator-app"
      }
    ],
    avatar: "https://ui-avatars.com/api/?name=Calin+Racaru&size=200&background=random"
  };

  // 1. JSON-ul studentData (vezi mai sus)

// 2. Funcție pentru crearea structurii paginii
function createPersonalPage() {
    const app = document.getElementById('app');
    
    // Creează elementele DOM dinamic:
    // - Header cu avatar și nume
    // - Secțiune informații personale
    // - Secțiune educație
    // - Secțiune skills (cu bare de progres)
    // - Secțiune proiecte (carduri)
    // - Footer cu link-uri sociale
    
    // Exemplu pentru header:
    const header = document.createElement('header');
    header.className = 'hero';
    
    const avatar = document.createElement('img');
    avatar.src = studentData.avatar;
    avatar.alt = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
    avatar.className = 'avatar';
    
    const name = document.createElement('h1');
    name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
    
    header.appendChild(avatar);
    header.appendChild(name);
    app.appendChild(header);
    
    // ... continuă cu restul secțiunilor
  }
  
  // 3. Apelează funcția când DOM-ul este gata
  document.addEventListener('DOMContentLoaded', createPersonalPage);