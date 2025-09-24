// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show the selected page
            const pageId = this.getAttribute('data-page') + '-page';
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });
    
    // Tab functionality for promotion page
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show the selected tab content
            const tabId = this.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Sub-tab functionality
    const subTabs = document.querySelectorAll('.sub-tab');
    
    subTabs.forEach(subTab => {
        subTab.addEventListener('click', function() {
            // Remove active class from all sub-tabs
            subTabs.forEach(st => st.classList.remove('active'));
            
            // Add active class to clicked sub-tab
            this.classList.add('active');
        });
    });
    
    // Form functionality
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Price type changed to:', this.value);
        });
    });
    
    // Table row hover effects
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9fafb';
        });
        
        row.addEventListener('mouseleave', function() {
            if (!this.classList.contains('row-alt')) {
                this.style.backgroundColor = '';
            }
        });
    });
    
    // Search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            console.log('Searching for:', this.value);
            // Add search logic here
        });
    });
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('select');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', function() {
            console.log('Dropdown changed:', this.value);
        });
    });
    
    // Button click handlers
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.classList.contains('nav-link') && !button.classList.contains('tab') && !button.classList.contains('sub-tab')) {
            button.addEventListener('click', function(e) {
                // Prevent default for buttons that don't have specific handlers
                if (this.type !== 'submit') {
                    e.preventDefault();
                }
                
                // Add visual feedback
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
                
                console.log('Button clicked:', this.textContent.trim());
            });
        }
    });
    
    // Checkbox functionality
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log('Checkbox changed:', this.checked);
        });
    });
    
    // Form input validation
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#d1d5db';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2563eb';
        });
    });
    
    // Notification dots animation
    const notificationDots = document.querySelectorAll('.notification-dot');
    notificationDots.forEach(dot => {
        setInterval(() => {
            dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
        }, 1000);
    });
    
    // Sidebar collapse functionality (for mobile)
    let sidebarCollapsed = false;
    
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 768) {
            if (sidebarCollapsed) {
                sidebar.style.transform = 'translateX(0)';
                sidebarCollapsed = false;
            } else {
                sidebar.style.transform = 'translateX(-100%)';
                sidebarCollapsed = true;
            }
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const sidebar = document.querySelector('.sidebar');
        
        if (window.innerWidth > 768) {
            sidebar.style.transform = '';
            sidebarCollapsed = false;
        }
    });
    
    // Add loading states
    function showLoading(element) {
        const originalText = element.textContent;
        element.textContent = 'Loading...';
        element.disabled = true;
        
        setTimeout(() => {
            element.textContent = originalText;
            element.disabled = false;
        }, 1000);
    }
    
    // Add smooth scrolling
    function smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Initialize tooltips (simple implementation)
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title');
            tooltip.style.cssText = `
                position: absolute;
                background: #1f2937;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
            
            this.addEventListener('mouseleave', function() {
                if (tooltip.parentNode) {
                    tooltip.parentNode.removeChild(tooltip);
                }
            }, { once: true });
        });
    });
    
    console.log('Dashboard initialized successfully!');
});

// Global functions for page navigation
function showProducts() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show products page
    document.getElementById('products-page').classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-page="products"]').classList.add('active');
}

function showProductEdit() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show product edit page
    document.getElementById('product-edit-page').classList.add('active');
}

function showSettings() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show settings page
    document.getElementById('settings-page').classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-page="settings"]').classList.add('active');
}

function showProfileSettings() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Show profile settings page
    document.getElementById('profile-settings-page').classList.add('active');
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showProducts,
        showProductEdit,
        showSettings,
        showProfileSettings,
        formatCurrency,
        formatDate,
        debounce
    };
}