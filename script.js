// ========================================
// DATA: Announcements, Events, Courses
// ========================================

const announcements = [
    {
        id: 1,
        title: "Winter Break Schedule 2025",
        description: "School will be closed from December 23rd to January 3rd for winter break. Classes resume on January 4th, 2026. We wish all students and families a joyful holiday season!",
        date: "2025-12-15",
        isNew: true
    },
    {
        id: 2,
        title: "Annual Science Fair Registration",
        description: "Registration for the Annual Science Fair is now open! Students from grades 6-12 are encouraged to participate. Deadline for project proposals is January 15th.",
        date: "2025-12-12",
        isNew: true
    },
    {
        id: 3,
        title: "New Library Hours",
        description: "Starting next week, the school library will extend its hours until 6 PM on weekdays to support students with their research and studies.",
        date: "2025-12-10",
        isNew: false
    },
    {
        id: 4,
        title: "Sports Day Results Announced",
        description: "Congratulations to all participants of the Annual Sports Day! Results are now posted on the notice board. Special recognition to the Blue House for winning the overall championship.",
        date: "2025-12-08",
        isNew: false
    },
    {
        id: 5,
        title: "Parent-Teacher Meeting",
        description: "The next Parent-Teacher meeting is scheduled for January 10th. Parents can book appointment slots through the school portal starting December 20th.",
        date: "2025-12-05",
        isNew: false
    },
    {
        id: 6,
        title: "New After-School Programs",
        description: "We're excited to announce new after-school programs including robotics, creative writing, and dance classes. Registration opens January 2nd.",
        date: "2025-12-01",
        isNew: false
    }
];

const events = [
    {
        id: 1,
        name: "Winter Concert",
        date: "2025-12-18",
        description: "Annual winter concert featuring performances by the school choir, orchestra, and band. All parents and families are welcome to attend!",
        category: "Arts"
    },
    {
        id: 2,
        name: "Last Day Before Break",
        date: "2025-12-20",
        description: "Last day of classes before winter break. Half-day schedule with special holiday activities planned for all grades.",
        category: "Academic"
    },
    {
        id: 3,
        name: "Classes Resume",
        date: "2026-01-04",
        description: "First day back from winter break. Regular schedule resumes. Welcome back, students!",
        category: "Academic"
    },
    {
        id: 4,
        name: "Science Fair",
        date: "2026-01-20",
        description: "Annual Science Fair showcasing student projects from grades 6-12. Parents and community members are invited to view exhibits.",
        category: "Academic"
    },
    {
        id: 5,
        name: "Parent-Teacher Conference",
        date: "2026-01-10",
        description: "Quarterly parent-teacher conference. Please book your appointment through the school portal.",
        category: "Meeting"
    },
    {
        id: 6,
        name: "Basketball Tournament",
        date: "2026-01-15",
        description: "Inter-school basketball tournament hosted at our campus. Come support our team!",
        category: "Sports"
    },
    {
        id: 7,
        name: "Art Exhibition",
        date: "2026-01-25",
        description: "Student art exhibition featuring works from our talented artists. Opening reception at 5 PM.",
        category: "Arts"
    },
    {
        id: 8,
        name: "Career Day",
        date: "2026-02-05",
        description: "Annual Career Day with professionals from various fields speaking to students about career opportunities.",
        category: "Academic"
    }
];

