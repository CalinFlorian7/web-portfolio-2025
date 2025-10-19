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
  
    
    // ... continuă cu restul secțiunilor

    // Secțiune informații personale
    const personalInfoSection = document.createElement('div');
    personalInfoSection.className = 'section';
    const personalInfoTitle = document.createElement('h2');
    personalInfoTitle.textContent = 'Informații Personale';
    personalInfoSection.appendChild(personalInfoTitle);
    const personalInfoList = document.createElement('ul');

    for (const [key, value] of Object.entries(studentData.personalInfo)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      listItem.style.fontWeight = 'bold';
      personalInfoList.appendChild(listItem);

    }

    const cardView = document.createElement('card');
    cardView.className = 'card';

    cardView.appendChild(personalInfoList);
    personalInfoSection.appendChild(cardView);

//sectiunea educație
    const educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Educație';
    personalInfoSection.appendChild(educationTitle);
    const educationList = document.createElement('ul');

    for (const [key, value] of Object.entries(studentData.education)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;
      listItem.style.fontWeight = 'bold';
      educationList.appendChild(listItem);
    }

    const educationCard = document.createElement('card');
    educationCard.className = 'card';

    educationCard.appendChild(educationList);
    personalInfoSection.appendChild(educationCard);
//sectiunea skills

    const sectionSkills = document.createElement('section');
    sectionSkills.className = 'section';
    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Skills';
    sectionSkills.appendChild(skillsTitle);
    const skillsList = document.createElement('div');

   for (const skill of studentData.skills) {
  // create skill item
  const skillItem = document.createElement('div');
  skillItem.classList.add('skill-item', 'bold-text');
  skillItem.textContent = `${skill.name} - ${skill.category}`;

  const skillLevel = document.createElement('span');
  skillLevel.textContent = ` (${skill.level}%)`;
  skillLevel.style.marginLeft = '8px';
  skillLevel.style.fontWeight = 'normal';
  skillLevel.style.float = 'right';
  skillItem.appendChild(skillLevel);
  skillsList.appendChild(skillItem);
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.style.width = skill.level + '%';
  progressBar.appendChild(progress);
  skillsList.appendChild(progressBar);
}

    sectionSkills.appendChild(skillsList);
    personalInfoSection.appendChild(sectionSkills);

    // sectiunea proiecte
    const projectsSection = document.createElement('section');
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'card-grid';

    for (const projec of studentData.projects) {
      const card = document.createElement('card');
      card.className = 'card';
      const title = document.createElement('h3');
      title.textContent = projec.title;
      card.appendChild(title);
      const description = document.createElement('p');
      description.textContent = projec.description;
      card.appendChild(description);
      const techList = document.createElement('p');
      techList.textContent = 'Tehnologii: ' + projec.technologies.join(', ');
      card.appendChild(techList);
      const link = document.createElement('a');
      link.href = projec.link;
      link.textContent = 'Vezi Proiect';
      card.appendChild(link);
      cardsContainer.appendChild(card);
    }
    projectsSection.appendChild(cardsContainer);
    personalInfoSection.appendChild(projectsSection);



    app.appendChild(header);
    app.appendChild(personalInfoSection);
  }
  
  // 3. Apelează funcția când DOM-ul este gata
  document.addEventListener('DOMContentLoaded', createPersonalPage);