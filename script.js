// Product data for modals
const productData = {
    modal1: {
        category: "T-SHIRTS",
        title: "Essential Tee",
        image: "https://media-assets.grailed.com/prd/listing/temp/2a33ef6b9e27451cabff110bab2087b7?",
        description: "Premium cotton t-shirt with classic fit. Perfect for everyday wear with signature IWNL branding.",
        features: ["100% Premium Cotton", "Signature Branding", "Classic Fit", "Machine Washable"],
        price: "PHP 1,350"
    },
    modal2: {
        category: "HOODIES",
        title: "Street Hoodie",
        image: "https://images.stockx.com/images/Hellstar-Uniform-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1692432906",
        description: "Heavyweight hoodie with premium fleece lining. Designed for comfort and street credibility.",
        features: ["Heavy Weight 400GSM", "Fleece Lined", "Kangaroo Pocket", "Adjustable Hood"],
        price: "PHP 2,490"
    },
    modal3: {
        category: "LONG SLEEVES",
        title: "Long Sleeve",
        image: "https://n-hype.com/cdn/shop/files/HellstarvictoryLongsleeve_blaclodznhypetyl.png?v=1723469250&width=1080",
        description: "Versatile long sleeve perfect for layering. Soft fabric with modern cut.",
        features: ["Soft Cotton Blend", "Modern Cut", "Ribbed Cuffs", "Versatile Design"],
        price: "PHP 1,690"
    },
    modal4: {
        category: "SHORTS",
        title: "Sweat Shorts",
        image: "https://www.kenshi.ca/cdn/shop/files/brown_18a6f57f-3de0-4807-b94c-36236772a190.jpg?v=1724002309",
        description: "Functional Sweat shorts with multiple pockets. Perfect for urban adventures.",
        features: ["Multiple Pockets", "Durable Material", "Adjustable Waist", "Urban Design"],
        price: "PHP 1,290"
    },
    modal5: {
        category: "PANTS",
        title: "Streetwear Pants",
        image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/18/8f6c001b-4feb-4a24-a43b-aa1df0dbed83.jpg",
        description: "Comfortable streetwear pants with modern fit. Essential for any urban wardrobe.",
        features: ["Modern Fit", "Comfortable Fabric", "Tapered Cut", "Street Ready"],
        price: "PHP 2,490"
    },
    modal6: {
        category: "HOT DEALS",
        title: "Limited Edition",
        image: "https://restockar.com/cdn/shop/files/revenge-streetwear-jeans.jpg?v=1719467994&width=1920",
        description: "Exclusive limited edition pieces at special prices. Don't miss out on these unique designs.",
        features: ["Limited Edition", "Special Price", "Unique Design", "Collector's Item"],
        price: "PHP 2,490"
    }
};

// DOM Elements
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close');

// Mobile menu functionality
mobileMenuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth < 1024) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Product modal functionality
productCards.forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const product = productData[modalId];

        if (product) {
            // Populate modal with product data
            document.getElementById('modalCategory').textContent = product.category;
            document.getElementById('modalTitle').textContent = product.title;
            document.getElementById('modalImage').src = product.image;
            document.getElementById('modalImage').alt = product.title;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').textContent = product.price;

            // Populate features
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal functionality
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close sidebar on mobile after clicking nav link
            if (window.innerWidth < 1024) {
                sidebar.classList.remove('active');
            }
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav a, .nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add to cart functionality (placeholder)
document.querySelector('.btn-add-cart').addEventListener('click', function() {
    alert('Added to cart! (This is a demo - cart functionality would be implemented here)');
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
        sidebar.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