const courses = [
    {
        id: 1,
        name: "Language Arts",
        grade: "K-2",
        description: "Foundation in reading, writing, and communication skills through engaging stories, phonics, and creative expression activities.",
        icon: "📖",
        duration: "Full Year"
    },
    {
        id: 2,
        name: "Basic Mathematics",
        grade: "K-2",
        description: "Introduction to numbers, counting, basic operations, and problem-solving through hands-on activities and games.",
        icon: "🔢",
        duration: "Full Year"
    },
    {
        id: 3,
        name: "Creative Arts",
        grade: "K-2",
        description: "Explore creativity through drawing, painting, music, and crafts. Develop fine motor skills and artistic expression.",
        icon: "🎨",
        duration: "Full Year"
    },
    {
        id: 4,
        name: "Intermediate English",
        grade: "3-5",
        description: "Advanced reading comprehension, essay writing, grammar, and vocabulary building for emerging scholars.",
        icon: "✍️",
        duration: "Full Year"
    },
    {
        id: 5,
        name: "Mathematics",
        grade: "3-5",
        description: "Multiplication, division, fractions, decimals, and introduction to geometry with real-world applications.",
        icon: "📐",
        duration: "Full Year"
    },
    {
        id: 6,
        name: "Science Discovery",
        grade: "3-5",
        description: "Hands-on experiments exploring life science, earth science, and physical science concepts.",
        icon: "🔬",
        duration: "Full Year"
    },
    {
        id: 7,
        name: "Pre-Algebra",
        grade: "6-8",
        description: "Transition to algebraic thinking with variables, equations, and mathematical reasoning.",
        icon: "➗",
        duration: "Full Year"
    },
    {
        id: 8,
        name: "Life Science",
        grade: "6-8",
        description: "Explore biology, ecology, and human anatomy through laboratory experiments and research projects.",
        icon: "🧬",
        duration: "Full Year"
    },
    {
        id: 9,
        name: "World History",
        grade: "6-8",
        description: "Journey through ancient civilizations to modern times, understanding how history shapes our world.",
        icon: "🌍",
        duration: "Full Year"
    },
    {
        id: 10,
        name: "Advanced Mathematics",
        grade: "9-12",
        description: "Algebra II, Pre-Calculus, and Calculus courses preparing students for college-level mathematics.",
        icon: "∑",
        duration: "Full Year"
    },
    {
        id: 11,
        name: "Physics",
        grade: "9-12",
        description: "Comprehensive study of mechanics, thermodynamics, electromagnetism, and modern physics with laboratory work.",
        icon: "⚛️",
        duration: "Full Year"
    },
    {
        id: 12,
        name: "Computer Science",
        grade: "9-12",
        description: "Programming fundamentals, data structures, algorithms, and software development principles.",
        icon: "💻",
        duration: "Full Year"
    }
];

// ========================================
// DOM ELEMENTS
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const header = document.getElementById('header');
const announcementsGrid = document.getElementById('announcementsGrid');
const calendarGrid = document.getElementById('calendarGrid');
const calendarTitle = document.getElementById('calendarTitle');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const upcomingList = document.getElementById('upcomingList');
const coursesGrid = document.getElementById('coursesGrid');
const gradeFilter = document.getElementById('gradeFilter');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const eventModal = document.getElementById('eventModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');

// ========================================
// STATE
// ========================================

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatShortDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    return { day, month };
}

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
}

function isToday(day, month, year) {
    const today = new Date();
    return day === today.getDate() && 
           month === today.getMonth() && 
           year === today.getFullYear();
}

function hasEvent(day, month, year) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(event => event.date === dateStr);
}

// ========================================
// NAVIGATION
// ========================================

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('show');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('show');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
});

// ========================================
// ANNOUNCEMENTS
// ========================================

function renderAnnouncements() {
    const sortedAnnouncements = [...announcements].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    announcementsGrid.innerHTML = sortedAnnouncements.slice(0, 6).map((announcement, index) => `
        <article class="announcement-card ${index === 0 ? 'featured' : ''}">
            ${announcement.isNew ? '<span class="announcement-badge">New</span>' : ''}
            <div class="announcement-date">
                <span>📅</span>
                <span>${formatDate(announcement.date)}</span>
            </div>
            <h3>${announcement.title}</h3>
            <p>${announcement.description}</p>
        </article>
    `).join('');
}

// ========================================
// CALENDAR
// ========================================

function renderCalendar() {
    calendarTitle.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear);
    
    let days = '';
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        days += `<div class="calendar-day other-month">${prevMonthDays - i}</div>`;
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const todayClass = isToday(day, currentMonth, currentYear) ? 'today' : '';
        const event = hasEvent(day, currentMonth, currentYear);
        const eventClass = event ? 'has-event' : '';
        
        days += `
            <div class="calendar-day ${todayClass} ${eventClass}" 
                 ${event ? `data-event-id="${event.id}"` : ''}>
                ${day}
            </div>
        `;
    }
    
    // Next month days
    const totalDays = firstDay + daysInMonth;
    const remainingDays = totalDays <= 35 ? 35 - totalDays : 42 - totalDays;
    
    for (let day = 1; day <= remainingDays; day++) {
        days += `<div class="calendar-day other-month">${day}</div>`;
    }
    
    calendarGrid.innerHTML = days;
    
    // Add click event to days with events
    document.querySelectorAll('.calendar-day.has-event').forEach(day => {
        day.addEventListener('click', () => {
            const eventId = parseInt(day.dataset.eventId);
            const event = events.find(e => e.id === eventId);
            if (event) {
                showEventModal(event);
            }
        });
    });
}

function renderUpcomingEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const upcoming = events
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);
    
    upcomingList.innerHTML = upcoming.map(event => {
        const { day, month } = formatShortDate(event.date);
        return `
            <div class="upcoming-event" data-event-id="${event.id}">
                <div class="event-date-box">
                    <span class="day">${day}</span>
                    <span class="month">${month}</span>
                </div>
                <div class="event-info">
                    <h4>${event.name}</h4>
                    <p>${event.category}</p>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click events
    document.querySelectorAll('.upcoming-event').forEach(eventEl => {
        eventEl.addEventListener('click', () => {
            const eventId = parseInt(eventEl.dataset.eventId);
            const event = events.find(e => e.id === eventId);
            if (event) {
                showEventModal(event);
            }
        });
    });
}

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// ========================================
// EVENT MODAL
// ========================================

function showEventModal(event) {
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-date">
                <span>📅</span>
                <span>${formatDate(event.date)}</span>
            </div>
            <h2 class="modal-title">${event.name}</h2>
        </div>
        <div class="modal-body">
            <p>${event.description}</p>
            <span class="modal-category">${event.category}</span>
        </div>
    `;
    eventModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideEventModal() {
    eventModal.classList.remove('show');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', hideEventModal);

eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        hideEventModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && eventModal.classList.contains('show')) {
        hideEventModal();
    }
});

// ========================================
// COURSES
// ========================================

function renderCourses(filter = 'all') {
    const filteredCourses = filter === 'all' 
        ? courses 
        : courses.filter(course => course.grade === filter);
    
    coursesGrid.innerHTML = filteredCourses.map(course => `
        <article class="course-card">
            <div class="course-header">
                <span class="course-icon">${course.icon}</span>
                <h3>${course.name}</h3>
                <span class="course-grade">${course.grade}</span>
            </div>
            <div class="course-body">
                <p>${course.description}</p>
                <div class="course-meta">
                    <span>⏱️ ${course.duration}</span>
                </div>
            </div>
        </article>
    `).join('');
}

gradeFilter.addEventListener('change', (e) => {
    renderCourses(e.target.value);
});

// ========================================
// CONTACT FORM
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(`${inputId}Error`);
    input.classList.add('error');
    errorEl.textContent = message;
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(`${inputId}Error`);
    input.classList.remove('error');
    errorEl.textContent = '';
}

function clearAllErrors() {
    ['name', 'email', 'message'].forEach(clearError);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAllErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (!name) {
        showError('name', 'Please enter your name');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'Please enter your email address');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!message) {
        showError('message', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        formSuccess.classList.add('show');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }
});

// Clear error on input
['name', 'email', 'message'].forEach(inputId => {
    document.getElementById(inputId).addEventListener('input', () => {
        clearError(inputId);
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ANIMATED COUNTER
// ========================================

function animateCounter(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.count);
                const suffix = element.closest('.stat')?.querySelector('.stat-label')?.textContent === 'Success Rate' ? '%' : '+';
                
                animateCounter(element, target, suffix);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.quick-link-card, .announcement-card, .course-card, .mission-card, .vision-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderAnnouncements();
    renderCalendar();
    renderUpcomingEvents();
    renderCourses();
    initCounters();
    initScrollAnimations();
});

